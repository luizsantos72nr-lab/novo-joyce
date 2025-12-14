import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
      >
        <X size={32} />
      </button>
      
      <img 
        src={src} 
        alt={alt} 
        className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      />
      
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <span className="inline-block bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
          Toque fora para fechar
        </span>
      </div>
    </div>
  );
};