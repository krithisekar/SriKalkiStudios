export const services = [
  { id: 'passport', label: 'Passport Photo', icon: 'UserCircle' },
  { id: 'postcard', label: 'Post Card Size', icon: 'Image' },
  { id: 'frame', label: 'Photo Frame', icon: 'Frame' },
  { id: 'mobile', label: 'WhatsApp / Mobile', icon: 'Smartphone' },
  { id: 'lamination', label: 'Lamination Card', icon: 'Shield' },
  { id: 'pvc', label: 'PVC Card', icon: 'IdCard' },
  { id: 'others', label: 'Others (Custom)', icon: 'Package' },
  { id: 'banner', label: 'Banner', icon: 'Flag' },
  { id: 'album', label: 'Album', icon: 'Book' }
];

export const pricing = {
  passport: [
    { count: 4, label: '4 Copies', price: 70 },
    { count: 8, label: '8 Copies', price: 100 },
    { count: 12, label: '12 Copies', price: 120 },
    { count: 16, label: '16 Copies', price: 150 },
    { count: 24, label: '24 Copies', price: 180 },
    { count: 32, label: '32 Copies', price: 200 },
    { count: 32, special: true, label: '32 Copies (After 2 Hours)', price: 150 }
  ],
  postcard: [
    { count: 1, label: '1 Copy', price: 75 },
    { count: 2, label: '2 Copies', price: 150 },
    { count: 5, label: '5 Copies', price: 250 }
  ],
  frame: [
    { count: 1, label: '6X4', price: 150 },
    { count: 1, label: '8X6', price: 200 },
    { count: 1, label: '10X8', price: 250 },
    { count: 1, label: '10X10', price: 300 },
    { count: 1, label: '12X8', price: 350 },
    { count: 1, label: '12X10', price: 450 },
    { count: 1, label: '12X12', price: 550 },
    { count: 1, label: '15X10', price: 650 },
    { count: 1, label: '15X12', price: 750 },
    { count: 1, label: '12X18', price: 1100 },
    { count: 1, label: '20X16', price: 1600 }
  ],
  mobile: [
    { count: 1, label: 'Mobile Prints (Custom Qty)', price: 50, isDynamic: true }
  ],
  lamination: [
    { count: 1, label: 'Small Card Size', price: 30 },
    { count: 1, label: 'A4 Size', price: 40 }
  ],
  pvc: [
    { count: 1, label: 'PVC Card (Custom Qty)', price: 60 }
  ],
  others: [
    { count: 1, label: 'Custom Service', price: 0, isManualPrice: true }
  ],
  banner: [
    { count: 1, label: 'Single', price: 100 },
    { count: 1, label: 'Couple', price: 150 },
    { count: 1, label: 'Family', price: 300 }
  ],
  album: [
    { count: 1, label: 'Custom Album', price: 0, isManualPrice: true, isManualSize: true }
  ]
};
