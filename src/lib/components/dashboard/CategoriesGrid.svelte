<script>
  import { push } from 'svelte-spa-router';
  import { updateFilters } from '../../stores/products.js';
  import Card from '../common/Card.svelte';

  export let categories = [];

  function handleCategoryClick(category) {
    updateFilters({ category: category.name });
    push('/products');
  }
</script>

<section class="categories-section">
  <div class="section-header">
    <h2 class="section-title">Browse by Category</h2>
    <p class="section-description">Explore our wide range of wholesale products</p>
  </div>

  <div class="categories-grid">
    {#each categories as category (category.id)}
      <Card hoverable clickable on:click={() => handleCategoryClick(category)}>
        <div class="category-card">
          <div class="category-icon">{category.icon}</div>
          <h3 class="category-name">{category.name}</h3>
          <p class="category-count">{category.productCount} Products</p>
        </div>
      </Card>
    {/each}
  </div>
</section>

<style>
  .categories-section {
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

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }

  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .category-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .category-name {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .category-count {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0;
  }

  @media (min-width: 640px) {
    .categories-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .categories-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .categories-grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
