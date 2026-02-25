import { ArrowRight } from 'lucide-react';
import { Heart, Shield, Users, BookOpen, Sparkles, Calendar,  Star, Clock } from 'lucide-react';


interface PlayschoolHomeProps {
  onNavigate: (page: string) => void;
}

export function PlayschoolHome({ onNavigate }: PlayschoolHomeProps) {
  const programs = [
    {
      title: 'Nursery',
      age: '2-3 years',
      description: 'Introduction to school through play, sensory exploration, and social interaction.',
      color: 'from-pink-400 to-rose-400',
      img: '/playschool/Home7.jpg', // replace with your image
    },
    {
      title: 'LKG',
      age: '3-4 years',
      description: 'Building foundational skills through structured play and creative activities.',
      color: 'from-purple-400 to-pink-400',
      img: '/playschool/Home8.jpg', // replace with your image
    },
    {
      title: 'UKG',
      age: '4-5 years',
      description: 'Preparing for primary school with pre-literacy, numeracy, and social skills.',
      color: 'from-blue-400 to-purple-400',
      img: '/playschool/Home9.jpg', // replace with your image
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

  const dailyRoutine = [
    { time: '8:30 AM', activity: 'Welcome & Free Play' },
    { time: '9:00 AM', activity: 'Circle Time & Rhymes' },
    { time: '10:00 AM', activity: 'Snack Time' },
    { time: '10:30 AM', activity: 'Learning Activities' },
    { time: '11:30 AM', activity: 'Outdoor Play' },
    { time: '12:00 PM', activity: 'Story Time & Dismissal' },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-lime-50">
      {/* HERO */}                                              
       <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white overflow-hidden">
  {/* decorative pattern: behind content */}
  <div
    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmg2djZoNnY2aC02djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"
    aria-hidden="true"
  />

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-28 items-center">
      {/* LEFT: text/content */}
      <div className="z-10">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Oakland Playschool</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
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

      {/* RIGHT: image */}
      <div className="z-10 flex justify-center lg:justify-end">
        <img
          src="/playschool/home1.jpg"
          alt="Children playing at Oakland Playschool"
          className="w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-2xl shadow-lg object-cover h-64 md:h-80 lg:h-96"
        />
      </div>
    </div>
  </div>
</section>


     {/* FEATURES — improved image visibility and layout */}
<section className="py-16 px-4 sm:px-6 lg:px-8 -mt-8">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Oakland Playschool?</h2>
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
          {/* Image section — increased height + full coverage */}
          <div className="h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden">
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Text section */}
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{program.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{program.age}</p>
            <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

            <button
              onClick={() => onNavigate('admissions')}
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
</section>

      {/* DAILY ROUTINE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-3 bg-lime-200 px-4 py-2 rounded-full mb-4">
               <Clock className="w-4 h-4 text-lime-700" />
              <span className="text-sm font-medium text-lime-700">A Day at Playschool</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Daily Routine</h2>
            <p className="text-lg text-gray-600">Structured yet flexible schedule designed for young learners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dailyRoutine.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-900 to-green-700">
                    <span className="text-white text-xs font-bold">{item.time.split(' ')[0]}</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{item.time}</div>
                    <div className="font-semibold text-gray-900">{item.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-400 via-yellow-400 to-orange-300 text-white">
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
