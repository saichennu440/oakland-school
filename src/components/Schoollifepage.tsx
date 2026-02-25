import { useCampus } from '../contexts/CampusContext';

export function SchoolLifePage() {
  const { campus } = useCampus();
  const gradientClass = 'from-blue-900 to-green-700';

  const studioActivities = [
    'Content creation and digital storytelling',
    'Student-led podcasts and audio programs',
    'Debates and structured discussions',
    'Presentations, interviews, and collaborative projects',
  ];

  const fieldTripBenefits = [
    'Gain real-world exposure aligned with curriculum themes',
    'Develop curiosity, observation skills, and contextual understanding',
    'Learn responsibility, discipline, and social awareness',
    'Engage in meaningful learning beyond the classroom setting',
  ];

  const fieldTrips = [
    { name: 'Zoo Visit',              img: '/gallery/fieldtrip-zoo.jpg' },
    { name: 'Local Farm Visit',       img: '/gallery/fieldtrip-farm.jpg' },
    { name: 'Dental Hospital Visit',  img: '/gallery/fieldtrip-dental.jpg' },
    { name: 'Fire Station Visit',     img: '/gallery/fieldtrip-fire.jpg' },
    { name: 'Police Station Visit',   img: '/gallery/fieldtrip-police.jpg' },
    { name: 'Science Centre',         img: '/gallery/fieldtrip-science.jpg' },
  ];

  const studioImages = [
    { label: 'Podcasts',             img: '/gallery/studio-podcast.jpg' },
    { label: 'Digital Storytelling', img: '/gallery/studio-digital.jpg' },
    { label: 'Debates',              img: '/gallery/studio-debate.jpg' },
    { label: 'Presentations',        img: '/gallery/studio-presentation.jpg' },
  ];

  const sportsValues = [
    'Teamwork, cooperation, and sportsmanship',
    'Leadership, responsibility, and respect for rules',
    'Perseverance, self-discipline, and confidence',
    'Healthy competitive spirit and resilience',
  ];

  const cocurricular = [
    { title: 'Visual Arts & Craft',   img: '/gallery/cocurr-arts.jpg',       description: 'Creative programs encouraging imagination, expression, and emotional development' },
    { title: 'Music & Movement',      img: '/gallery/cocurr-music.jpg',      description: 'Music, rhythm, and movement activities building coordination and creative confidence' },
    { title: 'Cultural Performances', img: '/gallery/cocurr-cultural.jpg',   description: 'Cultural showcases and creative performances nurturing talent and stage presence' },
    { title: 'National Celebrations', img: '/gallery/cocurr-national.jpg',   description: 'Independence Day, Republic Day, Diwali, Christmas, Pongal and more — fostering unity and respect' },
    { title: 'Life Skills Programs',  img: '/gallery/cocurr-lifeskills.jpg', description: 'Responsibility, time management, empathy, teamwork and social awareness activities' },
    { title: 'Community Engagement',  img: '/gallery/cocurr-community.jpg',  description: 'Activities that connect students to broader society and nurture citizenship values' },
  ];

  const yearHighlights = [
    { name: 'First Day of Classes',       img: '/gallery/event-firstday.jpg' },
    { name: 'Color Days',                 img: '/gallery/event-colorday.jpg' },
    { name: 'Independence Day',           img: '/gallery/event-independence.jpg' },
    { name: 'Diwali',                     img: '/gallery/event-diwali.jpg' },
    { name: "Children's Day WonderFair",  img: '/gallery/event-wonderfair.jpg' },
    { name: 'Christmas',                  img: '/gallery/event-christmas.jpg' },
    { name: 'Pongal',                     img: '/gallery/event-pongal.jpg' },
    { name: 'Republic Day',               img: '/gallery/event-republic.jpg' },
    { name: 'Parent Orientation',         img: '/gallery/event-parent-orientation.jpg' },
    { name: 'Parent-Teacher Interaction', img: '/gallery/event-ptm.jpg' },
    { name: 'Annual Sports Meet',         img: '/gallery/event-sports.jpg' },
    { name: 'Graduation Ceremony',        img: '/gallery/event-graduation.jpg' },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">Beyond the Classroom</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Life at Oakland</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            At Oakland Schools, learning extends far beyond textbooks. Students explore, express, compete, create, and grow every single day.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education That Goes Further</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Oakland's approach ensures education is not limited to academic achievement alone. Every program from the studio to the sports ground nurtures <strong>communication, creativity, collaboration, and confidence</strong> — the skills that shape well-rounded, future-ready individuals.
          </p>
        </div>
      </section>

      {/* Oakland Studio */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                ON AIR — The Oakland Studio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Communication, Media & Expression</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Oakland Studio is a dedicated space created to nurture student voice, creativity, and confident expression. It reflects Oakland's commitment to developing skills that extend beyond academic performance and into real-world readiness.
              </p>
              <ul className="space-y-3 mb-8">
                {studioActivities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Public speaking', 'Critical thinking', 'Creative confidence', 'Collaboration', 'Leadership'].map((s, i) => (
                  <span key={i} className="bg-white/10 text-xs rounded-full px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>

            {/* 2x2 image grid replacing icon cards */}
            <div className="grid grid-cols-2 gap-3">
              {studioImages.map((item, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-semibold text-white text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Field Trips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Educational Field Trips & Experiential Exposure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Field trips at Oakland are thoughtfully planned to extend classroom learning into real-world contexts. All trips are age-appropriate, well-supervised, and designed with clear educational objectives.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <h3 className="font-bold text-gray-900 mb-5 text-lg">What Students Gain</h3>
              <ul className="space-y-4">
                {fieldTripBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-900 to-green-700 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image cards replacing emoji */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fieldTrips.map((trip, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-sm">
                  <img
                    src={trip.img}
                    alt={trip.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">{trip.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Sports, Physical Development & Wellbeing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sports at Oakland are structured pathways to build discipline, resilience, teamwork, and lifelong healthy habits — not just recreation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Hero sports image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg">
              <img
                src="/gallery/sports-ground.jpg"
                alt="Oakland Sports Ground"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">Olympic-Grade Sports Ground</p>
                <p className="text-sm text-white/80 mt-1">Running track · Field sports · Athletic training</p>
              </div>
            </div>

            {/* 4-image sports grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { img: '/gallery/sports-running.jpg',  label: 'Athletics' },
                { img: '/gallery/sports-football.jpg', label: 'Team Sports' },
                { img: '/gallery/sports-pe.jpg',       label: 'Physical Education' },
                { img: '/gallery/sports-play.jpg',     label: 'Playground' },
              ].map((item, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group shadow-sm">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sports values */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-gray-900 mb-5 text-lg">Character Built Through Sport</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sportsValues.map((v, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-900 to-green-700 text-white flex items-center justify-center text-xs font-bold mb-3">✓</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular — image-topped cards replacing icon cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Co-Curricular & Extra-Curricular Development</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Programs that complement academic learning by nurturing creativity, communication, cultural awareness, and life skills.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocurricular.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col">
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Highlights — image grid replacing emoji tiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Academic Year Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A year full of celebrations, learning adventures, and memories. Here's what our students look forward to each year.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {yearHighlights.map((event, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group shadow-sm">
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-semibold leading-snug">{event.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className={`py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold italic mb-4">"Children learn best where they feel safe, valued, and encouraged."</p>
          <p className="text-white/70 text-sm">— Oakland Schools Philosophy</p>
          <p className="mt-6 text-white/80 leading-relaxed">All enrichment activities are carefully structured and guided by educators to ensure balance, age-appropriateness, and alignment with Oakland's academic philosophy.</p>
        </div>
      </section>

    </div>
  );
}