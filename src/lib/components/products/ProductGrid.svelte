<script>
  import { createEventDispatcher } from 'svelte';
  import { push } from 'svelte-spa-router';
  import ProductCard from './ProductCard.svelte';

  export let products = [];
  export let loading = false;

  const dispatch = createEventDispatcher();

  function handleViewDetails(event) {
    const product = event.detail;
    push(`/products/${product.id}`);
  }

  function handleRequestQuotation(event) {
    dispatch('requestQuotation', event.detail);
  }
</script>

<div class="product-grid-container">
  {#if loading}
    <!-- Loading State -->
    <div class="loading-grid">
      {#each Array(8) as _, i}
        <div class="skeleton-card">
          <div class="skeleton-image"></div>
          <div class="skeleton-text skeleton-title"></div>
          <div class="skeleton-text skeleton-line"></div>
          <div class="skeleton-text skeleton-line"></div>
          <div class="skeleton-text skeleton-price"></div>
        </div>
      {/each}
    </div>
  {:else if products.length === 0}
    <!-- Empty State -->
    <div class="empty-state">
      <div class="empty-icon">📦</div>
      <h3>No Products Found</h3>
      <p>Try adjusting your filters or search criteria</p>
    </div>
  {:else}
    <!-- Products Grid -->
    <div class="product-grid">
      {#each products as product (product.id)}
        <ProductCard 
          {product} 
          on:viewDetails={handleViewDetails}
          on:requestQuotation={handleRequestQuotation}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .product-grid-container {
    width: 100%;
  }

  .product-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .loading-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .skeleton-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .skeleton-image {
    width: 100%;
    height: 200px;
    background-color: var(--color-border);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
  }

  .skeleton-text {
    height: 16px;
    background-color: var(--color-border);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-sm);
  }

  .skeleton-title {
    height: 24px;
    width: 80%;
  }

  .skeleton-line {
    width: 100%;
  }

  .skeleton-price {
    height: 28px;
    width: 60%;
    margin-top: var(--spacing-md);
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3xl) var(--spacing-md);
    text-align: center;
  }

  .empty-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-lg);
    opacity: 0.5;
  }

  .empty-state h3 {
    font-size: var(--font-size-2xl);
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
  }

  .empty-state p {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  @media (min-width: 640px) {
    .product-grid,
    .loading-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .product-grid,
    .loading-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .product-grid,
    .loading-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
