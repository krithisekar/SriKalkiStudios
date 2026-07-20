import React, { useState } from 'react';
import ServiceSelector from './components/ServiceSelector';
import QuantitySelector from './components/QuantitySelector';
import InvoiceSummary from './components/InvoiceSummary';
import { services, pricing } from './data/pricing';

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleQuantitySelect = (quantity) => {
    setSelectedQuantity(quantity);
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
      setSelectedQuantity(null);
    } else if (step === 2) {
      setStep(1);
      setSelectedService(null);
    }
  };

  return (
    <>
      {step === 1 && (
        <ServiceSelector 
          services={services} 
          onSelect={handleServiceSelect} 
        />
      )}
      
      {step === 2 && selectedService && (
        <QuantitySelector 
          service={selectedService}
          options={pricing[selectedService.id]}
          onSelect={handleQuantitySelect}
          onBack={handleBack}
        />
      )}
      
      {step === 3 && selectedService && selectedQuantity && (
        <InvoiceSummary 
          service={selectedService}
          quantity={selectedQuantity}
          onBack={handleBack}
        />
      )}
    </>
  );
}

export default App;
