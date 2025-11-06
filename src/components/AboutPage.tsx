import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function AboutPage() {
  const { campus } = useCampus();

  const values = [
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'Creating a nurturing environment where every child feels valued and supported',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong partnerships with parents, students, and staff',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering continuous learning and personal development',
    },
  ];

  const milestones = [
    { year: '2000', event: 'Oakland Schools Founded' },
    { year: '2005', event: 'Playschool Campus Established' },
    { year: '2010', event: 'Expanded to 10th Grade' },
    { year: '2015', event: 'Modern Campus Infrastructure' },
    { year: '2020', event: '20 Years of Educational Excellence' },
    { year: '2024', event: 'Over 5000 Alumni Strong' },
  ];

  return (
    <div className="bg-white">
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Oakland Schools</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Strong Foundations. Endless Horizons. Building tomorrow's leaders today.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2000, Oakland Schools has been a beacon of educational excellence in our community for over two decades. What started as a small initiative to provide quality education has grown into a comprehensive educational institution serving students from Nursery to 10th grade.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, dedication to student success, and an unwavering commitment to holistic development. We believe that education extends beyond textbooks and classrooms—it's about nurturing curious minds, building strong character, and preparing students for a dynamic future.
                </p>
                <p>
                  Today, with two distinct campuses—our warm and playful Playschool for early learners and our comprehensive Regular School for primary and secondary education—we continue to uphold our founding vision: to provide world-class education rooted in values, compassion, and excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center">
               <img
                  src="/about2.jpg"
                  alt="Oakland Schools Campus"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a nurturing, inclusive, and inspiring learning environment that empowers every student to achieve academic excellence, develop strong character, and become responsible global citizens equipped for the challenges of tomorrow.
              </p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-3xl p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be recognized as a leading educational institution that sets benchmarks in holistic education, nurtures future leaders, and creates a lasting positive impact on society through innovative teaching methodologies and value-based learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our educational legacy</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 to-green-700 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-blue-900 mb-2">{milestone.year}</div>
                      <div className="text-lg text-gray-700">{milestone.event}</div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-8 h-8 bg-gradient-to-br from-blue-900 to-green-700 rounded-full border-4 border-white shadow-lg flex-shrink-0 relative z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-white/90 mb-8">
            Join a community committed to excellence, innovation, and holistic development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:shadow-2xl transition-all">
              Admissions Open
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold hover:bg-white/20 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
