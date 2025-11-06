import { Calendar, Clock, MapPin } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function EventsPage() {
  const { campus } = useCampus();

  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2024-12-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Sports Ground',
      description: 'Join us for a day of athletic competition, team spirit, and celebration.',
      campus: 'both',
      category: 'sports',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      date: '2024-12-10',
      time: '2:00 PM - 5:00 PM',
      location: 'Respective Classrooms',
      description: 'Discuss your child\'s progress and development with teachers.',
      campus: 'both',
      category: 'academic',
    },
    {
      id: 3,
      title: 'Christmas Celebration',
      date: '2024-12-20',
      time: '10:00 AM - 12:00 PM',
      location: 'School Auditorium',
      description: 'Festive celebrations with performances, games, and Santa visit.',
      campus: 'playschool',
      category: 'celebration',
    },
    {
      id: 4,
      title: 'Science Exhibition',
      date: '2025-01-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Science Labs',
      description: 'Students showcase innovative science projects and experiments.',
      campus: 'regular',
      category: 'academic',
    },
    {
      id: 5,
      title: 'Art & Craft Workshop',
      date: '2024-12-18',
      time: '11:00 AM - 1:00 PM',
      location: 'Art Room',
      description: 'Creative workshop for young artists to explore their imagination.',
      campus: 'playschool',
      category: 'workshop',
    },
    {
      id: 6,
      title: 'Annual Function 2024',
      date: '2025-02-10',
      time: '5:00 PM - 8:00 PM',
      location: 'School Auditorium',
      description: 'Grand annual day celebration with cultural performances and awards.',
      campus: 'both',
      category: 'celebration',
    },
  ];

  const filteredEvents = events.filter(
    (event) => event.campus === 'both' || event.campus === campus
  );

  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      sports: 'from-orange-400 to-red-400',
      academic: 'from-blue-400 to-indigo-400',
      celebration: 'from-pink-400 to-purple-400',
      workshop: 'from-green-400 to-teal-400',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="bg-white">
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Calendar</h1>
          <p className="text-xl text-white/90">
            Stay updated with upcoming events and activities
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendars for these exciting events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(event.category)}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full capitalize">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
              <p className="text-gray-400">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>

      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-50 to-yellow-50' : 'from-blue-50 to-green-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us on Instagram for daily updates, event photos, and school activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/oakexp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg transition-all"
            >
              @oakexp (Playschool)
            </a>
            <a
              href="https://www.instagram.com/oaklschool"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all"
            >
              @oaklschool (Regular School)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
