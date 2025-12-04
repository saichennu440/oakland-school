import React, { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  Microscope,
  Trophy,
  Users2,
  ArrowRight,
  Target,
  Globe,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';

// RegularSchoolHome.jsx
// Notes for integration:
// 1) Add Google Fonts to your index.html (Poppins + Nunito):
//    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
// 2) Tailwind: add font families to your tailwind config and use `font-poppins` / `font-nunito` utility classes (or replace with `font-sans`).
// 3) Logo: pass it as a prop or place inside the header where indicated.

export default function RegularSchoolHome({ onNavigate }: { onNavigate: (page: string) => void }) {
  const heroImages = [
    // Unsplash images chosen for smiling children, classroom, school gate
    '/hero/hero1.jpg',
    '/hero/hero2.png', 
    '/hero/hero3.webp',
  ];

  const [slide, setSlide] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  const highlights = [
    {
      icon: Award,
      title: 'Strong academics with proven results',
      description: 'Delivering consistent academic excellence with measurable outcomes.',
    },
    {
      icon: Microscope,
      title: 'Values, manners, and discipline',
      description: 'Instilling strong values and disciplined habits in every child.',
    },
    {
      icon: Trophy,
      title: 'Spacious playground & sports',
      description: 'Extensive sports facilities and co-curricular programs.',
    },
    {
      icon: Users2,
      title: 'Expert Faculty',
      description: 'Experienced educators dedicated to student success',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & caring environment',
      description: 'Providing a secure, nurturing space for students.',
    },
    {
      icon: Lightbulb,
      title: 'Activity-based learning',
      description: 'Hands-on activities that build real-world understanding.',
    },
    {
      icon: TrendingUp,
      title: 'Humble leadership',
      description: 'Guided by seasoned leaders who lead with vision.',
    },
    {
      icon: GraduationCap,
      title: 'CBSE & State pathways',
      description: 'Contemporary curricula with career guidance.',
    },
  ];

  const grades = [
    { range: 'Early Years', title: 'Early Explorers', focus: 'Play-based, Montessori-inspired foundations' },
    { range: '1st - 5th', title: 'Primary', focus: 'Building strong foundations in core subjects' },
    { range: '6th - 8th', title: 'Middle', focus: 'Critical thinking and collaborative projects' },
    { range: '9th - 12th', title: 'High School', focus: 'Board prep, life skills and college readiness' },
  ];

  const achievements = [
    { metric: '2', label: 'Campuses' },
    { metric: '1600+', label: 'Students' },
    { metric: '200+', label: 'Children on scholarships' },
    { metric: '20+', label: 'Years of leadership' },
    { metric: '30+', label: 'Villages served' },
  ];

  const gallery = [
    '/playschool/home2.jpg',
    '/playschool/home3.jpg',
    '/playschool/home4.jpg',
    '/playschool/home5.jpg',
  ];

  const testimonials = [
    {
      student: 'Rahul Kumar',
      grade: '10th Grade Graduate',
      text: 'Oakland School gave me the confidence and clarity to pursue my goals. Supportive teachers and real-world learning made all the difference.',
      achievement: '94% Boards',
    },
    {
      student: 'Priya Singh',
      grade: '9th Grade',
      text: 'A caring environment with excellent facilities — I loved the interactive classes and activities.',
      achievement: 'School Topper',
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* HERO / SLIDESHOW */}
      <header className="relative">
        <div className="relative h-[540px] md:h-[620px] lg:h-[680px] overflow-hidden rounded-b-3xl shadow-lg">
          {heroImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                i === slide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden={i !== slide}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white/5"></div>

          <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-4 py-2 bg-amber-100 text-amber-900 rounded-md font-semibold shadow hover:shadow-md transition"
              >
                Admissions Open 2026–27
              </button>
              <button onClick={() => onNavigate('contact')} className="text-white/90 px-3 py-2 rounded-md hover:bg-white/10">
                Contact
              </button>
            </div>
          </nav>

          <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-28">
            <div className="max-w-3xl bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-900" />
                </div>
                <span className="text-sm font-medium text-amber-900">Oakland School • Vizianagaram</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Strong Foundations, Endless Horizons.</h1>
              <p className="text-gray-700/90 mb-6">A warm, modern school rooted in values — nurturing curious minds from Early Explorers through High School.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 text-amber-900 rounded-lg font-semibold shadow hover:translate-y-[-2px] transition-transform"
                >
                  Admissions Open 2026–27 <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 border-2 border-amber-100 rounded-lg bg-white/60 font-semibold hover:bg-white transition"
                >
                  Explore Campus
                </button>
              </div>
            </div>
          </div>

          {/* Slide controls */}
          <div className="absolute left-4 bottom-6 z-30 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-3 h-3 rounded-full ${i === slide ? 'bg-amber-800' : 'bg-white/60'} shadow`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute right-4 bottom-6 z-30 flex items-center gap-3">
            <button
              onClick={() => setSlide((s) => (s - 1 + heroImages.length) % heroImages.length)}
              className="px-3 py-2 rounded-full bg-white/80 shadow"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % heroImages.length)}
              className="px-3 py-2 rounded-full bg-white/80 shadow"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Achievements strip */}
        <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-wrap gap-6 justify-between items-center">
            {achievements.map((a, idx) => (
              <div key={idx} className="flex-1 min-w-[120px] text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-800">{a.metric}</div>
                <div className="text-sm text-gray-600">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Welcome / Correspondent */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome from our Correspondent</h2>
            <p className="text-gray-700 mb-6">At Oakland, our mission is to build character and curiosity through compassionate teaching and practical learning. Rooted in the values of the Bethany Mission Society, we strive to create a safe, inclusive and inspiring environment for every child.</p>
            <button onClick={() => onNavigate('about')} className="px-5 py-3 bg-amber-100 text-amber-900 rounded-md font-semibold shadow">Read full message</button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/hero/hero4.jpg" alt="Correspondent" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* About & Programs */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">About Oakland</h3>
              <p className="text-gray-700 mb-4">Founded under the Bethany Mission Society, Oakland School focuses on holistic development — from moral values to modern skills. Our approach combines activity-based learning with academic rigor.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Vision: Nurture compassionate, curious learners</li>
                <li>• Roots: Bethany Mission Society ethos and community service</li>
                <li>• Tone: Friendly, academic, future-ready</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {grades.map((g, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-sm text-amber-800 font-semibold mb-2">{g.range}</div>
                  <div className="font-bold text-lg mb-1">{g.title}</div>
                  <p className="text-sm text-gray-600">{g.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full mb-3">
              <Target className="w-4 h-4 text-amber-800" />
              <span className="text-amber-800 font-semibold text-sm">Facilities Highlights</span>
            </div>
            <h3 className="text-3xl font-bold">Campus Facilities</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Smart Classrooms, Interactive Panels, Safe Transport, Montessori Play Zones and more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.slice(0, 6).map((h, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-amber-100">
                  <h.icon className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <div className="font-semibold">{h.title}</div>
                  <div className="text-sm text-gray-600">{h.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Gallery</h3>
            <button onClick={() => onNavigate('gallery')} className="text-amber-900 font-semibold">View all</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <button key={i} onClick={() => { setLightboxIndex(i); setGalleryOpen(true); }} className="overflow-hidden rounded-xl shadow">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-40 object-cover transform hover:scale-105 transition" />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox / Modal */}
        {galleryOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">
            <div className="max-w-[1100px] w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img src={gallery[lightboxIndex]} alt="Enlarged" className="w-full h-[520px] object-cover" />
                <button onClick={() => setGalleryOpen(false)} className="absolute right-4 top-4 bg-white/80 px-3 py-1 rounded-md">Close</button>
                <button onClick={() => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-md">‹</button>
                <button onClick={() => setLightboxIndex((i) => (i + 1) % gallery.length)} className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-md">›</button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Parent Testimonials & Student Voices</h3>
            <p className="text-gray-600">Real stories from our community.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow">
                <p className="italic text-gray-700 mb-4">“{t.text}”</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{t.student}</div>
                    <div className="text-sm text-gray-600">{t.grade}</div>
                  </div>
                  <div className="text-sm bg-amber-100 px-3 py-1 rounded-full">{t.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Events */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Upcoming Events</h3>
          <p className="mb-6 text-white/90">Open Day • Sports Meet • Parent Workshops — stay tuned for dates and registration details.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => onNavigate('admissions')} className="px-6 py-3 bg-amber-100 text-amber-900 font-semibold rounded">Admissions</button>
            <button onClick={() => onNavigate('events')} className="px-6 py-3 border border-white/30 rounded">Events</button>
          </div>
        </div>
      </section>

    
    </div>
  );
}
