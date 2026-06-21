import { useState } from 'react';
import { mediaConfig } from "../config/mediaConfig";

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  tasks: string[];
  images: string[];
}

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#0077B6] transition-colors z-10"
        aria-label="Cerrar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className="absolute left-4 text-white hover:text-[#0077B6] transition-colors z-10 p-2 bg-black/40 rounded-full"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute right-4 text-white hover:text-[#0077B6] transition-colors z-10 p-2 bg-black/40 rounded-full"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="max-w-full max-h-[85vh] object-contain transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/60 px-4 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const services: ServiceDetail[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <path d="M2 21h20M19.3 14.8C21.1 13.5 22 11.7 22 10c0-3.3-2.7-6-6-6-1.3 0-2.5.4-3.5 1.1C11.5 4.4 10.3 4 9 4c-3.3 0-6 2.7-6 6 0 1.7.9 3.5 2.7 4.8L2 14v3h20v-3l-2.7-2.2z"/>
        </svg>
      ),
      title: 'Industria Naval',
      description: 'Amplia gama de servicios para la industria Naval.',
      tasks: [
        'Tratamiento de grandes superficies, en cascos, cubiertas, superestructuras y tanques.',
        'Hidrojetting a ultra alta presión (hasta 40.000 bar, 25.000 psi), arenado, granallado y aplicación de pinturas especiales por sistemas airless y dual en caliente hasta 50 grados.',
        'Hidrolavado a baja y media presión, rasqueteo, retiro de incrustaciones y preparación mecánica.',
        'Desgasificación, limpieza de tanques y sentinas, retiro de fondos oleosos, transporte y disposición final de residuos especiales.',
      ],
      images: mediaConfig.servicios['industria-naval'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      ),
      title: 'Oil & Gas',
      description: 'Servicios especializados para la industria.',
      tasks: [
        'Tratamiento de superficies y pinturas en interiores y exteriores de tanques, structures, cañerías y accesorios de plantas.',
        'Hidrojetting a ultra alta presión (hasta 40.000 bar y 25.000 psi), arenado, granallado, aplicación de pinturas especiales en interior y exterior de tanques por sistemas airless y dual en caliente hasta 50 grados.',
        'Desgasificación, limpieza de tanques de almacenamiento, retiro de fondos de hidrocarburo, residuos vegetales y minerales, remediación de suelos contaminados con distintos residuos especiales.',
        'Tratamiento y disposición final de residuos especiales.',
      ],
      images: mediaConfig.servicios['oil-and-gas'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M14 18a2 2 0 1 1-4 0M20 18a2 2 0 1 1-4 0M20 12h2v4h-2zM14 6v6h6V8a2 2 0 0 0-2-2z"/>
        </svg>
      ),
      title: 'Transporte de Residuos',
      description: 'Equipos habilitados para el transporte y disposición final de residuos especiales y industriales no especiales.',
      tasks: [
        'Recolección y transporte de residuos especiales.',
        'Gestión de residuos peligrosos certificada.',
        'Servicio de camiones atmosféricos.',
        'Limpieza industrial y aspiración de líquidos.',
        'Documentación y trazabilidad completa.',
        'Cumplimiento de normativas ambientales.',
        'Transporte de residuos urbanos: Camiones compactadores y portavolquetes con volquetes de distintas medidas y bateas.',
        'Transporte de residuos especiales sólidos y líquidos: Camiones cisterna con bomba de succión, portavolquetes con volquetes de distintas medidas y bateas.',
      ],
      images: mediaConfig.servicios['transporte-residuos'],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
          <rect x="2" y="6" width="20" height="8" rx="1"/>
          <path d="M17 14v7M7 14v7M12 6V3M8 3h8"/>
        </svg>
      ),
      title: 'Servicio de Grúas',
      description: 'Flota de grúas de 20 a 60 toneladas con operadores certificados y equipos inspeccionados.',
      tasks: [
        'Izaje y movimiento de cargas pesadas.',
        'Grúas hidráulicas de 20 a 60 toneladas.',
        'Operadores certificados y especializados.',
        'Planificación y ejecución de maniobras.',
        'Servicio 24/7 disponible.',
        'Inspección y certificación de equipos.',
      ],
      images: mediaConfig.servicios['servicio-gruas'],
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  return (
    <section id="servicios" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#002855] mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-[#0077B6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Soluciones industriales con tecnología de punta y personal altamente calificado
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const displayImages = service.images.slice(0, 4);
            const extraCount = service.images.length - 4;
            const isOpen = expandedService === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-[#0077B6] transition-all duration-300"
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-8 flex items-center justify-between hover:bg-[#F8F9FA] transition-colors duration-200"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-[#002855] to-[#00509d] rounded-xl p-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-[#002855] mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-left">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-[#0077B6] flex-shrink-0">
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m18 15-6-6-6 6"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m6 9 6 6 6-6"/></svg>
                    )}
                  </div>
                </button>

                {/* Expandable Content Nativo */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1200px] opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Tasks List */}
                      <div>
                        <h4 className="text-lg font-bold text-[#002855] mb-4">
                          Tareas Incluidas:
                        </h4>
                        <ul className="space-y-4">
                          {service.tasks.map((task, taskIndex) => (
                            <li
                              key={taskIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#0077B6] mt-2 flex-shrink-0" />
                              <span className="text-gray-700 text-justify text-sm sm:text-base">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Image Gallery */}
                      <div>
                        <h4 className="text-lg font-bold text-[#002855] mb-4">
                          Galería:
                          {service.images.length > 4 && (
                            <span className="ml-2 text-sm text-[#0077B6] font-normal hidden sm:inline">
                              (hacé clic para ver todas las fotos)
                            </span>
                          )}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {displayImages.map((image, imgIndex) => {
                            const isLast = imgIndex === 3 && extraCount > 0;
                            return (
                              <div
                                key={imgIndex}
                                className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer relative bg-gray-100"
                                onClick={() => openLightbox(service.images, imgIndex)}
                              >
                                <img
                                  src={image}
                                  alt={`${service.title} - ${imgIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                                {isLast && (
                                  <div className="absolute inset-0 bg-[#002855]/75 flex items-center justify-center rounded-lg">
                                    <span className="text-white text-2xl font-bold">
                                      +{extraCount}
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Integrado Nativo */}
      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </section>
  );
}
