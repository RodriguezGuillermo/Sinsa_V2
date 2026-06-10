export function Footer() {
  return (
    <footer className="bg-[#002855] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0077B6] p-2 rounded-lg text-white flex items-center justify-center">
                {/* Icono Anchor SVG Nativo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22v-8m0 0a4 4 0 0 0-4-4H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3m4 5a4 4 0 0 1 4-4h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3" />
                  <circle cx="12" cy="5" r="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">SINSA</h3>
                <p className="text-[#0077B6] text-xs">Servicio Industrial Naval S.A.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              25 años de experiencia en mantenimiento y logística industrial
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Antecedentes', 'Contacto'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-[#0077B6] transition-colors text-sm text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                {/* Icono MapPin SVG Nativo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0077B6] flex-shrink-0 mt-0.5 w-5 h-5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-300">
                  Dufourq 560, B8109<br />Punta Alta, Buenos Aires
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                {/* Icono Phone SVG Nativo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0077B6] flex-shrink-0 w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+5492932479592" className="text-gray-300 hover:text-[#0077B6] transition-colors">
                  +54 9 2932 479592
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                {/* Icono Mail SVG Nativo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0077B6] flex-shrink-0 w-5 h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:produccion@sinsa.com.ar"
                  className="text-gray-300 hover:text-[#0077B6] transition-colors"
                >
                  produccion@sinsa.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00509d] pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 SINSA - Servicio Industrial Naval S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}