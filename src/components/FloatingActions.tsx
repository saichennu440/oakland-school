import { Phone, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  onApply: () => void;
}

export function FloatingActions({ onApply }: FloatingActionsProps) {
  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        <a
          href="tel:+1234567890"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>

      <button
        onClick={onApply}
        className="fixed bottom-6 left-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 z-40"
      >
        <span>Apply Now</span>
        <span className="animate-pulse">→</span>
      </button>
    </>
  );
}
