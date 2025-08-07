import React from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import MortgageSimulator from '../components/MortgageSimulator';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Mortgage Simulator */}
      <section id="simulator" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simulador de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hipotecas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calcula tu hipoteca ideal en minutos con nuestro simulador avanzado
            </p>
          </div>
          
          <MortgageSimulator />
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
