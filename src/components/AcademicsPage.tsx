import { BookOpen, Award, Users, Lightbulb, Globe, Target, FlaskConical, Cpu, Mic2, Trophy, Search, BarChart } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function AcademicsPage() {
  const { campus } = useCampus();
  const gradientClass = 'from-blue-900 to-green-700';

  const playschoolCurriculum = [
    { title: 'Language Development', description: 'Building vocabulary, phonics, and communication skills through stories and rhymes', icon: BookOpen },
    { title: 'Numeracy Skills', description: 'Introduction to numbers, shapes, patterns, and basic math concepts', icon: Target },
    { title: 'Motor Skills', description: 'Fine and gross motor development through play and structured activities', icon: Users },
    { title: 'Creative Arts', description: 'Art, music, and craft activities to nurture creativity and expression', icon: Lightbulb },
  ];

  const regularSchoolCurriculum = [
    { title: 'Core Subjects', description: 'English, Mathematics, Science, Social Studies taught by expert faculty', icon: BookOpen },
    { title: 'Languages', description: 'Multi-lingual education with focus on regional and international languages', icon: Globe },
    { title: 'STEM Education', description: 'Science, Technology, Engineering, and Mathematics with hands-on learning', icon: Lightbulb },
    { title: 'Life Skills', description: 'Critical thinking, communication, collaboration, and problem-solving', icon: Users },
  ];

  const curriculum = campus === 'playschool' ? playschoolCurriculum : regularSchoolCurriculum;

  const teachingApproaches = [
    { icon: Lightbulb, title: 'Activity-Based Learning', description: 'Students explore ideas through structured tasks, experiments, and guided interactions — learning by doing.' },
    { icon: Search, title: 'Conceptual Understanding', description: 'Lessons focus on why and how, enabling students to connect ideas, reason logically, and apply learning across subjects.' },
    { icon: Globe, title: 'Experiential Learning', description: 'Real-world experiences are integrated into classroom instruction to bridge theory and practice through projects and observations.' },
    { icon: BookOpen, title: 'Inquiry-Driven Learning', description: 'Students are encouraged to ask questions, explore possibilities, and think independently — nurturing curiosity and analytical thinking.' },
    { icon: BarChart, title: 'Structured & Progressive', description: 'Concepts are introduced gradually, reinforced consistently, and extended thoughtfully to ensure steady academic growth.' },
    { icon: Award, title: 'Assessment for Learning', description: 'Regular feedback helps identify strengths, address gaps, and support individual progress without undue pressure.' },
  ];

  const guidingPrinciples = [
    { label: 'Clarity before speed', desc: 'Strong understanding precedes advancement' },
    { label: 'Depth over memorization', desc: 'Learning that is meaningful and lasting' },
    { label: 'Consistency with care', desc: 'High standards supported by guidance and encouragement' },
  ];

  const enrichmentPrograms = [
    { icon: FlaskConical, title: 'IIT–JEE Foundation Program', description: 'Builds analytical thinking, problem-solving ability, and conceptual strength for future engineering aspirants. Age-appropriate and CBSE-aligned.' },
    { icon: Users, title: 'NEET Foundation Program', description: 'Introduces scientific reasoning, logical application, and conceptual depth essential for medical entrance preparation.' },
    { icon: Trophy, title: 'Olympiad & Competitive Prep', description: 'Guided preparation for national and international Olympiads, fostering logical reasoning, mathematical thinking, and academic precision.' },
    { icon: Mic2, title: 'Language Labs & Communication', description: 'Debates, presentations, storytelling, and discussions develop clarity of expression and confident communication.' },
    { icon: Cpu, title: 'Computer & Digital Learning', description: 'Digital literacy and technology skills — research, presentation abilities, and foundational computational thinking with ethical digital usage.' },
    { icon: Lightbulb, title: '21st-Century Laboratories', description: 'Dedicated spaces for hands-on exploration, observation, and experimentation to deepen understanding through experience.' },
  ];

  const subjects = campus === 'playschool'
    ? ['Pre-Reading & Writing', 'Pre-Math & Numeracy', 'Environmental Awareness', 'Music & Rhythm', 'Art & Craft', 'Physical Education']
    : ['English Language & Literature', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies (History, Geography, Civics)', 'Computer Science', 'Languages (Hindi, Sanskrit, etc.)', 'Physical Education', 'Arts & Music'];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">Oakland Schools · CBSE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {campus === 'playschool'
              ? 'Play-based learning that nurtures young minds'
              : 'Comprehensive curriculum for academic excellence — Nursery to Grade 8'}
          </p>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Academic Philosophy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">At Oakland Schools, learning is built on strong foundations and guided with clear purpose. Our philosophy emphasizes clarity, consistency, and depth of understanding.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {guidingPrinciples.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientClass} text-white flex items-center justify-center font-bold mx-auto mb-3`}>{i + 1}</div>
                <h4 className="font-bold text-blue-900 mb-2">{p.label}</h4>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 text-gray-700 text-sm leading-relaxed shadow-sm border border-blue-50">
            <p>Learning is thoughtfully paced and reinforced through application, helping students move beyond memorization to meaningful comprehension. Assessment at Oakland is used to guide growth rather than create pressure — educators observe, support, and mentor each learner, respecting individual learning needs while maintaining high academic standards.</p>
            <p className="mt-3 font-semibold text-blue-900">Above all, our approach cultivates disciplined thinking, intellectual curiosity, and a lifelong love for learning.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {campus === 'playschool'
                ? 'Age-appropriate learning experiences designed to develop essential skills'
                : 'Structured academic programs that prepare students for future success'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {curriculum.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Learning Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teaching & Learning Approach</h2>
            <p className="text-lg text-gray-600">Six pillars that make learning at Oakland engaging and effective</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingApproaches.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {campus === 'playschool' ? 'Learning Areas' : 'Subjects Offered'}
            </h2>
            <p className="text-lg text-gray-600">Comprehensive curriculum covering all essential areas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className={`p-5 rounded-xl border-2 ${campus === 'playschool' ? 'border-lime-200 hover:border-lime-400 hover:bg-lime-50' : 'border-blue-200 hover:border-blue-400 hover:bg-blue-50'} transition-all`}>
                <p className="font-semibold text-gray-900 text-sm">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Enrichment & Advanced Pathways (regular only) */}
      {campus === 'regular' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Enrichment & Advanced Pathways</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Beyond the standard curriculum — specialized programs that build deeper skills and prepare students for competitive futures.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrichmentPrograms.map((prog, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-4`}>
                    <prog.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{prog.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{prog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Board Exam Stats (regular) */}
      {campus === 'regular' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Board Examination Preparation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive preparation programs for 10th grade board examinations with expert guidance, regular assessments, and dedicated doubt-clearing sessions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-900 mb-2">592/600</div>
                <div className="text-sm text-gray-600">SSC Top Score</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-green-700 mb-2">95%+</div>
                <div className="text-sm text-gray-600">Board Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Doubt Support</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Academic Mentorship */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Mentorship & Personalised Support</h2>
          <p className="text-gray-600 leading-relaxed">Focused guidance, regular feedback, and academic mentoring ensure that each learner receives support aligned with their strengths, pace, and aspirations. Educators at Oakland observe, support, and mentor — never just instruct.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Academic Community</h2>
          <p className="text-xl text-white/90 mb-8">Give your child the gift of quality education at Oakland Schools, CBSE.</p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:shadow-2xl transition-all">
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}