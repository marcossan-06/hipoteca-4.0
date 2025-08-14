import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Prueba Gratuita",
      price: "0",
      period: "Gratis para siempre",
      description: "Perfecto para comenzar",
      features: [
        "1 simulación completa",
        "Comparación básica de ofertas",
        "Calculadora de hipotecas",
        "Soporte por email"
      ],
      cta: "Empezar Gratis",
      popular: false,
      icon: Zap,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Personal",
      price: "5.99",
      period: "por mes",
      description: "Para usuarios particulares",
      features: [
        "3 simulaciones por mes",
        "Comparación avanzada",
        "Alertas de mejores ofertas",
        "Soporte prioritario",
        "Documentación automática",
        "Seguimiento de solicitudes"
      ],
      cta: "Elegir Plan Personal",
      popular: true,
      icon: Star,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Pro",
      price: "8.99", 
      period: "por mes",
      description: "Para usuarios avanzados",
      features: [
        "Simulaciones ilimitadas",
        "Comparación premium",
        "Asesor personal dedicado",
        "Soporte 24/7",
        "Reportes personalizados",
        "Notificaciones en tiempo real",
        "Acceso a ofertas exclusivas"
      ],
      cta: "Elegir Plan Pro",
      popular: false,
      icon: Crown,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. 
            Empieza gratis y actualiza cuando lo necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white shadow-2xl scale-105 border-2 border-blue-500 hover:scale-110'
                    : 'bg-white shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} shadow-lg mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      €{plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Popular Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-700 transition-colors">
            Contacta con nuestro equipo comercial
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;