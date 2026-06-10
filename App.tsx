/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ArrowRight, FileText, Scale, Users, 
  Calculator, Gavel, FileCheck, Send,
  Facebook, Instagram, Youtube, CheckCircle, AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroImage, AboutImage } from './components/QuantumScene';
import { ServiceCard, FAQItem, TestimonialCard } from './components/Diagrams';

// Utility to trigger conversion tracking
const trackConversion = (url?: string) => {
  if (typeof (window as any).gtag_report_conversion === 'function') {
    (window as any).gtag_report_conversion(url);
  } else if (url) {
    window.location.href = url;
  }
};

const HFLogo: React.FC<{ colorH?: string; colorF?: string; className?: string }> = ({ 
  colorH = "#C5A065", 
  colorF = "#C8B29E", 
  className = "w-12 h-12 mr-3" 
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
     <filter id="shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.2)" />
     </filter>
     <g style={{ fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}>
       <text x="10" y="85" fontSize="90" fill={colorH} style={{ filter: 'url(#shadow)' }}>H</text>
       <text x="45" y="85" fontSize="90" fill={colorF} style={{ filter: 'url(#shadow)' }}>F</text>
     </g>
  </svg>
);

const ContactPage: React.FC<{ handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void; formStatus: string }> = ({ handleFormSubmit, formStatus }) => {
  useEffect(() => {
    // Dynamic fallback to load HubSpot script
    if (typeof window !== 'undefined' && !document.getElementById('hs-script-loader')) {
      const script = document.createElement('script');
      script.id = 'hs-script-loader';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = '//js.hs-scripts.com/51574660.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-tan min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <div className="inline-block px-3 py-1 border border-brand-gold/30 rounded-full text-xs font-bold text-brand-gold mb-6 uppercase tracking-wider">
              Asesoría Legal de Excelencia
            </div>
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-brand-900 leading-tight">
              Hablemos de <br/><span className="text-brand-gold italic font-serif">tu caso</span>
            </h1>
            <p className="text-brand-800 text-lg mb-8 leading-relaxed max-w-lg">
              Somos un equipo de abogados de la <strong>Pontificia Universidad Católica de Valparaíso</strong>, especializados en posesiones efectivas y herencias en todo Chile.
            </p>
            <p className="text-brand-800 text-md mb-12 leading-relaxed max-w-lg opacity-90">
              Completa el formulario a la derecha indicando tus datos y el servicio de tu interés. Un especialista analizará tu situación legal antes de llamarte para darte una orientación inicial gratuita.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/56937608201?text=Vengo%20de%20la%20pagina%20web%20me%20encataria%20cotizar%20los%20servicios%20legales" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-white/40 p-4 rounded-lg transition-colors border border-transparent hover:border-brand-tan-dark"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.37 5.054L2 22l5.075-1.33a9.965 9.965 0 0 0 4.93 1.314h.005c5.507 0 9.99-4.479 9.99-9.988 0-2.67-1.037-5.18-2.92-7.062C17.2 3.053 14.686 2 12.012 2zm6.7 14.17c-.228.64-.81 1.2-1.417 1.5-1.025.509-2.337.07-3.984-.59-2.73-1.09-4.515-3.86-4.65-4.045-.136-.18-1.11-1.48-1.11-2.813 0-1.338.702-1.995.95-2.25.228-.23.51-.305.68-.305.17 0 .34.005.488.01.15.01.35-.06.55.42.203.49.697 1.7.757 1.83.06.12.1.27.01.45-.08.18-.13.28-.27.43-.13.15-.28.34-.4.48-.12.14-.25.3-.1.56.15.26.66 1.09 1.41 1.76.97.86 1.79 1.13 2.05 1.26.26.13.41.11.56-.05.15-.17.65-.75.82-.99.17-.25.35-.2.58-.12.24.08 1.52.72 1.78.85.27.13.44.2.51.32.07.12.07.7-.16 1.34z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Escríbenos por WhatsApp</h4>
                  <p className="text-brand-gold text-lg group-hover:underline font-semibold">+56 9 3760 8201</p>
                </div>
              </a>

              <a 
                href="mailto:heredafacil@gmail.com" 
                className="flex items-center gap-4 group hover:bg-white/40 p-4 rounded-lg transition-colors border border-transparent hover:border-brand-tan-dark"
              >
                <div className="w-12 h-12 bg-brand-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Correo Electrónico</h4>
                  <p className="text-brand-gold text-lg group-hover:underline font-semibold">heredafacil@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-10 text-brand-900 shadow-2xl w-full border border-brand-tan-dark/50 animate-fade-in-up">
            <h3 className="font-serif text-3xl font-bold mb-2">Formulario de Contacto</h3>
            <p className="text-sm text-brand-500 mb-8">Completa los datos a continuación y agenda tu asesoría.</p>
            
            <form id="form-contacto" className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Nombre</label>
                  <input type="text" name="name" required placeholder="Tu nombre completo" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Teléfono</label>
                  <input type="tel" name="phone" required placeholder="+56 9..." className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Correo Electrónico</label>
                <input type="email" name="email" required placeholder="nombre@correo.com" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Servicio</label>
                <select name="service" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none">
                  <option value="Posesión Efectiva">Posesión Efectiva</option>
                  <option value="Testamento">Testamento</option>
                  <option value="Juicio de Partición">Juicio de Partición</option>
                  <option value="Asesoría General">Asesoría General</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Mensaje</label>
                <textarea name="message" rows={3} placeholder="Breve descripción de tu caso (opcional)..." className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`w-full font-bold py-4 rounded-md shadow-md transition-all flex items-center justify-center gap-2 ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : formStatus === 'error'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-brand-gold text-white hover:bg-brand-gold/90'
                }`}
              >
                {formStatus === 'sending' ? (
                  <>Enviando... <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div></>
                ) : formStatus === 'success' ? (
                  <>¡Mensaje Enviado! <CheckCircle size={18} /></>
                ) : formStatus === 'error' ? (
                  <>Error al enviar <AlertCircle size={18} /></>
                ) : (
                  <>Enviar consulta ahora <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThankYouPage: React.FC<{ navigate: (to: string) => void }> = ({ navigate }) => {
  useEffect(() => {
    // Dynamic fallback to load HubSpot script
    if (typeof window !== 'undefined' && !document.getElementById('hs-script-loader')) {
      const script = document.createElement('script');
      script.id = 'hs-script-loader';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = '//js.hs-scripts.com/51574660.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-tan min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 text-center max-w-2xl animate-fade-in-up">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle size={48} />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-brand-900 leading-tight">
          ¡Muchas gracias <br/>por <span className="text-brand-gold italic font-serif">tu consulta</span>!
        </h1>
        <p className="text-brand-800 text-lg mb-8 leading-relaxed">
          Hemos recibido tus datos con éxito en nuestro sistema de atención. Un abogado titulado de la <strong>Pontificia Universidad Católica de Valparaíso</strong> revisará los antecedentes preliminares de tu caso.
        </p>
        <p className="text-brand-800 text-md mb-12 leading-relaxed opacity-95">
          Te contactaremos en un plazo máximo de <strong>24 horas hábiles</strong> (vía telefónica o WhatsApp) para brindarte tu orientación legal inicial gratuita.
        </p>
        <button 
          onClick={() => navigate('/')} 
          className="px-8 py-4 bg-brand-900 text-white font-bold rounded-sm shadow-md hover:bg-brand-800 transition-colors inline-block"
        >
          Volver a la Página Principal
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track page view in HubSpot whenever the path changes
  useEffect(() => {
    try {
      const _hsq = (window as any)._hsq = (window as any)._hsq || [];
      _hsq.push(['setPath', path]);
      _hsq.push(['trackPageView']);
    } catch (err) {
      console.warn("HubSpot tracking error on path change:", err);
    }
  }, [path]);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    // Trigger conversion tracking exactly when the button is effectively clicked/submitted
    trackConversion();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        // Push user identity to HubSpot upon successful form submission
        try {
          const _hsq = (window as any)._hsq = (window as any)._hsq || [];
          _hsq.push(['identify', {
            email: payload.email,
            firstname: payload.name,
            phone: payload.phone
          }]);
        } catch (err) {
          console.warn("HubSpot identity tracking error:", err);
        }

        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
        navigate('/gracias');
      } else {
        console.error("API submission error:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-brand-tan font-sans text-brand-900">
      
      {/* Navigation - White Background */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <HFLogo />
            <div className="font-serif text-3xl tracking-tight flex items-center">
              <span className="font-bold text-brand-900">Hereda</span>
              <span className="italic text-brand-gold font-serif">Fácil</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-brand-900">
            <a href="#inicio" onClick={handleNavClick('inicio')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Inicio</a>
            <a href="#nosotros" onClick={handleNavClick('nosotros')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Nosotros</a>
            <a href="#servicios" onClick={handleNavClick('servicios')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Servicios</a>
            <a href="#como-funciona" onClick={handleNavClick('como-funciona')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Cómo funciona</a>
            <a href="#testimonios" onClick={handleNavClick('testimonios')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Testimonios</a>
            <a href="#preguntas" onClick={handleNavClick('preguntas')} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Preguntas</a>
            <a href="https://blog.heredafacil.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Blog</a>
            <a href="/contacto" onClick={(e) => { e.preventDefault(); navigate('/contacto'); }} className="hover:text-brand-gold transition-colors uppercase text-xs font-bold tracking-widest">Contacto</a>
            <a 
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate('/contacto'); }}
              className="px-6 py-3 bg-brand-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-800 transition-colors shadow-sm rounded-sm"
            >
              Agenda tu Consulta
            </a>
          </div>

          <button className="lg:hidden text-brand-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in text-brand-900">
            <a href="#inicio" onClick={handleNavClick('inicio')} className="hover:text-brand-gold">Inicio</a>
            <a href="#nosotros" onClick={handleNavClick('nosotros')} className="hover:text-brand-gold">Nosotros</a>
            <a href="#servicios" onClick={handleNavClick('servicios')} className="hover:text-brand-gold">Servicios</a>
            <a href="#como-funciona" onClick={handleNavClick('como-funciona')} className="hover:text-brand-gold">Cómo funciona</a>
            <a href="https://blog.heredafacil.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">Blog</a>
            <a href="/contacto" onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate('/contacto'); }} className="hover:text-brand-gold">Contacto</a>
            <a 
              href="/contacto" 
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate('/contacto'); }}
              className="px-8 py-3 bg-brand-900 text-white rounded-sm"
            >
              Agenda tu Consulta
            </a>
        </div>
      )}

      {path === '/contacto' ? (
        <ContactPage handleFormSubmit={handleFormSubmit} formStatus={formStatus} />
      ) : path === '/gracias' ? (
        <ThankYouPage navigate={navigate} />
      ) : (
        <>
          {/* Hero Section */}
          <header id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 bg-brand-gold/20 text-brand-900 text-xs font-bold tracking-widest uppercase rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Abogados Expertos en Herencias
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-brand-900">
                Protegemos tu <br/>
                <span className="text-brand-gold italic">Patrimonio Familiar</span>
              </h1>
              <p className="text-lg text-brand-800 leading-relaxed mb-10 max-w-lg">
                Expertos en Posesiones Efectivas y Herencias en la V Región y todo Chile. Asesoría jurídica humana para resolver tus trámites con tranquilidad y seguridad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <motion.a 
                    href="/contacto"
                    onClick={(e) => { e.preventDefault(); navigate('/contacto'); }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ 
                      scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                    className="px-8 py-4 bg-brand-gold text-white font-bold rounded-sm shadow-md hover:bg-brand-gold/90 transition-colors text-center cursor-pointer inline-block"
                 >
                    Agenda tu Consulta
                 </motion.a>
                 <a 
                    href="https://wa.me/56937608201?text=Vengo%20de%20la%20pagina%20web%20me%20encataria%20cotizar%20los%20servicios%20legales" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion("https://wa.me/56937608201")}
                    className="px-8 py-4 flex items-center justify-center gap-3 border border-brand-900 text-brand-900 font-bold rounded-sm hover:bg-brand-900 hover:text-white transition-all group"
                 >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.37 5.054L2 22l5.075-1.33a9.965 9.965 0 0 0 4.93 1.314h.005c5.507 0 9.99-4.479 9.99-9.988 0-2.67-1.037-5.18-2.92-7.062C17.2 3.053 14.686 2 12.012 2zm6.7 14.17c-.228.64-.81 1.2-1.417 1.5-1.025.509-2.337.07-3.984-.59-2.73-1.09-4.515-3.86-4.65-4.045-.136-.18-1.11-1.48-1.11-2.813 0-1.338.702-1.995.95-2.25.228-.23.51-.305.68-.305.17 0 .34.005.488.01.15.01.35-.06.55.42.203.49.697 1.7.757 1.83.06.12.1.27.01.45-.08.18-.13.28-.27.43-.13.15-.28.34-.4.48-.12.14-.25.3-.1.56.15.26.66 1.09 1.41 1.76.97.86 1.79 1.13 2.05 1.26.26.13.41.11.56-.05.15-.17.65-.75.82-.99.17-.25.35-.2.58-.12.24.08 1.52.72 1.78.85.27.13.44.2.51.32.07.12.07.7-.16 1.34z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase font-normal opacity-70">Escríbenos por WhatsApp</span>
                      <span>+56 9 3760 8201</span>
                    </div>
                 </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-brand-800 font-medium opacity-80">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Atención 100% Online
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Respuesta en 24hrs
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
               <HeroImage />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="nosotros" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <AboutImage />
                </div>
                
                <div className="md:pl-10 mt-12 md:mt-0">
                    <div className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Sobre Nosotros</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-8 text-brand-900 leading-tight">
                        Compromiso con la <br/>
                        <span className="italic text-brand-gold">Excelencia Jurídica</span>
                    </h2>
                    <p className="text-brand-800 mb-6 leading-relaxed">
                        En Hereda Fácil, combinamos la rigurosidad del derecho con un trato cercano. Entendemos que detrás de cada herencia hay una historia familiar y un patrimonio que cuidar.
                    </p>
                    <p className="text-brand-800 mb-10 leading-relaxed">
                        Somos un equipo de abogados titulados de la <strong>Pontificia Universidad Católica de Valparaíso</strong>. Nuestra formación de excelencia nos permite abordar casos complejos con estrategias sólidas, garantizando que tus intereses estén siempre protegidos ante la ley.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 bg-brand-tan rounded-lg flex items-center justify-center text-brand-900 flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                                <Scale size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-bold mb-1">Ética</h4>
                                <p className="text-xs text-brand-800 leading-relaxed">Transparencia total en honorarios y procesos</p>
                            </div>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 bg-brand-tan rounded-lg flex items-center justify-center text-brand-900 flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-bold mb-1">Experiencia</h4>
                                <p className="text-xs text-brand-800 leading-relaxed">Conocimiento profundo del Código Civil chileno.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-24 bg-brand-tan">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Áreas de Práctica</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-900">Nuestras Soluciones Legales</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <ServiceCard 
                        icon={<FileCheck size={24} />}
                        title="Posesión Efectiva"
                        description="Tramitamos la posesión efectiva intestada ante el Registro Civil o testada ante Tribunales, asegurando la correcta individualización de herederos y bienes."
                        price="Desde $200.000"
                        onConsultClick={() => {}} 
                    />
                    <ServiceCard 
                        icon={<FileText size={24} />}
                        title="Testamentos"
                        description="Redacción y validación de testamentos para garantizar que tu voluntad se cumpla, respetando las asignaciones forzosas de la ley chilena."
                        price="Desde $250.000"
                        onConsultClick={() => {}}
                    />
                    <ServiceCard 
                        icon={<Users size={24} />}
                        title="Cesión de Derechos"
                        description="Asesoría en la compraventa o transferencia de derechos hereditarios entre herederos o a terceros, con redacción de escrituras."
                        price="Desde $250.000"
                        onConsultClick={() => {}}
                    />
                    <ServiceCard 
                        icon={<Gavel size={24} />}
                        title="Juicios de Partición"
                        description="Representación en juicios para dividir la comunidad hereditaria cuando no hay acuerdo entre los herederos sobre la venta o adjudicación."
                        onConsultClick={() => {}}
                    />
                    <ServiceCard 
                        icon={<Calculator size={24} />}
                        title="Impuestos Herencia"
                        description="Cálculo, declaración y gestión del pago del impuesto a la herencia ante el Servicio de Impuestos Internos (SII)."
                        onConsultClick={() => {}}
                    />
                    <ServiceCard 
                        icon={<Scale size={24} />}
                        title="Regularización"
                        description="Saneamiento de títulos de dominio de propiedades heredadas que presentan problemas registrales o de inscripción."
                        onConsultClick={() => {}}
                    />
                </div>

                {/* Otros servicios */}
                <div className="bg-white rounded-xl shadow-lg border border-brand-tan-dark/30 p-8 md:p-12 mb-16">
                    <div className="text-center mb-10">
                         <h3 className="font-serif text-3xl font-bold text-brand-900 mb-4">Otros Servicios y Honorarios</h3>
                         <p className="text-brand-800">Transparencia en nuestros valores para una planificación segura.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-brand-tan/10 p-6 rounded-lg border border-brand-tan/50 text-center hover:shadow-md transition-all">
                             <div className="text-brand-gold mb-3 flex justify-center"><FileText size={32} /></div>
                             <h4 className="font-bold text-brand-900 mb-2">Compraventas</h4>
                             <div className="text-xl font-serif text-brand-gold font-medium">Desde $150.000</div>
                        </div>
                        <div className="bg-brand-tan/10 p-6 rounded-lg border border-brand-tan/50 text-center hover:shadow-md transition-all">
                             <div className="text-brand-gold mb-3 flex justify-center"><FileCheck size={32} /></div>
                             <h4 className="font-bold text-brand-900 mb-2">Promesas</h4>
                             <div className="text-xl font-serif text-brand-gold font-medium">Desde $100.000</div>
                        </div>
                        <div className="bg-brand-tan/10 p-6 rounded-lg border border-brand-tan/50 text-center hover:shadow-md transition-all">
                             <div className="text-brand-gold mb-3 flex justify-center"><Users size={32} /></div>
                             <h4 className="font-bold text-brand-900 mb-2">Poderes</h4>
                             <div className="text-xl font-serif text-brand-gold font-medium">Desde $80.000</div>
                        </div>
                        <div className="bg-brand-900 p-6 rounded-lg shadow-lg text-center transform lg:scale-105 border border-brand-gold/30">
                             <div className="text-brand-gold mb-3 flex justify-center"><Scale size={32} /></div>
                             <h4 className="font-bold text-white mb-2 leading-tight">Consulta Jurídica<br/>(Sucesorio y Civil)</h4>
                             <div className="text-2xl font-serif text-brand-gold font-bold mt-3">$30.000</div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-800 mb-6">¿No encuentras lo que buscas? Contáctanos para un análisis personalizado.</p>
                    <button 
                      onClick={() => navigate('/contacto')} 
                      className="px-8 py-3 bg-brand-900 text-white font-bold rounded-full shadow-lg hover:bg-brand-800 active:opacity-50 active:blur-[1px] transition-all"
                    >
                        Hablar con un Abogado
                    </button>
                </div>
            </div>
        </section>

        {/* How it Works Section */}
        <section id="como-funciona" className="py-24 bg-brand-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-24">
                    <div>
                        <div className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Metodología</div>
                        <h2 className="font-serif text-4xl md:text-6xl text-white">Cómo funciona</h2>
                    </div>
                    <div className="lg:border-l lg:border-white/10 lg:pl-10">
                        <p className="font-serif italic text-xl md:text-2xl text-brand-tan/70 max-w-lg">
                            "Hemos simplificado el proceso legal chileno en 4 etapas claras para que sepas exactamente dónde estás."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-8">
                    {[
                        { num: '01', title: 'Diagnóstico', desc: 'Evaluación de tu caso vía telefónica o WhatsApp sin costo inicial.' },
                        { num: '02', title: 'Estrategia', desc: 'Recopilamos antecedentes y definimos la ruta legal más eficiente.' },
                        { num: '03', title: 'Resolución', desc: 'Tramitamos y obtenemos tu Posesión Efectiva o documento legal.' },
                        { num: '04', title: 'Inscripción', desc: 'Inscribimos los bienes a nombre de los herederos en el CBR.' },
                    ].map((step, idx) => (
                        <div key={idx} className="group cursor-default">
                            <div className="flex items-center mb-6 relative">
                                <div className="absolute left-0 w-[4rem] h-[1px] bg-brand-tan/20 top-1/2 -translate-y-1/2"></div>
                                <span className="text-6xl md:text-7xl font-serif text-brand-tan/[0.08] font-bold ml-2 relative z-0 tracking-tighter">{step.num}</span>
                                <span className="text-lg md:text-xl font-bold text-brand-gold absolute left-14 z-10 whitespace-nowrap bg-brand-900 pr-4">{step.num} {step.title}</span>
                            </div>
                            <p className="text-brand-tan/80 text-sm leading-relaxed pr-4">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center uppercase tracking-widest text-sm font-bold">
                     <a href="#contacto" onClick={(e) => { e.preventDefault(); navigate('/contacto'); }} className="inline-flex items-center text-brand-gold hover:text-white transition-colors cursor-pointer group">
                        Comienza tu trámite hoy <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={18} />
                     </a>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-24 bg-white">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Voces de Confianza</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-900">Lo que dicen nuestros clientes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard 
                        text="Después de meses intentando hacer el trámite sola en el Registro Civil y que me lo rechazaran por errores de forma, el equipo de Hereda Fácil lo solucionó en semanas. La paz mental no tiene precio."
                        name="María Angélica Rojas"
                        role="Sucesión Intestada"
                    />
                    <TestimonialCard 
                        text="La situación con mis hermanos era insostenible. El abogado actuó como un mediador firme pero respetuoso. Logramos vender la propiedad familiar y repartir lo justo sin destruir la relación."
                        name="Carlos Valenzuela"
                        role="Partición de común acuerdo"
                    />
                    <TestimonialCard 
                        text="Quería dejar todo ordenado para mis hijos. Me explicaron con una claridad increíble cómo funcionaban los impuestos y la libre disposición. Me sentí muy acompañada."
                        name="Patricia González"
                        role="Testamento y Planificación"
                    />
                </div>
             </div>
        </section>

        {/* FAQ */}
        <section id="preguntas" className="py-24 bg-white border-t border-brand-tan">
             <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <div className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Educación Legal</div>
                    <h2 className="font-serif text-4xl text-brand-900">Preguntas Frecuentes</h2>
                </div>

                <div className="space-y-2">
                    <FAQItem 
                        question="¿Qué es la Posesión Efectiva?"
                        answer="Es un trámite legal que permite a los herederos disponer de los bienes (ahorros, propiedades, vehículos) dejados por una persona fallecida. Sin este trámite, los bienes quedan legalmente 'congelados'."
                    />
                    <FAQItem 
                        question="¿Cuánto demora el trámite?"
                        answer="Para posesiones efectivas intestadas (sin testamento) ante el Registro Civil, el plazo promedio es de 2 a 4 meses. Las testadas (ante tribunales) pueden tomar de 6 a 12 meses dependiendo de la complejidad."
                    />
                    <FAQItem 
                        question="¿Qué pasa si hay deudas?"
                        answer="Las deudas hereditarias se pagan con el patrimonio de la herencia. Existe el 'Beneficio de Inventario', que asegura que los herederos no respondan por las deudas del fallecido con su propio dinero, solo hasta el monto de lo heredado."
                    />
                    <FAQItem 
                        question="¿Necesito abogado obligatoriamente?"
                        answer="Para la Posesión Efectiva ante el Registro Civil no es obligatorio, pero sí muy recomendable para evitar errores en el llenado del formulario que pueden costar meses de correcciones. Para trámites judiciales (testamentos, particiones), sí es obligatorio."
                    />
                </div>
             </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 bg-brand-900 text-white">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-block px-3 py-1 border border-brand-gold/30 rounded-full text-xs font-bold text-brand-gold mb-6 uppercase tracking-wider">Contáctanos ahora</div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">¿Listo para ordenar <br/><span className="text-brand-gold">tu patrimonio?</span></h2>
                        <p className="text-brand-tan/70 text-lg mb-12 leading-relaxed">
                            La primera orientación para evaluar tu caso es gratuita. Déjanos tus datos y un abogado experto analizará tu situación legal antes de contactarte.
                        </p>

                        <div className="space-y-8">
                            <a 
                                href="tel:+56937608201" 
                                onClick={() => trackConversion("tel:+56937608201")}
                                className="flex gap-4 items-start group hover:bg-brand-800/50 p-4 rounded-lg transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-900 mt-1 group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                {/** trackConversion updated to work here if they want to track calls too, but the main focus is the button below */}
                                <div>
                                    <h4 className="font-bold text-lg">Llámanos</h4>
                                    <p className="text-brand-gold text-xl group-hover:underline">+56 9 3760 8201</p>
                                    <p className="text-sm text-brand-tan/50">Lun - Vie: 09:00 - 18:00</p>
                                </div>
                            </a>
                            
                            <a 
                                href="mailto:heredafacil@gmail.com" 
                                onClick={() => trackConversion("mailto:heredafacil@gmail.com")}
                                className="flex gap-4 items-start group hover:bg-brand-800/50 p-4 rounded-lg transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-900 mt-1 group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Escríbenos</h4>
                                    <p className="text-brand-tan/80 group-hover:text-brand-gold transition-colors">heredafacil@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 md:p-10 text-brand-900 shadow-2xl">
                        <h3 className="font-serif text-2xl font-bold mb-2">Agenda tu hora</h3>
                        <p className="text-sm text-brand-500 mb-8">Completa el formulario y te contactaremos a la brevedad.</p>
                        
                        <form id="form-contacto" className="space-y-6" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Nombre</label>
                                    <input type="text" name="name" required placeholder="Tu nombre completo" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Teléfono</label>
                                    <input type="tel" name="phone" required placeholder="+56 9..." className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Correo Electrónico</label>
                                <input type="email" name="email" required placeholder="nombre@correo.com" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Servicio</label>
                                <select name="service" className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none">
                                    <option value="Posesión Efectiva">Posesión Efectiva</option>
                                    <option value="Testamento">Testamento</option>
                                    <option value="Juicio de Partición">Juicio de Partición</option>
                                    <option value="Asesoría General">Asesoría General</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Mensaje</label>
                                <textarea name="message" rows={3} placeholder="Breve descripción de tu caso (opcional)..." className="w-full bg-brand-tan/30 border border-brand-tan-dark p-3 rounded-md focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'sending' || formStatus === 'success'}
                                className={`w-full font-bold py-4 rounded-md shadow-md transition-all flex items-center justify-center gap-2 ${
                                    formStatus === 'success' 
                                        ? 'bg-green-600 text-white hover:bg-green-700' 
                                        : formStatus === 'error'
                                        ? 'bg-red-600 text-white hover:bg-red-700'
                                        : 'bg-brand-gold text-white hover:bg-brand-gold/90'
                                }`}
                            >
                                {formStatus === 'sending' ? (
                                    <>Enviando... <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div></>
                                ) : formStatus === 'success' ? (
                                    <>¡Mensaje Enviado! <CheckCircle size={18} /></>
                                ) : formStatus === 'error' ? (
                                    <>Error al enviar. Intenta de nuevo <AlertCircle size={18} /></>
                                ) : (
                                    <>Enviar consulta ahora <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                 </div>
            </div>
        </section>

      </main>
        </>
      )}

      <footer className="bg-brand-900 text-brand-tan-dark py-16 border-t border-brand-800">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="font-serif text-2xl font-bold text-white flex items-center mb-6">
                         <HFLogo colorH="#FFFFFF" colorF="#FFFFFF" />
                         <span className="font-bold text-white">Hereda</span><span className="italic text-white font-serif">Fácil</span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-70">
                        "Abogados Expertos en Herencias y Posesiones Efectivas. Simplificamos lo complejo para darte paz mental."
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="https://www.facebook.com/profile.php?id=61577196495217" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-tan-dark/30 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all cursor-pointer">
                            <Facebook size={16} />
                        </a>
                        <a href="https://www.instagram.com/heredafacil.cl" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-tan-dark/30 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all cursor-pointer">
                            <Instagram size={16} />
                        </a>
                         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-tan-dark/30 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all cursor-pointer">
                            <Youtube size={16} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Servicios</h4>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Posesión Efectiva</a></li>
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Testamentos</a></li>
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Cesión de Derechos</a></li>
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Juicios de Partición</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Términos y Condiciones</a></li>
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidad</a></li>
                        <li><a href="#" className="hover:text-brand-gold transition-colors">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contacto</h4>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li><a href="mailto:heredafacil@gmail.com" onClick={() => trackConversion("mailto:heredafacil@gmail.com")} className="hover:text-brand-gold">heredafacil@gmail.com</a></li>
                        <li><a href="tel:+56937608201" onClick={() => trackConversion("tel:+56937608201")} className="hover:text-brand-gold">+56 9 3760 8201</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                <p>&copy; 2026 Hereda Fácil. Todos los derechos reservados.</p>
                <p className="italic font-serif">Protegemos tu patrimonio, agilizamos el proceso y evitamos errores ❤️</p>
            </div>
        </div>
      </footer>
      
      {/* Floating Whatsapp Button */}
      <a 
        href="https://wa.me/56937608201" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => trackConversion("https://wa.me/56937608201")}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
};

export default App;