import { writable, derived } from 'svelte/store';

// Quotations store
export const quotations = writable([]);

// Current filter for quotations (all, pending, approved, rejected)
export const quotationFilter = writable('all');

// Derived store for filtered quotations
export const filteredQuotations = derived(
  [quotations, quotationFilter],
  ([$quotations, $filter]) => {
    if ($filter === 'all') {
      return $quotations;
    }
    return $quotations.filter(q => q.status === $filter);
  }
);

// Helper functions
export function setQuotations(quotationList) {
  quotations.set(quotationList);
}

export function addQuotation(quotation) {
  const newQuotation = {
    ...quotation,
    id: `Q${Date.now()}`,
    submittedDate: new Date().toISOString(),
    responseDate: null,
    supplierResponse: null
  };
  
  quotations.update(q => [...q, newQuotation]);
  return newQuotation;
}

export function updateQuotation(id, updates) {
  quotations.update(q => 
    q.map(quotation => 
      quotation.id === id ? { ...quotation, ...updates } : quotation
    )
  );
}

export function deleteQuotation(id) {
  quotations.update(q => q.filter(quotation => quotation.id !== id));
}

export function getQuotationById(id) {
  let quotation = null;
  quotations.subscribe(value => {
    quotation = value.find(q => q.id === id);
  })();
  return quotation;
}

export function setQuotationFilter(filter) {
  quotationFilter.set(filter);
}

// Get quotations by status
export function getQuotationsByStatus(status) {
  let filtered = [];
  quotations.subscribe(value => {
    filtered = value.filter(q => q.status === status);
  })();
  return filtered;
}

// Get quotation counts by status
export function getQuotationCounts() {
  let counts = { all: 0, pending: 0, approved: 0, rejected: 0 };
  quotations.subscribe(value => {
    counts.all = value.length;
    counts.pending = value.filter(q => q.status === 'pending').length;
    counts.approved = value.filter(q => q.status === 'approved').length;
    counts.rejected = value.filter(q => q.status === 'rejected').length;
  })();
  return counts;
}
