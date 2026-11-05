import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ShoppingCart, Store, CreditCard, CheckCircle2 } from 'lucide-react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import { formatUzs } from '../../../shared/utils/formatters';
import { PAYMENT_PROVIDERS } from '../../../shared/types';

export default function MobileCartAndCheckoutScreen() {
  const router = useRouter();
  const {
    lang,
    enrichedCart,
    cartSubtotalUzs,
    updateCartQuantity,
    placeMobileOrder,
  } = useMobileMarketplace();

  const [paymentMethod, setPaymentMethod] = useState('click');
  const [orderSuccess, setOrderSuccess] = useState(null);

  const handleCheckout = () => {
    const created = placeMobileOrder({ paymentMethod });
    setOrderSuccess(created);
  };

  if (orderSuccess) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center p-6">
        <View className="bg-white rounded-3xl p-6 border border-emerald-200 items-center w-full">
          <CheckCircle2 size={44} color="#059669" />
          <Text className="text-xl font-black text-slate-900 mt-3">
            Order Confirmed!
          </Text>
          <Text className="text-xs text-slate-600 mt-1">
            Order Number: {orderSuccess.orderNumber}
          </Text>
          <Text className="text-xs text-emerald-700 font-bold mt-1">
            Tracking Code: {orderSuccess.trackingCode}
          </Text>
          <Pressable
            onPress={() => {
              setOrderSuccess(null);
              router.push('/(tabs)/profile');
            }}
            className="mt-5 bg-emerald-600 px-6 py-3 rounded-2xl w-full items-center"
          >
            <Text className="text-white text-xs font-extrabold">
              Track Live Courier on Map →
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-emerald-950 px-4 py-3.5">
        <Text className="text-white text-lg font-black">
          Shopping Cart & Checkout
        </Text>
        <Text className="text-emerald-200 text-xs">
          Grouped by verified seller • Official Click, Payme & Uzum
        </Text>
      </View>

      {enrichedCart.length === 0 ? (
        <View className="flex-1 items-center justify-center p-6">
          <ShoppingCart size={42} color="#059669" />
          <Text className="text-base font-extrabold text-slate-900 mt-3">
            Your SAVDOX Cart is Empty
          </Text>
          <Pressable
            onPress={() => router.push('/(tabs)')}
            className="mt-4 bg-emerald-600 px-5 py-2.5 rounded-xl"
          >
            <Text className="text-white text-xs font-bold">Browse Products</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView className="flex-1 p-3" showsVerticalScrollIndicator={false}>
          {enrichedCart.map((item) => (
            <View
              key={item.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200 mb-3"
            >
              <View className="flex-row items-center mb-2 pb-2 border-b border-slate-100">
                <Store size={13} color="#059669" />
                <Text className="text-xs font-extrabold text-emerald-800 ml-1.5">
                  {item.product.sellerName}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Image
                  source={{ uri: item.product.images?.[0] }}
                  className="w-16 h-16 rounded-xl mr-3"
                />
                <View className="flex-1">
                  <Text numberOfLines={2} className="text-xs font-bold text-slate-900">
                    {item.product.nameEn}
                  </Text>
                  <Text className="text-xs font-extrabold text-emerald-700 mt-1">
                    {formatUzs(item.lineTotalUzs, lang)}
                  </Text>
                </View>
                <View className="flex-row items-center bg-slate-100 rounded-xl px-2 py-1">
                  <Pressable
                    onPress={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1"
                  >
                    <Text className="text-sm font-black text-slate-800">−</Text>
                  </Pressable>
                  <Text className="text-xs font-bold px-2">{item.quantity}</Text>
                  <Pressable
                    onPress={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1"
                  >
                    <Text className="text-sm font-black text-slate-800">+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}

          {/* Payment Method Selector */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-4">
            <View className="flex-row items-center mb-2.5">
              <CreditCard size={15} color="#059669" />
              <Text className="text-xs font-extrabold text-slate-900 ml-1.5">
                Official Payment Method (Sandbox Tokenized)
              </Text>
            </View>
            {PAYMENT_PROVIDERS.map((prov) => (
              <Pressable
                key={prov.id}
                onPress={() => setPaymentMethod(prov.id)}
                className={`p-3 rounded-xl border mb-2 ${
                  paymentMethod === prov.id
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-slate-200'
                }`}
              >
                <Text className="text-xs font-extrabold text-slate-900">
                  {prov.name}
                </Text>
                <Text className="text-[11px] text-slate-500">{prov.subtitle}</Text>
              </Pressable>
            ))}
          </View>

          {/* Summary & Checkout Button */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-8">
            <View className="flex-row justify-between mb-2">
              <Text className="text-xs text-slate-600">Total Amount</Text>
              <Text className="text-base font-black text-emerald-700">
                {formatUzs(cartSubtotalUzs, lang)}
              </Text>
            </View>
            <Pressable
              onPress={handleCheckout}
              className="bg-emerald-600 py-3.5 rounded-2xl items-center mt-2"
            >
              <Text className="text-white text-xs font-extrabold">
                Confirm & Pay via {paymentMethod.toUpperCase()}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

