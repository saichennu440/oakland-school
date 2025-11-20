import { School, Users } from 'lucide-react';
import { Campus } from '../types';

interface SplashScreenProps {
  onSelectCampus: (campus: Campus) => void;
}

export function SplashScreen({ onSelectCampus }: SplashScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12 animate-fade-in">
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-26 h-26 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center shadow-xl">
              <img src="/playschoollogo.jpg" alt="Playschool Icon" className="w-24 h-24" />
              <img src="/oakland_logo.jpg" alt="Playschool Icon" className="w-24 h-24" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-blue-900">Oakland Schools</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 font-light">
            Strong Foundations. Endless Horizons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <button
            onClick={() => onSelectCampus('playschool')}
            className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-lime-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <img src="/playschoollogo.jpg" alt="Playschool Icon" className="w-16 h-16" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">City Campus</h2>
                <p className="text-lg text-gray-600">Nursery to Grade 8</p>
              </div>

              <p className="text-sm text-gray-500">
                Nurturing young minds through play-based learning
              </p>

              <div className="pt-4">
                <span className="text-blue-900 font-semibold group-hover:underline">
                  Explore Playschool →
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectCampus('regular')}
            className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-900"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <img src="/oakland_logo.jpg" alt="Playschool Icon" className="w-16 h-16" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Pusapatirega Campus</h2>
                <p className="text-lg text-gray-600">1st to 10th Grade</p>
              </div>

              <p className="text-sm text-gray-500">
                Excellence in academics and holistic development
              </p>

              <div className="pt-4">
                <span className="text-blue-900 font-semibold group-hover:underline">
                  Explore Regular School →
                </span>
              </div>
            </div>
          </button>
        </div>

        <p className="text-sm text-gray-500 pt-4">
          Select your campus to continue
        </p>
      </div>
    </div>
  );
}
