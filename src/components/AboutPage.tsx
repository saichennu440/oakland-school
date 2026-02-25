import React, { useState } from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Phone, MessageCircle, Mail, Quote } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function AboutPage() {
  const { campus } = useCampus();
  const [openPusa, setOpenPusa] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const values = [
    { icon: Heart, title: 'Care & Compassion', description: 'Creating a nurturing environment where every child feels valued and supported' },
    { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in education and character development' },
    { icon: Users, title: 'Community', description: 'Building strong partnerships with parents, students, and staff' },
    { icon: TrendingUp, title: 'Growth', description: 'Fostering continuous learning and personal development' },
  ];

  const milestones = [
    { year: '2017', event: 'Oakland Schools Founded in Pusapatirega' },
    { year: '2019', event: 'Expanded Reach Across Nearby Mandals' },
    { year: '2022', event: 'City Campus (Kindergarten) Launched' },
    { year: '2024', event: 'Over 5000 Alumni Strong (regional reach & impact)' },
  ];

  const leaders = [
    {
      name: 'Dr. Srinivasa Rao Chepa',
      initials: 'SR',
      title: 'Correspondent',
      desc: `A visionary educator with over two decades of service. Dr. Srinivasa Rao brings global insight (Doctorate in Leadership from Asbury, USA) and a lifelong commitment to rural upliftment and child-centred education. His guiding belief: "Every child deserves strong foundations and endless horizons."`,
    },
    {
      name: 'Mr. Chepa Ravi',
      initials: 'CR',
      title: 'Director & Principal (Pusapatirega Campus)',
      desc: `A mentor of generations, Mr. Ravi has 20+ years of educational leadership. Known as the "Man of Students", he leads with discipline, compassion and deep involvement in school culture.`,
    },
    {
      name: 'Ms. Saritha Mandal',
      initials: 'SM',
      title: 'Principal (City Campus)',
      desc: `An experienced academic leader and teacher-trainer, Ms. Saritha brings 20+ years of early years and primary leadership. She specialises in curriculum planning, teacher development and building confident classrooms.`,
    },
    {
      name: 'Peter Chepa',
      initials: 'PC',
      title: 'Academic Dean',
      desc: `A strategic thinker with international exposure (Asbury University). Peter leads academic systems, teacher training, activity design and the CBSE expansion plan with calm, detail and creativity.`,
    },
  ];

  const gradientClass = 'from-blue-900 to-green-700';

  return (
    <div className="bg-white text-gray-900">

      {/* Hero */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">Nursery – Grade 8 · Jammu, Vizianagaram</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Oakland Schools</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Strong Foundations. Endless Horizons.</p>
          <p className="mt-4 max-w-3xl mx-auto text-white/80">
            Oakland Schools, CBSE — an institution where learning is intentional, structured, and firmly grounded in values.
            Founded in 2017 in Pusapatirega, now serving 1,700+ children across Vizianagaram.
          </p>
        </div>
      </section>

      {/* Message from Correspondent */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-100" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 rounded-2xl  flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  <img src="/corespondent.png" alt="Correspondent Photo" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <p className="font-bold text-gray-900">Dr. Srinivasa Rao. Ch, Ph.D</p>
                <p className="text-sm text-gray-500">Correspondent, Oakland Schools</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Message from the Correspondent</h2>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>At Oakland Schools, education is viewed as a <strong>lifelong foundation</strong> rather than a short-term pursuit.</p>
                  <p>Our commitment has always been to provide children with an environment that <strong>nurtures discipline, curiosity, moral values, and academic strength</strong>. In an age of constant change, Oakland stands firm in its belief that true education balances tradition with <strong>progress, structure with creativity, and ambition with responsibility.</strong></p>
                  <p>As we continue to grow and strengthen our academic offerings, our focus remains clear — preparing children not only for examinations, but for life. I extend my gratitude to parents for their trust and to our educators for their dedication.</p>
                  <p className="font-semibold italic">Together, we are shaping futures with purpose and integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Oakland Story</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p><strong>Oakland Schools</strong> was founded with a clear and enduring vision — to provide children with strong educational foundations built on clarity, consistency, and care.</p>
              <p>Since 2017, Oakland has served families in Pusapatirega and the surrounding villages in four mandals, growing steadily through trust, commitment, and a deep understanding of how children learn best. From the very beginning, the school chose <strong>purpose over pace</strong> and <strong>quality over scale</strong>. Now scaling at more than <strong>1,700 children</strong>.</p>
              <p>Oakland's early years were shaped by a simple yet profound belief: children thrive in environments that offer <strong>structure, patience, encouragement, and a sense of safety.</strong> These principles continue to guide every classroom and every interaction.</p>
              <p>Over time, Oakland earned the confidence of parents through disciplined academics, dedicated educators, and a learning environment where every child is valued. Growth has always been approached thoughtfully, with care taken to ensure that progress never comes at the cost of standards.</p>
              <p>Oakland's transition toward a broader academic framework, including alignment with the <strong>CBSE curriculum</strong>, reflects a commitment to preparing students for future academic challenges while remaining firmly rooted in foundational learning.</p>

              <div className="bg-blue-50 rounded-2xl p-5 mt-2">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Under Bethany Mission Welfare Society</h3>
                <p className="text-sm">Oakland Schools operate under the Bethany Mission Welfare Society, a registered non-profit committed to uplifting communities through education, children's welfare, and transformative service.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/about2.jpg" alt="Oakland Schools Campus" className="rounded-2xl shadow-lg w-full h-56 object-cover col-span-2" />
            <img src="/about0.png" alt="Oakland Schools Students" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
            <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-green-700 flex flex-col items-center justify-center text-white text-center p-4">
              <span className="text-4xl font-bold">1700+</span>
              <span className="text-sm mt-1 text-white/80">Students Enrolled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Vision & Mission</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-green-700 text-white mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">To shape confident, thoughtful, and responsible individuals through strong academic foundations, enduring values, and a lifelong commitment to learning.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-green-700 text-white mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                {[
                  'Deliver structured, high-quality education grounded in clarity and consistency',
                  'Provide a safe, disciplined, and engaging learning environment',
                  'Cultivate intellectual curiosity, critical thinking, and creativity',
                  'Support holistic development — academic, physical, emotional, and social',
                  'Partner meaningfully with parents in guiding every child toward excellence',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-blue-900">Motto: Strong Foundations. Endless Horizons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Oakland Believes In */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What Oakland Believes In</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Education is more than academics — it is character-building, confidence-shaping, and future-preparing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Strong foundational academics',
              'Habits & discipline',
              'Communication & confidence',
              'Modern activity-based learning',
              '21st-century skills',
              'Nurturing, safe environment',
            ].map((belief, i) => (
              <div key={i} className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-green-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-gray-800 font-medium text-sm">{belief}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-600 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center shadow">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Educational Philosophy</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">We see education as a partnership between school, home and community.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Clarity before speed', desc: 'Strong understanding precedes advancement' },
              { label: 'Depth over memorization', desc: 'Learning that is meaningful and lasting' },
              { label: 'Consistency with care', desc: 'High standards supported by guidance and encouragement' },
            ].map((p, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">{p.label}</h4>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-gray-700 space-y-3 leading-relaxed">
            <p>How We Teach: <strong>Concept-Focused</strong> (understand why, not just what) · <strong>Activity-Based</strong> (Number Fun, Color Days, Wonderfair) · <strong>Values-Driven</strong> · <strong>Differentiated</strong> support · <strong>Bilingual Sensitivity</strong> while building strong English fluency.</p>
            <p>Learning should be active, practical and joyful — not only exam-focused. Every child, whether from a city or a village, deserves global exposure with local grounding.</p>
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Our Journey</h2>
          <p className="text-gray-600 mt-2">Key milestones in our educational legacy</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 to-green-700 hidden lg:block" />
          {milestones.map((m, i) => (
            <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-2xl font-bold text-blue-900">{m.year}</div>
                  <div className="text-gray-700">{m.event}</div>
                </div>
              </div>
              <div className="hidden lg:block w-8 h-8 bg-gradient-to-br from-blue-900 to-green-700 rounded-full border-4 border-white shadow flex-shrink-0 relative z-10" />
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Campuses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Campuses</h2>
            <p className="text-gray-600 mt-2">From village classrooms to modern city pathways — Oakland builds children who learn well, behave well, and grow well.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-green-50 shadow">
              <h3 className="text-2xl font-bold mb-3">Pusapatirega Campus <span className="text-sm font-normal text-gray-500">(State Board)</span></h3>
              <p className="text-gray-700 mb-4">Our Legacy. Our Heart. Our Foundation. The Pusapatirega branch is where Oakland began. Today it supports 1,600+ students, with more than 200 children receiving free education each year.</p>
              <button onClick={() => setOpenPusa(!openPusa)} className="inline-flex items-center gap-2 px-5 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:opacity-90 transition">
                {openPusa ? 'Hide Details' : 'Know More'}
              </button>
              <div className={`mt-6 overflow-hidden transition-all duration-500 ${openPusa ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Where Our Story Began:</strong> Started in 2017 with a simple dream, this campus has grown into one of the largest and most respected schools across four mandals.</p>
                  <p><strong>Education With Heart:</strong> More than 200 children receive free education here every year — quietly, consistently, without any spotlight.</p>
                  <p><strong>Academic Strength:</strong> Strong State Board academic performance. Recent SSC top performer: <strong>592/600</strong>.</p>
                  <p><strong>Abacus & Vedic Maths:</strong> Programs that boost mental speed, memory and problem-solving — giving students a competitive edge.</p>
                  <p><strong>Facilities:</strong> Big playground, spacious classrooms, CCTV-monitored campus, transport to far villages, sports, creative arts, speech competitions, cultural events.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-lime-50 to-yellow-50 shadow">
              <h3 className="text-2xl font-bold mb-3">City Campus <span className="text-sm font-normal text-gray-500">(CBSE Pathway · Nursery–Grade 8)</span></h3>
              <p className="text-gray-700 mb-4">A new, modern, upgraded version of Oakland. Research-based, skill-first model of education — small in size, mighty in vision.</p>
              <button onClick={() => setOpenCity(!openCity)} className="inline-flex items-center gap-2 px-5 py-3 bg-lime-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
                {openCity ? 'Hide Details' : 'Know More'}
              </button>
              <div className={`mt-6 overflow-hidden transition-all duration-500 ${openCity ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Early Years (Nursery–UKG):</strong> Play-based & activity-based learning, phonics-based reading, early numeracy, sensory exploration, manners, social confidence and communication skills.</p>
                  <p><strong>CBSE Pathway to Grade 8:</strong> Concept-focused teaching, STEM-based learning, skill-building labs, activity rooms and a values + discipline + confidence approach.</p>
                  <p><strong>Facilities:</strong> Bright classrooms, soft flooring, CCTV, child-proof spaces, low teacher-student ratio and well-trained teachers.</p>
                  <p><strong>Why Parents Trust Us:</strong> Visible improvement in behaviour and communication, modern safe learning spaces, and a clear CBSE expansion pathway.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure highlight */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Infrastructure & Safety</h2>
            <p className="text-gray-500 mt-2">A safe, well-equipped environment designed for holistic development</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Well-Designed Classrooms', desc: 'Spacious layouts, natural light, smart classrooms and age-appropriate furniture' },
              { title: '21st-Century Laboratories', desc: 'Modern, well-equipped spaces for hands-on exploration and experimentation' },
              { title: 'Olympic-Grade Sports Ground', desc: 'Olympic-standard running track and spaces for field sports and athletic training' },
              { title: 'Kindergarten Play Zone', desc: 'Safe, age-appropriate spaces for motor development and social interaction' },
              { title: 'CCTV Supervision', desc: 'Comprehensive monitoring across classrooms, corridors and entry points' },
              { title: 'Secured Campus', desc: 'Controlled access points, trained security personnel and structured entry protocols' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Leadership</h2>
          <p className="text-gray-600 mt-2">Experienced minds. Humble hearts. Strong vision.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-left shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-green-700 flex items-center justify-center text-white font-bold text-sm">{l.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{l.name}</div>
                  <div className="text-xs text-gray-500">{l.title}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3">Be Part of Our Story</h3>
          <p className="mb-8 text-white/90">Join a community committed to excellence, innovation, and holistic development.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold">Pusapatirega Campus</h4>
              <p className="text-sm mt-1">Opp. Mandal Office Complexes</p>
              <p className="text-sm mt-2 font-bold">Phone: 94928 55523</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold">City Campus — Jammu, Vizianagaram</h4>
              <p className="text-sm mt-1">Padalapeta</p>
              <p className="text-sm mt-2 font-bold">Phone: 91210 09935 · 99497 62678</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9492855523" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg font-bold">
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <a href="https://wa.me/919492855523" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="mailto:oaklandearlyexp@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">Website: oaklandschool.in</p>
        </div>
      </section>
    </div>
  );
}