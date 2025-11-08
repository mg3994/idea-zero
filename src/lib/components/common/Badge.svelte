<script>
  export let variant = 'info'; // success, warning, danger, info
  export let text = '';
</script>

<span class="badge badge-{variant}">
  {text}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .badge-success {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--color-success);
  }

  .badge-warning {
    background-color: rgba(245, 158, 11, 0.1);
    color: var(--color-warning);
  }

  .badge-danger {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--color-danger);
  }

  .badge-info {
    background-color: rgba(59, 130, 246, 0.1);
    color: var(--color-info);
  }
</style>
