
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "A JB3 Investimentos transformou a maneira como eu enxergava minhas finanças. Em apenas 2 anos, meus investimentos cresceram significativamente, superando todas as minhas expectativas.",
    author: "Roberto Mendes",
    position: "Empresário",
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "A assessoria personalizada e a clareza nas explicações me deram a segurança que eu precisava para diversificar meus investimentos. Os resultados falam por si.",
    author: "Carla Ferreira",
    position: "Médica",
    imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "Finalmente encontrei profissionais que entendem minhas necessidades e objetivos financeiros. O atendimento é impecável e os resultados são consistentes.",
    author: "Fernando Almeida",
    position: "Advogado",
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="section bg-jb3-navy text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white inline-block">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-300 mt-4">
            A confiança dos nossos clientes é o nosso maior patrimônio. 
            Veja o que eles têm a dizer sobre nossa gestão e resultados.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-jb3-gold/20 hover:bg-jb3-gold/40 p-3 rounded-full z-10"
            aria-label="Depoimento anterior"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-jb3-gold/20 hover:bg-jb3-gold/40 p-3 rounded-full z-10"
            aria-label="Próximo depoimento"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-jb3-gold opacity-30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <img 
                  src={testimonials[activeIndex].imgUrl} 
                  alt={testimonials[activeIndex].author} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-jb3-gold"
                />
              </div>
              
              <blockquote className="text-xl text-center italic mb-6 animate-fade-in">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="text-center">
                <p className="text-lg font-bold text-jb3-gold">{testimonials[activeIndex].author}</p>
                <p className="text-gray-300">{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-jb3-gold' : 'bg-gray-500'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
