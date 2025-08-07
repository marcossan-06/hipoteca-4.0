import React from 'react';
import { Calculator, TrendingUp, Clock, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calculator,
      title: "Simulación Inteligente",
      description: "Calcula tu cuota mensual, capacidad de financiación y ratio de endeudamiento de forma precisa y personalizada.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Mejores Condiciones",
      description: "Accede a ofertas exclusivas y compara tipos de interés de los principales bancos del mercado.",
      color: "green",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Proceso Simplificado",
      description: "Completa tu solicitud en minutos sin papeleo innecesario. Todo digital y completamente seguro.",
      color: "purple",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      title: "100% Gratuito",
      description: "Sin comisiones ocultas ni costes adicionales. Nuestra plataforma es completamente gratuita para ti.",
      color: "orange",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hipoteca 4.0
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La tecnología al servicio de tu futuro hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Container */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;