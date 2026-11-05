import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { Heart, ShoppingCart, Star, Store } from 'lucide-react-native';
import { useMobileMarketplace } from '../hooks/useMobileMarketplace';
import { formatUzs, getLocalizedTitle } from '../../../shared/utils/formatters';

export default function NativeProductCard({ product, index = 0 }) {
  const router = useRouter();
  const { lang, favorites, toggleFavorite, addToCart } = useMobileMarketplace();
  if (!product) return null;

  const isFavorite = favorites.includes(product.id);
  const title = getLocalizedTitle(product, lang);

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 50).springify()}
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-3 flex-1 mx-1.5 shadow-sm"
    >
      <Pressable onPress={() => router.push(`/product/${product.id}`)}>
        <View className="relative h-40 w-full bg-slate-100">
          <Image
            source={{ uri: product.images?.[0] }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {product.discountPercent > 0 && (
            <View className="absolute top-2 left-2 bg-rose-600 px-2 py-0.5 rounded-full">
              <Text className="text-white text-[10px] font-bold">
                -{product.discountPercent}%
              </Text>
            </View>
          )}

          <Pressable
            onPress={() => toggleFavorite(product.id)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 items-center justify-center"
          >
            <Heart
              size={15}
              color={isFavorite ? '#e11d48' : '#475569'}
              fill={isFavorite ? '#e11d48' : 'none'}
            />
          </Pressable>
        </View>

        <View className="p-3">
          <View className="flex-row items-center justify-between mb-1">
            <View className="flex-row items-center flex-1 mr-1">
              <Store size={11} color="#059669" />
              <Text numberOfLines={1} className="text-[10px] text-emerald-800 font-semibold ml-1">
                {product.sellerName}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Star size={11} color="#f59e0b" fill="#f59e0b" />
              <Text className="text-[10px] font-bold text-slate-700 ml-0.5">
                {product.rating}
              </Text>
            </View>
          </View>

          <Text numberOfLines={2} className="text-xs font-bold text-slate-900 min-h-[32px]">
            {title}
          </Text>

          {product.oldPriceUzs > product.priceUzs && (
            <Text className="text-[10px] text-slate-400 line-through mt-1">
              {formatUzs(product.oldPriceUzs, lang)}
            </Text>
          )}

          <Text className="text-sm font-extrabold text-emerald-700 mt-0.5">
            {formatUzs(product.priceUzs, lang)}
          </Text>

          <Pressable
            onPress={() => addToCart(product)}
            className="mt-2.5 bg-emerald-600 py-2 rounded-xl flex-row items-center justify-center"
          >
            <ShoppingCart size={13} color="#ffffff" />
            <Text className="text-white text-xs font-bold ml-1.5">Add to Cart</Text>
          </Pressable>
        </View>
      </Pressable>
    </Animated.View>
  );
}

