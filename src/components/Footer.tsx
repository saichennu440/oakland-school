import { useState } from 'react';
import { School, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Campus } from '../types';
import { useCampus } from '../contexts/CampusContext';
interface FooterProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Footer({currentPage = 'footer', onNavigate }: FooterProps) {
 const { campus, setCampus } = useCampus();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [campusSwitcherOpen, setCampusSwitcherOpen] = useState(false);
  const quickLinks = [
    { label: 'About Us', page: 'about' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Academics', page: 'academics' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Events', page: 'events' },
    { label: 'Contact', page: 'contact' },
  ];

  const playschoolLinks = [
    'Nursery Program',
    'LKG Program',
    'UKG Program',
    'Daily Activities',
  ];

  const regularSchoolLinks = [
    'Primary School',
    'Middle School',
    'High School',
    'Board Preparation',
  ];

    const handleCampusSwitch = (newCampus: Campus) => {
    setCampus(newCampus);
    setCampusSwitcherOpen(false);
    onNavigate('home');
  };
  // Choose logo based on campus (fallback to regular logo)
  const logoSrc = campus === 'playschool' ? '/playschoollogo.jpg' : '/oakland_logo.jpg';
  const logoAlt = campus === 'playschool' ? 'Oakland Playschool Logo' : 'Oakland Schools Logo';
  const iframeSrc=campus === 'playschool' ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.393755003332!2d83.4309001!3d18.099599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bfb373ba1de61%3A0x78421c12599dd93b!2sOakland%20Early%20Explorers%20School!5e0!3m2!1sen!2sin!4v1764833798788!5m2!1sen!2sin" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.6313178065143!2d83.5440702!3d18.088614600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bf91f1ec5ac39%3A0xf53ec6ee75de1502!2sOAKLAND%20ENGLISH%20MEDIUM%20SCHOOL!5e0!3m2!1sen!2sin!4v1764833386582!5m2!1sen!2sin";
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14  rounded-xl flex items-center justify-center">
                 <img
              src={logoSrc}
              alt={logoAlt}
            />
              </div>
              <div>
                <div className="text-xl font-bold">Oakland Schools</div>
                <div className="text-xs text-gray-400">Since 2000</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Strong Foundations. Endless Horizons. Building tomorrow's leaders today.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/oakexp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574468833926&mibextid=wwXIfr&rdid=JebAE3g4HocwP9Jj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JefjURpVV%2F%3Fmibextid%3DwwXIfr#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@oaklandschoolsvzm?si=0qzeUqcKx2feThRQ"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-lime-400 mb-3">Playschool</h4>
                <ul className="space-y-2">
                  {playschoolLinks.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-gray-400">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Regular School</h4>
                <ul className="space-y-2">
                  {regularSchoolLinks.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-gray-400">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+91 9121009935</span>
              </a>
              <a
                href="mailto:oaklandearlyexp@gmail.com"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>oaklandearlyexp@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">Jammu, Padalpeta Road, near Srinivasa Function Hall </p>
                  <p>Vizianagram, India, Andhra Pradesh</p>
                </div>
              </div>
              <div className="mt-6">
              <h4 className="font-semibold mb-2">Map</h4>
              <div className="w-full h-36 bg-white rounded overflow-hidden">
                {/* Replace with real embed or map iframe */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <iframe src = {iframeSrc}></iframe>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Oakland Schools. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Sitemap</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Follow us on Instagram:{' '}
            <a
              href="https://www.instagram.com/oakexp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              @oakexp
            </a>
            {' • '}
            <a
              href="https://www.instagram.com/oaklschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              @oaklschool
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
