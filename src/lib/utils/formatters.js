// Format currency in Indian Rupee format
export function formatCurrency(amount) {
  if (amount === null || amount === undefined) {
    return '₹0';
  }

  const num = Number(amount);
  
  if (isNaN(num)) {
    return '₹0';
  }

  // Indian numbering system: 1,00,000 instead of 100,000
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
}

// Format date to readable format
export function formatDate(dateString, format = 'short') {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return '';
  }

  if (format === 'short') {
    // Format: DD MMM YYYY (e.g., 15 Oct 2025)
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  } else if (format === 'long') {
    // Format: DD MMMM YYYY (e.g., 15 October 2025)
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  } else if (format === 'full') {
    // Format: DD MMMM YYYY, HH:MM (e.g., 15 October 2025, 10:30)
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  return date.toLocaleDateString('en-IN');
}

// Format phone number
export function formatPhoneNumber(phone) {
  if (!phone) {
    return '';
  }

  const cleaned = phone.toString().replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    // Format: +91 98765 43210
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }

  return phone;
}

// Format number with commas (Indian style)
export function formatNumber(num) {
  if (num === null || num === undefined) {
    return '0';
  }

  const number = Number(num);
  
  if (isNaN(number)) {
    return '0';
  }

  return new Intl.NumberFormat('en-IN').format(number);
}

// Format price range from pricing tiers
export function formatPriceRange(pricingTiers) {
  if (!pricingTiers || pricingTiers.length === 0) {
    return 'Price not available';
  }

  const prices = pricingTiers.map(tier => tier.pricePerUnit);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (minPrice === maxPrice) {
    return formatCurrency(minPrice);
  }

  return `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`;
}

// Truncate text with ellipsis
export function truncateText(text, maxLength = 100) {
  if (!text) {
    return '';
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength).trim() + '...';
}

// Format relative time (e.g., "2 days ago")
export function formatRelativeTime(dateString) {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else {
    return formatDate(dateString);
  }
}

// Format file size
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Format percentage
export function formatPercentage(value, decimals = 0) {
  if (value === null || value === undefined) {
    return '0%';
  }

  const num = Number(value);
  
  if (isNaN(num)) {
    return '0%';
  }

  return `${num.toFixed(decimals)}%`;
}
