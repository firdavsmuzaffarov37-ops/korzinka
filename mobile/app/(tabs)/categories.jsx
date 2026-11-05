import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import NativeProductCard from '../../src/components/NativeProductCard';
import { getLocalizedTitle } from '../../../shared/utils/formatters';

export default function MobileCategoriesScreen() {
  const { lang, categories, products } = useMobileMarketplace();
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [selectedSub, setSelectedSub] = useState('All');

  const categoryProducts = products.filter(
    (p) =>
      p.categorySlug === selectedCat.slug &&
      (selectedSub === 'All' || p.subcategory === selectedSub)
  );

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-emerald-950 px-4 py-3.5">
        <Text className="text-white text-lg font-black">
          All 16 SAVDOX Categories
        </Text>
        <Text className="text-emerald-200 text-xs">
          Select a department to browse subcategories & custom filters
        </Text>
      </View>

      <ScrollView className="flex-1 p-3" showsVerticalScrollIndicator={false}>
        {/* 16 Category Chips Grid */}
        <View className="flex-row flex-wrap mb-4">
          {categories.map((cat) => {
            const isActive = selectedCat.id === cat.id;
            return (
              <Pressable
                key={cat.id}
                onPress={() => {
                  setSelectedCat(cat);
                  setSelectedSub('All');
                }}
                className={`w-[48%] m-[1%] p-3 rounded-2xl border flex-row items-center ${
                  isActive
                    ? 'bg-emerald-600 border-emerald-600'
                    : 'bg-white border-slate-200'
                }`}
              >
                <Image
                  source={{ uri: cat.image }}
                  className="w-10 h-10 rounded-xl mr-2.5"
                />
                <View className="flex-1">
                  <Text
                    numberOfLines={1}
                    className={`text-xs font-extrabold ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {getLocalizedTitle(cat, lang)}
                  </Text>
                  <Text
                    className={`text-[10px] ${
                      isActive ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    {cat.productCount} items
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Active Category Subcategories & Filter Facets */}
        <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-4">
          <Text className="text-sm font-black text-slate-900 mb-2">
            {getLocalizedTitle(selectedCat, lang)} — Subcategories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
            {['All', ...selectedCat.subcategories].map((sub) => (
              <Pressable
                key={sub}
                onPress={() => setSelectedSub(sub)}
                className={`px-3 py-1.5 rounded-full mr-2 ${
                  selectedSub === sub ? 'bg-emerald-600' : 'bg-slate-100'
                }`}
              >
                <Text
                  className={`text-xs font-bold ${
                    selectedSub === sub ? 'text-white' : 'text-slate-700'
                  }`}
                >
                  {sub}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <Text className="text-[11px] font-bold text-slate-500 mb-1">
            Available Category Filter Options:
          </Text>
          <View className="flex-row flex-wrap">
            {selectedCat.filterOptions.map((opt) => (
              <View
                key={opt}
                className="bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg mr-1.5 mb-1.5"
              >
                <Text className="text-[10px] font-bold text-emerald-800">{opt}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Filtered Products */}
        <View className="flex-row flex-wrap pb-6">
          {categoryProducts.map((prod, idx) => (
            <View key={prod.id} className="w-1/2">
              <NativeProductCard product={prod} index={idx} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

