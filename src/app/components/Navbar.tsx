import { useState, useEffect } from 'react';
import logoSinsa from '../imports/Logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'antecedentes', label: 'Antecedentes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#002855] shadow-lg' : 'bg-[#002855]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo con interactividad nativa */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 group transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 p-0.5">
              <img
                src={logoSinsa}
                alt="SINSA Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-white text-2xl font-bold tracking-tight">SINSA</h1>
              <p className="text-[#0077B6] text-xs">Servicio Industrial Naval S.A.</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-[#0077B6] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077B6] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Iconos SVG Nativos */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 transition-colors duration-200 hover:text-[#0077B6]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable Nativo */}
      <div
        className={`md:hidden bg-[#00509d] border-t border-[#0077B6]/20 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-white hover:text-[#0077B6] py-2 px-4 rounded-lg hover:bg-[#002855]/50 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}