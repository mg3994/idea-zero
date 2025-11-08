<script>
  import Badge from '../common/Badge.svelte';

  export let status; // pending, approved, rejected

  function getVariant(status) {
    switch (status) {
      case 'approved':
        return 'success';
      case 'rejected':
        return 'danger';
      case 'pending':
        return 'warning';
      default:
        return 'info';
    }
  }

  function getStatusText(status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
</script>

<Badge variant={getVariant(status)} text={getStatusText(status)} />
