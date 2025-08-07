import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calculator, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface SimulatorData {
  propertyPrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
}

interface SimulatorResult {
  monthlyPayment: number;
  totalRepayment: number;
  totalInterest: number;
  debtToIncomeRatio: number;
}

const MortgageSimulator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<SimulatorData>({
    propertyPrice: 300000,
    downPayment: 60000,
    interestRate: 2.8,
    loanTerm: 30
  });
  const [result, setResult] = useState<SimulatorResult | null>(null);

  const totalSteps = 4;

  const calculateMortgage = () => {
    const principal = data.propertyPrice - data.downPayment;
    const monthlyRate = data.interestRate / 100 / 12;
    const numberOfPayments = data.loanTerm * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalRepayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalRepayment - principal;
    const debtToIncomeRatio = 34.3; // Example calculation

    setResult({
      monthlyPayment,
      totalRepayment,
      totalInterest,
      debtToIncomeRatio
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateMortgage();
      setCurrentStep(5); // Results screen
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetSimulator = () => {
    setCurrentStep(1);
    setResult(null);
  };

  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return 'inactive';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Precio de la vivienda</h3>
              <p className="text-gray-600">¿Cuánto vale la propiedad que quieres comprar?</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Precio de la vivienda (€)
              </label>
              <input
                type="number"
                value={data.propertyPrice}
                onChange={(e) => setData({...data, propertyPrice: Number(e.target.value)})}
                className="form-input"
                placeholder="300.000"
              />
              <div className="text-center text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {formatCurrency(data.propertyPrice)}
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Entrada inicial</h3>
              <p className="text-gray-600">¿Cuánto puedes pagar como entrada?</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Entrada (€)
              </label>
              <input
                type="number"
                value={data.downPayment}
                onChange={(e) => setData({...data, downPayment: Number(e.target.value)})}
                className="form-input"
                placeholder="60.000"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm text-gray-600">Entrada</div>
                  <div className="text-xl font-bold text-blue-600">
                    {formatCurrency(data.downPayment)}
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-sm text-gray-600">A financiar</div>
                  <div className="text-xl font-bold text-green-600">
                    {formatCurrency(data.propertyPrice - data.downPayment)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tipo de interés</h3>
              <p className="text-gray-600">¿Cuál es el tipo de interés anual?</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de interés anual (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={data.interestRate}
                onChange={(e) => setData({...data, interestRate: Number(e.target.value)})}
                className="form-input"
                placeholder="2.8"
              />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  {formatPercentage(data.interestRate)}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Tipo medio actual en el mercado: 2.8%
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plazo del préstamo</h3>
              <p className="text-gray-600">¿En cuántos años quieres pagarlo?</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Años
              </label>
              <input
                type="number"
                value={data.loanTerm}
                onChange={(e) => setData({...data, loanTerm: Number(e.target.value)})}
                className="form-input"
                placeholder="30"
              />
              <div className="grid grid-cols-3 gap-3">
                {[20, 25, 30].map((years) => (
                  <button
                    key={years}
                    onClick={() => setData({...data, loanTerm: years})}
                    className={`p-3 rounded-xl border-2 transition-smooth ${
                      data.loanTerm === years 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {years} años
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 5:
        return result && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Tu simulación está lista!</h3>
              <p className="text-gray-600">Aquí tienes el desglose completo de tu hipoteca</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Calculator className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-900">Resultados de tu simulación</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cuota mensual estimada:</span>
                    <span className="font-bold text-blue-600 text-xl">
                      {formatCurrency(result.monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Importe a financiar:</span>
                    <span className="font-semibold">
                      {formatCurrency(data.propertyPrice - data.downPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Entrada:</span>
                    <span className="font-semibold">
                      {formatCurrency(data.downPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ratio de endeudamiento:</span>
                    <span className="font-semibold text-green-600">
                      {formatPercentage(result.debtToIncomeRatio)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-900">Capacidad de financiación</h4>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatCurrency(350000)}
                  </div>
                  <div className="text-sm text-green-700 mb-4">
                    Financiación máxima recomendada
                  </div>
                  <div className="space-y-2 text-sm text-green-700">
                    <div>• Mantén el ratio de endeudamiento bajo el 35%</div>
                    <div>• Reserva un 10% extra para gastos de compra</div>
                    <div>• Considera seguros de vida y hogar</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={resetSimulator}
                className="btn-hero"
              >
                Nueva Simulación
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="simulator-window max-w-4xl mx-auto">
      {/* Progress Indicators */}
      {currentStep <= totalSteps && (
        <div className="flex justify-center items-center mb-8 space-x-4">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <React.Fragment key={step}>
              <div className={`step-indicator ${getStepStatus(step)}`}>
                {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
              </div>
              {step < totalSteps && (
                <div className={`h-1 w-8 rounded transition-smooth ${
                  step < currentStep ? 'bg-green-400' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Step Content */}
      <div className="min-h-[400px] flex items-center justify-center">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      {currentStep <= totalSteps && (
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-smooth ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Anterior
          </button>

          <div className="text-sm text-gray-500">
            Paso {currentStep} de {totalSteps}
          </div>

          <button
            onClick={handleNext}
            className="btn-hero flex items-center"
          >
            {currentStep === totalSteps ? 'Calcular' : 'Siguiente'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MortgageSimulator;