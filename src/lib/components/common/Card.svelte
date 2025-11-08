<script>
  export let padding = 'md'; // sm, md, lg
  export let hoverable = false;
  export let clickable = false;
</script>

{#if clickable}
  <div
    class="card card-padding-{padding}"
    class:card-hoverable={hoverable}
    class:card-clickable={clickable}
    on:click
    role="button"
    tabindex="0"
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.currentTarget.click();
      }
    }}
  >
    <slot />
  </div>
{:else}
  <div
    class="card card-padding-{padding}"
    class:card-hoverable={hoverable}
  >
    <slot />
  </div>
{/if}

<style>
  .card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all 0.2s ease;
  }

  /* Padding variants */
  .card-padding-sm {
    padding: var(--spacing-sm);
  }

  .card-padding-md {
    padding: var(--spacing-md);
  }

  .card-padding-lg {
    padding: var(--spacing-lg);
  }

  /* Hoverable */
  .card-hoverable:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  /* Clickable */
  .card-clickable {
    cursor: pointer;
  }

  .card-clickable:hover {
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-md);
  }

  .card-clickable:active {
    transform: scale(0.99);
  }

  .card-clickable:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>
