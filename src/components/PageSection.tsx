
import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'warm';
}

const PageSection = ({ children, className = '', background = 'white' }: PageSectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-emerald-600/8 to-emerald-500/8',
    warm: 'bg-gradient-to-b from-emerald-50/40 to-green-50/20'
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
