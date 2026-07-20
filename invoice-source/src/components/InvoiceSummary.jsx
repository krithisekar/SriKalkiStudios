import React, { useState } from 'react';
import { ArrowLeft, Printer, Minus, Plus } from 'lucide-react';

export default function InvoiceSummary({ service, quantity, onBack }) {
  const [itemCount, setItemCount] = useState(1);
  const [manualPrice, setManualPrice] = useState('');
  const [manualSize, setManualSize] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const handleIncrement = () => setItemCount(prev => (prev === '' ? 1 : prev + 1));
  const handleDecrement = () => setItemCount(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setItemCount(val);
    } else if (e.target.value === '') {
      setItemCount('');
    }
  };

  const handleInputBlur = () => {
    if (itemCount === '' || itemCount < 1) {
      setItemCount(1);
    }
  };

  const calculateTotal = () => {
    const count = itemCount === '' ? 1 : itemCount;
    
    if (quantity.isManualPrice) {
      const price = manualPrice === '' ? 0 : parseInt(manualPrice);
      return (isNaN(price) ? 0 : price) * count;
    }

    // Apply dynamic tiered pricing if the option has isDynamic flag
    if (quantity.isDynamic) {
      const unitPrice = count >= 20 ? 40 : 50;
      return unitPrice * count;
    }
    
    // Otherwise standard multiplier
    return quantity.price * count;
  };

  return (
    <div className="animate-in glass-panel">
      <div className="header">
        <button className="btn-secondary" onClick={onBack}>
          <ArrowLeft size={20} /> Back
        </button>
        <h2 className="title">Invoice Summary</h2>
      </div>

      <div className="summary-container" id="printable-invoice">
        <div className="invoice-header">
          <img src="./logo.png" alt="Sri Kalki Studios Logo" className="invoice-logo" />
          <h1 className="studio-name" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>ஸ்ரீ கல்கி ஸ்டுடியோஸ்</h1>
          <h3 className="studio-tagline" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>பெரியார் நகர், விருத்தாசலம்</h3>
          <p className="studio-location">9443405104 | 04143 796017</p>
        </div>

        <div className="summary-item">
          <span className="summary-label">Service</span>
          <span className="summary-value">{service.label}</span>
        </div>
        
        {quantity.isManualPrice && (
          <div className="summary-item">
            <span className="summary-label">Unit Price (₹)</span>
            <input 
              type="number" 
              className="price-input" 
              value={manualPrice} 
              onChange={(e) => setManualPrice(e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>
        )}
        
        {quantity.isManualSize ? (
          <div className="summary-item">
            <span className="summary-label">Size / Details</span>
            <input 
              type="text" 
              className="price-input size-input" 
              value={manualSize} 
              onChange={(e) => setManualSize(e.target.value)}
              placeholder="e.g. 12x36"
            />
          </div>
        ) : !quantity.isManualPrice && (
          <div className="summary-item">
            <span className="summary-label">{service.id === 'frame' ? 'Size' : 'Option'}</span>
            <span className="summary-value">{quantity.label}</span>
          </div>
        )}

        <div className="summary-item">
          <span className="summary-label">Quantity</span>
          <div className="quantity-controls">
            <button className="qty-btn" onClick={handleDecrement}><Minus size={16} /></button>
            <input 
              type="number" 
              className="qty-input" 
              value={itemCount} 
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              min="1"
            />
            <button className="qty-btn" onClick={handleIncrement}><Plus size={16} /></button>
          </div>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Total Amount</span>
          <span className="summary-total">₹{calculateTotal()}</span>
        </div>

        <div className="invoice-footer">
          <p className="thank-you">📸 Thank You for Choosing Us!</p>
        </div>

        <button className="btn-primary" onClick={handlePrint}>
          <Printer size={24} />
          Print Invoice
        </button>
      </div>
    </div>
  );
}
