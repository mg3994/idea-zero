<script>
  import { link } from 'svelte-spa-router';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- Company Info -->
      <div class="footer-section">
        <div class="footer-logo">
          <span class="logo-icon">📦</span>
          <span class="logo-text">PahuchaDo</span>
        </div>
        <p class="footer-description">
          Your trusted B2B wholesale trading platform for bulk orders and quotations.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h3 class="footer-title">Quick Links</h3>
        <nav class="footer-links">
          <a href="/" use:link>Dashboard</a>
          <a href="/products" use:link>Products</a>
          <a href="/quotations" use:link>Quotations</a>
          <a href="/account" use:link>Account</a>
        </nav>
      </div>

      <!-- Support -->
      <div class="footer-section">
        <h3 class="footer-title">Support</h3>
        <nav class="footer-links">
          <a href="#help">Help Center</a>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h3 class="footer-title">Contact</h3>
        <div class="footer-contact">
          <p>Email: support@pahuchado.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Mumbai, India</p>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>&copy; {currentYear} PahuchaDo. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--color-surface);
    border-top: 1px solid var(--color-border);
    margin-top: auto;
    padding: var(--spacing-3xl) 0 var(--spacing-xl);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-xl);
    font-weight: 700;
  }

  .logo-icon {
    font-size: var(--font-size-2xl);
  }

  .logo-text {
    color: var(--color-primary);
  }

  .footer-description {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin: 0;
  }

  .footer-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .footer-links a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: var(--color-primary);
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .footer-contact p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
  }

  .footer-bottom {
    padding-top: var(--spacing-xl);
    border-top: 1px solid var(--color-border);
    text-align: center;
  }

  .footer-bottom p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
  }

  @media (min-width: 640px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .footer-content {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
  }
</style>
