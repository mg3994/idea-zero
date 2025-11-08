import { writable, derived } from 'svelte/store';

// Products store
export const products = writable([]);

// Filters store
export const filters = writable({
  category: '',
  priceRange: { min: 0, max: 100000 },
  moqRange: { min: 0, max: 1000 },
  searchQuery: ''
});

// Derived store for filtered products
export const filteredProducts = derived(
  [products, filters],
  ([$products, $filters]) => {
    return $products.filter(product => {
      // Category filter
      if ($filters.category && product.category !== $filters.category) {
        return false;
      }
      
      // Price range filter (using minimum price from pricing tiers)
      const minPrice = product.pricingTiers[0]?.pricePerUnit || 0;
      if (minPrice < $filters.priceRange.min || minPrice > $filters.priceRange.max) {
        return false;
      }
      
      // MOQ filter
      if (product.moq < $filters.moqRange.min || product.moq > $filters.moqRange.max) {
        return false;
      }
      
      // Search query filter
      if ($filters.searchQuery) {
        const query = $filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDescription = product.description.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        
        if (!matchesName && !matchesDescription && !matchesCategory) {
          return false;
        }
      }
      
      return true;
    });
  }
);

// Helper functions
export function setProducts(productList) {
  products.set(productList);
}

export function updateFilters(newFilters) {
  filters.update(current => ({
    ...current,
    ...newFilters
  }));
}

export function resetFilters() {
  filters.set({
    category: '',
    priceRange: { min: 0, max: 100000 },
    moqRange: { min: 0, max: 1000 },
    searchQuery: ''
  });
}

export function getProductById(id) {
  let product = null;
  products.subscribe(value => {
    product = value.find(p => p.id === id);
  })();
  return product;
}
