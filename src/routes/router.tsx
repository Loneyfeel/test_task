import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages").then(m => ({ default: m.HomePage })));

const BoxesPage = lazy(() => import("../pages").then(m => ({ default: m.BoxesPage })));

const DealsPage = lazy(() => import("../pages").then(m => ({ default: m.DealsPage })));

const LoginPage = lazy(() => import("../pages").then(m => ({ default: m.LoginPage })));

const SingupPage = lazy(() => import("../pages").then(m => ({ default: m.SingupPage })));

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/boxes" element={<BoxesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SingupPage />} />
      </Routes>
    </Suspense>
  );
}
