export const mockCategories = [
  {
    id: 'CAT001',
    name: 'Electronics',
    description: 'Consumer electronics, gadgets, and accessories for wholesale',
    icon: '📱',
    productCount: 5,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500'
  },
  {
    id: 'CAT002',
    name: 'Apparel',
    description: 'Clothing, garments, and fashion accessories in bulk',
    icon: '👕',
    productCount: 2,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500'
  },
  {
    id: 'CAT003',
    name: 'Home & Kitchen',
    description: 'Home essentials, kitchenware, and household products',
    icon: '🏠',
    productCount: 5,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500'
  },
  {
    id: 'CAT004',
    name: 'Food & Beverages',
    description: 'Packaged foods, beverages, and grocery items for wholesale',
    icon: '🍽️',
    productCount: 2,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500'
  },
  {
    id: 'CAT005',
    name: 'Sports & Fitness',
    description: 'Fitness equipment, sports gear, and wellness products',
    icon: '⚽',
    productCount: 3,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500'
  },
  {
    id: 'CAT006',
    name: 'Furniture',
    description: 'Office and home furniture for bulk orders',
    icon: '🪑',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
  },
  {
    id: 'CAT007',
    name: 'Healthcare',
    description: 'Medical supplies, hygiene products, and health essentials',
    icon: '🏥',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500'
  },
  {
    id: 'CAT008',
    name: 'Stationery',
    description: 'Office supplies, writing materials, and paper products',
    icon: '📝',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500'
  },
  {
    id: 'CAT009',
    name: 'Bags & Luggage',
    description: 'Backpacks, travel bags, and luggage items',
    icon: '🎒',
    productCount: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
  }
];

// Mock offers data
export const mockOffers = [
  {
    id: 'OFF001',
    title: 'Bulk Electronics Sale',
    description: 'Get up to 25% off on bulk orders of electronics items',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500',
    validUntil: '2025-12-31',
    category: 'Electronics'
  },
  {
    id: 'OFF002',
    title: 'Apparel Clearance',
    description: 'Special prices on bulk apparel orders - Limited stock',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
    validUntil: '2025-11-30',
    category: 'Apparel'
  },
  {
    id: 'OFF003',
    title: 'Home Essentials Deal',
    description: 'Stock up on home and kitchen items at wholesale prices',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500',
    validUntil: '2025-12-15',
    category: 'Home & Kitchen'
  },
  {
    id: 'OFF004',
    title: 'Fitness Equipment Bonanza',
    description: 'Premium fitness equipment at unbeatable wholesale rates',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
    validUntil: '2025-12-20',
    category: 'Sports & Fitness'
  }
];

// Helper functions
export function getCategoryById(id) {
  return mockCategories.find(cat => cat.id === id);
}

export function getCategoryByName(name) {
  return mockCategories.find(cat => cat.name === name);
}

export function getAllCategoryNames() {
  return mockCategories.map(cat => cat.name);
}
