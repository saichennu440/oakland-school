import { ArrowRight, GraduationCap } from 'lucide-react';
import { Heart, Shield, Users, BookOpen, Sparkles, Calendar,  Star, Clock } from 'lucide-react';
import {  X } from 'lucide-react';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PlayschoolHomeProps {
  onNavigate: (page: string) => void;
}

interface Program {
  title: string;
  age: string;
  img: string;
  description: string;
  modalContent?: {
    intro: string;
    skillsLabel?: string;
    skills: (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined)[];
    closing?: string;
  };
}

export function PlayschoolHome({ onNavigate }: PlayschoolHomeProps) {
const [activeProgram, setActiveProgram] = useState<Program | null>(null);


  const programs = [
  {
    title: "Early Explorers",
    age: "Nursery – UKG",
    img: "/playschool/Home7.jpg", // replace with your file
    description: "A joyful blend of Montessori, Playway, and Activity-Based learning...",
    modalContent: {
      intro: "The Early Explorers Program nurtures curiosity and builds the essential developmental foundations during a child's most formative years. Through a joyful blend of Montessori, Playway, and Activity-Based learning, children begin their journey of discovery in a safe, engaging, and stimulating environment.",
      skillsLabel: "Children will develop:",
      skills: [
        "Early Literacy Skills – phonemic awareness, letter recognition, storytelling, vocabulary development, and early reading readiness.",
        "Foundational Numeracy – number sense, counting, shapes, patterns, and basic mathematical thinking.",
        "Communication & Language – confident speaking, listening skills, expression through stories, songs, and role play.",
        "Motor Development – fine motor skills through art, tracing, puzzles and gross motor development through physical play.",
        "Social & Emotional Skills – cooperation, empathy, sharing, and building friendships.",
        "Creativity & Imagination – music, art, dramatic play, and hands-on exploration.",
        "Curiosity & Discovery – nature exploration, observation, and inquiry-based activities that encourage children to ask questions about the world.",
      ],
      closing: "The goal of Early Explorers is to help every child grow into a happy, confident learner ready to step into formal schooling.",
    },
  },
  {
    title: "Foundations",
    age: "Primary School – Grades 1 to 5",
    img: "/playschool/Home8.jpg",
    description: "Strengthening academic fundamentals while cultivating curiosity and independent thinking...",
    modalContent: {
      intro: "The Foundations Program strengthens academic fundamentals while cultivating curiosity, creativity, and independent thinking. Students begin to develop structured learning habits and deeper understanding across subjects.",
      skillsLabel: "Students will develop:",
      skills: [
        "Strong Literacy & Language Skills – reading comprehension, structured writing, grammar, vocabulary expansion, and public speaking.",
        "Mathematical Thinking – conceptual understanding of numbers, problem solving, logical reasoning, and practical application of mathematics.",
        "Scientific Curiosity – observation, experimentation, and understanding basic scientific principles through hands-on learning.",
        "Communication & Presentation Skills – expressing ideas clearly through speaking, storytelling, discussions, and presentations.",
        "Creative Expression – art, music, theatre, and creative projects that encourage imagination and innovation.",
        "Digital & Media Literacy – basic technology skills and responsible digital engagement.",
        "Character & Life Skills – responsibility, teamwork, discipline, and respect for others.",
        "Exploratory Learning – projects, field visits, and experiential learning that connect classroom concepts to real life.",
      ],
      closing: "By the end of this stage, students build strong academic foundations and the confidence to think independently.",
    },
  },
  {
    title: "Horizons",
    age: "Middle School – Grades 6 to 8",
    img: "/playschool/Home9.jpg",
    description: "Preparing students for advanced academic pathways with critical thinking and leadership...",
    modalContent: {
      intro: "The Horizons Program prepares students for advanced academic pathways by developing critical thinking, analytical ability, and leadership skills. Students begin to engage with subjects in greater depth while exploring their interests and future aspirations.",
      skillsLabel: "Students will develop:",
      skills: [
        "Advanced Academic Skills – deeper understanding in mathematics, sciences, languages, and social sciences.",
        "Critical Thinking & Analysis – evaluating ideas, forming arguments, and solving complex problems.",
        "Research & Inquiry Skills – independent projects, investigation, and structured research practices.",
        "Communication & Leadership – debates, presentations, collaborative learning, and leadership opportunities.",
        "Competitive & Enrichment Exposure – preparation for Olympiads, academic competitions, and advanced learning programs.",
        "Technology & Innovation – digital tools, media literacy, and exposure to emerging technologies.",
        "Global Awareness – understanding cultures, world issues, and responsible citizenship.",
        "Personal Growth & Responsibility – developing discipline, confidence, and self-management skills.",
      ],
      closing: "The Horizons Program empowers students to expand their perspectives, pursue excellence, and prepare for the academic and leadership challenges ahead.",
    },
  },
];

  const features = [
    {
      img: '/playschool/home3.jpg', // replace with your file
      title: 'Loving Environment',
      description: 'Warm, nurturing spaces designed for young learners',
    },
    {
      img: '/playschool/home4.jpg',
      title: 'Safe & Secure',
      description: 'CCTV monitoring, trained staff, and child-safe facilities',
    },
    {
      img: '/playschool/home5.jpg',
      title: 'Low Ratio',
      description: '1:8 teacher-child ratio for personalized attention',
    },
    {
      img: '/playschool/home6.jpg',
      title: 'Play-Based Learning',
      description: 'Learning through exploration, creativity, and fun',
    },
  ];

  const testimonials = [
    {
      parent: 'Mrs. Sharma',
      child: 'Aarav, UKG',
      text: 'My son has blossomed at Oakland Playschool. The teachers are incredibly caring and the environment is perfect for young children.',
      rating: 5,
      avatar: '/images/testimonials/mrs-sharma.jpg', // replace
    },
    {
      parent: 'Mr. & Mrs. Patel',
      child: 'Diya, LKG',
      text: 'The transition to school was so smooth thanks to the wonderful staff. Diya loves going to school every day!',
      rating: 5,
      avatar: '/images/testimonials/patel.jpg', // replace
    },
  ];

  const [activeStage, setActiveStage] = useState<number>(0);

const stages = [
    {
      label: 'Nursery',
      age: 'Age 3+',
      color: 'from-blue-800 to-blue-800',
      lightBg: 'bg-blue-50',
      accent: 'text-blue-600',
      border: 'border-blue-800',
      dot: 'bg-blue-800',
      icon: '🌱',
      termGoals: [
        {
          term: 'Term 1',
          title: 'Hello World',
          milestones: [
            'Settles into classroom routine independently',
            'Recognises own name in print',
            'Counts objects up to 5',
            'Uses 2–3 word sentences confidently',
            'Holds a crayon with a tripod grip',
          ],
        },
        {
          term: 'Term 2',
          title: 'Growing Curious',
          milestones: [
            'Identifies letters A–M by sight',
            'Understands concepts of big/small, more/less',
            'Participates in group circle time',
            'Completes simple 4-piece puzzles',
            'Names and sorts basic shapes and colours',
          ],
        },
        {
          term: 'Term 3',
          title: 'Ready to Shine',
          milestones: [
            'Recites rhymes and short poems from memory',
            'Counts and writes numbers 1–10',
            'Expresses feelings using words',
            'Shows early phonemic awareness (rhyming)',
            'Draws recognisable people and objects',
          ],
        },
      ],
    },
    {
      label: 'LKG',
      age: 'Age 4+',
      color: 'from-amber-500 to-yellow-400',
      lightBg: 'bg-amber-50',
      accent: 'text-amber-600',
      border: 'border-amber-200',
      dot: 'bg-amber-400',
      icon: '🌿',
      termGoals: [
        {
          term: 'Term 1',
          title: 'Building Foundations',
          milestones: [
            'Recognises and writes all 26 letters (upper & lower)',
            'Reads simple 3-letter CVC words',
            'Counts forwards and backwards to 20',
            'Follows 2-step instructions independently',
            'Participates in show-and-tell with confidence',
          ],
        },
        {
          term: 'Term 2',
          title: 'Connecting Ideas',
          milestones: [
            'Blends consonants to form simple words',
            'Understands addition as "putting together"',
            'Identifies living vs non-living things',
            'Creates patterns using colours and shapes',
            'Writes first name legibly on unruled paper',
          ],
        },
        {
          term: 'Term 3',
          title: 'Growing Independent',
          milestones: [
            'Reads aloud simple sentences with support',
            'Solves basic addition problems up to 10',
            'Describes daily routine using sequence words',
            'Demonstrates sharing and turn-taking consistently',
            'Creates a simple story with beginning and end',
          ],
        },
      ],
    },
    {
      label: 'UKG',
      age: 'Age 5+',
      color: 'from-emerald-600 to-green-500',
      lightBg: 'bg-emerald-50',
      accent: 'text-emerald-700',
      border: 'border-emerald-200',
      dot: 'bg-emerald-500',
      icon: '🌳',
      termGoals: [
        {
          term: 'Term 1',
          title: 'Confident Learners',
          milestones: [
            'Reads simple books independently (Level 1)',
            'Writes 2–3 sentences on a given topic',
            'Adds and subtracts numbers within 20',
            'Identifies days, months, and seasons',
            'Uses scissors and art tools with precision',
          ],
        },
        {
          term: 'Term 2',
          title: 'Thinking Deeper',
          milestones: [
            'Reads with expression and basic punctuation awareness',
            'Solves word problems using drawings or objects',
            'Understands concepts of time (yesterday/today/tomorrow)',
            'Makes predictions during storytelling',
            'Takes leadership roles in group activities',
          ],
        },
        {
          term: 'Term 3',
          title: 'School Ready',
          milestones: [
            'Reads and comprehends Level 2 readers',
            'Writes a short paragraph with punctuation',
            'Counts, compares, and orders numbers up to 100',
            'Plans and completes a mini project independently',
            'Transitions confidently — ready for Grade 1',
          ],
        },
      ],
    },
  ];

  const active = stages[activeStage];  



  const [activeSlide, setActiveSlide] = useState(0);

useEffect(() => {
  const timer = setInterval(() => setActiveSlide(s => (s + 1) % 3), 4000);
  return () => clearInterval(timer);
}, []);
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-lime-50">
{/* HERO - Carousel */}
<section className="relative h-[600px] md:h-[680px] lg:h-[720px] overflow-hidden text-white">
  {/* Slides */}
  {[
    '/hero/playschl1.jpg',
    '/hero/playschl2.jpg',
    '/hero/playschl3.jpg',
  ].map((src, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover object-center" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
    </div>
  ))}
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
              <button onClick={() => onNavigate('contact')} className="text-white/90 bg-black px-3 py-2 rounded-md hover:bg-white/50">
                Contact
              </button>
            </div>
          </nav>
  {/* Content — sits above slides */}
  <div className="relative z-20 h-full flex items-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto w-full">
      <div className="max-w-2xl">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Oakland Playschool</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Where Every Day is a New Adventure
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
          Nurturing curious minds through play, exploration, and love. Give your child the perfect start.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('admissions')}
            className="px-8 py-4 bg-white text-lime-600 rounded-full font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Book a Playdate</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Dot indicators */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {[0, 1, 2].map(i => (
      <button
        key={i}
        onClick={() => setActiveSlide(i)}
        className={`rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>

  {/* Prev / Next arrows */}
  <button
    onClick={() => setActiveSlide(s => (s + 2) % 3)}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-5 h-5 text-white" />
  </button>
  <button
    onClick={() => setActiveSlide(s => (s + 1) % 3)}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition"
    aria-label="Next slide"
  >
    <ChevronRight className="w-5 h-5 text-white" />
  </button>
</section>


     {/* FEATURES — improved image visibility and layout */}
<section className="py-16 px-4 sm:px-6 lg:px-8 -mt-8">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Oakland ?</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">A caring community where your child thrives, learns, and grows.</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col"
        >
          {/* Full-bleed image at top */}
          <div className="w-full aspect-[4/3]">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover block"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text below */}
          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">{feature.title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* PROGRAMS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Programs</h2>
            <p className="text-lg text-gray-600">Age-appropriate learning experiences for every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 border bg-white"
              >
                <div className="h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{program.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{program.age}</p>
                  <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

                  <button
                    onClick={() => setActiveProgram(program)}
                    className="inline-flex items-center gap-2 text-lime-600 font-semibold hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Detail Modal */}
        {activeProgram && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveProgram(null)}
          >
            <div
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-3xl relative">
                <img
                  src={activeProgram.img}
                  alt={activeProgram.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white">{activeProgram.title}</h3>
                  <p className="text-sm text-white/80">{activeProgram.age}</p>
                </div>
                <button
                  onClick={() => setActiveProgram(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">{activeProgram.modalContent?.intro}</p>

                {activeProgram.modalContent?.skills && (
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {activeProgram.modalContent.skillsLabel ?? "Students will develop:"}
                    </h4>
                    <ul className="space-y-2">
                      {activeProgram.modalContent.skills.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, idx: Key | null | undefined) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1 w-2 h-2 rounded-full bg-lime-500 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProgram.modalContent?.closing && (
                  <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-lime-400 pl-4">
                    {activeProgram.modalContent.closing}
                  </p>
                )}

                <button
                  onClick={() => { setActiveProgram(null); onNavigate('admissions'); }}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-2xl transition"
                >
                  Apply for Admissions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mailstone Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            Learning Milestones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Your Child Will Achieve</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Clear, meaningful goals for every term — so you always know how your child is growing.
          </p>
        </div>

        {/* Stage tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {stages.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 ${
                activeStage === i
                  ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-lg scale-105`
                  : `bg-white text-gray-600 border-gray-200 hover:border-gray-300`
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
              <span className={`text-xs font-normal ${activeStage === i ? 'text-white/80' : 'text-gray-400'}`}>{s.age}</span>
            </button>
          ))}
        </div>

        {/* Term cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {active.termGoals.map((term, ti) => (
            <div
              key={ti}
              className={`rounded-2xl border ${active.border} ${active.lightBg} p-6 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${active.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {ti + 1}
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${active.accent}`}>{term.term}</p>
                  <p className="text-base font-bold text-gray-900">{term.title}</p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {term.milestones.map((m, mi) => (
                  <li key={mi} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${active.dot}`} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Milestones are reviewed each term through observation, activities, and teacher assessments. Every child progresses at their own pace.
        </p>
      </div>
    </section>

      {/* TESTIMONIALS */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by families across the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>

                <div className="border-t border-lime-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.parent}</div>
                  <div className="text-sm text-gray-600">Parent of {testimonial.child}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Give Your Child the Best Start?</h2>
          <p className="text-lg mb-8 text-white/95">Schedule a visit to see our campus and meet our caring teachers</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admissions')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-lime-600 rounded-full font-semibold shadow-md hover:shadow-2xl transition transform hover:-translate-y-0.5"
            >
           <Calendar className="w-5 h-5" />
              <span>Book a Campus Visit</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOLLOW */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Follow Our Journey</h3>
          <p className="text-gray-400 mb-6">See what's happening at Oakland Playschool</p>

          <a
            href="https://www.instagram.com/oakexp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <span>@oakexp on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
