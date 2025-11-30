import React from 'react';

interface KitSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const KitSection: React.FC<KitSectionProps> = ({ title, description, children }) => {
  return (
    <section className="mb-20">
      <div className="mb-8 border-l-4 border-lime pl-6">
        <h2 className="text-3xl font-bold text-forest mb-2">{title}</h2>
        <p className="text-forest/70 max-w-2xl">{description}</p>
      </div>
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark">
        {children}
      </div>
    </section>
  );
};