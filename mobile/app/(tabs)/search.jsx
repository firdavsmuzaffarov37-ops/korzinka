import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import { Sparkles, Search, Camera } from 'lucide-react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import NativeProductCard from '../../src/components/NativeProductCard';
import {
  runAiShoppingAssistant,
  runVisualProductSearch,
} from '../../../shared/utils/aiEngine';
import { formatUzs } from '../../../shared/utils/formatters';

export default function MobileSearchAndAiScreen() {
  const { lang, products, addToCart } = useMobileMarketplace();
  const [mode, setMode] = useState('ai'); // 'ai' | 'search' | 'visual'
  const [aiPrompt, setAiPrompt] = useState(
    'I have 2,500,000 UZS. I need a good smartphone.'
  );
  const [keyword, setKeyword] = useState('');
  const [maxPriceUzs, setMaxPriceUzs] = useState(0);
  const [sortBy, setSortBy] = useState('popular');

  const aiResponse = useMemo(
    () => runAiShoppingAssistant({ prompt: aiPrompt, products, lang }),
    [aiPrompt, products, lang]
  );

  const visualMatches = useMemo(
    () =>
      runVisualProductSearch({
        fileName: 'smartphone-amoled.jpg',
        visualCategory: 'smartphones xiaomi samsung',
        products,
      }),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (maxPriceUzs > 0 && p.priceUzs > maxPriceUzs) return false;
        if (keyword.trim()) {
          const q = keyword.toLowerCase();
          return (
            p.nameEn.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.categorySlug.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.priceUzs - b.priceUzs;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.soldCount - a.soldCount;
      });
  }, [products, keyword, maxPriceUzs, sortBy]);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-emerald-950 px-4 py-3.5">
        <Text className="text-white text-lg font-black">
          AI Concierge & Smart Search
        </Text>
        <View className="flex-row mt-2.5 bg-emerald-900 p-1 rounded-xl">
          {[
            { id: 'ai', label: 'AI Budget Advisor' },
            { id: 'search', label: 'Smart Filters' },
            { id: 'visual', label: 'Visual Photo Search' },
          ].map((tab) => (
            <Pressable
              key={tab.id}
              onPress={() => setMode(tab.id)}
              className={`flex-1 py-1.5 rounded-lg items-center ${
                mode === tab.id ? 'bg-emerald-500' : ''
              }`}
            >
              <Text
                className={`text-xs font-extrabold ${
                  mode === tab.id ? 'text-slate-950' : 'text-emerald-100'
                }`}
              >
                {tab.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView className="flex-1 p-3" showsVerticalScrollIndicator={false}>
        {mode === 'ai' && (
          <View className="pb-8">
            <View className="bg-white rounded-2xl p-4 border border-emerald-300 mb-4">
              <View className="flex-row items-center mb-2">
                <Sparkles size={16} color="#059669" />
                <Text className="text-xs font-extrabold text-emerald-800 ml-1.5">
                  SAVDOX Grounded AI Shopping Assistant
                </Text>
              </View>
              <TextInput
                value={aiPrompt}
                onChangeText={setAiPrompt}
                multiline
                className="border border-slate-200 rounded-xl p-3 text-xs text-slate-900 bg-slate-50"
              />
              {aiResponse.budgetUzs && (
                <View className="mt-2 bg-emerald-100 self-start px-2.5 py-1 rounded-full">
                  <Text className="text-[11px] font-bold text-emerald-900">
                    Detected Budget: {formatUzs(aiResponse.budgetUzs, lang)}
                  </Text>
                </View>
              )}
              <Text className="text-xs text-slate-700 mt-3 leading-5">
                {aiResponse.summaryText.replace(/\*\*/g, '')}
              </Text>
            </View>

            <Text className="text-sm font-black text-slate-900 mb-2 px-1">
              Recommended Under Budget ({aiResponse.recommendedProducts.length})
            </Text>
            <View className="flex-row flex-wrap">
              {aiResponse.recommendedProducts.map((prod, idx) => (
                <View key={prod.id} className="w-1/2">
                  <NativeProductCard product={prod} index={idx} />
                </View>
              ))}
            </View>
          </View>
        )}

        {mode === 'search' && (
          <View className="pb-8">
            <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-4">
              <View className="flex-row items-center border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 mb-3">
                <Search size={15} color="#64748b" />
                <TextInput
                  value={keyword}
                  onChangeText={setKeyword}
                  placeholder="Search Redmi, Samsung, Dyson..."
                  className="flex-1 ml-2 text-xs text-slate-900"
                />
              </View>

              <Text className="text-xs font-bold text-slate-700 mb-1.5">
                Filter by Max Price (UZS):
              </Text>
              <View className="flex-row flex-wrap mb-2">
                {[
                  { label: 'All Prices', val: 0 },
                  { label: '≤ 500k UZS', val: 500000 },
                  { label: '≤ 2.5M UZS', val: 2500000 },
                ].map((chip) => (
                  <Pressable
                    key={chip.label}
                    onPress={() => setMaxPriceUzs(chip.val)}
                    className={`px-3 py-1.5 rounded-xl mr-2 mb-1.5 ${
                      maxPriceUzs === chip.val ? 'bg-emerald-600' : 'bg-slate-100'
                    }`}
                  >
                    <Text
                      className={`text-xs font-bold ${
                        maxPriceUzs === chip.val ? 'text-white' : 'text-slate-700'
                      }`}
                    >
                      {chip.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View className="flex-row flex-wrap">
              {filteredProducts.map((prod, idx) => (
                <View key={prod.id} className="w-1/2">
                  <NativeProductCard product={prod} index={idx} />
                </View>
              ))}
            </View>
          </View>
        )}

        {mode === 'visual' && (
          <View className="pb-8">
            <View className="bg-white rounded-2xl p-4 border border-emerald-300 mb-4 items-center">
              <Camera size={28} color="#059669" />
              <Text className="text-sm font-extrabold text-slate-900 mt-2">
                Visual Product Search
              </Text>
              <Text className="text-xs text-slate-500 text-center mt-1">
                Matched {visualMatches.length} catalog products from camera visual features
              </Text>
            </View>
            <View className="flex-row flex-wrap">
              {visualMatches.map(({ product }, idx) => (
                <View key={product.id} className="w-1/2">
                  <NativeProductCard product={product} index={idx} />
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

