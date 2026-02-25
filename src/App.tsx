// App.tsx
import { useState, useEffect } from 'react';
import { CampusProvider, useCampus } from './contexts/CampusContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { PlayschoolHome } from './components/PlayschoolHome';
import RegularSchoolHome from './components/RegularSchoolHome';
import { AboutPage } from './components/AboutPage';
import { AdmissionsPage } from './components/AdmissionsPage';
import { AcademicsPage } from './components/AcademicsPage';
import { GalleryPage } from './components/GalleryPage';
import { SchoolLifePage } from './components/Schoollifepage';
import  EventsPage  from './components/EventsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

// Admin panel (make this file from the AdminPanel code I provided)
import AdminPanel from './admin/AdminPanel';

function useHashNavigation(defaultPage = 'home') {
  const [page, setPage] = useState<string>(() => {
    const hash = (window.location.hash || '').replace('#', '');
    return hash ? hash : defaultPage;
  });

  useEffect(() => {
    const onHashChange = () => {
      const newHash = (window.location.hash || '').replace('#', '') || defaultPage;
      setPage(newHash);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // preserve old behavior on hash change
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [defaultPage]);

  // navigate and update hash
  const navigate = (to: string) => {
    if (to === page) return;
    window.location.hash = to;
    // setting hash will trigger the hashchange listener which updates state
  };

  return { page, navigate, setPage };
}

function AppContent() {
  const { campus, setCampus, hasSelectedCampus } = useCampus();
  // use hash-based navigation so links are shareable and admin can open /#admin
  const { page: currentPage, navigate: handleNavigate } = useHashNavigation('home');

  useEffect(() => {
    // optional: scroll to top whenever page changes (keeps original behavior)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectCampus = (selectedCampus: 'playschool' | 'regular') => {
    setCampus(selectedCampus);
    handleNavigate('home');
  };

  const handleApply = () => {
    handleNavigate('admissions');
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
      case 'schoollife':
        return <SchoolLifePage />;  
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'admin':
        // AdminPanel handles its own access key flow (stores key in localStorage/session)
        return <AdminPanel />;
      default:
        // fallback to home
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
