<script>
  import { onMount } from 'svelte';
  import { filteredProducts, filters, updateFilters, setProducts } from '../lib/stores/products.js';
  import { mockProducts, getCategories } from '../lib/data/mockProducts.js';
  import ProductGrid from '../lib/components/products/ProductGrid.svelte';
  import ProductFilters from '../lib/components/products/ProductFilters.svelte';
  import Modal from '../lib/components/common/Modal.svelte';
  import QuotationForm from '../lib/components/quotations/QuotationForm.svelte';
  import { addQuotation } from '../lib/stores/quotations.js';

  let showQuotationModal = false;
  let selectedProduct = null;
  let showMobileFilters = false;

  onMount(() => {
    setProducts(mockProducts);
  });

  function handleFilterChange(event) {
    updateFilters(event.detail);
  }

  function handleRequestQuotation(event) {
    selectedProduct = event.detail;
    showQuotationModal = true;
  }

  function handleQuotationSubmit(event) {
    addQuotation(event.detail);
    showQuotationModal = false;
    selectedProduct = null;
    alert('Quotation request submitted successfully!');
  }

  function handleQuotationCancel() {
    showQuotationModal = false;
    selectedProduct = null;
  }

  function toggleMobileFilters() {
    showMobileFilters = !showMobileFilters;
  }
</script>

<div class="products-page">
  <div class="container">
    <div class="page-header">
      <div>
        <h1 class="page-title">Products</h1>
        <p class="page-description">Browse our extensive catalog of wholesale products</p>
      </div>
      
      <!-- Mobile Filter Toggle -->
      <button class="mobile-filter-btn" on:click={toggleMobileFilters} aria-label="Toggle filters">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
        Filters
      </button>
    </div>

    <div class="products-layout">
      <!-- Filters Sidebar -->
      <aside class="filters-sidebar" class:show-mobile={showMobileFilters}>
        <div class="filters-header-mobile">
          <h3>Filters</h3>
          <button class="close-btn" on:click={toggleMobileFilters} aria-label="Close filters">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ProductFilters
          categories={getCategories()}
          selectedCategory={$filters.category}
          priceRange={$filters.priceRange}
          moqRange={$filters.moqRange}
          on:filterChange={handleFilterChange}
        />
      </aside>

      <!-- Products Grid -->
      <main class="products-main">
        <div class="products-header">
          <p class="products-count">
            {$filteredProducts.length} {$filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        <ProductGrid 
          products={$filteredProducts}
          on:requestQuotation={handleRequestQuotation}
        />

        <!-- Pagination (UI only) -->
        {#if $filteredProducts.length > 0}
          <div class="pagination">
            <button class="pagination-btn" disabled>Previous</button>
            <div class="pagination-pages">
              <button class="pagination-page active">1</button>
              <button class="pagination-page">2</button>
              <button class="pagination-page">3</button>
            </div>
            <button class="pagination-btn">Next</button>
          </div>
        {/if}
      </main>
    </div>
  </div>
</div>

<!-- Mobile Filters Overlay -->
{#if showMobileFilters}
  <div 
    class="mobile-overlay" 
    on:click={toggleMobileFilters}
    on:keydown={(e) => e.key === 'Escape' && toggleMobileFilters()}
    role="button"
    tabindex="0"
    aria-label="Close filters"
  ></div>
{/if}

<!-- Quotation Modal -->
{#if showQuotationModal && selectedProduct}
  <Modal 
    open={showQuotationModal} 
    title="Request Quotation"
    onClose={handleQuotationCancel}
  >
    <QuotationForm 
      product={selectedProduct}
      on:submit={handleQuotationSubmit}
      on:cancel={handleQuotationCancel}
    />
  </Modal>
{/if}

<style>
  .products-page {
    width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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

  .mobile-filter-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .mobile-filter-btn:hover {
    background-color: var(--color-primary-hover);
  }

  .products-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .filters-sidebar {
    display: none;
  }

  .filters-header-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
  }

  .filters-header-mobile h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: var(--spacing-xs);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    background-color: var(--color-surface-hover);
    color: var(--color-text-primary);
  }

  .products-main {
    width: 100%;
  }

  .products-header {
    margin-bottom: var(--spacing-lg);
  }

  .products-count {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);
    margin-top: var(--spacing-2xl);
  }

  .pagination-btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pagination-btn:hover:not(:disabled) {
    background-color: var(--color-surface-hover);
    border-color: var(--color-primary);
  }

  .pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination-pages {
    display: flex;
    gap: var(--spacing-xs);
  }

  .pagination-page {
    width: 40px;
    height: 40px;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pagination-page:hover {
    background-color: var(--color-surface-hover);
    border-color: var(--color-primary);
  }

  .pagination-page.active {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }

  .mobile-overlay {
    display: none;
  }

  @media (max-width: 1023px) {
    .mobile-filter-btn {
      display: flex;
    }

    .filters-sidebar {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 320px;
      max-width: 90%;
      background-color: var(--color-background);
      padding: var(--spacing-lg);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 1001;
      overflow-y: auto;
      box-shadow: var(--shadow-xl);
    }

    .filters-sidebar.show-mobile {
      transform: translateX(0);
    }

    .mobile-overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    .filters-header-mobile {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .mobile-filter-btn {
      display: none;
    }

    .products-layout {
      grid-template-columns: 280px 1fr;
    }

    .filters-sidebar {
      display: block;
    }

    .filters-header-mobile {
      display: none;
    }
  }
</style>
