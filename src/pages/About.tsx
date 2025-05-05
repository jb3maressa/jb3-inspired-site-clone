
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-jb3-navy text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-jb3-navy to-jb3-darkblue"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl text-gray-300">
              Conheça a trajetória da JB3 Investimentos e nosso compromisso com a excelência em gestão financeira.
            </p>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Trajetória de Sucesso</h2>
              <p className="text-gray-700 mb-4">
                Fundada em 2010 por João Silva, um renomado especialista do mercado financeiro, a JB3 Investimentos nasceu com o propósito de oferecer soluções de investimento transparentes, personalizadas e de alta performance.
              </p>
              <p className="text-gray-700 mb-4">
                Inicialmente focada em atender clientes de alta renda, a empresa rapidamente se destacou por sua abordagem inovadora e resultados consistentes, o que permitiu a expansão para novos segmentos do mercado.
              </p>
              <p className="text-gray-700">
                Ao longo dos anos, mantivemos nossos valores fundamentais de integridade, excelência e foco no cliente, construindo uma reputação sólida como uma das principais gestoras de investimentos do país.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="JB3 Investimentos - História" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-jb3-gold p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-jb3-navy font-medium">Anos de história</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Nossa Linha do Tempo</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-jb3-gold"></div>
            
            {/* Timeline Items */}
            <TimelineItem 
              year="2010" 
              title="Fundação da JB3 Investimentos" 
              description="Início das operações com foco em clientes de alta renda e patrimônio elevado."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2013" 
              title="Expansão de Serviços" 
              description="Lançamento da linha de fundos exclusivos e início das operações em renda variável."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2015" 
              title="Marco de R$100 Milhões" 
              description="Atingimos R$100 milhões em ativos sob gestão e expandimos nossa equipe."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2018" 
              title="Nova Sede" 
              description="Inauguração da nova sede na Avenida Paulista, consolidando nossa presença no mercado."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2020" 
              title="Inovação Digital" 
              description="Lançamento da plataforma digital para melhor atender nossos clientes."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2023" 
              title="Expansão Nacional" 
              description="Abertura de escritórios em outras capitais e marco de R$500 milhões sob gestão."
              isLeft={false}
            />
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-jb3-gold text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-jb3-navy mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Oferecer soluções financeiras personalizadas que maximizem o patrimônio de nossos clientes, com transparência, ética e responsabilidade, contribuindo para a realização de seus objetivos e para o desenvolvimento do mercado financeiro brasileiro.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-jb3-gold text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-jb3-navy mb-4">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a principal referência em gestão de investimentos no Brasil, conhecida pela excelência de seus serviços, pela qualidade de sua equipe e pelos resultados consistentes que entrega aos seus clientes.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-16">
            <h2 className="section-title mb-12">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                }
                title="Integridade"
                description="Atuamos com honestidade, transparência e ética em todas as nossas relações."
              />
              
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                }
                title="Excelência"
                description="Buscamos constantemente a excelência em tudo o que fazemos, superando expectativas."
              />
              
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                }
                title="Foco no Cliente"
                description="Colocamos as necessidades e objetivos dos nossos clientes em primeiro lugar."
              />
              
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                }
                title="Conhecimento"
                description="Valorizamos o conhecimento técnico e nos mantemos atualizados sobre as melhores práticas do mercado."
              />
              
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
                  </svg>
                }
                title="Inovação"
                description="Buscamos constantemente novas soluções e abordagens para melhor atender nossos clientes."
              />
              
              <ValueCard 
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                }
                title="Trabalho em Equipe"
                description="Valorizamos a colaboração e o trabalho em equipe para alcançar resultados superiores."
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ 
  year, 
  title, 
  description, 
  isLeft 
}: { 
  year: string; 
  title: string; 
  description: string; 
  isLeft: boolean;
}) => (
  <div className={`relative flex items-center justify-between mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
      <h3 className="text-xl md:text-2xl font-bold text-jb3-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    
    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-jb3-gold rounded-full flex items-center justify-center z-10">
      <span className="text-white font-bold">{year}</span>
    </div>
    
    <div className="w-5/12"></div>
  </div>
);

// Value Card Component
const ValueCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jb3-gold">
    <div className="text-jb3-gold mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-jb3-navy mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
