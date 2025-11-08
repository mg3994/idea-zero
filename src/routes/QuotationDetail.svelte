<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { getQuotationById, setQuotations, updateQuotation } from '../lib/stores/quotations.js';
  import { getProductById, setProducts } from '../lib/stores/products.js';
  import { mockQuotations } from '../lib/data/mockQuotations.js';
  import { mockProducts } from '../lib/data/mockProducts.js';
  import { formatCurrency, formatDate, formatNumber } from '../lib/utils/formatters.js';
  import Button from '../lib/components/common/Button.svelte';
  import QuotationStatusBadge from '../lib/components/quotations/QuotationStatusBadge.svelte';
  import Modal from '../lib/components/common/Modal.svelte';
  import QuotationForm from '../lib/components/quotations/QuotationForm.svelte';

  export let params = {};

  let quotation = null;
  let product = null;
  let showEditModal = false;

  onMount(() => {
    setQuotations(mockQuotations);
    setProducts(mockProducts);
    loadQuotation();
  });

  function loadQuotation() {
    quotation = getQuotationById(params.id);
    if (!quotation) {
      push('/quotations');
      return;
    }
    product = getProductById(quotation.productId);
  }

  function handleEdit() {
    showEditModal = true;
  }

  function handleEditSubmit(event) {
    updateQuotation(quotation.id, event.detail);
    showEditModal = false;
    loadQuotation();
    alert('Quotation updated successfully!');
  }

  function handleEditCancel() {
    showEditModal = false;
  }

  $: if (params.id) {
    loadQuotation();
  }
</script>

{#if quotation}
  <div class="quotation-detail-page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a href="/" on:click|preventDefault={() => push('/')}>Home</a>
        <span>/</span>
        <a href="/quotations" on:click|preventDefault={() => push('/quotations')}>Quotations</a>
        <span>/</span>
        <span>{quotation.id}</span>
      </nav>

      <!-- Header -->
      <div class="page-header">
        <div>
          <h1 class="page-title">Quotation Details</h1>
          <p class="quotation-id">ID: {quotation.id}</p>
        </div>
        <div class="header-actions">
          <QuotationStatusBadge status={quotation.status} />
          {#if quotation.status === 'pending'}
            <Button variant="outline" on:click={handleEdit}>
              Edit Quotation
            </Button>
          {/if}
        </div>
      </div>

      <!-- Product Info -->
      <section class="section">
        <h2 class="section-title">Product Information</h2>
        <div class="product-info-card">
          <img src={quotation.productImage} alt={quotation.productName} class="product-image" />
          <div class="product-details">
            <h3 class="product-name">{quotation.productName}</h3>
            {#if product}
              <p class="product-category">{product.category}</p>
            {/if}
          </div>
        </div>
      </section>

      <!-- Order Details -->
      <section class="section">
        <h2 class="section-title">Order Details</h2>
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Quantity</span>
            <span class="detail-value">{formatNumber(quotation.quantity)} units</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Submitted Date</span>
            <span class="detail-value">{formatDate(quotation.submittedDate)}</span>
          </div>
          {#if quotation.responseDate}
            <div class="detail-item">
              <span class="detail-label">Response Date</span>
              <span class="detail-value">{formatDate(quotation.responseDate)}</span>
            </div>
          {/if}
        </div>

        <div class="specifications-section">
          <h3 class="subsection-title">Specifications</h3>
          <p class="specifications-text">{quotation.specifications}</p>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="section">
        <h2 class="section-title">Contact Information</h2>
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Contact Name</span>
            <span class="detail-value">{quotation.contactName}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone</span>
            <span class="detail-value">{quotation.contactPhone}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <span class="detail-value">{quotation.contactEmail}</span>
          </div>
        </div>

        <div class="address-section">
          <h3 class="subsection-title">Delivery Address</h3>
          <p class="address-text">{quotation.deliveryAddress}</p>
        </div>
      </section>

      <!-- Supplier Response -->
      {#if quotation.supplierResponse}
        <section class="section">
          <h2 class="section-title">Supplier Response</h2>
          <div class="response-card" class:approved={quotation.status === 'approved'} class:rejected={quotation.status === 'rejected'}>
            {#if quotation.status === 'approved'}
              <div class="details-grid">
                <div class="detail-item">
                  <span class="detail-label">Price per Unit</span>
                  <span class="detail-value highlight">{formatCurrency(quotation.supplierResponse.pricePerUnit)}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Total Amount</span>
                  <span class="detail-value highlight">{formatCurrency(quotation.supplierResponse.totalAmount)}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Delivery Time</span>
                  <span class="detail-value">{quotation.supplierResponse.deliveryTime}</span>
                </div>
              </div>
            {/if}

            {#if quotation.supplierResponse.notes}
              <div class="notes-section">
                <h3 class="subsection-title">Notes</h3>
                <p class="notes-text">{quotation.supplierResponse.notes}</p>
              </div>
            {/if}
          </div>
        </section>
      {/if}
    </div>
  </div>

  <!-- Edit Modal -->
  {#if showEditModal && product}
    <Modal 
      open={showEditModal} 
      title="Edit Quotation"
      onClose={handleEditCancel}
    >
      <QuotationForm 
        {product}
        initialData={quotation}
        on:submit={handleEditSubmit}
        on:cancel={handleEditCancel}
      />
    </Modal>
  {/if}
{:else}
  <div class="container">
    <div class="loading">Loading quotation...</div>
  </div>
{/if}

<style>
  .quotation-detail-page {
    width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }

  .breadcrumb a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .breadcrumb a:hover {
    color: var(--color-primary-hover);
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
  }

  .page-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .quotation-id {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .section {
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

  .product-info-card {
    display: flex;
    gap: var(--spacing-lg);
    align-items: center;
  }

  .product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: var(--radius-md);
    flex-shrink: 0;
  }

  .product-details {
    flex: 1;
  }

  .product-name {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .product-category {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .detail-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  .detail-value {
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .detail-value.highlight {
    font-size: var(--font-size-xl);
    color: var(--color-primary);
  }

  .specifications-section,
  .address-section,
  .notes-section {
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--color-border);
  }

  .subsection-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-sm) 0;
  }

  .specifications-text,
  .address-text,
  .notes-text {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .response-card {
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
  }

  .response-card.approved {
    border-color: var(--color-success);
    background-color: rgba(16, 185, 129, 0.05);
  }

  .response-card.rejected {
    border-color: var(--color-danger);
    background-color: rgba(239, 68, 68, 0.05);
  }

  .loading {
    text-align: center;
    padding: var(--spacing-3xl);
    color: var(--color-text-secondary);
  }

  @media (max-width: 768px) {
    .page-header {
      flex-direction: column;
    }

    .header-actions {
      width: 100%;
      flex-direction: column;
    }

    .details-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
