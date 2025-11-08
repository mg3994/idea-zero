// GST Number Validation
// Format: 2 digits (state code) + 10 alphanumeric + 1 letter + 1 digit + 1 letter + 1 alphanumeric
// Example: 22AAAAA0000A1Z5
export function validateGST(gstNumber) {
  if (!gstNumber) {
    return { valid: false, message: 'GST number is required' };
  }

  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  
  if (!gstRegex.test(gstNumber)) {
    return { 
      valid: false, 
      message: 'Invalid GST format. Example: 22AAAAA0000A1Z5' 
    };
  }

  return { valid: true, message: '' };
}

// PAN Number Validation
// Format: 5 letters + 4 digits + 1 letter
// Example: ABCDE1234F
export function validatePAN(panNumber) {
  if (!panNumber) {
    return { valid: false, message: 'PAN number is required' };
  }

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  
  if (!panRegex.test(panNumber)) {
    return { 
      valid: false, 
      message: 'Invalid PAN format. Example: ABCDE1234F' 
    };
  }

  return { valid: true, message: '' };
}

// Phone Number Validation
// Format: 10 digits starting with 6-9
// Example: 9876543210
export function validatePhone(phoneNumber) {
  if (!phoneNumber) {
    return { valid: false, message: 'Phone number is required' };
  }

  const phoneRegex = /^[6-9][0-9]{9}$/;
  
  if (!phoneRegex.test(phoneNumber)) {
    return { 
      valid: false, 
      message: 'Invalid phone number. Must be 10 digits starting with 6-9' 
    };
  }

  return { valid: true, message: '' };
}

// Pincode Validation
// Format: 6 digits, first digit cannot be 0
// Example: 560001
export function validatePincode(pincode) {
  if (!pincode) {
    return { valid: false, message: 'Pincode is required' };
  }

  const pincodeRegex = /^[1-9][0-9]{5}$/;
  
  if (!pincodeRegex.test(pincode)) {
    return { 
      valid: false, 
      message: 'Invalid pincode. Must be 6 digits' 
    };
  }

  return { valid: true, message: '' };
}

// Email Validation
export function validateEmail(email) {
  if (!email) {
    return { valid: false, message: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { 
      valid: false, 
      message: 'Invalid email format' 
    };
  }

  return { valid: true, message: '' };
}

// Required Field Validation
export function validateRequired(value, fieldName = 'This field') {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return { 
      valid: false, 
      message: `${fieldName} is required` 
    };
  }

  return { valid: true, message: '' };
}

// Number Range Validation
export function validateNumberRange(value, min, max, fieldName = 'Value') {
  const num = Number(value);
  
  if (isNaN(num)) {
    return { 
      valid: false, 
      message: `${fieldName} must be a number` 
    };
  }

  if (num < min || num > max) {
    return { 
      valid: false, 
      message: `${fieldName} must be between ${min} and ${max}` 
    };
  }

  return { valid: true, message: '' };
}

// MOQ Validation
export function validateMOQ(quantity, moq) {
  const qty = Number(quantity);
  
  if (isNaN(qty) || qty <= 0) {
    return { 
      valid: false, 
      message: 'Quantity must be a positive number' 
    };
  }

  if (qty < moq) {
    return { 
      valid: false, 
      message: `Minimum order quantity is ${moq} units` 
    };
  }

  return { valid: true, message: '' };
}
