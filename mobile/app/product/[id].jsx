import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Star, Store, ShoppingCart, Truck } from 'lucide-react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import {
  formatUzs,
  getLocalizedTitle,
  getLocalizedDescription,
} from '../../../shared/utils/formatters';

export default function MobileProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { lang, products, addToCart } = useMobileMarketplace();

  const product = products.find((p) => p.id === id) || products[0];
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || 'Default'
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || 'Standard'
  );

  if (!product) return null;

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.images?.[0] }}
          className="w-full h-72 bg-slate-100"
          resizeMode="cover"
        />

        <View className="p-4 bg-white rounded-t-3xl -mt-4 border-t border-slate-100">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Store size={14} color="#059669" />
              <Text className="text-xs font-extrabold text-emerald-800 ml-1">
                {product.sellerName}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Star size={14} color="#f59e0b" fill="#f59e0b" />
              <Text className="text-xs font-bold text-slate-800 ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </Text>
            </View>
          </View>

          <Text className="text-lg font-black text-slate-900">
            {getLocalizedTitle(product, lang)}
          </Text>

          <View className="mt-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
            {product.oldPriceUzs > product.priceUzs && (
              <Text className="text-xs text-slate-400 line-through">
                {formatUzs(product.oldPriceUzs, lang)}
              </Text>
            )}
            <Text className="text-xl font-black text-emerald-700">
              {formatUzs(product.priceUzs, lang)}
            </Text>
          </View>

          {/* Colors */}
          {product.colors?.length > 0 && (
            <View className="mt-4">
              <Text className="text-xs font-bold text-slate-700 mb-2">
                Color: {selectedColor}
              </Text>
              <View className="flex-row flex-wrap">
                {product.colors.map((c) => (
                  <Pressable
                    key={c.name}
                    onPress={() => setSelectedColor(c.name)}
                    className={`px-3 py-1.5 rounded-xl border mr-2 mb-2 ${
                      selectedColor === c.name
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-slate-200'
                    }`}
                  >
                    <Text className="text-xs font-bold text-slate-800">
                      {c.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* Sizes */}
          {product.sizes?.length > 0 && (
            <View className="mt-2">
              <Text className="text-xs font-bold text-slate-700 mb-2">
                Option: {selectedSize}
              </Text>
              <View className="flex-row flex-wrap">
                {product.sizes.map((s) => (
                  <Pressable
                    key={s}
                    onPress={() => setSelectedSize(s)}
                    className={`px-3 py-1.5 rounded-xl border mr-2 mb-2 ${
                      selectedSize === s
                        ? 'border-emerald-600 bg-emerald-600'
                        : 'border-slate-200'
                    }`}
                  >
                    <Text
                      className={`text-xs font-bold ${
                        selectedSize === s ? 'text-white' : 'text-slate-800'
                      }`}
                    >
                      {s}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* Description */}
          <View className="mt-4 pt-3 border-t border-slate-100">
            <Text className="text-sm font-black text-slate-900 mb-1">
              Description
            </Text>
            <Text className="text-xs text-slate-600 leading-5">
              {getLocalizedDescription(product, lang)}
            </Text>
          </View>

          {/* Specifications */}
          <View className="mt-4 pt-3 border-t border-slate-100">
            <Text className="text-sm font-black text-slate-900 mb-2">
              Specifications
            </Text>
            {Object.entries(product.specifications || {}).map(([k, v]) => (
              <View
                key={k}
                className="flex-row justify-between py-1.5 border-b border-slate-50"
              >
                <Text className="text-xs text-slate-500">{k}</Text>
                <Text className="text-xs font-bold text-slate-800">{v}</Text>
              </View>
            ))}
          </View>

          {/* Multi-Seller Price Comparison */}
          {product.sellerOffers?.length > 0 && (
            <View className="mt-4 pt-3 border-t border-slate-100">
              <Text className="text-sm font-black text-slate-900 mb-2">
                Multi-Seller Price Comparison
              </Text>
              {product.sellerOffers.map((offer, idx) => (
                <View
                  key={idx}
                  className="p-3 rounded-xl border border-slate-200 mb-2 flex-row items-center justify-between"
                >
                  <View>
                    <Text className="text-xs font-bold text-slate-900">
                      {offer.sellerName} (★ {offer.rating})
                    </Text>
                    <Text className="text-[11px] text-slate-500">
                      {offer.deliveryEta} • {offer.warranty}
                    </Text>
                  </View>
                  <Text className="text-xs font-black text-emerald-700">
                    {formatUzs(offer.priceUzs, lang)}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <Pressable
            onPress={() => {
              addToCart(product, { selectedColor, selectedSize });
              router.push('/(tabs)/cart');
            }}
            className="mt-5 mb-8 bg-emerald-600 py-3.5 rounded-2xl flex-row items-center justify-center"
          >
            <ShoppingCart size={16} color="#ffffff" />
            <Text className="text-white text-sm font-extrabold ml-2">
              Add to Cart & Checkout
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

