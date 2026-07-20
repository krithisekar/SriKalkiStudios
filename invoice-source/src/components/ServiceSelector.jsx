import React from 'react';
import { UserCircle, Image as ImageIcon, Frame, Smartphone, Shield, IdCard, Package, Flag, Book } from 'lucide-react';

const iconMap = {
  UserCircle,
  Image: ImageIcon,
  Frame,
  Smartphone,
  Shield,
  IdCard,
  Package,
  Flag,
  Book,
};

export default function ServiceSelector({ services, onSelect }) {
  return (
    <div className="animate-in">
      <h2 className="title">Select Service</h2>
      <div className="options-grid">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div
              key={service.id}
              className="option-card"
              onClick={() => onSelect(service)}
            >
              <IconComponent size={48} className="option-icon" />
              <span className="option-label">{service.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
