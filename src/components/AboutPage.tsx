import React, { useState } from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Phone, MessageCircle, Mail } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function AboutPage() {
  const { campus } = useCampus();
  const [openPusa, setOpenPusa] = useState(false);
  const [openCity, setOpenCity] = useState(false);

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
    { year: '2017', event: 'Oakland Schools Founded in Pusapatirega' },
    { year: '2019', event: 'Expanded Reach Across Nearby Mandals' },
    { year: '2022', event: 'City Campus (Kindergarten) Launched' },
    { year: '2024', event: 'Over 5000 Alumni Strong (regional reach & impact)' },
  ];

  const leaders = [
    {
      name: 'Dr. Srinivasa Rao Chepa',
      title: 'Correspondent',
      desc: `A visionary educator with over two decades of service. Dr. Srinivasa Rao brings global insight (Doctorate in Leadership from Asbury, USA) and a lifelong commitment to rural upliftment and child-centred education. His guiding belief: "Every child deserves strong foundations and endless horizons."`,
    },
    {
      name: 'Mr. Chepa Ravi',
      title: 'Director & Principal (Pusapatirega Campus)',
      desc: `A mentor of generations, Mr. Ravi has 20+ years of educational leadership. Known as the "Man of Students", he leads with discipline, compassion and deep involvement in school culture. He combines high academic expectations with personal care.`,
    },
    {
      name: 'Ms. Saritha Mandal',
      title: 'Principal (City Campus)',
      desc: `An experienced academic leader and teacher-trainer, Ms. Saritha brings 20+ years of early years and primary leadership. She specialises in curriculum planning, teacher development and building confident classrooms.`,
    },
    {
      name: 'Peter Chepa',
      title: 'Academic Dean',
      desc: `A strategic thinker with international exposure (Asbury University). Peter leads academic systems, teacher training, activity design and the CBSE expansion plan with calm, detail and creativity.`,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Oakland Schools – Bethany Mission Society, Vizianagaram</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Strong Foundations. Endless Horizons.</p>
          <p className="mt-4 max-w-3xl mx-auto text-white/80">
            Oakland Schools began in 2017 in Pusapatirega — every child, regardless of village or background, deserves access to excellent education, strong values, and a hopeful future.
          </p>
        </div>
      </section>

      {/* Story + Under Bethany Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Oakland Schools began in 2017 in Pusapatirega, rooted in a simple but powerful belief — that every child, regardless of their village or background, deserves access to excellent education, strong values, and a hopeful future.
              </p>

              <p>
                What started with a small classroom and a handful of children has grown into one of the most trusted and respected educational brands across four mandals: Pusapatirega • Bhogapuram • Denkada • Ranasthalam.
              </p>

              <p>
                Today, Oakland stands as a symbol of quality, character, and transformation — shaping the lives of children from more than 30+ villages. At Oakland, we live by our guiding promise: <strong>Strong Foundations. Endless Horizons.</strong>
              </p>

              <h3 className="text-xl font-semibold mt-6">Under Bethany Mission Welfare Society</h3>
              <p>
                Oakland Schools operate under the Bethany Mission Welfare Society, a registered non-profit committed to uplifting communities through education, children’s welfare, and transformative service. The same heart of service, excellence, and values flows into every Oakland classroom.
              </p>

              <h3 className="text-xl font-semibold mt-6">What Oakland Believes In</h3>
              <p>
                Education is more than academics — it is character-building, confidence-shaping, and future-preparing. We focus on strong foundational academics, habits & discipline, communication & confidence, modern activity-based learning, 21st-century skills, and a nurturing, safe environment.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center">
              <img src="/about2.jpg" alt="Oakland Schools Campus" className="rounded-2xl shadow-lg max-h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-green-700 text-white mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p className="text-gray-700">To nurture confident, disciplined, and compassionate learners who are rooted in strong values, equipped with modern skills, and ready to make a meaningful impact in their communities and the world.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-400 text-white mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mission & Motto</h3>
            <p className="text-gray-700 space-y-3">
              <strong>Mission:</strong> To provide high-quality, English-medium education that is concept-driven, value-based, and future-focused — serving both rural and urban families with safe, joyful, and academically strong schools.
            </p>
            <p className="mt-3"><strong>Motto:</strong> Strong Foundations. Endless Horizons.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-600 mt-2">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-green-700 rounded-2xl flex items-center justify-center shadow">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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

      {/* Campuses overview with Know More toggles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Campuses</h2>
            <p className="text-gray-600 mt-2">From village classrooms to modern city pathways — Oakland builds children who learn well, behave well, and grow well.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pusapatirega Summary */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-green-50 shadow">
              <h3 className="text-2xl font-bold mb-3">Pusapatirega Campus (State Board)</h3>
              <p className="text-gray-700 mb-4">Our Legacy. Our Heart. Our Foundation. The Pusapatirega branch is where Oakland began. Today it supports 1,600+ students, with more than 200 children receiving free education each year.</p>
              <button
                onClick={() => setOpenPusa(!openPusa)}
                aria-expanded={openPusa}
                className="inline-flex items-center gap-3 px-5 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                {openPusa ? 'Hide Details' : 'Know More'}
              </button>

              <div className={`mt-6 overflow-hidden transition-all duration-500 ${openPusa ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-4 text-gray-700">
                  <h4 className="font-semibold">Where Our Story Began</h4>
                  <p>
                    The Pusapatirega Branch is the birthplace of Oakland Schools — the heart that shaped our mission and the foundation that built our legacy. Started in 2017 with a simple dream, this campus has grown into one of the largest and most respected schools across four mandals.
                  </p>

                  <h4 className="font-semibold">Education With Heart</h4>
                  <p>More than 200 children receive free education here every year — quietly, consistently, without any spotlight. If a child needs education, we give them the best we can.</p>

                  <h4 className="font-semibold">Academic Strength & Results</h4>
                  <p>
                    Strong State Board academic performance, a culture of discipline and respect. Recent SSC top performer: <strong>592/600</strong> — a testament to strong academics and teacher commitment.
                  </p>

                  <h4 className="font-semibold">Abacus, Vedic Maths & Skill Development</h4>
                  <p>Programs like Abacus and Vedic Maths boost mental speed, memory and problem-solving — giving students a competitive academic edge.</p>

                  <h4 className="font-semibold">Campus Facilities & Activities</h4>
                  <p>
                    Big playground, spacious classrooms, CCTV-monitored campus, transport to far villages, sports, creative arts, speech competitions, cultural events and more. A safe and disciplined environment designed for holistic development.
                  </p>

                  <h4 className="font-semibold">Community Impact</h4>
                  <p>
                    200+ children receive free education each year. Transport reaches deep rural villages. Parents regularly notice better behaviour, communication, discipline and academic growth.
                  </p>

                  <p className="font-semibold">Strong Foundations, Endless Horizons — Pusapatirega continues to set the gold standard for rural and mandal-based schools.</p>
                </div>
              </div>
            </div>

            {/* City Campus Summary */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-lime-50 to-yellow-50 shadow">
              <h3 className="text-2xl font-bold mb-3">City Campus (CBSE Pathway)</h3>
              <p className="text-gray-700 mb-4">A new, modern, upgraded version of Oakland. The City Campus (Nursery–Grade 8) brings a research-based, skill-first model of education — small in size, mighty in vision.</p>

              <button
                onClick={() => setOpenCity(!openCity)}
                aria-expanded={openCity}
                className="inline-flex items-center gap-3 px-5 py-3 bg-lime-400 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                {openCity ? 'Hide Details' : 'Know More'}
              </button>

              <div className={`mt-6 overflow-hidden transition-all duration-500 ${openCity ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-4 text-gray-700">
                  <h4 className="font-semibold">The New Face of Oakland</h4>
                  <p>
                    The City Campus is a modern, future-ready kindergarten environment built on Playway, Montessori and CBSE Early Childhood principles. It currently offers Nursery–UKG and will expand to Grade 8 next academic year.
                  </p>

                  <h4 className="font-semibold">Early Years Program (Nursery–UKG)</h4>
                  <p>
                    Play-based & activity-based learning, phonics-based reading, early numeracy, sensory exploration, manners, social confidence and communication skills. Children learn through touch, talk, move, create and explore.
                  </p>

                  <h4 className="font-semibold">Expanding to Grade 8 — CBSE Pathway</h4>
                  <p>
                    From next academic year the City Campus will offer a CBSE-aligned curriculum with concept-focused teaching, STEM-based learning, skill-building labs, activity rooms and a values + discipline + confidence approach.
                  </p>

                  <h4 className="font-semibold">Skill-Based Learning & Facilities</h4>
                  <p>
                    Focus on communication, manners, thinking skills, creativity, and real-life readiness. Bright classrooms, soft flooring, CCTV, child-proof spaces, low teacher-student ratio and well-trained teachers.
                  </p>

                  <p className="font-semibold">Why Parents Trust the City Campus: Visible improvement in behaviour and communication, modern and safe learning spaces, activity-based teaching and a clear CBSE expansion pathway.</p>
                </div>
              </div>
            </div>
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
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-blue-900 font-bold">{l.name.split(' ').slice(0,2).map(n=>n[0]).join('')}</div>
                <div>
                  <div className="font-semibold">{l.name}</div>
                  <div className="text-sm text-gray-600">{l.title}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Educational Philosophy</h3>
          <div className="text-gray-700 space-y-4">
            <p>
              We see education as a partnership between school, home and community. Children learn best when they feel safe, loved and respected. Academic success must go hand-in-hand with values, discipline and character.
            </p>

            <p>
              How We Teach: <strong>Concept-Focused</strong> (understand why, not just what), <strong>Activity-Based</strong> (Number Fun, Color Days, Wonderfair), <strong>Values-Driven</strong>, <strong>Differentiated</strong> support and <strong>Bilingual Sensitivity</strong> while building strong English fluency.
            </p>

            <p>
              Learning should be active, practical and joyful — not only exam-focused. Every child, whether from a city or a village, deserves global exposure with local grounding.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3">Be Part of Our Story</h3>
          <p className="mb-6 text-white/90">Join a community committed to excellence, innovation, and holistic development.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold">Pusapatirega Campus</h4>
              <p className="text-sm mt-1">Opp. Mandal Office Complexes</p>
              <p className="text-sm mt-2 font-bold">Phone: 94928 55523</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold">City Campus</h4>
              <p className="text-sm mt-1">Padalapeta</p>
              <p className="text-sm mt-2 font-bold">Phone: 91210 09935</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9492855523" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg font-bold">
              <Phone className="w-4 h-4" /> Call Us
            </a>

            <a href="https://wa.me/919492855523" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold">
              <MessageCircle className="w-4 h-4" /> Chat with Oakland Office
            </a>

            <a href="mailto:oaklandearlyexp@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold">
              <Mail className="w-4 h-4" /> Mail Us
            </a>
          </div>
          <p className="mt-3 text-sm text-white/80">Call us, message on WhatsApp, or visit our campus to experience Oakland Schools in person.</p>
        </div>
      </section>

      
    </div>
  );
}
