import { useRef } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 12) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002855]/80 via-[#002855]/70 to-[#002855]/90 z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        >
          <source src="/video-inicio/video.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1920"
            alt="Industria Naval y Logística Pesada"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          {/* Logo Badge */}
          <div className="inline-block transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="bg-white/10 backdrop-blur-md border-2 border-[#0077B6] rounded-2xl p-6 inline-block">
              <h1
                className="text-white text-6xl sm:text-7xl md:text-8xl tracking-widest mb-2"
                style={{ fontFamily: "'Eurostile Extended 2', 'Eurostile Extended', 'Eurostile', 'Bank Gothic', 'Orbitron', sans-serif", fontWeight: 700, fontStretch: 'expanded', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                SINSA
              </h1>
              <p className="text-white text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold mt-1">
                SERVICIO INDUSTRIAL NAVAL S.A.
              </p>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#0077B6] to-transparent mt-3" />
            </div>
          </div>

          {/* Tagline */}
          <h2
            className="text-white text-2xl sm:text-3xl md:text-4xl max-w-4xl mx-auto leading-tight tracking-widest"
            style={{ fontFamily: "'Russo One', sans-serif", letterSpacing: '0.1em' }}
          >
            25 AÑOS DE EXPERIENCIA EN MANTENIMIENTO Y LOGÍSTICA INDUSTRIAL Y NAVAL
          </h2>

          {/* CTA Button */}
          <button
            onClick={scrollToServices}
            className="mt-8 bg-[#0077B6] hover:bg-[#00509d] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Conocer Servicios
          </button>
        </div>

        {/* Scroll Indicator LIMPIO */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={scrollToServices}
            className="text-white/70 hover:text-white transition-colors animate-bounce flex items-center justify-center p-2"
            aria-label="Scroll to services"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}