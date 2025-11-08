<script>
  export let type = 'text'; // text, number, email, tel, password
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let error = '';
  export let required = false;
  export let disabled = false;
  export let id = `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="input-wrapper">
  {#if label}
    <label for={id} class="input-label">
      {label}
      {#if required}
        <span class="required">*</span>
      {/if}
    </label>
  {/if}
  
  <input
    {id}
    {type}
    {placeholder}
    {required}
    {disabled}
    class="input"
    class:input-error={error}
    bind:value
    on:input
    on:change
    on:blur
    on:focus
  />
  
  {#if error}
    <span class="error-message">{error}</span>
  {/if}
</div>

<style>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
  }

  .input-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .required {
    color: var(--color-danger);
  }

  .input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .input:disabled {
    background-color: var(--color-surface);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .input-error {
    border-color: var(--color-danger);
  }

  .input-error:focus {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .error-message {
    font-size: var(--font-size-sm);
    color: var(--color-danger);
  }

  /* Number input arrows styling */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }
</style>
