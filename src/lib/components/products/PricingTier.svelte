<script>
  import { formatCurrency, formatNumber } from '../../utils/formatters.js';

  export let tiers = [];
  export let selectedQuantity = 0;

  function getSelectedTier(quantity) {
    if (!quantity || quantity <= 0) return null;
    
    return tiers.find(tier => 
      quantity >= tier.minQty && quantity <= tier.maxQty
    );
  }

  $: selectedTier = getSelectedTier(selectedQuantity);
</script>

<div class="pricing-tier-container">
  <h3 class="pricing-title">Pricing Tiers</h3>
  <p class="pricing-description">
    Price per unit varies based on order quantity
  </p>

  <div class="pricing-table">
    <div class="table-header">
      <div class="header-cell">Quantity Range</div>
      <div class="header-cell">Price per Unit</div>
      <div class="header-cell">Total (Example)</div>
    </div>

    {#each tiers as tier}
      <div 
        class="table-row" 
        class:highlighted={selectedTier && selectedTier.minQty === tier.minQty}
      >
        <div class="table-cell">
          <span class="quantity-range">
            {formatNumber(tier.minQty)} - {formatNumber(tier.maxQty)} units
          </span>
        </div>
        <div class="table-cell">
          <span class="price">{formatCurrency(tier.pricePerUnit)}</span>
        </div>
        <div class="table-cell">
          <span class="total">
            {formatCurrency(tier.pricePerUnit * tier.minQty)}
          </span>
          <span class="total-note">(for {formatNumber(tier.minQty)} units)</span>
        </div>
      </div>
    {/each}
  </div>

  {#if selectedTier}
    <div class="selected-tier-info">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <span>
        Your quantity of {formatNumber(selectedQuantity)} units qualifies for 
        <strong>{formatCurrency(selectedTier.pricePerUnit)}</strong> per unit
      </span>
    </div>
  {/if}
</div>

<style>
  .pricing-tier-container {
    width: 100%;
  }

  .pricing-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .pricing-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0 0 var(--spacing-lg) 0;
  }

  .pricing-table {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .table-header {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr;
    background-color: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
  }

  .header-cell {
    padding: var(--spacing-md);
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .table-row {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr;
    border-bottom: 1px solid var(--color-border);
    transition: background-color 0.2s ease;
  }

  .table-row:last-child {
    border-bottom: none;
  }

  .table-row:hover {
    background-color: var(--color-surface-hover);
  }

  .table-row.highlighted {
    background-color: rgba(37, 99, 235, 0.1);
    border-left: 3px solid var(--color-primary);
  }

  .table-cell {
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .quantity-range {
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
  }

  .price {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-primary);
  }

  .total {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .total-note {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    margin-top: var(--spacing-xs);
  }

  .selected-tier-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
    padding: var(--spacing-md);
    background-color: rgba(16, 185, 129, 0.1);
    border: 1px solid var(--color-success);
    border-radius: var(--radius-md);
    color: var(--color-success);
    font-size: var(--font-size-sm);
  }

  .selected-tier-info svg {
    flex-shrink: 0;
  }

  .selected-tier-info strong {
    color: var(--color-success);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    .table-header,
    .table-row {
      grid-template-columns: 1fr;
    }

    .header-cell {
      display: none;
    }

    .table-cell {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .table-cell::before {
      content: attr(data-label);
      font-weight: 600;
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      display: block;
      margin-bottom: var(--spacing-xs);
    }

    .table-row {
      padding: var(--spacing-sm) 0;
    }
  }
</style>
