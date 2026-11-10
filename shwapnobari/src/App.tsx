import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PropertiesListPage } from './pages/PropertiesListPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProfilePage } from './pages/ProfilePage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CategoryArchivePage } from './pages/CategoryArchivePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PROPERTIES } from './data/properties';
import { ThemeProvider } from './context/ThemeContext';

function RouteMetadata() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const clean = pathname.replace(/\/+$/, '') || '/';
    let title = 'Shwapno Bari Real Estate Ltd. — Reliable Platform of Property Solution';

    if (clean === '/about-us') {
      title = 'About Us — Shwapno Bari Real Estate Ltd.';
    } else if (clean === '/properties-list' || clean === '/properties' || clean.startsWith('/properties-list/page')) {
      const params = new URLSearchParams(search);
      const st = params.get('project_state');
      const loc = params.get('location');
      title = st
        ? `${st} Properties — Shwapno Bari`
        : loc
        ? `${loc.replace(/-properties$/, '').replace(/-/g, ' ')} Properties — Shwapno Bari`
        : 'Properties List — Shwapno Bari Real Estate Ltd.';
    } else if (clean.startsWith('/properties/')) {
      const slug = clean.split('/properties/')[1];
      const match = PROPERTIES.find((p) => p.slug === slug);
      if (match) title = `${match.title} — Shwapno Bari`;
    } else if (clean === '/services') {
      title = 'Services — Shwapno Bari Real Estate Ltd.';
    } else if (clean === '/service-buy') {
      title = 'Buy Property Service — Shwapno Bari';
    } else if (clean === '/service-sell') {
      title = 'Sell Property Service — Shwapno Bari';
    } else if (clean === '/service-develop') {
      title = 'Develop Property Service — Shwapno Bari';
    } else if (clean === '/service-exchange') {
      title = 'Property Exchange, Legal Support & Acquisition — Shwapno Bari';
    } else if (clean === '/profile-zakir') {
      title = 'Rtn. Md. Zakir Hossain phf — Managing Director | Shwapno Bari';
    } else if (clean === '/profile-mahfuzur') {
      title = 'Rtn. Sayed Mahfuzur Rahman phf — Director | Shwapno Bari';
    } else if (clean === '/contact-us') {
      title = 'Contact Us — Shwapno Bari Real Estate Ltd.';
    } else if (clean === '/privacy-policy') {
      title = 'Privacy Policy — Shwapno Bari Real Estate Ltd.';
    } else if (clean === '/terms-and-conditions') {
      title = 'Terms & Conditions — Shwapno Bari Real Estate Ltd.';
    }

    document.title = title;
  }, [pathname, search]);

  return null;
}

export function AppRoutes() {
  return (
    <ThemeProvider>
      <RouteMetadata />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/properties-list" element={<PropertiesListPage />} />
          <Route path="/properties-list/page/:pageNum" element={<PropertiesListPage />} />
          <Route path="/properties" element={<PropertiesListPage />} />
          <Route path="/properties/:slug" element={<PropertyDetailPage />} />
          <Route path="/category/:slug" element={<CategoryArchivePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-buy" element={<ServiceDetailPage serviceKey="service-buy" />} />
          <Route path="/service-sell" element={<ServiceDetailPage serviceKey="service-sell" />} />
          <Route path="/service-develop" element={<ServiceDetailPage serviceKey="service-develop" />} />
          <Route path="/service-exchange" element={<ServiceDetailPage serviceKey="service-exchange" />} />
          <Route path="/profile-zakir" element={<ProfilePage memberSlug="profile-zakir" />} />
          <Route path="/profile-mahfuzur" element={<ProfilePage memberSlug="profile-mahfuzur" />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<LegalPage docType="privacy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage docType="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
