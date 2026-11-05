import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import { User, Truck, Gift, Store, ShieldCheck } from 'lucide-react-native';
import { useMobileMarketplace } from '../../src/hooks/useMobileMarketplace';
import { ORDER_STATUSES } from '../../../shared/types';
import { formatUzs } from '../../../shared/utils/formatters';

export default function MobileProfileScreen() {
  const {
    lang,
    userProfile,
    setUserProfile,
    orders,
    setOrders,
    bonusPoints,
  } = useMobileMarketplace();

  const [section, setSection] = useState('tracking'); // 'tracking' | 'bonus' | 'auth' | 'seller'
  const activeOrder = orders[0];

  const handleUpdateOrderStatus = (nextStatus) => {
    if (!activeOrder) return;
    setOrders((prev) =>
      prev.map((o, idx) => (idx === 0 ? { ...o, orderStatus: nextStatus } : o))
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-emerald-950 px-4 py-3.5">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-white text-lg font-black">
              {userProfile.fullName}
            </Text>
            <Text className="text-emerald-200 text-xs">
              {userProfile.phone} • {userProfile.city}
            </Text>
          </View>
          <View className="bg-emerald-800 px-3 py-1 rounded-full">
            <Text className="text-emerald-200 text-[10px] font-bold">
              ✓ Verified ID
            </Text>
          </View>
        </View>

        <View className="flex-row mt-3 bg-emerald-900 p-1 rounded-xl">
          {[
            { id: 'tracking', label: 'Delivery' },
            { id: 'bonus', label: 'Bonus' },
            { id: 'seller', label: 'Seller/Admin' },
            { id: 'auth', label: 'Auth/OTP' },
          ].map((tab) => (
            <Pressable
              key={tab.id}
              onPress={() => setSection(tab.id)}
              className={`flex-1 py-1.5 rounded-lg items-center ${
                section === tab.id ? 'bg-emerald-500' : ''
              }`}
            >
              <Text
                className={`text-[11px] font-extrabold ${
                  section === tab.id ? 'text-slate-950' : 'text-emerald-100'
                }`}
              >
                {tab.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView className="flex-1 p-3" showsVerticalScrollIndicator={false}>
        {section === 'tracking' && activeOrder && (
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-6">
            <View className="flex-row items-center mb-2">
              <Truck size={16} color="#059669" />
              <Text className="text-sm font-black text-slate-900 ml-1.5">
                Fast Delivery Tracking • {activeOrder.orderNumber}
              </Text>
            </View>
            <Text className="text-xs text-emerald-700 font-bold mb-2">
              Current Status: {activeOrder.orderStatus} (ETA: {activeOrder.courier?.etaMinutes} mins)
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Courier: {activeOrder.courier?.name} ({activeOrder.courier?.phone}) • {activeOrder.courier?.vehicle}
            </Text>

            <Text className="text-[11px] font-bold text-slate-700 mb-2">
              Simulate All 7 Order Statuses:
            </Text>
            <View className="flex-row flex-wrap">
              {ORDER_STATUSES.map((st) => (
                <Pressable
                  key={st}
                  onPress={() => handleUpdateOrderStatus(st)}
                  className={`px-2.5 py-1.5 rounded-lg mr-1.5 mb-1.5 ${
                    activeOrder.orderStatus === st
                      ? 'bg-emerald-600'
                      : 'bg-slate-100'
                  }`}
                >
                  <Text
                    className={`text-[11px] font-bold ${
                      activeOrder.orderStatus === st
                        ? 'text-white'
                        : 'text-slate-700'
                    }`}
                  >
                    {st}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {section === 'bonus' && (
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-6">
            <View className="flex-row items-center mb-2">
              <Gift size={18} color="#d97706" />
              <Text className="text-base font-black text-slate-900 ml-1.5">
                SAVDOX Bonus Loyalty
              </Text>
            </View>
            <Text className="text-2xl font-black text-emerald-700">
              {bonusPoints.toLocaleString()} UZS Points
            </Text>
            <Text className="text-xs text-slate-600 mt-1">
              Gold Tier (3.5% Cashback) • Referral Code: SAVDOX777
            </Text>
          </View>
        )}

        {section === 'seller' && (
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-6">
            <View className="flex-row items-center mb-2">
              <Store size={16} color="#059669" />
              <Text className="text-sm font-black text-slate-900 ml-1.5">
                Seller Studio & Admin RBAC
              </Text>
            </View>
            <Text className="text-xs text-slate-600 mb-3">
              Store: Malika Smart Hub (Tax INN Verified • 4.94 ★)
            </Text>
            <View className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <Text className="text-xs font-bold text-emerald-900">
                Monthly Store Revenue: {formatUzs(86790000, lang)}
              </Text>
            </View>
          </View>
        )}

        {section === 'auth' && (
          <View className="bg-white rounded-2xl p-4 border border-slate-200 mb-6">
            <View className="flex-row items-center mb-3">
              <ShieldCheck size={16} color="#059669" />
              <Text className="text-sm font-black text-slate-900 ml-1.5">
                Phone (+998), Email & OTP Profile Setup
              </Text>
            </View>
            <Text className="text-xs font-bold text-slate-700 mb-1">Full Name</Text>
            <TextInput
              value={userProfile.fullName}
              onChangeText={(val) =>
                setUserProfile((p) => ({ ...p, fullName: val }))
              }
              className="border border-slate-200 rounded-xl px-3 py-2 text-xs mb-3"
            />
            <Text className="text-xs font-bold text-slate-700 mb-1">
              Uzbekistan Phone (+998)
            </Text>
            <TextInput
              value={userProfile.phone}
              onChangeText={(val) =>
                setUserProfile((p) => ({ ...p, phone: val }))
              }
              className="border border-slate-200 rounded-xl px-3 py-2 text-xs mb-3"
            />
            <Text className="text-xs font-bold text-slate-700 mb-1">
              Street Address
            </Text>
            <TextInput
              value={userProfile.streetAddress}
              onChangeText={(val) =>
                setUserProfile((p) => ({ ...p, streetAddress: val }))
              }
              className="border border-slate-200 rounded-xl px-3 py-2 text-xs"
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

