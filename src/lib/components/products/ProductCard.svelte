<script>
  import { createEventDispatcher } from 'svelte';
  import { formatCurrency, formatNumber, formatPriceRange } from '../../utils/formatters.js';
  import Button from '../common/Button.svelte';
  import Card from '../common/Card.svelte';

  export let product;

  const dispatch = createEventDispatcher();

  function handleViewDetails() {
    dispatch('viewDetails', product);
  }

  function handleRequestQuotation(e) {
    e.stopPropagation();
    dispatch('requestQuotation', product);
  }
</script>

<Card hoverable clickable on:click={handleViewDetails}>
  <div class="product-card">
    <!-- Product Image -->
    <div class="product-image">
      <img src={product.images[0]} alt={product.name} />
      <div class="product-category">{product.category}</div>
    </div>

    <!-- Product Info -->
    <div class="product-info">
      <h3 class="product-name">{product.name}</h3>
      
      <div class="product-details">
        <div class="detail-item">
          <span class="detail-label">MOQ:</span>
          <span class="detail-value">{formatNumber(product.moq)} units</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Available:</span>
          <span class="detail-value">{formatNumber(product.availableQuantity)} units</span>
        </div>
      </div>

      <div class="product-price">
        {formatPriceRange(product.pricingTiers)}
      </div>

      <Button 
        variant="primary" 
        fullWidth 
        on:click={handleRequestQuotation}
      >
        Request Quotation
      </Button>
    </div>
  </div>
</Card>

<style>
  .product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .product-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .product-card:hover .product-image img {
    transform: scale(1.05);
  }

  .product-category {
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-md);
    font-size: var(--font-size-xs);
    font-weight: 600;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    flex: 1;
  }

  .product-name {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-sm);
  }

  .detail-label {
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  .detail-value {
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .product-price {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-top: auto;
  }
</style>
