/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Star, Quote } from 'lucide-react';

// --- SERVICE CARD ---
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
  onConsultClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, onConsultClick }) => {
  return (
    <motion.a 
      href="#contacto"
      whileHover={{ y: -5 }}
      onClick={(e) => {
        if (onConsultClick) onConsultClick();
      }}
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-brand-tan-dark/50 flex flex-col h-full group hover:bg-brand-900 cursor-pointer block"
    >
      <div className="w-12 h-12 bg-brand-tan rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-brand-900 mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-brand-800 text-sm leading-relaxed mb-6 flex-grow group-hover:text-brand-tan/90 transition-colors">{description}</p>
      
      {price && (
        <div className="mb-4 inline-block px-3 py-1 bg-brand-tan/50 text-brand-900 text-sm font-bold rounded-md group-hover:bg-brand-gold group-hover:text-white transition-colors">
          {price}
        </div>
      )}

      <div className="flex items-center text-brand-gold text-sm font-semibold group-hover:text-brand-gold mt-auto">
        Consultar ahora 
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
};

// --- FAQ ACCORDION ---
interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-tan-dark/50 hover:bg-brand-tan/20 hover:scale-[1.01] transition-all duration-300 px-4 rounded-lg">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg text-brand-900 font-medium pr-8">{question}</span>
        <span className="text-brand-gold flex-shrink-0">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-800 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- TESTIMONIAL CARD ---
interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-sm border border-brand-tan-dark/30 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <Quote className="text-brand-gold/20 w-10 h-10" />
      </div>
      
      <div className="flex gap-1 text-brand-gold mb-4">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>

      <p className="font-serif italic text-brand-800 mb-6 flex-grow leading-relaxed">"{text}"</p>
      
      <div>
        <h4 className="font-bold text-brand-900 text-sm">{name}</h4>
        <p className="text-xs text-brand-500 uppercase tracking-wider mt-1">{role}</p>
      </div>
    </motion.div>
  );
};