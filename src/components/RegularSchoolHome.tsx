import { GraduationCap, Award, BookOpen, Microscope, Trophy, Users2, ArrowRight, TrendingUp, Target, Globe } from 'lucide-react';

interface RegularSchoolHomeProps {
  onNavigate: (page: string) => void;
}

export function RegularSchoolHome({ onNavigate }: RegularSchoolHomeProps) {
  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum aligned with national standards',
    },
    {
      icon: Microscope,
      title: 'Modern Labs',
      description: 'State-of-the-art science, computer, and language labs',
    },
    {
      icon: Trophy,
      title: 'Sports & Activities',
      description: 'Extensive sports facilities and co-curricular programs',
    },
    {
      icon: Users2,
      title: 'Expert Faculty',
      description: 'Experienced educators dedicated to student success',
    },
  ];

  const grades = [
    { range: '1st - 5th', title: 'Primary School', focus: 'Building strong foundations in core subjects' },
    { range: '6th - 8th', title: 'Middle School', focus: 'Developing critical thinking and analytical skills' },
    { range: '9th - 10th', title: 'High School', focus: 'Board exam preparation and career guidance' },
  ];

  const achievements = [
    { metric: '95%+', label: 'Board Pass Rate' },
    { metric: '50+', label: 'Academic Awards' },
    { metric: '20+', label: 'Years of Excellence' },
    { metric: '100%', label: 'Student Satisfaction' },
  ];

  const facilities = [
    { name: 'Science Labs', description: 'Physics, Chemistry, Biology labs with modern equipment' },
    { name: 'Computer Lab', description: 'Latest computers with high-speed internet' },
    { name: 'Library', description: '10,000+ books and digital resources' },
    { name: 'Sports Complex', description: 'Cricket, Football, Basketball, Indoor games' },
    { name: 'Smart Classrooms', description: 'Interactive digital learning environment' },
    { name: 'Art & Music', description: 'Dedicated spaces for creative expression' },
  ];

  const testimonials = [
    {
      student: 'Rahul Kumar',
      grade: '10th Grade Graduate',
      text: 'Oakland Schools provided me with excellent education and guidance. The teachers truly care about student success.',
      achievement: 'Scored 94% in Boards',
    },
    {
      student: 'Priya Singh',
      grade: '9th Grade',
      text: 'The learning environment here is exceptional. Great facilities, supportive teachers, and wonderful peers.',
      achievement: 'School Topper',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4aDEydjEySDM2VjE4em0wIDI0aDEydjEySDM2VjQyek0xMiAxOGgxMnYxMkgxMlYxOHptMCAyNGgxMnYxMkgxMlY0MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Oakland Regular School</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Excellence in Education, Character in Life
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Empowering students from 1st to 10th grade with knowledge, values, and skills for a successful future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Admissions Open</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Explore Campus
              </button>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.metric}</div>
                <div className="text-sm md:text-base text-white/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Oakland Regular School?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive education that prepares students for academic and personal success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-green-700 rounded-xl flex items-center justify-center mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Grade Structure
            </h2>
            <p className="text-xl text-gray-600">
              Progressive learning pathways from elementary to high school
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-green-700 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{grade.range.split(' ')[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{grade.title}</h3>
                  <p className="text-gray-500">{grade.range}</p>
                </div>

                <p className="text-gray-600 text-center mb-6">{grade.focus}</p>

                <button
                  onClick={() => onNavigate('academics')}
                  className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  View Curriculum
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-700">World-Class Facilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything students need to excel academically and personally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-900 to-green-700 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our accomplished students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg relative"
              >
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-green-100 rounded-full">
                    <TrendingUp className="w-4 h-4 text-green-700 inline mr-1" />
                    <span className="text-xs font-semibold text-green-700">{testimonial.achievement}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-6 italic mt-8">"{testimonial.text}"</p>

                <div className="border-t border-blue-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.student}</div>
                  <div className="text-sm text-gray-600">{testimonial.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shape Your Future with Us
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join a community committed to academic excellence and character development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              Schedule Campus Tour
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
          <p className="text-gray-400 mb-6">Stay updated with school activities and achievements</p>
          <a
            href="https://www.instagram.com/oaklschool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <span>@oaklschool on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
