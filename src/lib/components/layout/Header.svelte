<script>
  import { link, location } from 'svelte-spa-router';
  import { theme, toggleTheme } from '../../stores/theme.js';
  
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  $: currentPath = $location;
</script>

<header class="header">
  <div class="container">
    <div class="header-content">
      <!-- Logo -->
      <a href="/" use:link class="logo" on:click={closeMobileMenu}>
        <span class="logo-icon">📦</span>
        <span class="logo-text">PahuchaDo</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <a 
          href="/" 
          use:link 
          class="nav-link" 
          class:active={currentPath === '/'}
        >
          Dashboard
        </a>
        <a 
          href="/products" 
          use:link 
          class="nav-link" 
          class:active={currentPath === '/products' || currentPath.startsWith('/products/')}
        >
          Products
        </a>
        <a 
          href="/quotations" 
          use:link 
          class="nav-link" 
          class:active={currentPath === '/quotations' || currentPath.startsWith('/quotations/')}
        >
          Quotations
        </a>
        <a 
          href="/settings" 
          use:link 
          class="nav-link" 
          class:active={currentPath === '/settings'}
        >
          Settings
        </a>
        <a 
          href="/account" 
          use:link 
          class="nav-link" 
          class:active={currentPath === '/account'}
        >
          Account
        </a>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <!-- Theme Toggle -->
        <button class="icon-btn" on:click={toggleTheme} aria-label="Toggle theme">
          {#if $theme === 'light'}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          {:else}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
            </svg>
          {/if}
        </button>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-btn" on:click={toggleMobileMenu} aria-label="Toggle menu">
          {#if mobileMenuOpen}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          {:else}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <nav class="nav-mobile">
        <a 
          href="/" 
          use:link 
          class="nav-link-mobile" 
          class:active={currentPath === '/'}
          on:click={closeMobileMenu}
        >
          Dashboard
        </a>
        <a 
          href="/products" 
          use:link 
          class="nav-link-mobile" 
          class:active={currentPath === '/products' || currentPath.startsWith('/products/')}
          on:click={closeMobileMenu}
        >
          Products
        </a>
        <a 
          href="/quotations" 
          use:link 
          class="nav-link-mobile" 
          class:active={currentPath === '/quotations' || currentPath.startsWith('/quotations/')}
          on:click={closeMobileMenu}
        >
          Quotations
        </a>
        <a 
          href="/settings" 
          use:link 
          class="nav-link-mobile" 
          class:active={currentPath === '/settings'}
          on:click={closeMobileMenu}
        >
          Settings
        </a>
        <a 
          href="/account" 
          use:link 
          class="nav-link-mobile" 
          class:active={currentPath === '/account'}
          on:click={closeMobileMenu}
        >
          Account
        </a>
      </nav>
    {/if}
  </div>
</header>

<style>
  .header {
    background-color: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) 0;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    text-decoration: none;
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .logo-icon {
    font-size: var(--font-size-2xl);
  }

  .logo-text {
    color: var(--color-primary);
  }

  .nav-desktop {
    display: none;
    gap: var(--spacing-sm);
  }

  .nav-link {
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: var(--color-text-primary);
    background-color: var(--color-surface-hover);
  }

  .nav-link.active {
    color: var(--color-primary);
    background-color: rgba(37, 99, 235, 0.1);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .icon-btn {
    padding: var(--spacing-sm);
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .icon-btn:hover {
    color: var(--color-text-primary);
    background-color: var(--color-surface-hover);
  }

  .mobile-menu-btn {
    display: flex;
    padding: var(--spacing-sm);
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .mobile-menu-btn:hover {
    color: var(--color-text-primary);
    background-color: var(--color-surface-hover);
  }

  .nav-mobile {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    padding: var(--spacing-md) 0;
    border-top: 1px solid var(--color-border);
    margin-top: var(--spacing-md);
  }

  .nav-link-mobile {
    padding: var(--spacing-md);
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
  }

  .nav-link-mobile:hover {
    color: var(--color-text-primary);
    background-color: var(--color-surface-hover);
  }

  .nav-link-mobile.active {
    color: var(--color-primary);
    background-color: rgba(37, 99, 235, 0.1);
  }

  @media (min-width: 768px) {
    .nav-desktop {
      display: flex;
    }

    .mobile-menu-btn {
      display: none;
    }

    .nav-mobile {
      display: none;
    }
  }
</style>
