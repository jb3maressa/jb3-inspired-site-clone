
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-jb3-navy">JB3</span>
          <span className="text-jb3-gold text-2xl font-bold">Investimentos</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem to="/" label="Home" />
          <NavDropdown 
            label="Quem Somos" 
            items={[
              { label: 'Nossa História', path: '/about' },
              { label: 'Nossos Valores', path: '/values' },
              { label: 'Equipe', path: '/team' }
            ]} 
          />
          <NavDropdown 
            label="Investimentos" 
            items={[
              { label: 'Estratégias', path: '/strategies' },
              { label: 'Resultados', path: '/results' },
              { label: 'Produtos', path: '/products' }
            ]} 
          />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact" label="Contato" />
          <Link to="/invest" className="btn-primary ml-4">
            Invista Agora
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto space-y-4">
            <MobileNavItem to="/" label="Home" onClick={toggleMobileMenu} />
            <MobileNavDropdown 
              label="Quem Somos" 
              items={[
                { label: 'Nossa História', path: '/about' },
                { label: 'Nossos Valores', path: '/values' },
                { label: 'Equipe', path: '/team' }
              ]} 
              onClick={toggleMobileMenu}
            />
            <MobileNavDropdown 
              label="Investimentos" 
              items={[
                { label: 'Estratégias', path: '/strategies' },
                { label: 'Resultados', path: '/results' },
                { label: 'Produtos', path: '/products' }
              ]} 
              onClick={toggleMobileMenu}
            />
            <MobileNavItem to="/blog" label="Blog" onClick={toggleMobileMenu} />
            <MobileNavItem to="/contact" label="Contato" onClick={toggleMobileMenu} />
            <div className="pt-2">
              <Link 
                to="/invest" 
                className="btn-primary block text-center w-full"
                onClick={toggleMobileMenu}
              >
                Invista Agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Item
const NavItem = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-jb3-navy font-medium hover:text-jb3-gold transition-colors"
  >
    {label}
  </Link>
);

// Desktop Nav Dropdown
const NavDropdown = ({ 
  label, 
  items 
}: { 
  label: string; 
  items: { label: string; path: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-jb3-navy font-medium hover:text-jb3-gold transition-colors">
        {label}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] animate-fade-in">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block px-4 py-2 text-jb3-navy hover:bg-jb3-gray hover:text-jb3-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile Nav Item
const MobileNavItem = ({ 
  to, 
  label, 
  onClick 
}: { 
  to: string; 
  label: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="block py-2 text-jb3-navy font-medium"
    onClick={onClick}
  >
    {label}
  </Link>
);

// Mobile Nav Dropdown
const MobileNavDropdown = ({ 
  label, 
  items,
  onClick
}: { 
  label: string; 
  items: { label: string; path: string }[];
  onClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-2">
      <button 
        className="flex items-center justify-between w-full text-jb3-navy font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="mt-2 pl-4 border-l-2 border-jb3-lightgold space-y-2 animate-fade-in">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-1 text-jb3-navy hover:text-jb3-gold transition-colors"
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
