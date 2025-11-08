import { writable } from 'svelte/store';

// Initialize language from localStorage or default to 'en'
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
  }
  return 'en';
};

export const language = writable(getInitialLanguage());

// Translation strings
export const translations = writable({
  en: {
    // Navigation
    dashboard: 'Dashboard',
    products: 'Products',
    quotations: 'Quotations',
    settings: 'Settings',
    account: 'Account',
    
    // Common
    search: 'Search',
    filter: 'Filter',
    clearFilters: 'Clear Filters',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    submit: 'Submit',
    loading: 'Loading...',
    noResults: 'No results found',
    
    // Products
    moq: 'MOQ',
    availableQuantity: 'Available Quantity',
    priceRange: 'Price Range',
    category: 'Category',
    requestQuotation: 'Request Quotation',
    viewDetails: 'View Details',
    pricingTiers: 'Pricing Tiers',
    specifications: 'Specifications',
    
    // Quotations
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    quantity: 'Quantity',
    status: 'Status',
    submittedDate: 'Submitted Date',
    totalAmount: 'Total Amount',
    supplierResponse: 'Supplier Response',
    
    // Settings
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto',
    languageLabel: 'Language',
    english: 'English',
    hindi: 'Hindi',
    notifications: 'Notifications',
    email: 'Email',
    sms: 'SMS',
    push: 'Push Notifications',
    
    // Account
    businessName: 'Business Name',
    gstNumber: 'GST Number',
    panNumber: 'PAN Number',
    address: 'Address',
    street: 'Street',
    city: 'City',
    state: 'State',
    pincode: 'Pincode',
    country: 'Country',
    contactPerson: 'Contact Person',
    phone: 'Phone',
    saveChanges: 'Save Changes'
  },
  hi: {
    // Navigation
    dashboard: 'डैशबोर्ड',
    products: 'उत्पाद',
    quotations: 'कोटेशन',
    settings: 'सेटिंग्स',
    account: 'खाता',
    
    // Common
    search: 'खोजें',
    filter: 'फ़िल्टर',
    clearFilters: 'फ़िल्टर साफ़ करें',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    submit: 'जमा करें',
    loading: 'लोड हो रहा है...',
    noResults: 'कोई परिणाम नहीं मिला',
    
    // Products
    moq: 'न्यूनतम ऑर्डर मात्रा',
    availableQuantity: 'उपलब्ध मात्रा',
    priceRange: 'मूल्य सीमा',
    category: 'श्रेणी',
    requestQuotation: 'कोटेशन का अनुरोध करें',
    viewDetails: 'विवरण देखें',
    pricingTiers: 'मूल्य निर्धारण स्तर',
    specifications: 'विशिष्टताएँ',
    
    // Quotations
    pending: 'लंबित',
    approved: 'स्वीकृत',
    rejected: 'अस्वीकृत',
    quantity: 'मात्रा',
    status: 'स्थिति',
    submittedDate: 'जमा करने की तारीख',
    totalAmount: 'कुल राशि',
    supplierResponse: 'आपूर्तिकर्ता प्रतिक्रिया',
    
    // Settings
    theme: 'थीम',
    light: 'लाइट',
    dark: 'डार्क',
    auto: 'ऑटो',
    languageLabel: 'भाषा',
    english: 'अंग्रेज़ी',
    hindi: 'हिंदी',
    notifications: 'सूचनाएं',
    email: 'ईमेल',
    sms: 'एसएमएस',
    push: 'पुश सूचनाएं',
    
    // Account
    businessName: 'व्यवसाय का नाम',
    gstNumber: 'जीएसटी नंबर',
    panNumber: 'पैन नंबर',
    address: 'पता',
    street: 'गली',
    city: 'शहर',
    state: 'राज्य',
    pincode: 'पिनकोड',
    country: 'देश',
    contactPerson: 'संपर्क व्यक्ति',
    phone: 'फ़ोन',
    saveChanges: 'परिवर्तन सहेजें'
  }
});

export function setLanguage(lang) {
  language.set(lang);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}

// Helper function to get translation
export function t(key, lang = 'en') {
  let translationData = {};
  translations.subscribe(value => {
    translationData = value;
  })();
  
  return translationData[lang]?.[key] || key;
}
