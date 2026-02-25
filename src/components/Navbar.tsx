import { useState } from 'react';
import { School, Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';
import { Campus } from '../types';

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const { campus, setCampus } = useCampus();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [campusSwitcherOpen, setCampusSwitcherOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Academics', page: 'academics' },
    { label: 'School Life', page: 'schoollife' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Events', page: 'events' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleCampusSwitch = (newCampus: Campus) => {
    setCampus(newCampus);
    setCampusSwitcherOpen(false);
    onNavigate('home');
  };

  const campusColors = {
    playschool: 'bg-gradient-to-r from-blue-900 to-green-700',
    regular: 'from-blue-900 to-green-700',
  };

  const campusText = {
    playschool: 'City Campus',
    regular: 'Pusapatirega Campus',
  };

  // Choose logo based on campus (fallback to regular logo)
  const logoSrc = campus === 'playschool' ? '/playschoollogo.png' : '/oakland_logo.png';
  const logoAlt = campus === 'playschool' ? 'Oakland Playschool Logo' : 'Oakland Schools Logo';

  // header height = h-20 (5rem). We use calc(100vh - 5rem) so mobile menu fits & scrolls.
  const mobileMenuMaxHeight = 'calc(100vh - 5rem)';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
            role="button"
            aria-label="Navigate to home"
          >
            <img
              className="w-16 h-16 object-contain"
              src={logoSrc}
              alt={logoAlt}
            />
            <div className=" ">
              <div className="text-xl font-bold text-gray-900">Oakland Schools</div>
              <div className="text-xs text-gray-500">Strong Foundations. Endless Horizons.</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-blue-900'
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {campus && (
              <div className="relative">
                <button
                  onClick={() => setCampusSwitcherOpen(!campusSwitcherOpen)}
                  className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <span className="text-sm text-gray-600">Viewing:</span>
                  <span className={`text-sm font-semibold ${campus === 'playschool' ? 'text-lime-600' : 'text-blue-900'}`}>
                    {campusText[campus]}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {campusSwitcherOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => handleCampusSwitch('playschool')}
                      className="w-full px-4 py-3 text-left hover:bg-lime-50 transition-colors flex items-center space-x-3"
                    >
                      <div className=" flex items-center justify-center">
                        <img src="/playschoollogo.png" alt="Playschool Logo" className="w-8 h-8 rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">City Campus</div>
                        <div className="text-xs text-gray-500">Nursery, LKG, UKG</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleCampusSwitch('regular')}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center space-x-3"
                    >
                      <div className="flex items-center justify-center">
                        <img src="/oakland_logo.png" alt="Regular Campus Logo" className="w-8 h-8 rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Pusapatirega Campus</div>
                        <div className="text-xs text-gray-500">1st to 10th Grade</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => onNavigate('admissions')}
              className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-blue-900 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: limit height and allow scrolling */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-gray-100 bg-white"
          style={{
            // ensure the menu can scroll when content is tall on small screens
            maxHeight: mobileMenuMaxHeight,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch', // smooth native scrolling on iOS
          }}
        >
          <div className="px-4 py-6 space-y-4 pb-8">
            {campus && (
              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Current Campus:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCampusSwitch('playschool')}
                    className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                      campus === 'playschool'
                        ? 'border-lime-400 bg-lime-50'
                        : 'border-gray-200 hover:border-lime-400'
                    }`}
                  >
                    <div className="text-sm font-semibold">Playschool</div>
                  </button>
                  <button
                    onClick={() => handleCampusSwitch('regular')}
                    className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                      campus === 'regular'
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-900'
                    }`}
                  >
                    <div className="text-sm font-semibold">Regular</div>
                  </button>
                </div>
              </div>
            )}

            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === link.page
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                onNavigate('admissions');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-green-700 text-white rounded-lg font-semibold"
            >
              Apply Now
            </button>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-600 hover:text-blue-900">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+919492855523</span>
                <span className="text-sm">+919121009935</span>
              </a>
              <a href="mailto:oaklandearlyexp@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-blue-900">
                <Mail className="w-4 h-4" />
                <span className="text-sm">oaklandearlyexp@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}