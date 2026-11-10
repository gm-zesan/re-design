import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MessagesPage from './pages/MessagesPage';
import OurBusinessPage from './pages/OurBusinessPage';
import MissionVisionPage from './pages/MissionVisionPage';
import WhyWePage from './pages/WhyWePage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import LandownerQueryPage from './pages/LandownerQueryPage';
import BuyerQueryPage from './pages/BuyerQueryPage';
import CareersPage from './pages/CareersPage';
import JobDetailPage from './pages/JobDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import TermsPage from './pages/TermsPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-message" element={<MessagesPage />} />
          <Route path="/our-business" element={<OurBusinessPage />} />
          <Route path="/mission-vision" element={<MissionVisionPage />} />
          <Route path="/why-we" element={<WhyWePage />} />
          <Route path="/team" element={<TeamPage />} />

          <Route path="/projects" element={<ProjectsPage category="all" />} />
          <Route
            path="/ongoing-project"
            element={<ProjectsPage category="ongoing" />}
          />
          <Route
            path="/upcomming-project"
            element={<ProjectsPage category="upcoming" />}
          />
          <Route
            path="/upcoming-project"
            element={<ProjectsPage category="upcoming" />}
          />
          <Route
            path="/handover-project"
            element={<ProjectsPage category="handover" />}
          />
          <Route path="/project-details/:id" element={<ProjectDetailPage />} />

          <Route path="/service" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/landowner-query" element={<LandownerQueryPage />} />
          <Route path="/buyer-query" element={<BuyerQueryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/job-details/:id" element={<JobDetailPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details/:id" element={<BlogDetailPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms-condition" element={<TermsPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

