import React from 'react';
import { FileText, Calculator, BarChart3, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Completa tus datos",
      description: "Introduce información básica sobre tus ingresos, ahorro y la vivienda que quieres comprar.",
      color: "blue"
    },
    {
      number: "02",
      icon: Calculator,
      title: "Simulación personalizada",
      description: "Nuestro algoritmo calcula tu capacidad de financiación y las mejores condiciones para tu perfil.",
      color: "green"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Compara ofertas",
      description: "Revisa las propuestas de diferentes bancos y elige la que mejor se adapte a tus necesidades.",
      color: "purple"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Solicita tu hipoteca",
      description: "Contacta directamente con el banco elegido con toda la documentación preparada.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        accent: "text-blue-500",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-600",
        accent: "text-green-500",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        accent: "text-purple-500",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        accent: "text-orange-500",
        border: "border-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 4 pasos conseguirás la hipoteca perfecta para ti
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = getColorClasses(step.color);

              return (
                <div key={index} className="relative text-center group">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 -right-6 w-12 h-12 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className={`relative mx-auto w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${colors.bg} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold ${colors.text} group-hover:scale-105 transition-transform duration-300`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Line (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-200 rounded-full" />
                    </div>
                  )}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Empezar Mi Simulación
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;