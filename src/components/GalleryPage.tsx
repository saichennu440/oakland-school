import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function GalleryPage() {
  const { campus } = useCampus();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'academics', 'sports', 'events', 'facilities', 'activities'];

  const galleryImages = [
    {
      id: 1,
      url: '/playschool/Home9.jpg',
      title: 'Classroom Learning',
      category: 'academics',
      campus: 'both',
    },
    {
      id: 2,
      url: '/playschool/home2.jpg',
      title: 'Creative Activities',
      category: 'activities',
      campus: 'playschool',
    },
    {
      id: 3,
      url: '/playschool/home6.jpg',
      title: 'Science Lab',
      category: 'facilities',
      campus: 'regular',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/8613342/pexels-photo-8613342.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Day',
      category: 'sports',
      campus: 'both',
    },
    {
      id: 5,
      url: '/playschool/Home7.jpg',
      title: 'Annual Function',
      category: 'events',
      campus: 'both',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/8613098/pexels-photo-8613098.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Library',
      category: 'facilities',
      campus: 'regular',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Outdoor Play',
      category: 'activities',
      campus: 'playschool',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Art Class',
      category: 'activities',
      campus: 'both',
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/8613346/pexels-photo-8613346.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Computer Lab',
      category: 'facilities',
      campus: 'regular',
    },
  ];

  const filteredImages = galleryImages.filter((img) => {
    const categoryMatch = activeCategory === 'all' || img.category === activeCategory;
    const campusMatch = img.campus === 'both' || img.campus === campus;
    return categoryMatch && campusMatch;
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="bg-white">
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/90">
            Explore moments that make Oakland Schools special
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? campus === 'playschool'
                      ? 'bg-gradient-to-r from-lime-400 to-yellow-400 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-900 to-green-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {selectedImage < filteredImages.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          <div className="max-w-5xl w-full">
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300 capitalize">
                {filteredImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
