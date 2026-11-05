import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MarketplaceProvider } from './context/MarketplaceContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import SellerDashboardPage from './pages/SellerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import SavdoxBonusPage from './pages/SavdoxBonusPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <MarketplaceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="orders" element={<OrderTrackingPage />} />
            <Route path="seller" element={<SellerDashboardPage />} />
            <Route path="admin" element={<AdminDashboardPage />} />
            <Route path="bonus" element={<SavdoxBonusPage />} />
            <Route path="login" element={<AuthPage defaultMode="login" />} />
            <Route path="register" element={<AuthPage defaultMode="register" />} />
            <Route path="auth" element={<AuthPage defaultMode="login" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MarketplaceProvider>
  );
}
