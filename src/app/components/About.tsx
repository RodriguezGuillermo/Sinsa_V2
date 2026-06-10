import { useEffect, useState } from 'react';

interface EquipmentItem {
  name: string;
  capacity: string;
  description: string;
  specs: string[];
}

export function About() {
  const stats = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, 
      value: '25', 
      label: 'Años de Experiencia' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>, 
      value: '50+', 
      label: 'Clientes Satisfechos' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"/></svg>, 
      value: '100%', 
      label: 'Seguridad Operativa' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, 
      value: '24/7', 
      label: 'Disponibilidad' 
    },
  ];

  const equipment: EquipmentItem[] = [
    {
      name: 'Grúas Telescópicas',
      capacity: '20 - 60 Toneladas',
      description: 'Flota de grúas telescópicas para trabajos de alta complejidad.',
      specs: [
        'Grúa Zoomlion ZMC – 60 TN',
        'Grúa Móvil Grove – 20 TN',
        'Certificación de equipos vigente realizada por TÜV.',
        'Operadores certificados y capacitados para maniobras de izaje seguras y eficientes.',
      ],
    },
    {
      name: 'Camiones Atmosféricos',
      capacity: '8.000 - 30.000 Litros',
      description: 'Unidades especializadas para extracción, transporte y disposición final de residuos líquidos y semi-sólidos.',
      specs: [
        'Cisternas de 8.000 a 30.000 litros',
        'Bombas de vacío de alto rendimiento',
        'Sistemas de aspiración de líquidos y lodos',
        'Habilitaciones Provinciales y Nacionales vigentes',
      ],
    },
    {
      name: 'Porta-Volquetes y Bateas',
      capacity: 'Volquetes de 5 m³',
      description: 'Servicio integral de contenedores para residuos especiales sólidos e industriales.',
      specs: [
        'Transporte de residuos especiales sólidos',
        'Bateas de hasta 28 TN de carga',
        'Acoplado playo para carga de hasta 3 contenedores',
      ],
    },
  ];

  const clients = [
    'HASA', 'Benito Roggio', 'Techint', 'Aerotán', 'Dyopsa', 'Dautec', 'Horamar',
    'Pampa Energía', 'Armada Argentina', 'Don Mar Servicios Marítimos', 'Conarpesa',
    'TGS', 'Oiltanking', 'Empesur', 'Tandanor', 'Refinería Bahía Blanca',
    'Antares Naviera', 'Enpasa', 'V. Ships', 'Boskalis', 'Argenova',
    'Consorcio de Gestión de Bahía Blanca', 'Pesquera Santa Cruz', 'Altamare', 'Arbumas',
  ];

  const SLOTS = 8;
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setOffset((prev) => (prev + SLOTS) % clients.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const slotIndices = Array.from(
    { length: SLOTS },
    (_, i) => (offset + i) % clients.length,
  );

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#002855] mb-4">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-[#0077B6] mx-auto mb-6" />
        </div>

        {/* Company History */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#002855] to-[#00509d] rounded-2xl p-10 text-white shadow-md">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Historia y Trayectoria</h3>
              <p className="text-lg leading-relaxed">
                Es líder en la región, especializada en el mantenimiento de grandes superficies. Desde el año 2000 hasta la actualidad, sigue siendo una empresa en crecimiento gracias al equipo de trabajo y al apoyo y confianza que cada uno de nuestros clientes deposita en nosotros. Deseando siempre crecer, para poder brindarles más y mejores servicios.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#002855] mb-8 text-center">
            Nuestro Equipo de Trabajo
          </h3>
          <div className="bg-[#F8F9FA] rounded-xl p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#002855] mb-4 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0077B6]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Capital Humano Especializado
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La empresa está dotada de un gran equipo de trabajo dedicado y capacitado a los trabajos, con una amplia trayectoria en el sector naval e industrial. El objetivo de nuestra empresa es consolidar de forma creciente el liderazgo en el mercado, aplicando los principios básicos de atención y solución eficiente a las distintas necesidades requeridas por los clientes. Esto se logra con el equipo humano que integra nuestra empresa, que trabaja de manera coordinada para asegurar que los clientes encuentren siempre una óptima solución a sus necesidades.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#002855] mb-4 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0077B6]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"/></svg>
                  Certificaciones y Capacitación
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestro equipo recibe capacitación continua en seguridad, calidad y procedimientos operativos, garantizando trabajos desarrollados bajo altos estándares de seguridad y eficiencia.
                </p>
                <ul className="space-y-3">
                  {[
                    'Personal capacitado para trabajos de alto riesgo',
                    'Formación en trabajos en altura y espacios confinados',
                    'Capacitación continua en seguridad e higiene industrial',
                    'Actualización permanente de conocimientos técnicos y operativos',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0077B6] mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="text-[#0077B6] mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#002855] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Equipment Fleet - Detailed */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#002855] mb-8 text-center">
            Nuestro Equipamiento
          </h3>
          <div className="space-y-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#0077B6]/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#0077B6]"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-[#002855] to-[#00509d] rounded-xl p-4 flex-shrink-0">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.92L19 9h-5v8h2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <h4 className="text-2xl font-bold text-[#002855]">{item.name}</h4>
                      <span className="bg-[#0077B6] text-white px-4 py-1 rounded-full text-sm font-semibold w-fit">
                        {item.capacity}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0077B6] mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div>
          <h3 className="text-3xl font-bold text-[#002855] mb-8 text-center">
            Nuestros Clientes
          </h3>
          <p className="text-justify text-gray-600 mb-4 max-w-2xl mx-auto">
            Nuestros clientes son nuestra mejor carta de presentación y el pilar fundamental de nuestro crecimiento.
          </p>
          <p className="text-justify text-gray-600 mb-10 max-w-2xl mx-auto">
            La confianza depositada en SINSA nos impulsa a seguir brindando soluciones eficientes, seguras y adaptadas a cada operación.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {slotIndices.map((clientIdx, slotIdx) => (
              <div
                key={slotIdx}
                className="h-24 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-[#0077B6] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 overflow-hidden"
              >
                <span
                  className={`text-sm font-bold text-[#002855] text-center leading-tight break-words w-full uppercase transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {clients[clientIdx]}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}