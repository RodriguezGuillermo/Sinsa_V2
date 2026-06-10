import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formType, setFormType] = useState<'consulta' | 'cv'>('consulta');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    cvFile: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Type:', formType);
    if (formType === 'cv') {
      alert('¡CV enviado! Nos pondremos en contacto a la brevedad.');
    } else {
      alert('¡Mensaje enviado! Nos pondremos en contacto a la brevedad.');
    }
    setFormData({ name: '', company: '', email: '', message: '', cvFile: null });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, cvFile: file });
  };

  const whatsappNumbers = [
    { number: '2932-467622', label: 'Operaciones', link: 'https://wa.me/5492932467622' },
    { number: '2932-479592', label: 'Comercial', link: 'https://wa.me/5492932479592' },
    { number: '2932-573897', label: 'Administración', link: 'https://wa.me/5492932573897' },
  ];

  const phoneNumbers = [
    { number: '+54 2932 434216', label: 'Fijo 1' },
    { number: '+54 2932 435969', label: 'Fijo 2' },
  ];

  const emails = [
    { email: 'produccion@sinsa.com.ar', label: 'Producción' },
    { email: 'administracion@sinsa.com.ar', label: 'Administración' },
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
      link: 'https://web.facebook.com/profile.php?id=100054510127304',
      color: 'hover:bg-[#1877F2]',
    },
    {
      name: 'Instagram',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
      link: 'https://www.instagram.com/sinsa.servicioindnaval/',
      color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]',
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#002855] mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-[#0077B6] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Estamos aquí para ayudarlo con su proyecto industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-[#002855] mb-8">Información de Contacto</h3>

            {/* WhatsApp Numbers */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#002855] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#25D366]"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                WhatsApp
              </h4>
              <div className="space-y-3">
                {whatsappNumbers.map((wa, index) => (
                  <a
                    key={index}
                    href={wa.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl hover:bg-[#25D366] hover:text-white hover:shadow-md transition-all duration-200 transform hover:scale-[1.01] group"
                  >
                    <div className="bg-[#25D366] group-hover:bg-white text-white group-hover:text-[#25D366] p-3 rounded-lg flex-shrink-0 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold">{wa.number}</p>
                      <p className="text-sm opacity-80">{wa.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#002855] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0077B6]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Teléfonos
              </h4>
              <div className="space-y-3">
                {phoneNumbers.map((phone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100"
                  >
                    <div className="bg-[#0077B6] text-white p-3 rounded-lg flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#002855]">{phone.number}</p>
                      <p className="text-sm text-gray-600">{phone.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#002855] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0077B6]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Correos Electrónicos
              </h4>
              <div className="space-y-3">
                {emails.map((emailItem, index) => (
                  <a
                    key={index}
                    href={`mailto:${emailItem.email}`}
                    className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl hover:bg-[#0077B6] hover:text-white hover:shadow-md transition-all duration-200 transform hover:scale-[1.01] group"
                  >
                    <div className="bg-[#0077B6] group-hover:bg-white text-white group-hover:text-[#0077B6] p-3 rounded-lg flex-shrink-0 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold">{emailItem.email}</p>
                      <p className="text-sm opacity-80">{emailItem.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-[#002855] mb-6">Envíenos un Mensaje</h3>

              {/* Form Type Selector */}
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setFormType('consulta')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    formType === 'consulta'
                      ? 'bg-[#0077B6] shadow-md text-white'
                      : 'bg-white text-[#002855] border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline mr-2"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  Consulta
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('cv')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    formType === 'cv'
                      ? 'bg-[#0077B6] shadow-md text-white'
                      : 'bg-white text-[#002855] border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                  Enviar CV
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#002855] mb-2 font-semibold">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6]"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#002855] mb-2 font-semibold">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de su empresa"
                    className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#002855] mb-2 font-semibold">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6]"
                  />
                </div>

                {formType === 'consulta' ? (
                  <div>
                    <label htmlFor="message" className="block text-[#002855] mb-2 font-semibold">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntenos sobre su proyecto..."
                      rows={5}
                      className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6] resize-none"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="message" className="block text-[#002855] mb-2 font-semibold">
                        Mensaje (Opcional)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntenos sobre su experiencia y habilidades..."
                        rows={3}
                        className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6] resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="cv" className="block text-[#002855] mb-2 font-semibold">
                        Adjuntar CV *
                      </label>
                      <div className="relative">
                        <Input
                          id="cv"
                          name="cv"
                          type="file"
                          required
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full bg-white border-gray-300 focus:border-[#0077B6] focus:ring-[#0077B6] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0077B6] file:text-white hover:file:bg-[#00509d]"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Formatos aceptados: PDF, DOC, DOCX (Máx. 5MB)
                      </p>
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#0077B6] hover:bg-[#00509d] text-white py-6 text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-200 transform active:scale-98 flex items-center justify-center"
                >
                  {formType === 'consulta' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      Enviar Mensaje
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                      Enviar CV
                    </>
                  )}
                </Button>
              </form>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <h4 className="text-xl font-bold text-[#002855] mb-4 text-center">
                  Redes Sociales
                </h4>
                <div className="flex gap-4 justify-center">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-[#002855] text-white p-4 rounded-xl ${social.color} transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-3xl font-bold text-[#002855] mb-8 text-center">Ubicación</h3>
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.829562725046!2d-62.08331908465545!3d-38.88243617957297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda98759fb9e1d%3A0xc47e30d7bfaeb91b!2sDufourq%20560%2C%20B8109%20Punta%20Alta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de SINSA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}