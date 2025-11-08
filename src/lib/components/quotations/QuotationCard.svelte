<script>
  import { createEventDispatcher } from 'svelte';
  import { formatCurrency, formatDate, formatNumber } from '../../utils/formatters.js';
  import Card from '../common/Card.svelte';
  import Badge from '../common/Badge.svelte';

  export let quotation;

  const dispatch = createEventDispatcher();

  function handleViewDetails() {
    dispatch('viewDetails', quotation);
  }

  function getStatusVariant(status) {
    switch (status) {
      case 'approved':
        return 'success';
      case 'rejected':
        return 'danger';
      case 'pending':
        return 'warning';
      default:
        return 'info';
    }
  }
</script>

<Card hoverable clickable on:click={handleViewDetails}>
  <div class="quotation-card">
    <div class="quotation-header">
      <div class="product-info">
        <img src={quotation.productImage} alt={quotation.productName} class="product-image" />
        <div class="product-details">
          <h3 class="product-name">{quotation.productName}</h3>
          <p class="quotation-id">ID: {quotation.id}</p>
        </div>
      </div>
      <Badge variant={getStatusVariant(quotation.status)} text={quotation.status} />
    </div>

    <div class="quotation-body">
      <div class="info-row">
        <span class="label">Quantity:</span>
        <span class="value">{formatNumber(quotation.quantity)} units</span>
      </div>
      
      <div class="info-row">
        <span class="label">Submitted:</span>
        <span class="value">{formatDate(quotation.submittedDate)}</span>
      </div>

      {#if quotation.supplierResponse && quotation.supplierResponse.totalAmount}
        <div class="info-row">
          <span class="label">Total Amount:</span>
          <span class="value amount">{formatCurrency(quotation.supplierResponse.totalAmount)}</span>
        </div>
      {/if}

      {#if quotation.status === 'approved' && quotation.supplierResponse}
        <div class="response-info">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Delivery: {quotation.supplierResponse.deliveryTime}</span>
        </div>
      {/if}
    </div>
  </div>
</Card>

<style>
  .quotation-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .quotation-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-md);
  }

  .product-info {
    display: flex;
    gap: var(--spacing-md);
    flex: 1;
    min-width: 0;
  }

  .product-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: var(--radius-md);
    flex-shrink: 0;
  }

  .product-details {
    flex: 1;
    min-width: 0;
  }

  .product-name {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .quotation-id {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .quotation-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-top: var(--spacing-sm);
    border-top: 1px solid var(--color-border);
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-sm);
  }

  .label {
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  .value {
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .value.amount {
    color: var(--color-primary);
    font-size: var(--font-size-lg);
  }

  .response-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-sm);
    background-color: rgba(16, 185, 129, 0.1);
    border-radius: var(--radius-md);
    color: var(--color-success);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-xs);
  }

  .response-info svg {
    flex-shrink: 0;
  }
</style>
