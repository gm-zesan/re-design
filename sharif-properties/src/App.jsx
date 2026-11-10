import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import EditorialGuidePage from './pages/EditorialGuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SavedPropertiesPage from './pages/SavedPropertiesPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function ScrollManager() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}

function PublicAliasRedirect() {
  const location = useLocation();
  const targetPath = location.pathname.replace(/^\/public/, '') || '/';
  return <Navigate to={`${targetPath}${location.search}${location.hash}`} replace />;
}

function LayoutShell() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (location.pathname === '/userLogin' && searchParams.get('tab') === 'favorites') {
    return <Navigate to="/saved" replace />;
  }

  const isStandaloneAuth = [
    '/userLogin',
    '/signin',
    '/signup',
    '/register',
    '/userRegister',
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink overflow-x-clip">
      {!isStandaloneAuth && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent" element={<CatalogPage />} />
          <Route path="/searchResult" element={<CatalogPage />} />
          <Route path="/property-type/*" element={<CatalogPage />} />
          <Route path="/dhaka/:slug" element={<PropertyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/saved" element={<SavedPropertiesPage />} />
          <Route path="/userLogin" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/userRegister" element={<SignUpPage />} />

          {/* Legacy /public/* redirects */}
          <Route path="/public" element={<Navigate to="/" replace />} />
          <Route path="/public/*" element={<PublicAliasRedirect />} />

          {/* Broken legacy link remediation */}
          <Route
            path="/service"
            element={<Navigate to="/service-apartments-dhaka" replace />}
          />
          <Route
            path="/service-apartments-gulshan"
            element={<Navigate to="/service-apartment-gulshan" replace />}
          />
          <Route
            path="/property/a-beautiful-house-for-rent-in-baridhara-diplomatic-zone"
            element={<Navigate to="/rent" replace />}
          />

          {/* Dynamic matcher for all 50 Editorial / Service / Location Pages */}
          <Route path="/*" element={<EditorialGuidePage />} />
        </Routes>
      </main>
      {!isStandaloneAuth && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollManager />
        <LayoutShell />
      </BrowserRouter>
    </AppProvider>
  );
}
