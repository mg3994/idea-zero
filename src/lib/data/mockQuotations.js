export const mockQuotations = [
  {
    id: 'Q001',
    productId: 'P001',
    productName: 'Premium Cotton T-Shirts (Bulk)',
    productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    quantity: 500,
    specifications: 'Size: L and XL mix, Colors: White (60%), Black (40%)',
    status: 'approved',
    submittedDate: '2025-10-15T10:30:00Z',
    responseDate: '2025-10-16T14:20:00Z',
    contactName: 'Rajesh Kumar',
    contactPhone: '9876543210',
    contactEmail: 'rajesh@example.com',
    deliveryAddress: '123 MG Road, Bangalore, Karnataka - 560001',
    supplierResponse: {
      pricePerUnit: 220,
      totalAmount: 110000,
      deliveryTime: '7-10 business days',
      notes: 'Bulk discount applied. Free shipping included.'
    }
  },
  {
    id: 'Q002',
    productId: 'P005',
    productName: 'Wireless Bluetooth Earbuds',
    productImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    quantity: 200,
    specifications: 'Color: Black, Packaging: Retail boxes with warranty cards',
    status: 'pending',
    submittedDate: '2025-11-01T09:15:00Z',
    responseDate: null,
    contactName: 'Priya Sharma',
    contactPhone: '9123456789',
    contactEmail: 'priya@example.com',
    deliveryAddress: '45 Park Street, Kolkata, West Bengal - 700016',
    supplierResponse: null
  },
  {
    id: 'Q003',
    productId: 'P007',
    productName: 'Office Chairs (Ergonomic)',
    productImage: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500',
    quantity: 50,
    specifications: 'Color: Black, Assembly required, Delivery to 3rd floor',
    status: 'approved',
    submittedDate: '2025-10-20T11:45:00Z',
    responseDate: '2025-10-21T16:30:00Z',
    contactName: 'Amit Patel',
    contactPhone: '9988776655',
    contactEmail: 'amit@example.com',
    deliveryAddress: '78 Corporate Plaza, Ahmedabad, Gujarat - 380009',
    supplierResponse: {
      pricePerUnit: 4200,
      totalAmount: 210000,
      deliveryTime: '14-21 business days',
      notes: 'Installation service available at additional cost of ₹200 per chair.'
    }
  },
  {
    id: 'Q004',
    productId: 'P003',
    productName: 'LED Bulbs 9W (Pack)',
    productImage: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=500',
    quantity: 1000,
    specifications: 'Color Temperature: 4000K (Neutral White), Base: B22',
    status: 'rejected',
    submittedDate: '2025-10-25T14:20:00Z',
    responseDate: '2025-10-26T10:15:00Z',
    contactName: 'Sunita Reddy',
    contactPhone: '9876512345',
    contactEmail: 'sunita@example.com',
    deliveryAddress: '234 Industrial Area, Hyderabad, Telangana - 500032',
    supplierResponse: {
      pricePerUnit: 0,
      totalAmount: 0,
      deliveryTime: '',
      notes: 'Sorry, we are currently out of stock for 4000K variant. Only 3000K and 6500K available.'
    }
  },
  {
    id: 'Q005',
    productId: 'P012',
    productName: 'Protein Powder (Whey)',
    productImage: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500',
    quantity: 100,
    specifications: 'Flavor: Chocolate (70%), Vanilla (30%)',
    status: 'pending',
    submittedDate: '2025-11-03T08:30:00Z',
    responseDate: null,
    contactName: 'Vikram Singh',
    contactPhone: '9765432109',
    contactEmail: 'vikram@example.com',
    deliveryAddress: '56 Fitness Center, Pune, Maharashtra - 411001',
    supplierResponse: null
  },
  {
    id: 'Q006',
    productId: 'P002',
    productName: 'Stainless Steel Water Bottles',
    productImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    quantity: 300,
    specifications: 'Colors: Silver (40%), Black (30%), Blue (30%), Custom logo printing required',
    status: 'approved',
    submittedDate: '2025-10-28T13:00:00Z',
    responseDate: '2025-10-29T15:45:00Z',
    contactName: 'Neha Gupta',
    contactPhone: '9654321098',
    contactEmail: 'neha@example.com',
    deliveryAddress: '89 Corporate Gifts, Delhi - 110001',
    supplierResponse: {
      pricePerUnit: 400,
      totalAmount: 120000,
      deliveryTime: '10-12 business days',
      notes: 'Logo printing included. Setup charge: ₹5000 (one-time).'
    }
  },
  {
    id: 'Q007',
    productId: 'P014',
    productName: 'Smart Watches (Fitness Tracker)',
    productImage: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
    quantity: 150,
    specifications: 'Color: Black, Warranty: 1 year, Packaging: Retail boxes',
    status: 'pending',
    submittedDate: '2025-11-05T10:00:00Z',
    responseDate: null,
    contactName: 'Arjun Mehta',
    contactPhone: '9543210987',
    contactEmail: 'arjun@example.com',
    deliveryAddress: '12 Electronics Market, Mumbai, Maharashtra - 400001',
    supplierResponse: null
  },
  {
    id: 'Q008',
    productId: 'P004',
    productName: 'Organic Rice (Basmati)',
    productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500',
    quantity: 5000,
    specifications: 'Packaging: 25kg bags, Delivery: Warehouse in Chennai',
    status: 'approved',
    submittedDate: '2025-10-18T09:30:00Z',
    responseDate: '2025-10-19T11:20:00Z',
    contactName: 'Lakshmi Iyer',
    contactPhone: '9432109876',
    contactEmail: 'lakshmi@example.com',
    deliveryAddress: 'Warehouse 5, Industrial Estate, Chennai, Tamil Nadu - 600001',
    supplierResponse: {
      pricePerUnit: 110,
      totalAmount: 550000,
      deliveryTime: '5-7 business days',
      notes: 'Organic certification documents will be provided. Payment terms: 50% advance.'
    }
  },
  {
    id: 'Q009',
    productId: 'P010',
    productName: 'Laptop Backpacks',
    productImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    quantity: 250,
    specifications: 'Color: Black (80%), Navy (20%), Custom branding on front pocket',
    status: 'rejected',
    submittedDate: '2025-10-30T12:15:00Z',
    responseDate: '2025-10-31T09:30:00Z',
    contactName: 'Karan Malhotra',
    contactPhone: '9321098765',
    contactEmail: 'karan@example.com',
    deliveryAddress: '67 Corporate Supplies, Gurgaon, Haryana - 122001',
    supplierResponse: {
      pricePerUnit: 0,
      totalAmount: 0,
      deliveryTime: '',
      notes: 'Minimum order for custom branding is 500 units. Standard products available without branding.'
    }
  },
  {
    id: 'Q010',
    productId: 'P008',
    productName: 'Hand Sanitizer (5L)',
    productImage: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500',
    quantity: 500,
    specifications: 'Packaging: 5L jerry cans, Delivery: Hospital premises',
    status: 'approved',
    submittedDate: '2025-10-22T08:45:00Z',
    responseDate: '2025-10-23T14:00:00Z',
    contactName: 'Dr. Meera Nair',
    contactPhone: '9210987654',
    contactEmail: 'meera@example.com',
    deliveryAddress: 'City Hospital, Medical Road, Kochi, Kerala - 682001',
    supplierResponse: {
      pricePerUnit: 420,
      totalAmount: 210000,
      deliveryTime: '3-5 business days',
      notes: 'WHO approved formula. Test certificates will be provided.'
    }
  },
  {
    id: 'Q011',
    productId: 'P016',
    productName: 'Formal Shirts (Men)',
    productImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
    quantity: 300,
    specifications: 'Sizes: M (40%), L (40%), XL (20%), Colors: White (50%), Blue (30%), Black (20%)',
    status: 'pending',
    submittedDate: '2025-11-04T11:30:00Z',
    responseDate: null,
    contactName: 'Rohit Verma',
    contactPhone: '9109876543',
    contactEmail: 'rohit@example.com',
    deliveryAddress: '34 Fashion Street, Jaipur, Rajasthan - 302001',
    supplierResponse: null
  },
  {
    id: 'Q012',
    productId: 'P013',
    productName: 'Cotton Bed Sheets (King Size)',
    productImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500',
    quantity: 200,
    specifications: 'Colors: Assorted pastel shades, Thread count: 300',
    status: 'approved',
    submittedDate: '2025-10-26T10:20:00Z',
    responseDate: '2025-10-27T16:15:00Z',
    contactName: 'Anjali Desai',
    contactPhone: '9098765432',
    contactEmail: 'anjali@example.com',
    deliveryAddress: 'Hotel Grand, Beach Road, Goa - 403001',
    supplierResponse: {
      pricePerUnit: 800,
      totalAmount: 160000,
      deliveryTime: '8-10 business days',
      notes: 'Bulk hotel discount applied. Additional 5% discount on next order.'
    }
  },
  {
    id: 'Q013',
    productId: 'P018',
    productName: 'Green Tea (Organic)',
    productImage: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    quantity: 1000,
    specifications: 'Packaging: 500g pouches, Organic certification required',
    status: 'pending',
    submittedDate: '2025-11-06T09:00:00Z',
    responseDate: null,
    contactName: 'Sanjay Kapoor',
    contactPhone: '8987654321',
    contactEmail: 'sanjay@example.com',
    deliveryAddress: '23 Health Store, Chandigarh - 160001',
    supplierResponse: null
  },
  {
    id: 'Q014',
    productId: 'P020',
    productName: 'Dumbbells Set (Adjustable)',
    productImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    quantity: 40,
    specifications: 'Weight range: 5kg to 25kg per dumbbell, Rubber coated',
    status: 'approved',
    submittedDate: '2025-10-24T13:45:00Z',
    responseDate: '2025-10-25T10:30:00Z',
    contactName: 'Fitness First Gym',
    contactPhone: '8876543210',
    contactEmail: 'info@fitnessfirst.com',
    deliveryAddress: 'Fitness First, Sector 18, Noida, UP - 201301',
    supplierResponse: {
      pricePerUnit: 3300,
      totalAmount: 132000,
      deliveryTime: '12-15 business days',
      notes: 'Installation and demo included. Warranty: 2 years.'
    }
  },
  {
    id: 'Q015',
    productId: 'P019',
    productName: 'USB Flash Drives (32GB)',
    productImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
    quantity: 500,
    specifications: 'Custom logo engraving required, Packaging: Individual boxes',
    status: 'pending',
    submittedDate: '2025-11-07T08:15:00Z',
    responseDate: null,
    contactName: 'Tech Corp',
    contactPhone: '8765432109',
    contactEmail: 'procurement@techcorp.com',
    deliveryAddress: 'Tech Corp HQ, IT Park, Bangalore, Karnataka - 560100',
    supplierResponse: null
  }
];

// Helper functions
export function getQuotationsByStatus(status) {
  if (status === 'all') {
    return mockQuotations;
  }
  return mockQuotations.filter(q => q.status === status);
}

export function getQuotationCounts() {
  return {
    all: mockQuotations.length,
    pending: mockQuotations.filter(q => q.status === 'pending').length,
    approved: mockQuotations.filter(q => q.status === 'approved').length,
    rejected: mockQuotations.filter(q => q.status === 'rejected').length
  };
}
