import React from 'react';
import { ArrowRight, Zap, BarChart3, Clock } from 'lucide-react';

const HeroSection = () => {
  const scrollToSimulator = () => {
    const simulatorSection = document.getElementById('simulator');
    simulatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-800/90" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Tu hipoteca perfecta en{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              3 minutos
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100">
            La plataforma más avanzada para{' '}
            <span className="font-semibold text-white">simular, comparar y encontrar</span>{' '}
            la mejor hipoteca del mercado con tecnología de última generación
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToSimulator}
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:text-yellow-500 transition-colors" />
              Simular Ahora Gratis
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-700">
              <BarChart3 className="w-6 h-6 mr-3" />
              Ver Planes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                +50.000
              </div>
              <div className="text-lg text-blue-100">
                Simulaciones realizadas
              </div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                2.8%
              </div>
              <div className="text-lg text-blue-100">
                Mejor tipo medio
              </div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-yellow-300 mr-2" />
                <div className="text-4xl lg:text-5xl font-bold text-yellow-300">
                  2 min
                </div>
              </div>
              <div className="text-lg text-blue-100">
                Tiempo promedio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;