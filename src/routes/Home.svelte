<script>
  import { onMount } from 'svelte';
  import { products, setProducts } from '../lib/stores/products.js';
  import { mockProducts, getTrendingProducts } from '../lib/data/mockProducts.js';
  import { mockCategories, mockOffers } from '../lib/data/mockCategories.js';
  import TrendingProducts from '../lib/components/dashboard/TrendingProducts.svelte';
  import OffersSection from '../lib/components/dashboard/OffersSection.svelte';
  import CategoriesGrid from '../lib/components/dashboard/CategoriesGrid.svelte';
  import Modal from '../lib/components/common/Modal.svelte';
  import QuotationForm from '../lib/components/quotations/QuotationForm.svelte';
  import { addQuotation } from '../lib/stores/quotations.js';

  let showQuotationModal = false;
  let selectedProduct = null;

  onMount(() => {
    // Load mock data into stores
    setProducts(mockProducts);
  });

  function handleRequestQuotation(event) {
    selectedProduct = event.detail;
    showQuotationModal = true;
  }

  function handleQuotationSubmit(event) {
    addQuotation(event.detail);
    showQuotationModal = false;
    selectedProduct = null;
    
    // Show success message (you can add a toast notification here)
    alert('Quotation request submitted successfully!');
  }

  function handleQuotationCancel() {
    showQuotationModal = false;
    selectedProduct = null;
  }
</script>

<div class="home-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to PahuchaDo</h1>
        <p class="hero-description">
          Your trusted B2B wholesale trading platform. Browse thousands of products, 
          request quotations, and grow your business with competitive bulk pricing.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-value">20+</div>
            <div class="stat-label">Products</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">9</div>
            <div class="stat-label">Categories</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">100%</div>
            <div class="stat-label">Verified Suppliers</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Categories Section -->
  <section class="section">
    <div class="container">
      <CategoriesGrid categories={mockCategories} />
    </div>
  </section>

  <!-- Offers Section -->
  <section class="section section-alt">
    <div class="container">
      <OffersSection offers={mockOffers} />
    </div>
  </section>

  <!-- Trending Products Section -->
  <section class="section">
    <div class="container">
      <TrendingProducts 
        products={getTrendingProducts(8)} 
        on:requestQuotation={handleRequestQuotation}
      />
    </div>
  </section>
</div>

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
  .home-page {
    width: 100%;
  }

  .hero-section {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
    color: white;
    padding: var(--spacing-3xl) 0;
    margin-bottom: var(--spacing-3xl);
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin: 0 0 var(--spacing-lg) 0;
    color: white;
  }

  .hero-description {
    font-size: var(--font-size-lg);
    line-height: 1.6;
    margin: 0 0 var(--spacing-2xl) 0;
    opacity: 0.95;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    max-width: 600px;
    margin: 0 auto;
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  .stat-label {
    font-size: var(--font-size-base);
    opacity: 0.9;
  }

  .section {
    padding: var(--spacing-3xl) 0;
  }

  .section-alt {
    background-color: var(--color-surface);
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: var(--font-size-3xl);
    }

    .hero-description {
      font-size: var(--font-size-base);
    }

    .hero-stats {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .section {
      padding: var(--spacing-2xl) 0;
    }
  }
</style>
