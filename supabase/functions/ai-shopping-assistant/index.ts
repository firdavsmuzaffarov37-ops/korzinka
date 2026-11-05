// Supabase Edge Function: AI Shopping Assistant & Visual Product Search
// Deploy with: supabase functions deploy ai-shopping-assistant

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

    const { query, budgetUzs, categorySlug, visualTags } = await req.json();

    let dbQuery = supabase
      .from("products")
      .select("*, stores(name, rating, is_verified), categories(slug, name_en, name_ru, name_uz)")
      .eq("is_active", true)
      .eq("approval_status", "approved");

    if (budgetUzs && Number(budgetUzs) > 0) {
      dbQuery = dbQuery.lte("price_uzs", Number(budgetUzs));
    }

    if (categorySlug) {
      const { data: cat } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .single();
      if (cat?.id) {
        dbQuery = dbQuery.eq("category_id", cat.id);
      }
    }

    if (visualTags && Array.isArray(visualTags) && visualTags.length > 0) {
      dbQuery = dbQuery.overlaps("visual_tags", visualTags);
    }

    const { data: products, error } = await dbQuery
      .order("rating", { ascending: false })
      .limit(12);

    if (error) throw error;

    return new Response(
      JSON.stringify({
        query,
        budgetUzs,
        count: products?.length ?? 0,
        products: products ?? [],
        grounded: true,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
