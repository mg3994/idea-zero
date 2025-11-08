<script>
  import { createEventDispatcher } from 'svelte';
  import Select from '../common/Select.svelte';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';

  export let categories = [];
  export let selectedCategory = '';
  export let priceRange = { min: 0, max: 100000 };
  export let moqRange = { min: 0, max: 1000 };

  const dispatch = createEventDispatcher();

  let localCategory = selectedCategory;
  let localPriceMin = priceRange.min;
  let localPriceMax = priceRange.max;
  let localMoqMin = moqRange.min;
  let localMoqMax = moqRange.max;

  function applyFilters() {
    dispatch('filterChange', {
      category: localCategory,
      priceRange: { min: Number(localPriceMin), max: Number(localPriceMax) },
      moqRange: { min: Number(localMoqMin), max: Number(localMoqMax) }
    });
  }

  function clearFilters() {
    localCategory = '';
    localPriceMin = 0;
    localPriceMax = 100000;
    localMoqMin = 0;
    localMoqMax = 1000;
    
    dispatch('filterChange', {
      category: '',
      priceRange: { min: 0, max: 100000 },
      moqRange: { min: 0, max: 1000 }
    });
  }

  $: categoryOptions = [
    { value: '', label: 'All Categories' },
    ...categories.map(cat => ({ value: cat, label: cat }))
  ];
</script>

<div class="filters-container">
  <div class="filters-header">
    <h3>Filters</h3>
    <Button variant="ghost" size="sm" on:click={clearFilters}>
      Clear All
    </Button>
  </div>

  <div class="filters-content">
    <!-- Category Filter -->
    <div class="filter-section">
      <Select
        label="Category"
        options={categoryOptions}
        bind:value={localCategory}
        placeholder="Select category"
        on:change={applyFilters}
      />
    </div>

    <!-- Price Range Filter -->
    <div class="filter-section">
      <h4 class="filter-title">Price Range (₹)</h4>
      <div class="range-inputs">
        <Input
          type="number"
          label="Min"
          bind:value={localPriceMin}
          placeholder="0"
          on:change={applyFilters}
        />
        <Input
          type="number"
          label="Max"
          bind:value={localPriceMax}
          placeholder="100000"
          on:change={applyFilters}
        />
      </div>
    </div>

    <!-- MOQ Range Filter -->
    <div class="filter-section">
      <h4 class="filter-title">MOQ Range (units)</h4>
      <div class="range-inputs">
        <Input
          type="number"
          label="Min"
          bind:value={localMoqMin}
          placeholder="0"
          on:change={applyFilters}
        />
        <Input
          type="number"
          label="Max"
          bind:value={localMoqMax}
          placeholder="1000"
          on:change={applyFilters}
        />
      </div>
    </div>

    <!-- Apply Button -->
    <Button variant="primary" fullWidth on:click={applyFilters}>
      Apply Filters
    </Button>
  </div>
</div>

<style>
  .filters-container {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    height: fit-content;
    position: sticky;
    top: calc(var(--spacing-xl) + 60px);
  }

  .filters-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
  }

  .filters-header h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .filters-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .filter-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .filter-title {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .range-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
  }

  @media (max-width: 1023px) {
    .filters-container {
      position: static;
    }
  }
</style>
