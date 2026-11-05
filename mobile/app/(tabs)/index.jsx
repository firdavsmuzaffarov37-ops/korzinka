import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MapPin, Sparkles, Zap, Store, Gift } from 'lucide-react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import NativeProductCard from '../../src/components/NativeProductCard';
import { getLocalizedTitle } from '../../../shared/utils/formatters';

export default function MobileHomeScreen() {
  const router = useRouter();
  const {
    lang,
    setLang,
    t,
    selectedCity,
    categories,
    products,
    stores,
    bonusPoints,
  } = useMobileMarketplace();

  const flashProducts = products.filter((p) => p.isFlashSale).slice(0, 4);
  const popularProducts = products.filter((p) => p.isPopular).slice(0, 6);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Native Header */}
      <View className="bg-emerald-950 px-4 pt-3 pb-4">
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-xl bg-emerald-500 items-center justify-center mr-2">
              <Text className="text-slate-950 font-black text-base">S</Text>
            </View>
            <View>
              <Text className="text-white font-black text-lg tracking-tight">
                SAVDOX
              </Text>
              <View className="flex-row items-center">
                <MapPin size={11} color="#34d399" />
                <Text className="text-emerald-200 text-[11px] ml-1">
                  {selectedCity.nameEn} • 90m Express
                </Text>
              </View>
            </View>
          </View>

          {/* Language Switcher & Bonus */}
          <View className="flex-row items-center">
            <View className="bg-emerald-900 rounded-lg p-0.5 flex-row mr-2">
              {['uz', 'ru', 'en'].map((code) => (
                <Pressable
                  key={code}
                  onPress={() => setLang(code)}
                  className={`px-2 py-1 rounded-md ${
                    lang === code ? 'bg-emerald-500' : ''
                  }`}
                >
                  <Text
                    className={`text-[10px] font-bold uppercase ${
                      lang === code ? 'text-slate-950' : 'text-emerald-200'
                    }`}
                  >
                    {code}
                  </Text>
                </Pressable>
              ))}
            </View>
            <Pressable
              onPress={() => router.push('/(tabs)/profile')}
              className="bg-amber-400/20 px-2.5 py-1 rounded-full flex-row items-center"
            >
              <Gift size={12} color="#fcd34d" />
              <Text className="text-amber-300 text-[10px] font-bold ml-1">
                {bonusPoints.toLocaleString()}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* AI Shopping Assistant Trigger Bar */}
        <Pressable
          onPress={() => router.push('/(tabs)/search')}
          className="bg-emerald-800/90 border border-emerald-500/40 rounded-2xl p-3 flex-row items-center justify-between"
        >
          <View className="flex-row items-center flex-1 mr-2">
            <Sparkles size={16} color="#6ee7b7" />
            <Text numberOfLines={1} className="text-emerald-50 text-xs font-semibold ml-2">
              AI Advisor: "I have 2,500,000 UZS. I need a smartphone..."
            </Text>
          </View>
          <View className="bg-emerald-400 px-2.5 py-1 rounded-lg">
            <Text className="text-slate-950 text-[10px] font-extrabold">Ask AI</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView className="flex-1 px-3 pt-4" showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View className="bg-emerald-900 rounded-3xl p-5 mb-5">
          <View className="bg-emerald-500/20 self-start px-2.5 py-1 rounded-full mb-2">
            <Text className="text-emerald-300 text-[10px] font-bold">
              ⚡ 90-MINUTE EXPRESS DELIVERY
            </Text>
          </View>
          <Text className="text-white text-2xl font-black leading-tight">
            {t.tagline}
          </Text>
          <Text className="text-emerald-100 text-xs mt-1.5">
            Official Click, Payme & Uzum 0% Installments across Uzbekistan.
          </Text>
          <Pressable
            onPress={() => router.push('/(tabs)/categories')}
            className="mt-4 bg-emerald-400 self-start px-4 py-2.5 rounded-xl"
          >
            <Text className="text-slate-950 text-xs font-extrabold">
              Explore 16 Categories →
            </Text>
          </Pressable>
        </View>

        {/* Horizontal Categories */}
        <View className="mb-5">
          <View className="flex-row items-center justify-between mb-2.5 px-1">
            <Text className="text-base font-extrabold text-slate-900">
              {t.categories}
            </Text>
            <Pressable onPress={() => router.push('/(tabs)/categories')}>
              <Text className="text-xs font-bold text-emerald-700">See All 16</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat) => (
              <Pressable
                key={cat.id}
                onPress={() => router.push('/(tabs)/categories')}
                className="items-center mr-3 bg-white p-2.5 rounded-2xl border border-slate-100 w-24"
              >
                <Image
                  source={{ uri: cat.image }}
                  className="w-12 h-12 rounded-xl mb-1.5"
                />
                <Text
                  numberOfLines={1}
                  className="text-[11px] font-bold text-slate-800 text-center"
                >
                  {getLocalizedTitle(cat, lang)}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Flash Sales */}
        <View className="mb-5">
          <View className="flex-row items-center mb-2.5 px-1">
            <Zap size={16} color="#e11d48" />
            <Text className="text-base font-extrabold text-slate-900 ml-1.5">
              {t.flashSales}
            </Text>
          </View>
          <View className="flex-row flex-wrap">
            {flashProducts.map((prod, idx) => (
              <View key={prod.id} className="w-1/2">
                <NativeProductCard product={prod} index={idx} />
              </View>
            ))}
          </View>
        </View>

        {/* Popular Products */}
        <View className="mb-5">
          <Text className="text-base font-extrabold text-slate-900 mb-2.5 px-1">
            {t.popularProducts}
          </Text>
          <View className="flex-row flex-wrap">
            {popularProducts.map((prod, idx) => (
              <View key={prod.id} className="w-1/2">
                <NativeProductCard product={prod} index={idx} />
              </View>
            ))}
          </View>
        </View>

        {/* Featured Stores */}
        <View className="mb-8">
          <Text className="text-base font-extrabold text-slate-900 mb-2.5 px-1">
            {t.featuredStores}
          </Text>
          {stores.map((st) => (
            <View
              key={st.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-100 mb-2.5 flex-row items-center justify-between"
            >
              <View className="flex-row items-center flex-1 mr-2">
                <Image
                  source={{ uri: st.logo }}
                  className="w-11 h-11 rounded-xl mr-3"
                />
                <View className="flex-1">
                  <Text className="text-xs font-extrabold text-slate-900">
                    {st.name}
                  </Text>
                  <Text className="text-[11px] text-slate-500">
                    📍 {st.city} • ★ {st.rating} ({st.reviewCount} reviews)
                  </Text>
                </View>
              </View>
              <View className="bg-emerald-50 px-2.5 py-1 rounded-lg">
                <Text className="text-[10px] font-bold text-emerald-800">
                  Verified
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

