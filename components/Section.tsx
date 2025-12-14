import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 px-4 md:px-8 ${dark ? 'bg-brand-900 text-white' : 'bg-white text-slate-800'} ${className}`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};