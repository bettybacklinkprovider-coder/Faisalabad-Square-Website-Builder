import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../data/businessData';
import { SmartImage } from './SmartImage';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B132B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#0F172A] border border-white/15 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-stone-300">
            <span className="font-mono-tabular text-[#C59B27]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{current.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close gallery viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-black/50 aspect-video max-h-[70vh] w-full flex items-center justify-center overflow-hidden">
          <SmartImage
            src={current.src}
            alt={current.alt}
            fallbackLabel={current.title}
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B132B]/80 border border-white/20 text-white hover:bg-[#C59B27] hover:text-[#0B132B] transition-colors flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B132B]/80 border border-white/20 text-white hover:bg-[#C59B27] hover:text-[#0B132B] transition-colors flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-4 bg-[#0B132B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              {current.title}
            </h3>
            <p className="text-sm text-stone-400 mt-0.5">{current.caption}</p>
          </div>
          <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
            Faisalabad Square · Jhang Road
          </span>
        </div>
      </div>
    </div>
  );
};
