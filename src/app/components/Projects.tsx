import { useState } from 'react';
import { mediaConfig } from "../config/mediaConfig";

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  details: string[];
  gallery: string[];
  featured: boolean;
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

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const featuredProjects: FeaturedProject[] = [
    {
      id: 'irizar',
      title: 'Rompehielos ARA Almirante Irízar',
      subtitle: 'Proyecto Emblemático Nacional',
      image: mediaConfig.antecedentes.irizar.cover,
      description:
        'Participación en los trabajos de mantenimiento y carenado del Rompehielos ARA Almirante Irízar, uno de los activos navales más importantes del país y pieza clave en las campañas antárticas argentinas. El proyecto incluyó la implementación de un innovador sistema de aplicación de pintura en caliente a 50 °C, constituyendo una de las primeras experiencias de estas características desarrolladas en Sudamérica para aplicaciones navales de alta exigencia. La ejecución requirió un estricto control de parámetros operativos, temperatura de producto, condiciones ambientales y espesores de aplicación, garantizando la correcta adherencia y desempeño del sistema de recubrimiento.',
      details: [
        'Aplicación de pintura en caliente a 50 °C',
        'Control permanente de variables operativas',
        'Verificación de espesores y calidad de aplicación',
        'Intervención sobre una embarcación estratégica para las operaciones antárticas',
        'Resultado: implementación exitosa de una tecnología innovadora que permitió optimizar la performance del sistema de protección y asegurar la durabilidad del recubrimiento en condiciones de servicio extremas',
      ],
      gallery: mediaConfig.antecedentes.irizar.gallery,
      featured: true,
    },
    {
      id: 'oleoducto-rosales',
      title: 'Reparación de Oleoducto Rosales – Refinería La Plata (YPF)',
      subtitle: 'Proyecto YPF',
      image: mediaConfig.antecedentes.oleoducto.cover,
      description:
        'Participación en los trabajos de reparación del Oleoducto Rosales – Refinería La Plata, brindando soporte logístico e industrial a las empresas contratistas a cargo del proyecto. Las tareas incluyeron maniobras de izaje mediante grúas certificadas y asistencia con camiones equipados con bombas de vacío durante la etapa final de la obra.',
      details: [
        'Servicios de izaje con equipos certificados',
        'Asistencia logística y operativa en obra',
        'Equipos de vacío para apoyo a tareas industriales',
        'Personal calificado para operaciones críticas',
        'Resultado: participación exitosa en un proyecto de infraestructura energética de relevancia nacional, cumpliendo con los estándares de seguridad, calidad y coordinación requeridos por la industria',
      ],
      gallery: mediaConfig.antecedentes.oleoducto.gallery,
      featured: true,
    },
    {
      id: 'buque-tanque',
      title: 'Buque Tanque – Mantenimiento Integral y Carenado de Casco',
      subtitle: 'Noviembre 2024',
      image: mediaConfig.antecedentes.buqueTanque.cover,
      description:
        'Ejecución integral de trabajos de mantenimiento sobre buque tanque de 145 metros de eslora y 23 metros de manga, incluyendo la gestión, retiro y disposición final de slop conforme a la normativa ambiental vigente. El proyecto contempló el carenado completo del casco mediante tecnología de hidrojetting UHP, alcanzando grado de preparación WA 2.5, garantizando la correcta remoción de contaminantes, productos de corrosión y recubrimientos deteriorados sin afectar el sustrato metálico. Posteriormente se ejecutó la aplicación del esquema de pintura especificado por el armador, asegurando la protección anticorrosiva y la continuidad operativa de la embarcación.',
      details: [
        'Gestión y disposición final de slop',
        'Hidrojetting UHP grado WA 2.5',
        'Preparación integral de superficies',
        'Aplicación de sistema de recubrimiento anticorrosivo',
        'Control de calidad e inspección de trabajos',
        'Resultado: proyecto ejecutado en tiempo y forma, cumpliendo los estándares técnicos y ambientales requeridos para la operación de buques tanque',
      ],
      gallery: mediaConfig.antecedentes.buqueTanque.gallery,
      featured: true,
    },
    {
      id: 'patagonia',
      title: 'Buque Logístico ARA Patagonia',
      subtitle: 'Campaña Logística Antártica',
      image: mediaConfig.antecedentes.patagonia.cover,
      description:
        'Ejecución de trabajos de carenado de casco sobre el Buque Logístico ARA Patagonia, desarrollados en el marco de los requerimientos operativos para su participación en la campaña logística antártica. El proyecto demandó altos niveles de productividad y coordinación operativa para cumplir con plazos reducidos de disponibilidad de la embarcación. Para ello se implementó un esquema de trabajo mediante hidrojetting UHP utilizando simultáneamente cuatro lanzas de trabajo y un robot de preparación de superficies, permitiendo alcanzar elevados rendimientos diarios. Las tareas incluyeron la preparación integral de superficies y posterior aplicación del sistema de recubrimiento sobre obra viva, obra muerta, franja variable y caja de cadenas.',
      details: [
        'Hidrojetting UHP grado WA 2.5',
        'Utilización simultánea de cuatro lanzas y robot de hidrojetting',
        'Preparación de superficies y control de calidad',
        'Aplicación de sistema de pintura naval',
        'Intervención sobre obra viva, obra muerta, franja variable y caja de cadenas',
        'Resultado: gracias a la planificación operativa, la incorporación de tecnología y el trabajo coordinado entre todas las partes involucradas, el proyecto fue finalizado antes del plazo previsto, permitiendo al buque cumplir su cronograma operativo',
      ],
      gallery: mediaConfig.antecedentes.patagonia.gallery,
      featured: true,
    },
  ];

  const galleryImages = mediaConfig.galeria;

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  return (
    <section id="antecedentes" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#002855] mb-4">Antecedentes</h2>
          <div className="w-24 h-1 bg-[#0077B6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obras que demuestran nuestra experiencia y compromiso
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer border-4 border-[#0077B6] hover:border-[#00509d] transition-all duration-300 transform hover:-translate-y-2 bg-[#002855]"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/80 to-transparent opacity-90" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-[#0077B6] px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-lg leading-tight max-w-[160px]">
                    {project.subtitle}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold mb-2 leading-snug">{project.title}</h4>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                  <div className="text-[#0077B6] font-semibold text-sm group-hover:text-white transition-colors">
                    Clic para ver detalles →
                  </div>
                </div>

                {/* Magnifying glass icon on hover */}
                <div className="absolute top-4 right-4 bg-[#0077B6] text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Gallery with Lightbox */}
        {/* General Gallery con vista limitada a 8 y Lightbox completo */}
        <div className="transition-all">
          <h3 className="text-3xl font-bold text-[#002855] mb-10 text-center">
            Galería de Proyectos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Solo renderizamos las primeras 8 en la cuadrícula */}
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(galleryImages, index)}
                className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-200 relative"
              >
                <img
                  src={image}
                  alt={`Proyecto ${index + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
                />
                
                {/* Indicador de "Más fotos" si es la foto número 8 y hay más */}
                {index === 7 && galleryImages.length > 8 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-xl">
                    +{galleryImages.length - 8} más
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal Nativo */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 shadow-2xl"
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#002855] rounded-full p-2 transition-colors shadow-md"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002855] to-transparent p-6">
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-[#0077B6] font-semibold bg-white/10 w-fit px-3 py-1 rounded-md backdrop-blur-sm">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>

              <h4 className="text-xl font-bold text-[#002855] mb-4">Trabajos Realizados:</h4>
              <ul className="space-y-3 mb-8">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6] mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-[#002855] mb-4">Galería del Proyecto:</h4>
              <div className="grid grid-cols-3 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(selectedProject.gallery, index)}
                    className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100"
                  >
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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