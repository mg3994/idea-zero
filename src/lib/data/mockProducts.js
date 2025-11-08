export const mockProducts = [
  {
    id: 'P001',
    name: 'Premium Cotton T-Shirts (Bulk)',
    description: 'High-quality 100% cotton t-shirts perfect for wholesale. Available in multiple colors and sizes. Ideal for retail stores, promotional events, and corporate gifting.',
    category: 'Apparel',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500'
    ],
    moq: 100,
    availableQuantity: 5000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 250 },
      { minQty: 501, maxQty: 1000, pricePerUnit: 220 },
      { minQty: 1001, maxQty: 5000, pricePerUnit: 200 }
    ],
    specifications: {
      'Material': '100% Cotton',
      'GSM': '180',
      'Sizes': 'S, M, L, XL, XXL',
      'Colors': '10+ colors available'
    },
    supplier: {
      name: 'TextileMart India',
      rating: 4.5
    }
  },
  {
    id: 'P002',
    name: 'Stainless Steel Water Bottles',
    description: 'Durable stainless steel water bottles with vacuum insulation. Keeps beverages hot for 12 hours and cold for 24 hours. Perfect for corporate gifting and retail.',
    category: 'Home & Kitchen',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500'
    ],
    moq: 50,
    availableQuantity: 2000,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 450 },
      { minQty: 201, maxQty: 500, pricePerUnit: 400 },
      { minQty: 501, maxQty: 2000, pricePerUnit: 350 }
    ],
    specifications: {
      'Material': '304 Stainless Steel',
      'Capacity': '750ml',
      'Insulation': 'Double Wall Vacuum',
      'Colors': 'Silver, Black, Blue, Red'
    },
    supplier: {
      name: 'KitchenPro Suppliers',
      rating: 4.7
    }
  },
  {
    id: 'P003',
    name: 'LED Bulbs 9W (Pack)',
    description: 'Energy-efficient LED bulbs with 9W power consumption. Equivalent to 60W incandescent bulbs. Long lifespan of 25,000 hours. Ideal for residential and commercial use.',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1550985616-10810253b84d?w=500'
    ],
    moq: 200,
    availableQuantity: 10000,
    pricingTiers: [
      { minQty: 200, maxQty: 1000, pricePerUnit: 85 },
      { minQty: 1001, maxQty: 5000, pricePerUnit: 75 },
      { minQty: 5001, maxQty: 10000, pricePerUnit: 65 }
    ],
    specifications: {
      'Wattage': '9W',
      'Lumens': '900lm',
      'Color Temperature': '3000K-6500K',
      'Base Type': 'B22',
      'Lifespan': '25,000 hours'
    },
    supplier: {
      name: 'BrightLight Electronics',
      rating: 4.3
    }
  },
  {
    id: 'P004',
    name: 'Organic Rice (Basmati)',
    description: 'Premium quality organic basmati rice sourced from certified farms. Long grain, aromatic, and perfect for wholesale distribution to retail stores and restaurants.',
    category: 'Food & Beverages',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500'
    ],
    moq: 500,
    availableQuantity: 50000,
    pricingTiers: [
      { minQty: 500, maxQty: 2000, pricePerUnit: 120 },
      { minQty: 2001, maxQty: 10000, pricePerUnit: 110 },
      { minQty: 10001, maxQty: 50000, pricePerUnit: 100 }
    ],
    specifications: {
      'Type': 'Basmati Rice',
      'Grade': 'Premium',
      'Certification': 'Organic',
      'Packaging': '1kg, 5kg, 25kg bags',
      'Origin': 'India'
    },
    supplier: {
      name: 'AgriGold Traders',
      rating: 4.8
    }
  },
  {
    id: 'P005',
    name: 'Wireless Bluetooth Earbuds',
    description: 'High-quality wireless earbuds with active noise cancellation. 24-hour battery life with charging case. Perfect for retail electronics stores.',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500'
    ],
    moq: 100,
    availableQuantity: 3000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 1200 },
      { minQty: 501, maxQty: 1500, pricePerUnit: 1100 },
      { minQty: 1501, maxQty: 3000, pricePerUnit: 1000 }
    ],
    specifications: {
      'Bluetooth': 'v5.2',
      'Battery Life': '6hrs + 18hrs (case)',
      'Noise Cancellation': 'Active ANC',
      'Water Resistance': 'IPX4',
      'Warranty': '1 Year'
    },
    supplier: {
      name: 'TechHub Distributors',
      rating: 4.6
    }
  },
  {
    id: 'P006',
    name: 'Yoga Mats (Premium)',
    description: 'Eco-friendly yoga mats made from natural rubber. Non-slip surface with excellent cushioning. Ideal for fitness centers, yoga studios, and retail stores.',
    category: 'Sports & Fitness',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500'
    ],
    moq: 50,
    availableQuantity: 1500,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 800 },
      { minQty: 201, maxQty: 500, pricePerUnit: 750 },
      { minQty: 501, maxQty: 1500, pricePerUnit: 700 }
    ],
    specifications: {
      'Material': 'Natural Rubber',
      'Thickness': '6mm',
      'Dimensions': '183cm x 61cm',
      'Weight': '1.2kg',
      'Colors': 'Purple, Blue, Green, Black'
    },
    supplier: {
      name: 'FitLife Wholesale',
      rating: 4.4
    }
  },
  {
    id: 'P007',
    name: 'Office Chairs (Ergonomic)',
    description: 'Comfortable ergonomic office chairs with lumbar support and adjustable height. Perfect for corporate offices, co-working spaces, and furniture retailers.',
    category: 'Furniture',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500'
    ],
    moq: 20,
    availableQuantity: 500,
    pricingTiers: [
      { minQty: 20, maxQty: 50, pricePerUnit: 4500 },
      { minQty: 51, maxQty: 100, pricePerUnit: 4200 },
      { minQty: 101, maxQty: 500, pricePerUnit: 4000 }
    ],
    specifications: {
      'Material': 'Mesh Back, Foam Seat',
      'Adjustable': 'Height, Armrest, Tilt',
      'Weight Capacity': '120kg',
      'Warranty': '2 Years',
      'Colors': 'Black, Grey, Blue'
    },
    supplier: {
      name: 'OfficePro Furniture',
      rating: 4.5
    }
  },
  {
    id: 'P008',
    name: 'Hand Sanitizer (5L)',
    description: 'Alcohol-based hand sanitizer with 70% ethanol. Kills 99.9% germs. Bulk packaging ideal for hospitals, offices, schools, and retail distribution.',
    category: 'Healthcare',
    images: [
      'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500'
    ],
    moq: 100,
    availableQuantity: 5000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 450 },
      { minQty: 501, maxQty: 2000, pricePerUnit: 420 },
      { minQty: 2001, maxQty: 5000, pricePerUnit: 400 }
    ],
    specifications: {
      'Volume': '5 Liters',
      'Alcohol Content': '70% Ethanol',
      'Fragrance': 'Unscented',
      'Packaging': 'Jerry Can',
      'Shelf Life': '2 Years'
    },
    supplier: {
      name: 'HealthCare Supplies Co.',
      rating: 4.7
    }
  },
  {
    id: 'P009',
    name: 'Ceramic Dinner Set (24 Pieces)',
    description: 'Elegant ceramic dinner set including plates, bowls, and cups. Microwave and dishwasher safe. Perfect for hotels, restaurants, and home retail.',
    category: 'Home & Kitchen',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500'
    ],
    moq: 50,
    availableQuantity: 800,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 2500 },
      { minQty: 201, maxQty: 500, pricePerUnit: 2300 },
      { minQty: 501, maxQty: 800, pricePerUnit: 2100 }
    ],
    specifications: {
      'Material': 'Ceramic',
      'Pieces': '24 (6 each of plates, bowls, cups, saucers)',
      'Microwave Safe': 'Yes',
      'Dishwasher Safe': 'Yes',
      'Design': 'Modern Minimalist'
    },
    supplier: {
      name: 'HomeEssentials Ltd',
      rating: 4.6
    }
  },
  {
    id: 'P010',
    name: 'Laptop Backpacks',
    description: 'Durable laptop backpacks with padded compartments for 15.6" laptops. Multiple pockets and water-resistant material. Ideal for corporate gifting and retail.',
    category: 'Bags & Luggage',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
    ],
    moq: 100,
    availableQuantity: 2500,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 650 },
      { minQty: 501, maxQty: 1500, pricePerUnit: 600 },
      { minQty: 1501, maxQty: 2500, pricePerUnit: 550 }
    ],
    specifications: {
      'Laptop Size': 'Up to 15.6"',
      'Material': 'Polyester (Water Resistant)',
      'Compartments': 'Multiple',
      'Padding': 'Laptop & Back',
      'Colors': 'Black, Navy, Grey'
    },
    supplier: {
      name: 'BagMart Wholesale',
      rating: 4.4
    }
  },
  {
    id: 'P011',
    name: 'Printed Notebooks (A5)',
    description: 'High-quality ruled notebooks with attractive cover designs. 200 pages per notebook. Perfect for schools, offices, and stationery retailers.',
    category: 'Stationery',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500'
    ],
    moq: 500,
    availableQuantity: 20000,
    pricingTiers: [
      { minQty: 500, maxQty: 2000, pricePerUnit: 45 },
      { minQty: 2001, maxQty: 10000, pricePerUnit: 40 },
      { minQty: 10001, maxQty: 20000, pricePerUnit: 35 }
    ],
    specifications: {
      'Size': 'A5 (148mm x 210mm)',
      'Pages': '200',
      'Paper Quality': '70 GSM',
      'Binding': 'Thread Sewn',
      'Cover': 'Printed Hard Cover'
    },
    supplier: {
      name: 'PaperPlus Distributors',
      rating: 4.3
    }
  },
  {
    id: 'P012',
    name: 'Protein Powder (Whey)',
    description: 'Premium whey protein powder with 24g protein per serving. Available in multiple flavors. Ideal for fitness stores, gyms, and health retailers.',
    category: 'Sports & Fitness',
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500'
    ],
    moq: 50,
    availableQuantity: 1000,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 1800 },
      { minQty: 201, maxQty: 500, pricePerUnit: 1700 },
      { minQty: 501, maxQty: 1000, pricePerUnit: 1600 }
    ],
    specifications: {
      'Protein per Serving': '24g',
      'Weight': '1kg',
      'Flavors': 'Chocolate, Vanilla, Strawberry',
      'Type': 'Whey Concentrate',
      'Servings': '30'
    },
    supplier: {
      name: 'NutriMax Wholesale',
      rating: 4.7
    }
  },
  {
    id: 'P013',
    name: 'Cotton Bed Sheets (King Size)',
    description: 'Soft and comfortable 100% cotton bed sheets with high thread count. Available in various colors and patterns. Perfect for hotels and home retailers.',
    category: 'Home & Kitchen',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500'
    ],
    moq: 100,
    availableQuantity: 3000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 850 },
      { minQty: 501, maxQty: 1500, pricePerUnit: 800 },
      { minQty: 1501, maxQty: 3000, pricePerUnit: 750 }
    ],
    specifications: {
      'Size': 'King (274cm x 274cm)',
      'Material': '100% Cotton',
      'Thread Count': '300',
      'Pieces': '3 (1 Bedsheet, 2 Pillow Covers)',
      'Colors': '15+ options'
    },
    supplier: {
      name: 'LinenWorld Traders',
      rating: 4.5
    }
  },
  {
    id: 'P014',
    name: 'Smart Watches (Fitness Tracker)',
    description: 'Feature-rich smart watches with heart rate monitoring, step tracking, and sleep analysis. Compatible with iOS and Android. Great for electronics retailers.',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500'
    ],
    moq: 50,
    availableQuantity: 1500,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 2200 },
      { minQty: 201, maxQty: 500, pricePerUnit: 2000 },
      { minQty: 501, maxQty: 1500, pricePerUnit: 1800 }
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 Days',
      'Water Resistance': 'IP68',
      'Compatibility': 'iOS & Android',
      'Features': 'Heart Rate, Steps, Sleep, Notifications'
    },
    supplier: {
      name: 'SmartTech Wholesale',
      rating: 4.6
    }
  },
  {
    id: 'P015',
    name: 'Plastic Storage Containers',
    description: 'Durable plastic storage containers with airtight lids. Food-grade material, microwave safe. Perfect for kitchen retailers and home organization stores.',
    category: 'Home & Kitchen',
    images: [
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500'
    ],
    moq: 200,
    availableQuantity: 5000,
    pricingTiers: [
      { minQty: 200, maxQty: 1000, pricePerUnit: 180 },
      { minQty: 1001, maxQty: 3000, pricePerUnit: 160 },
      { minQty: 3001, maxQty: 5000, pricePerUnit: 140 }
    ],
    specifications: {
      'Material': 'Food Grade Plastic (BPA Free)',
      'Set': '5 Pieces (Various Sizes)',
      'Microwave Safe': 'Yes (without lid)',
      'Dishwasher Safe': 'Yes',
      'Airtight': 'Yes'
    },
    supplier: {
      name: 'PlasticWare Solutions',
      rating: 4.4
    }
  },
  {
    id: 'P016',
    name: 'Formal Shirts (Men)',
    description: 'Premium quality formal shirts for men in various colors and sizes. Wrinkle-free fabric, perfect for corporate wear. Ideal for apparel retailers.',
    category: 'Apparel',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500'
    ],
    moq: 100,
    availableQuantity: 4000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 550 },
      { minQty: 501, maxQty: 2000, pricePerUnit: 500 },
      { minQty: 2001, maxQty: 4000, pricePerUnit: 450 }
    ],
    specifications: {
      'Material': 'Cotton Blend',
      'Fit': 'Slim Fit',
      'Sizes': 'S to XXL',
      'Colors': 'White, Blue, Black, Grey',
      'Care': 'Machine Washable'
    },
    supplier: {
      name: 'FashionHub Wholesale',
      rating: 4.5
    }
  },
  {
    id: 'P017',
    name: 'Wall Clocks (Designer)',
    description: 'Modern designer wall clocks with silent quartz movement. Various designs available. Perfect for home decor retailers and corporate gifting.',
    category: 'Home & Kitchen',
    images: [
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500'
    ],
    moq: 100,
    availableQuantity: 2000,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 350 },
      { minQty: 501, maxQty: 1000, pricePerUnit: 320 },
      { minQty: 1001, maxQty: 2000, pricePerUnit: 300 }
    ],
    specifications: {
      'Size': '12 inches diameter',
      'Movement': 'Silent Quartz',
      'Material': 'Plastic Frame',
      'Battery': '1 AA (not included)',
      'Designs': '10+ options'
    },
    supplier: {
      name: 'TimeKeepers Ltd',
      rating: 4.3
    }
  },
  {
    id: 'P018',
    name: 'Green Tea (Organic)',
    description: 'Premium organic green tea leaves sourced from certified plantations. Rich in antioxidants. Perfect for health stores, cafes, and retail distribution.',
    category: 'Food & Beverages',
    images: [
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500'
    ],
    moq: 200,
    availableQuantity: 10000,
    pricingTiers: [
      { minQty: 200, maxQty: 1000, pricePerUnit: 280 },
      { minQty: 1001, maxQty: 5000, pricePerUnit: 260 },
      { minQty: 5001, maxQty: 10000, pricePerUnit: 240 }
    ],
    specifications: {
      'Type': 'Green Tea Leaves',
      'Weight': '500g',
      'Certification': 'Organic',
      'Origin': 'Darjeeling, India',
      'Shelf Life': '18 Months'
    },
    supplier: {
      name: 'TeaGarden Exports',
      rating: 4.8
    }
  },
  {
    id: 'P019',
    name: 'USB Flash Drives (32GB)',
    description: 'High-speed USB 3.0 flash drives with 32GB storage capacity. Compact design with keychain loop. Ideal for corporate gifting and electronics retailers.',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'
    ],
    moq: 200,
    availableQuantity: 5000,
    pricingTiers: [
      { minQty: 200, maxQty: 1000, pricePerUnit: 320 },
      { minQty: 1001, maxQty: 3000, pricePerUnit: 300 },
      { minQty: 3001, maxQty: 5000, pricePerUnit: 280 }
    ],
    specifications: {
      'Capacity': '32GB',
      'Interface': 'USB 3.0',
      'Speed': 'Read: 100MB/s, Write: 30MB/s',
      'Compatibility': 'Windows, Mac, Linux',
      'Warranty': '1 Year'
    },
    supplier: {
      name: 'DataStore Wholesale',
      rating: 4.5
    }
  },
  {
    id: 'P020',
    name: 'Dumbbells Set (Adjustable)',
    description: 'Adjustable dumbbell set with weight plates. Space-saving design, perfect for home gyms. Ideal for fitness equipment retailers and gym suppliers.',
    category: 'Sports & Fitness',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500'
    ],
    moq: 30,
    availableQuantity: 500,
    pricingTiers: [
      { minQty: 30, maxQty: 100, pricePerUnit: 3500 },
      { minQty: 101, maxQty: 300, pricePerUnit: 3300 },
      { minQty: 301, maxQty: 500, pricePerUnit: 3100 }
    ],
    specifications: {
      'Weight Range': '5kg to 25kg per dumbbell',
      'Material': 'Cast Iron with Rubber Coating',
      'Adjustable': 'Yes',
      'Includes': '2 Handles, Weight Plates, Locks',
      'Total Weight': '50kg'
    },
    supplier: {
      name: 'FitGear Suppliers',
      rating: 4.6
    }
  }
];

// Helper function to get unique categories
export function getCategories() {
  const categories = [...new Set(mockProducts.map(p => p.category))];
  return categories.sort();
}

// Helper function to get products by category
export function getProductsByCategory(category) {
  return mockProducts.filter(p => p.category === category);
}

// Helper function to get trending products (first 8)
export function getTrendingProducts(limit = 8) {
  return mockProducts.slice(0, limit);
}
