
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-jb3-navy text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">JB3</span>
              <span className="text-jb3-gold text-2xl font-bold">Investimentos</span>
            </div>
            <p className="text-gray-300">
              Soluções de investimentos exclusivas para otimizar seus objetivos financeiros.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="Quem Somos" />
              <FooterLink to="/strategies" label="Estratégias" />
              <FooterLink to="/results" label="Resultados" />
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/contact" label="Contato" />
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <FooterLink to="/products" label="Produtos" />
              <FooterLink to="/team" label="Nossa Equipe" />
              <FooterLink to="/values" label="Valores" />
              <FooterLink to="/invest" label="Invista Agora" />
              <FooterLink to="/faq" label="Perguntas Frequentes" />
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                Av. Paulista, 1000, Bela Vista 
                <br /> São Paulo - SP, 01310-100
              </p>
              <p><span className="text-jb3-gold">Email:</span> contato@jb3investimentos.com.br</p>
              <p><span className="text-jb3-gold">Telefone:</span> (11) 3000-0000</p>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} JB3 Investimentos. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-jb3-gold transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="hover:text-jb3-gold transition-colors">Política de Privacidade</Link>
            <Link to="/cookies" className="hover:text-jb3-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-jb3-darkblue hover:bg-jb3-gold transition-colors p-2 rounded-full inline-flex items-center justify-center"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-jb3-gold transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
