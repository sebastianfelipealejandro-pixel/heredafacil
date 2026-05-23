
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] rounded-t-full md:rounded-t-[200px] overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
      <motion.img 
        /* Optimized image: Use srcSet to serve smaller images on mobile (400px) vs desktop */
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
        srcSet="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400 400w,
                https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800 800w,
                https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200 1200w"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Asesoría legal herencias" 
        className="w-full h-full object-cover"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        loading="eager" // Load immediately as it is above the fold
        fetchPriority="high" // Critical for LCP score
      />
      
      {/* Quote Overlay */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-brand-gold"
      >
         <p className="font-serif italic text-brand-900 text-lg md:text-xl leading-relaxed">
           "Tu historia familiar merece ser preservada. Nosotros nos encargamos de los trámites legales."
         </p>
      </motion.div>
    </div>
  );
};

export const AboutImage: React.FC = () => {
  return (
    <div className="relative">
        <div className="aspect-[3/4] md:aspect-square rounded-lg overflow-hidden shadow-xl bg-gray-100">
             <img 
                /* Optimized image: Using wsrv.nl to proxy, resize, and convert the large PUCV image to WebP */
                src="https://wsrv.nl/?url=estudiantespucv.cl/wp-content/uploads/2024/08/DSCF6174.jpg&w=800&q=80&output=webp" 
                alt="Oficina de abogados PUCV" 
                className="w-full h-full object-cover"
                loading="lazy" // Lazy load for performance as it is below fold
                width="800"
                height="800"
            />
        </div>
        
        {/* Floating Stats Card */}
        <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-4 md:right-[-2rem] bg-brand-900 text-white p-8 rounded-lg shadow-xl max-w-[200px]"
        >
            <div className="flex items-center gap-2 mb-2 text-brand-gold">
                <Scale size={24} />
                <span className="font-bold text-2xl">10+</span>
            </div>
            <p className="text-sm font-serif leading-tight">Años de experiencia protegiendo derechos hereditarios.</p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-900/10 rounded-full blur-2xl -z-10"></div>
    </div>
  );
};
