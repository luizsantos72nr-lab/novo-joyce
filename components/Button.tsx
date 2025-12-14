import React from 'react';
import { EXPERT_INFO } from '../constants';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.32001 11.568 9.14701 11.27C8.97401 10.973 9.12901 10.812 9.27801 10.664C9.41201 10.531 9.57601 10.317 9.72401 10.144C9.87301 9.97 9.92201 9.846 10.022 9.647C10.121 9.449 10.072 9.276 9.99701 9.127C9.92201 8.978 9.32801 7.515 9.08101 6.92C8.83901 6.341 8.59401 6.42 8.41201 6.41L7.84201 6.402C7.64401 6.402 7.29701 6.476 7.02501 6.774C6.75301 7.071 5.98501 7.79 5.98501 9.253C5.98501 10.715 7.05001 12.128 7.19801 12.327C7.34701 12.525 9.29401 15.526 12.275 16.814C12.984 17.12 13.537 17.303 13.969 17.439C14.681 17.666 15.329 17.634 15.84 17.557C16.411 17.472 17.598 16.838 17.846 16.144C18.094 15.45 18.094 14.855 18.019 14.731C17.945 14.607 17.747 14.533 17.449 14.384L17.472 14.382ZM12.049 24C9.924 24 7.914 23.447 6.177 22.46L5.877 22.282L1.317 23.477L2.553 19.043L2.359 18.735C1.29 17.034 0.727 15.065 0.727 13.045C0.73 6.796 5.812 1.714 12.055 1.714C15.08 1.716 17.922 2.894 20.06 5.033C22.198 7.172 23.374 10.015 23.371 13.044C23.368 19.294 18.291 24 12.049 24ZM12.052 3.766C6.942 3.766 2.784 7.924 2.784 13.041C2.784 14.877 3.328 16.593 4.283 18.053L5.419 16.918L9.049 15.967L8.083 19.432L8.683 20.384C10.062 21.203 11.536 21.637 12.055 21.637C17.162 21.637 21.321 17.478 21.321 12.361C21.321 7.243 17.162 3.766 12.052 3.766Z" />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  className = "",
  variant = 'primary',
  fullWidth = true
}) => {
  const baseClasses = "group relative flex flex-col items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-[0.98]";
  
  // For Gold, Primary should be the rich metallic gold (brand-500)
  // Secondary should be white with gold border
  const variantClasses = variant === 'primary' 
    ? "bg-brand-500 hover:bg-brand-600 text-white shadow-brand-500/40"
    : "bg-white border-2 border-brand-500 text-brand-600 hover:bg-brand-50";

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <a 
      href={EXPERT_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`}
    >
      <div className="flex items-center gap-3 font-bold text-lg md:text-xl uppercase tracking-wide">
        <WhatsAppIcon className="w-6 h-6 animate-pulse text-[#25D366] drop-shadow-sm" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className={`text-xs mt-1 font-medium opacity-90 ${variant === 'primary' ? 'text-brand-50' : 'text-brand-600'}`}>
          {subtext}
        </span>
      )}
    </a>
  );
};