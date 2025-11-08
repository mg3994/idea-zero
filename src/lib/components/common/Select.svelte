<script>
  export let label = '';
  export let options = []; // Array of {value, label}
  export let value = '';
  export let error = '';
  export let required = false;
  export let disabled = false;
  export let placeholder = 'Select an option';
  export let id = `select-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="select-wrapper">
  {#if label}
    <label for={id} class="select-label">
      {label}
      {#if required}
        <span class="required">*</span>
      {/if}
    </label>
  {/if}
  
  <select
    {id}
    {required}
    {disabled}
    class="select"
    class:select-error={error}
    bind:value
    on:change
    on:blur
  >
    <option value="" disabled selected>{placeholder}</option>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  
  {#if error}
    <span class="error-message">{error}</span>
  {/if}
</div>

<style>
  .select-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
  }

  .select-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .required {
    color: var(--color-danger);
  }

  .select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right var(--spacing-md) center;
    padding-right: calc(var(--spacing-md) * 2.5);
  }

  .select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .select:disabled {
    background-color: var(--color-surface);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .select-error {
    border-color: var(--color-danger);
  }

  .select-error:focus {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .error-message {
    font-size: var(--font-size-sm);
    color: var(--color-danger);
  }

  option {
    background-color: var(--color-background);
    color: var(--color-text-primary);
  }
</style>
