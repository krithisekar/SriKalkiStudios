import React from 'react';
import { ArrowLeft, Copy, Frame } from 'lucide-react';

export default function QuantitySelector({ service, options, onSelect, onBack }) {
  const subtitle = service.id === 'frame' ? 'Select the size of photo frame' : 'Select the number of copies';
  const IconComponent = service.id === 'frame' ? Frame : Copy;

  return (
    <div className="animate-in">
      <div className="header">
        <button className="btn-secondary" onClick={onBack}>
          <ArrowLeft size={20} /> Back
        </button>
        <h2 className="title">{service.label}</h2>
      </div>
      <p className="subtitle">{subtitle}</p>
      
      <div className="options-grid">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="option-card"
            onClick={() => onSelect(option)}
          >
            <IconComponent size={32} className="option-icon" />
            <span className="option-label">{option.label}</span>
            <span className="option-price">₹{option.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
