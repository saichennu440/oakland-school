import { useState, useEffect } from 'react';
import { CampusProvider, useCampus } from './contexts/CampusContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { PlayschoolHome } from './components/PlayschoolHome';
import { RegularSchoolHome } from './components/RegularSchoolHome';
import { AboutPage } from './components/AboutPage';
import { AdmissionsPage } from './components/AdmissionsPage';
import { AcademicsPage } from './components/AcademicsPage';
import { GalleryPage } from './components/GalleryPage';
import { EventsPage } from './components/EventsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function AppContent() {
  const { campus, setCampus, hasSelectedCampus } = useCampus();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleSelectCampus = (selectedCampus: 'playschool' | 'regular') => {
    setCampus(selectedCampus);
    setCurrentPage('home');
  };

  const handleApply = () => {
    setCurrentPage('admissions');
  };

  if (!hasSelectedCampus) {
    return <SplashScreen onSelectCampus={handleSelectCampus} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return campus === 'playschool' ? (
          <PlayschoolHome onNavigate={handleNavigate} />
        ) : (
          <RegularSchoolHome onNavigate={handleNavigate} />
        );
      case 'about':
        return <AboutPage />;
      case 'admissions':
        return <AdmissionsPage onNavigate={handleNavigate} />;
      case 'academics':
        return <AcademicsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return campus === 'playschool' ? (
          <PlayschoolHome onNavigate={handleNavigate} />
        ) : (
          <RegularSchoolHome onNavigate={handleNavigate} />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActions onApply={handleApply} />
    </div>
  );
}

function App() {
  return (
    <CampusProvider>
      <AppContent />
    </CampusProvider>
  );
}

export default App;
