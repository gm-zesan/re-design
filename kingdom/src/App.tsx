import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ConcernsDirectoryPage } from './pages/ConcernsDirectoryPage';
import { HousingPage } from './pages/HousingPage';
import { BuildersPage } from './pages/BuildersPage';
import { ConcernDetailPage } from './pages/ConcernDetailPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { LoginPage } from './pages/LoginPage';
import { TeamPage } from './pages/TeamPage';
import { NoticesPage } from './pages/NoticesPage';
import { CareerPage } from './pages/CareerPage';
import { CvSubmissionPage } from './pages/CvSubmissionPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Standalone Authentication Layout (without main site Header/Footer) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Standard Public Website Layout */}
        <Route element={<Layout />}>
          {/* Home + Legacy CodeIgniter Home Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home/index" element={<HomePage />} />

          {/* About & Photo Gallery */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home/about_us" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/home/photo_gallery" element={<GalleryPage />} />

          {/* Our Concern Directory */}
          <Route path="/concerns" element={<ConcernsDirectoryPage />} />

          {/* KINGDOM Housing Ltd. — KINGDOM City Sub-Portal + Origin Aliases */}
          <Route path="/concerns/housing" element={<HousingPage />} />
          <Route path="/concerns/housing/:section" element={<HousingPage />} />
          <Route path="/home/content_details" element={<HousingPage defaultSection="about" />} />
          <Route path="/Home/content_details" element={<HousingPage defaultSection="about" />} />
          <Route path="/home/content_details/:id" element={<HousingPage defaultSection="about" />} />
          <Route path="/Home/location_map" element={<HousingPage defaultSection="location-map" />} />
          <Route path="/home/location_map" element={<HousingPage defaultSection="location-map" />} />
          <Route path="/Home/layout_plan" element={<HousingPage defaultSection="layout-plan" />} />
          <Route path="/home/layout_plan" element={<HousingPage defaultSection="layout-plan" />} />
          <Route path="/Home/booking" element={<HousingPage defaultSection="booking" />} />
          <Route path="/home/booking" element={<HousingPage defaultSection="booking" />} />
          <Route path="/Home/galleryH" element={<HousingPage defaultSection="gallery" />} />
          <Route path="/home/galleryH" element={<HousingPage defaultSection="gallery" />} />
          <Route path="/Home/feedback" element={<HousingPage defaultSection="feedback" />} />
          <Route path="/home/feedback" element={<HousingPage defaultSection="feedback" />} />

          {/* KINGDOM Builders Ltd. */}
          <Route path="/concerns/builders" element={<BuildersPage />} />
          <Route path="/home/content_builders" element={<BuildersPage />} />
          <Route path="/home/content_builders/:id" element={<BuildersPage />} />

          {/* Remaining 5 Sister Concerns */}
          <Route path="/concerns/:slug" element={<ConcernDetailPage />} />

          {/* Enterprise Applications */}
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/eFS" element={<ApplicationsPage />} />

          {/* Career, Team Members, General Notices, CV Submission */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/home/team_members" element={<TeamPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/home/notice_view" element={<NoticesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/apply" element={<CvSubmissionPage />} />
          <Route path="/home/cv_submission_form" element={<CvSubmissionPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home/contact" element={<ContactPage />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

