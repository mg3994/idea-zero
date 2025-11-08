<script>
  import { validateGST, validatePAN, validatePhone, validatePincode, validateEmail, validateRequired } from '../lib/utils/validators.js';
  import Input from '../lib/components/common/Input.svelte';
  import Select from '../lib/components/common/Select.svelte';
  import Button from '../lib/components/common/Button.svelte';

  let formData = {
    businessName: 'ABC Traders Pvt Ltd',
    gstNumber: '22AAAAA0000A1Z5',
    panNumber: 'ABCDE1234F',
    street: '123 MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India',
    contactPerson: 'Rajesh Kumar',
    email: 'rajesh@abctraders.com',
    phone: '9876543210'
  };

  let errors = {
    businessName: '',
    gstNumber: '',
    panNumber: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    contactPerson: '',
    email: '',
    phone: ''
  };

  const indianStates = [
    { value: '', label: 'Select State' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' }
  ];

  function validateForm() {
    let isValid = true;

    // Business Name
    const nameValidation = validateRequired(formData.businessName, 'Business name');
    errors.businessName = nameValidation.message;
    if (!nameValidation.valid) isValid = false;

    // GST Number
    const gstValidation = validateGST(formData.gstNumber);
    errors.gstNumber = gstValidation.message;
    if (!gstValidation.valid) isValid = false;

    // PAN Number
    const panValidation = validatePAN(formData.panNumber);
    errors.panNumber = panValidation.message;
    if (!panValidation.valid) isValid = false;

    // Street
    const streetValidation = validateRequired(formData.street, 'Street address');
    errors.street = streetValidation.message;
    if (!streetValidation.valid) isValid = false;

    // City
    const cityValidation = validateRequired(formData.city, 'City');
    errors.city = cityValidation.message;
    if (!cityValidation.valid) isValid = false;

    // State
    const stateValidation = validateRequired(formData.state, 'State');
    errors.state = stateValidation.message;
    if (!stateValidation.valid) isValid = false;

    // Pincode
    const pincodeValidation = validatePincode(formData.pincode);
    errors.pincode = pincodeValidation.message;
    if (!pincodeValidation.valid) isValid = false;

    // Contact Person
    const contactValidation = validateRequired(formData.contactPerson, 'Contact person');
    errors.contactPerson = contactValidation.message;
    if (!contactValidation.valid) isValid = false;

    // Email
    const emailValidation = validateEmail(formData.email);
    errors.email = emailValidation.message;
    if (!emailValidation.valid) isValid = false;

    // Phone
    const phoneValidation = validatePhone(formData.phone);
    errors.phone = phoneValidation.message;
    if (!phoneValidation.valid) isValid = false;

    return isValid;
  }

  function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    // Save to localStorage (mock save)
    localStorage.setItem('accountData', JSON.stringify(formData));
    alert('Account information saved successfully!');
  }

  // Load saved data
  const savedData = localStorage.getItem('accountData');
  if (savedData) {
    formData = JSON.parse(savedData);
  }
</script>

<div class="account-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Account Information</h1>
      <p class="page-description">Manage your business profile and contact details</p>
    </div>

    <form on:submit|preventDefault={handleSubmit} class="account-form">
      <!-- Business Information -->
      <section class="form-section">
        <h2 class="section-title">Business Information</h2>
        
        <Input
          type="text"
          label="Business Name"
          placeholder="Enter business name"
          bind:value={formData.businessName}
          error={errors.businessName}
          required
        />

        <div class="form-row">
          <Input
            type="text"
            label="GST Number"
            placeholder="22AAAAA0000A1Z5"
            bind:value={formData.gstNumber}
            error={errors.gstNumber}
            required
          />

          <Input
            type="text"
            label="PAN Number"
            placeholder="ABCDE1234F"
            bind:value={formData.panNumber}
            error={errors.panNumber}
            required
          />
        </div>
      </section>

      <!-- Address Information -->
      <section class="form-section">
        <h2 class="section-title">Address Information</h2>
        
        <Input
          type="text"
          label="Street Address"
          placeholder="Enter street address"
          bind:value={formData.street}
          error={errors.street}
          required
        />

        <div class="form-row">
          <Input
            type="text"
            label="City"
            placeholder="Enter city"
            bind:value={formData.city}
            error={errors.city}
            required
          />

          <Select
            label="State"
            options={indianStates}
            bind:value={formData.state}
            error={errors.state}
            required
          />
        </div>

        <div class="form-row">
          <Input
            type="text"
            label="Pincode"
            placeholder="400001"
            bind:value={formData.pincode}
            error={errors.pincode}
            required
          />

          <Input
            type="text"
            label="Country"
            value={formData.country}
            disabled
          />
        </div>
      </section>

      <!-- Contact Information -->
      <section class="form-section">
        <h2 class="section-title">Contact Information</h2>
        
        <Input
          type="text"
          label="Contact Person"
          placeholder="Enter contact person name"
          bind:value={formData.contactPerson}
          error={errors.contactPerson}
          required
        />

        <div class="form-row">
          <Input
            type="email"
            label="Email Address"
            placeholder="your@email.com"
            bind:value={formData.email}
            error={errors.email}
            required
          />

          <Input
            type="tel"
            label="Phone Number"
            placeholder="9876543210"
            bind:value={formData.phone}
            error={errors.phone}
            required
          />
        </div>
      </section>

      <!-- Submit Button -->
      <div class="form-actions">
        <Button type="submit" variant="primary" size="lg">
          Save Changes
        </Button>
      </div>
    </form>
  </div>
</div>

<style>
  .account-page {
    width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .page-header {
    margin-bottom: var(--spacing-2xl);
  }

  .page-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .page-description {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .account-form {
    max-width: 800px;
  }

  .form-section {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
  }

  .section-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-lg) 0;
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
  }

  .form-section :global(.input-wrapper),
  .form-section :global(.select-wrapper) {
    margin-bottom: var(--spacing-md);
  }

  .form-section :global(.input-wrapper:last-child),
  .form-section :global(.select-wrapper:last-child),
  .form-row:last-child {
    margin-bottom: 0;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 640px) {
    .form-row {
      grid-template-columns: 1fr;
    }

    .form-actions {
      justify-content: stretch;
    }

    .form-actions :global(button) {
      width: 100%;
    }
  }
</style>
