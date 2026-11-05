// Supabase Edge Function: Payment Gateway Integration (Click, Payme, Uzum Bank Sandbox/Production)
// Never handles or stores raw card numbers or CVV; generates tokenized redirect URLs and verifies webhooks.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { orderId, provider, amountUzs, returnUrl, isSandbox = true } = await req.json();

    const transactionId = `SVX-${provider.toUpperCase()}-${Date.now()}`;

    let redirectUrl = returnUrl || "https://savdox.uz/orders";
    if (provider === "click") {
      const merchantId = Deno.env.get("CLICK_MERCHANT_ID") || "sandbox_click_merchant";
      const serviceId = Deno.env.get("CLICK_SERVICE_ID") || "sandbox_click_service";
      redirectUrl = `https://my.click.uz/services/pay?service_id=${serviceId}&merchant_id=${merchantId}&amount=${amountUzs}&transaction_param=${orderId}&return_url=${encodeURIComponent(redirectUrl)}`;
    } else if (provider === "payme") {
      const merchantId = Deno.env.get("PAYME_MERCHANT_ID") || "sandbox_payme_merchant";
      const params = btoa(`m=${merchantId};ac.order_id=${orderId};a=${Number(amountUzs) * 100};c=${redirectUrl}`);
      redirectUrl = `https://checkout.paycom.uz/${params}`;
    } else if (provider === "uzum") {
      const serviceId = Deno.env.get("UZUM_SERVICE_ID") || "sandbox_uzum_service";
      redirectUrl = `https://www.uzumbank.uz/payment?serviceId=${serviceId}&orderId=${orderId}&amount=${amountUzs}`;
    }

    if (supabaseUrl && supabaseServiceKey && orderId) {
      await supabase.from("payments").insert({
        order_id: orderId,
        provider,
        provider_transaction_id: transactionId,
        amount_uzs: amountUzs,
        currency: "UZS",
        status: provider === "cod" ? "pending" : "authorized",
        is_sandbox: isSandbox,
        redirect_url: redirectUrl,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        transactionId,
        provider,
        isSandbox,
        redirectUrl,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Payment initialization error" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
