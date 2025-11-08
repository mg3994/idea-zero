<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { getProductById, setProducts } from '../lib/stores/products.js';
  import { mockProducts } from '../lib/data/mockProducts.js';
  import { formatCurrency, formatNumber } from '../lib/utils/formatters.js';
  import Button from '../lib/components/common/Button.svelte';
  import PricingTier from '../lib/components/products/PricingTier.svelte';
  import Modal from '../lib/components/common/Modal.svelte';
  import QuotationForm from '../lib/components/quotations/QuotationForm.svelte';
  import { addQuotation } from '../lib/stores/quotations.js';

  export let params = {};

  let product = null;
  let selectedImage = 0;
  let showQuotationModal = false;

  onMount(() => {
    setProducts(mockProducts);
    loadProduct();
  });

  function loadProduct() {
    product = getProductById(params.id);
    if (!product) {
      push('/products');
    }
  }

  function handleRequestQuotation() {
    showQuotationModal = true;
  }

  function handleQuotationSubmit(event) {
    addQuotation(event.detail);
    showQuotationModal = false;
    alert('Quotation request submitted successfully!');
  }

  function handleQuotationCancel() {
    showQuotationModal = false;
  }

  $: if (params.id) {
    loadProduct();
  }
</script>

{#if product}
  <div class="product-detail-page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a href="/" on:click|preventDefault={() => push('/')}>Home</a>
        <span>/</span>
        <a href="/products" on:click|preventDefault={() => push('/products')}>Products</a>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <!-- Product Main Section -->
      <div class="product-main">
        <!-- Image Gallery -->
        <div class="product-gallery">
          <div class="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          {#if product.images.length > 1}
            <div class="thumbnail-images">
              {#each product.images as image, index}
                <button
                  class="thumbnail"
                  class:active={selectedImage === index}
                  on:click={() => selectedImage = index}
                >
                  <img src={image} alt="{product.name} - {index + 1}" />
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Product Info -->
        <div class="product-info">
          <div class="product-category">{product.category}</div>
          <h1 class="product-name">{product.name}</h1>
          
          <div class="product-meta">
            <div class="meta-item">
              <span class="meta-label">Supplier:</span>
              <span class="meta-value">{product.supplier.name}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Rating:</span>
              <span class="meta-value">⭐ {product.supplier.rating}/5</span>
            </div>
          </div>

          <p class="product-description">{product.description}</p>

          <div class="product-details">
            <div class="detail-card">
              <div class="detail-label">MOQ</div>
              <div class="detail-value">{formatNumber(product.moq)} units</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Available Quantity</div>
              <div class="detail-value">{formatNumber(product.availableQuantity)} units</div>
            </div>
          </div>

          <Button 
            variant="primary" 
            size="lg" 
            fullWidth 
            on:click={handleRequestQuotation}
          >
            Request Quotation
          </Button>
        </div>
      </div>

      <!-- Pricing Tiers -->
      <section class="section">
        <PricingTier tiers={product.pricingTiers} />
      </section>

      <!-- Specifications -->
      <section class="section">
        <h2 class="section-title">Specifications</h2>
        <div class="specifications-table">
          {#each Object.entries(product.specifications) as [key, value]}
            <div class="spec-row">
              <div class="spec-key">{key}</div>
              <div class="spec-value">{value}</div>
            </div>
          {/each}
        </div>
      </section>
    </div>
  </div>

  <!-- Quotation Modal -->
  {#if showQuotationModal}
    <Modal 
      open={showQuotationModal} 
      title="Request Quotation"
      onClose={handleQuotationCancel}
    >
      <QuotationForm 
        {product}
        on:submit={handleQuotationSubmit}
        on:cancel={handleQuotationCancel}
      />
    </Modal>
  {/if}
{:else}
  <div class="container">
    <div class="loading">Loading product...</div>
  </div>
{/if}

<style>
  .product-detail-page {
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

  .product-main {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-3xl);
  }

  .product-gallery {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .main-image {
    width: 100%;
    height: 400px;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--color-surface);
  }

  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-images {
    display: flex;
    gap: var(--spacing-sm);
    overflow-x: auto;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 2px solid var(--color-border);
    background: none;
    padding: 0;
    cursor: pointer;
    transition: border-color 0.2s ease;
    flex-shrink: 0;
  }

  .thumbnail:hover {
    border-color: var(--color-primary);
  }

  .thumbnail.active {
    border-color: var(--color-primary);
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .product-category {
    display: inline-block;
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: 600;
    width: fit-content;
  }

  .product-name {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.2;
  }

  .product-meta {
    display: flex;
    gap: var(--spacing-xl);
  }

  .meta-item {
    display: flex;
    gap: var(--spacing-xs);
    font-size: var(--font-size-sm);
  }

  .meta-label {
    color: var(--color-text-secondary);
  }

  .meta-value {
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .product-description {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .product-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  .detail-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    text-align: center;
  }

  .detail-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xs);
  }

  .detail-value {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary);
  }

  .section {
    margin-bottom: var(--spacing-3xl);
  }

  .section-title {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-lg) 0;
  }

  .specifications-table {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .spec-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid var(--color-border);
  }

  .spec-row:last-child {
    border-bottom: none;
  }

  .spec-key {
    padding: var(--spacing-md);
    background-color: var(--color-surface);
    font-weight: 600;
    color: var(--color-text-primary);
    border-right: 1px solid var(--color-border);
  }

  .spec-value {
    padding: var(--spacing-md);
    color: var(--color-text-secondary);
  }

  .loading {
    text-align: center;
    padding: var(--spacing-3xl);
    color: var(--color-text-secondary);
  }

  @media (min-width: 1024px) {
    .product-main {
      grid-template-columns: 1fr 1fr;
    }

    .main-image {
      height: 500px;
    }
  }

  @media (max-width: 640px) {
    .product-details {
      grid-template-columns: 1fr;
    }

    .spec-row {
      grid-template-columns: 1fr;
    }

    .spec-key {
      border-right: none;
      border-bottom: 1px solid var(--color-border);
    }
  }
</style>
