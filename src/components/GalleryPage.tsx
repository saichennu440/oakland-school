import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';

export function GalleryPage() {
  const { campus } = useCampus();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    // Co-curricular
    { id: 1,  url: '/gallery/cocurr-arts.jpg',         title: 'Arts & Crafts' },
    { id: 2,  url: '/gallery/cocurr-community.jpg',    title: 'Community Activities' },
    { id: 3,  url: '/gallery/cocurr-cultural.jpg',     title: 'Cultural Programs' },
    { id: 4,  url: '/gallery/cocurr-lifeskills.jpg',   title: 'Life Skills' },
    { id: 5,  url: '/gallery/cocurr-music.jpg',        title: 'Music' },
    { id: 6,  url: '/gallery/cocurr-national.jpg',     title: 'National Programs' },
    // Events
    { id: 7,  url: '/gallery/event-christmas.jpg',           title: 'Christmas Celebration' },
    { id: 8,  url: '/gallery/event-colorday.jpg',            title: 'Colour Day' },
    { id: 9,  url: '/gallery/event-diwali.jpg',              title: 'Diwali Celebration' },
    { id: 10, url: '/gallery/event-firstday.jpg',            title: 'First Day of School' },
    { id: 11, url: '/gallery/event-graduation.jpg',          title: 'Graduation Ceremony' },
    { id: 12, url: '/gallery/event-independence.jpg',        title: 'Independence Day' },
    { id: 13, url: '/gallery/event-parent-orientation.jpg',  title: 'Parent Orientation' },
    { id: 14, url: '/gallery/event-pongal.jpg',              title: 'Pongal Celebration' },
    { id: 15, url: '/gallery/event-ptm.jpg',                 title: 'Parent-Teacher Meeting' },
    { id: 16, url: '/gallery/event-republic.jpg',            title: 'Republic Day' },
    { id: 17, url: '/gallery/event-sports.jpg',              title: 'Sports Day' },
    { id: 18, url: '/gallery/event-wonderfair.jpg',          title: 'Wonder Fair' },
    // Field Trips
    { id: 19, url: '/gallery/fieldtrip-dental.jpg',   title: 'Dental Awareness Visit' },
    { id: 20, url: '/gallery/fieldtrip-farm.jpg',     title: 'Farm Visit' },
    { id: 21, url: '/gallery/fieldtrip-fire.jpg',     title: 'Fire Station Visit' },
    { id: 22, url: '/gallery/fieldtrip-police.jpg',   title: 'Police Station Visit' },
    { id: 23, url: '/gallery/fieldtrip-science.jpg',  title: 'Science Museum Trip' },
    { id: 24, url: '/gallery/fieldtrip-zoo.jpg',      title: 'Zoo Trip' },
    // Sports
    { id: 25, url: '/gallery/sports-football.jpg',  title: 'Football' },
    { id: 26, url: '/gallery/sports-ground.jpg',    title: 'Sports Ground' },
    { id: 27, url: '/gallery/sports-pe.jpg',        title: 'Physical Education' },
    { id: 28, url: '/gallery/sports-play.jpg',      title: 'Playtime' },
    { id: 29, url: '/gallery/sports-running.jpg',   title: 'Running & Athletics' },
    // Studio
    { id: 30, url: '/gallery/studio-debate.jpg',        title: 'Debate Club' },
    { id: 31, url: '/gallery/studio-digital.jpg',       title: 'Digital Studio' },
    { id: 32, url: '/gallery/studio-podcast.jpg',       title: 'Podcast Studio' },
    { id: 33, url: '/gallery/studio-presentation.jpg',  title: 'Presentations' },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = useCallback(() => setSelectedImage(i => (i !== null && i > 0 ? i - 1 : i)), []);
  const goToNext = useCallback(() => setSelectedImage(i => (i !== null && i < galleryImages.length - 1 ? i + 1 : i)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToPrevious, goToNext]);

  // Distribute into 3 masonry columns
  const columns: typeof galleryImages[] = [[], [], []];
  galleryImages.forEach((img, i) => columns[i % 3].push(img));

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/90">Explore moments that make Oakland Schools special</p>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Desktop masonry — 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-4">
                {col.map((image) => {
                  const globalIndex = galleryImages.findIndex(g => g.id === image.id);
                  // Alternate aspect ratios per column for visual variety
                  const aspectRatio = globalIndex % 2 === 0 ? '4/3' : '4/5';
                  return (
                    <div
                      key={image.id}
                      onClick={() => openLightbox(globalIndex)}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer"
                      style={{ aspectRatio }}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-white font-semibold text-sm tracking-wide">{image.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile — 2 column grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white font-semibold text-xs">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors z-20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Next */}
          {selectedImage < galleryImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-5xl w-full flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full max-h-[78vh] object-contain rounded-xl"
            />
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold text-lg">{galleryImages[selectedImage].title}</span>
              <span className="text-white/40 text-sm">{selectedImage + 1} / {galleryImages.length}</span>
            </div>
            {/* Dot indicators */}
            <div className="flex gap-1.5 flex-wrap justify-center max-w-sm">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`rounded-full transition-all duration-300 ${i === selectedImage ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}