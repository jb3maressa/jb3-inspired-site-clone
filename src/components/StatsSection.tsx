
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-12 bg-jb3-gold">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            number="98%" 
            label="Clientes Satisfeitos" 
          />
          <StatCard 
            number="147%" 
            label="Crescimento em 5 anos" 
          />
          <StatCard 
            number="24/7" 
            label="Suporte ao Cliente" 
          />
          <StatCard 
            number="12+" 
            label="Anos de Experiência" 
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
    <p className="text-jb3-navy font-medium text-lg">{label}</p>
  </div>
);

export default StatsSection;
