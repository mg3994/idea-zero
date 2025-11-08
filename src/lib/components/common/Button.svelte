<script>
  export let variant = 'primary'; // primary, secondary, outline, ghost
  export let size = 'md'; // sm, md, lg
  export let disabled = false;
  export let fullWidth = false;
  export let type = 'button';
</script>

<button
  {type}
  class="btn btn-{variant} btn-{size}"
  class:btn-full={fullWidth}
  {disabled}
  on:click
>
  <slot />
</button>

<style>
  .btn {
    font-family: inherit;
    font-weight: 500;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    text-decoration: none;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Sizes */
  .btn-sm {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-sm);
  }

  .btn-md {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-base);
  }

  .btn-lg {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: var(--font-size-lg);
  }

  /* Variants */
  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }

  .btn-primary:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }

  .btn-primary:active:not(:disabled) {
    transform: scale(0.98);
  }

  .btn-secondary {
    background-color: var(--color-secondary);
    color: white;
    border-color: var(--color-secondary);
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: var(--color-text-secondary);
    border-color: var(--color-text-secondary);
  }

  .btn-secondary:active:not(:disabled) {
    transform: scale(0.98);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .btn-outline:hover:not(:disabled) {
    background-color: var(--color-primary);
    color: white;
  }

  .btn-outline:active:not(:disabled) {
    transform: scale(0.98);
  }

  .btn-ghost {
    background-color: transparent;
    color: var(--color-text-primary);
    border-color: transparent;
  }

  .btn-ghost:hover:not(:disabled) {
    background-color: var(--color-surface-hover);
  }

  .btn-ghost:active:not(:disabled) {
    transform: scale(0.98);
  }

  /* Full width */
  .btn-full {
    width: 100%;
  }

  /* Focus styles */
  .btn:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>
