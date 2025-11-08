<script>
  import Card from '../common/Card.svelte';

  export let offers = [];
</script>

<section class="offers-section">
  <div class="section-header">
    <h2 class="section-title">Special Offers</h2>
    <p class="section-description">Limited time deals on bulk orders</p>
  </div>

  <div class="offers-grid">
    {#each offers as offer (offer.id)}
      <Card hoverable clickable>
        <div class="offer-card">
          <div class="offer-image">
            <img src={offer.image} alt={offer.title} />
            <div class="offer-badge">{offer.discount}</div>
          </div>
          <div class="offer-content">
            <h3 class="offer-title">{offer.title}</h3>
            <p class="offer-description">{offer.description}</p>
            <div class="offer-footer">
              <span class="offer-category">{offer.category}</span>
              <span class="offer-validity">Valid until {new Date(offer.validUntil).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>
            </div>
          </div>
        </div>
      </Card>
    {/each}
  </div>
</section>

<style>
  .offers-section {
    width: 100%;
  }

  .section-header {
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }

  .section-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-sm) 0;
  }

  .section-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .offers-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .offer-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .offer-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
  }

  .offer-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .offer-card:hover .offer-image img {
    transform: scale(1.05);
  }

  .offer-badge {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: linear-gradient(135deg, var(--color-danger), var(--color-warning));
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-full);
    font-size: var(--font-size-lg);
    font-weight: 700;
    box-shadow: var(--shadow-md);
  }

  .offer-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    flex: 1;
  }

  .offer-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .offer-description {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
    flex: 1;
  }

  .offer-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-sm);
    border-top: 1px solid var(--color-border);
    font-size: var(--font-size-sm);
  }

  .offer-category {
    color: var(--color-primary);
    font-weight: 600;
  }

  .offer-validity {
    color: var(--color-text-secondary);
  }

  @media (min-width: 640px) {
    .offers-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .offers-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .offers-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
