<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { filteredQuotations, quotationFilter, setQuotationFilter, setQuotations } from '../lib/stores/quotations.js';
  import { mockQuotations, getQuotationCounts } from '../lib/data/mockQuotations.js';
  import QuotationCard from '../lib/components/quotations/QuotationCard.svelte';

  let activeTab = 'all';
  let counts = { all: 0, pending: 0, approved: 0, rejected: 0 };

  onMount(() => {
    setQuotations(mockQuotations);
    counts = getQuotationCounts();
  });

  function handleTabChange(tab) {
    activeTab = tab;
    setQuotationFilter(tab);
  }

  function handleViewDetails(event) {
    const quotation = event.detail;
    push(`/quotations/${quotation.id}`);
  }

  $: counts = getQuotationCounts();
</script>

<div class="quotations-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">My Quotations</h1>
      <p class="page-description">Track and manage your quotation requests</p>
    </div>

    <!-- Status Tabs -->
    <div class="tabs">
      <button
        class="tab"
        class:active={activeTab === 'all'}
        on:click={() => handleTabChange('all')}
      >
        All
        <span class="tab-count">{counts.all}</span>
      </button>
      <button
        class="tab"
        class:active={activeTab === 'pending'}
        on:click={() => handleTabChange('pending')}
      >
        Pending
        <span class="tab-count">{counts.pending}</span>
      </button>
      <button
        class="tab"
        class:active={activeTab === 'approved'}
        on:click={() => handleTabChange('approved')}
      >
        Approved
        <span class="tab-count">{counts.approved}</span>
      </button>
      <button
        class="tab"
        class:active={activeTab === 'rejected'}
        on:click={() => handleTabChange('rejected')}
      >
        Rejected
        <span class="tab-count">{counts.rejected}</span>
      </button>
    </div>

    <!-- Quotations List -->
    <div class="quotations-list">
      {#if $filteredQuotations.length === 0}
        <div class="empty-state">
          <div class="empty-icon">📋</div>
          <h3>No Quotations Found</h3>
          <p>You haven't requested any quotations yet</p>
        </div>
      {:else}
        {#each $filteredQuotations as quotation (quotation.id)}
          <QuotationCard {quotation} on:viewDetails={handleViewDetails} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .quotations-page {
    width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .page-header {
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

  .tabs {
    display: flex;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
    border-bottom: 2px solid var(--color-border);
    overflow-x: auto;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-md) var(--spacing-lg);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--color-text-secondary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: -2px;
    white-space: nowrap;
  }

  .tab:hover {
    color: var(--color-text-primary);
  }

  .tab.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  .tab-count {
    background-color: var(--color-surface);
    color: var(--color-text-secondary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 600;
  }

  .tab.active .tab-count {
    background-color: var(--color-primary);
    color: white;
  }

  .quotations-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
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
</style>
