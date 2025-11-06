import { BookOpen, Award, Users, Lightbulb, Globe, Target } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function AcademicsPage() {
  const { campus } = useCampus();

  const playschoolCurriculum = [
    {
      title: 'Language Development',
      description: 'Building vocabulary, phonics, and communication skills through stories and rhymes',
      icon: BookOpen,
    },
    {
      title: 'Numeracy Skills',
      description: 'Introduction to numbers, shapes, patterns, and basic math concepts',
      icon: Target,
    },
    {
      title: 'Motor Skills',
      description: 'Fine and gross motor development through play and structured activities',
      icon: Users,
    },
    {
      title: 'Creative Arts',
      description: 'Art, music, and craft activities to nurture creativity and expression',
      icon: Lightbulb,
    },
  ];

  const regularSchoolCurriculum = [
    {
      title: 'Core Subjects',
      description: 'English, Mathematics, Science, Social Studies taught by expert faculty',
      icon: BookOpen,
    },
    {
      title: 'Languages',
      description: 'Multi-lingual education with focus on regional and international languages',
      icon: Globe,
    },
    {
      title: 'STEM Education',
      description: 'Science, Technology, Engineering, and Mathematics with hands-on learning',
      icon: Lightbulb,
    },
    {
      title: 'Life Skills',
      description: 'Critical thinking, communication, collaboration, and problem-solving',
      icon: Users,
    },
  ];

  const curriculum = campus === 'playschool' ? playschoolCurriculum : regularSchoolCurriculum;

  const methodology = [
    {
      title: 'Student-Centered Learning',
      description: 'Personalized approach focusing on individual strengths and learning styles',
    },
    {
      title: 'Experiential Learning',
      description: 'Learning by doing through projects, experiments, and real-world applications',
    },
    {
      title: 'Technology Integration',
      description: 'Smart classrooms and digital tools to enhance learning experience',
    },
    {
      title: 'Holistic Assessment',
      description: 'Continuous evaluation focusing on overall development, not just grades',
    },
  ];

  const subjects = campus === 'playschool'
    ? [
        'Pre-Reading & Writing',
        'Pre-Math & Numeracy',
        'Environmental Awareness',
        'Music & Rhythm',
        'Art & Craft',
        'Physical Education',
      ]
    : [
        'English Language & Literature',
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Social Studies (History, Geography, Civics)',
        'Computer Science',
        'Languages (Hindi, Sanskrit, etc.)',
        'Physical Education',
        'Arts & Music',
      ];

  return (
    <div className="bg-white">
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-white/90">
            {campus === 'playschool'
              ? 'Play-based learning that nurtures young minds'
              : 'Comprehensive curriculum for academic excellence'}
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {campus === 'playschool'
                ? 'Age-appropriate learning experiences designed to develop essential skills'
                : 'Structured academic programs that prepare students for future success'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Teaching Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Innovative approaches to make learning engaging and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodology.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} rounded-xl flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {campus === 'playschool' ? 'Learning Areas' : 'Subjects Offered'}
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum covering all essential areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${campus === 'playschool' ? 'border-lime-200 hover:border-lime-400 hover:bg-lime-50' : 'border-blue-200 hover:border-blue-400 hover:bg-blue-50'} transition-all`}
              >
                <p className="font-semibold text-gray-900">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {campus === 'regular' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Board Examination Preparation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive preparation programs for 10th grade board examinations with expert guidance, regular assessments, and dedicated doubt-clearing sessions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-blue-900 mb-2">95%+</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-sm text-gray-600">Mock Tests</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Doubt Support</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Academic Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Give your child the gift of quality education
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:shadow-2xl transition-all">
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}
