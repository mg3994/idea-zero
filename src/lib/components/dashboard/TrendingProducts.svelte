<script>
  import { createEventDispatcher } from 'svelte';
  import ProductCard from '../products/ProductCard.svelte';
  import { push } from 'svelte-spa-router';

  export let products = [];
  export let limit = 8;

  const dispatch = createEventDispatcher();

  $: displayProducts = products.slice(0, limit);

  function handleViewDetails(event) {
    const product = event.detail;
    push(`/products/${product.id}`);
  }

  function handleRequestQuotation(event) {
    dispatch('requestQuotation', event.detail);
  }
</script>

<section class="trending-products">
  <div class="section-header">
    <h2 class="section-title">Trending Products</h2>
    <p class="section-description">Popular wholesale items this month</p>
  </div>

  <div class="products-grid">
    {#each displayProducts as product (product.id)}
      <ProductCard 
        {product}
        on:viewDetails={handleViewDetails}
        on:requestQuotation={handleRequestQuotation}
      />
    {/each}
  </div>
</section>

<style>
  .trending-products {
    width: 100%;
  }

  .section-header {
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }

  .section-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-sm) 0;
  }

  .section-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .products-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  @media (min-width: 640px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .products-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
