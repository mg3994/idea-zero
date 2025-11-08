<script>
  import { createEventDispatcher } from 'svelte';
  import { validateRequired, validateMOQ, validateEmail, validatePhone } from '../../utils/validators.js';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';

  export let product;
  export let initialData = null;

  const dispatch = createEventDispatcher();

  let formData = {
    quantity: initialData?.quantity || '',
    specifications: initialData?.specifications || '',
    contactName: initialData?.contactName || '',
    contactPhone: initialData?.contactPhone || '',
    contactEmail: initialData?.contactEmail || '',
    deliveryAddress: initialData?.deliveryAddress || ''
  };

  let errors = {
    quantity: '',
    specifications: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    deliveryAddress: ''
  };

  let isSubmitting = false;

  function validateForm() {
    let isValid = true;

    // Validate quantity
    const qtyValidation = validateMOQ(formData.quantity, product.moq);
    errors.quantity = qtyValidation.message;
    if (!qtyValidation.valid) isValid = false;

    // Validate specifications
    const specValidation = validateRequired(formData.specifications, 'Specifications');
    errors.specifications = specValidation.message;
    if (!specValidation.valid) isValid = false;

    // Validate contact name
    const nameValidation = validateRequired(formData.contactName, 'Contact name');
    errors.contactName = nameValidation.message;
    if (!nameValidation.valid) isValid = false;

    // Validate phone
    const phoneValidation = validatePhone(formData.contactPhone);
    errors.contactPhone = phoneValidation.message;
    if (!phoneValidation.valid) isValid = false;

    // Validate email
    const emailValidation = validateEmail(formData.contactEmail);
    errors.contactEmail = emailValidation.message;
    if (!emailValidation.valid) isValid = false;

    // Validate address
    const addressValidation = validateRequired(formData.deliveryAddress, 'Delivery address');
    errors.deliveryAddress = addressValidation.message;
    if (!addressValidation.valid) isValid = false;

    return isValid;
  }

  function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      dispatch('submit', {
        productId: product.id,
        productName: product.name,
        productImage: product.images[0],
        ...formData,
        quantity: Number(formData.quantity)
      });
      isSubmitting = false;
    }, 500);
  }

  function handleCancel() {
    dispatch('cancel');
  }
</script>

<div class="quotation-form">
  <div class="form-header">
    <h3>Request Quotation</h3>
    <p class="product-name">{product.name}</p>
  </div>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-section">
      <h4>Order Details</h4>
      
      <Input
        type="number"
        label="Quantity"
        placeholder="Enter quantity"
        bind:value={formData.quantity}
        error={errors.quantity}
        required
      />
      <p class="helper-text">Minimum Order Quantity: {product.moq} units</p>

      <div class="textarea-wrapper">
        <label for="specifications" class="textarea-label">
          Specifications <span class="required">*</span>
        </label>
        <textarea
          id="specifications"
          bind:value={formData.specifications}
          placeholder="Enter your specific requirements (e.g., colors, sizes, packaging)"
          rows="4"
          class="textarea"
          class:textarea-error={errors.specifications}
        ></textarea>
        {#if errors.specifications}
          <span class="error-message">{errors.specifications}</span>
        {/if}
      </div>
    </div>

    <div class="form-section">
      <h4>Contact Information</h4>
      
      <Input
        type="text"
        label="Contact Name"
        placeholder="Enter your name"
        bind:value={formData.contactName}
        error={errors.contactName}
        required
      />

      <Input
        type="tel"
        label="Phone Number"
        placeholder="9876543210"
        bind:value={formData.contactPhone}
        error={errors.contactPhone}
        required
      />

      <Input
        type="email"
        label="Email Address"
        placeholder="your@email.com"
        bind:value={formData.contactEmail}
        error={errors.contactEmail}
        required
      />
    </div>

    <div class="form-section">
      <h4>Delivery Information</h4>
      
      <div class="textarea-wrapper">
        <label for="deliveryAddress" class="textarea-label">
          Delivery Address <span class="required">*</span>
        </label>
        <textarea
          id="deliveryAddress"
          bind:value={formData.deliveryAddress}
          placeholder="Enter complete delivery address"
          rows="3"
          class="textarea"
          class:textarea-error={errors.deliveryAddress}
        ></textarea>
        {#if errors.deliveryAddress}
          <span class="error-message">{errors.deliveryAddress}</span>
        {/if}
      </div>
    </div>

    <div class="form-actions">
      <Button type="button" variant="ghost" on:click={handleCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </div>
  </form>
</div>

<style>
  .quotation-form {
    width: 100%;
  }

  .form-header {
    margin-bottom: var(--spacing-xl);
  }

  .form-header h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .product-name {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .form-section h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
    padding-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--color-border);
  }

  .helper-text {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: calc(var(--spacing-sm) * -1) 0 0 0;
  }

  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .textarea-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .required {
    color: var(--color-danger);
  }

  .textarea {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
    font-family: inherit;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    resize: vertical;
    transition: all 0.2s ease;
  }

  .textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .textarea-error {
    border-color: var(--color-danger);
  }

  .textarea-error:focus {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .error-message {
    font-size: var(--font-size-sm);
    color: var(--color-danger);
  }

  .form-actions {
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-end;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
  }

  @media (max-width: 640px) {
    .form-actions {
      flex-direction: column-reverse;
    }

    .form-actions :global(button) {
      width: 100%;
    }
  }
</style>
