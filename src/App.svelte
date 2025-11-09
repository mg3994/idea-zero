<script>
  import Router from 'svelte-spa-router';
  import { location } from 'svelte-spa-router';
  import Header from './lib/components/layout/Header.svelte';
  import Footer from './lib/components/layout/Footer.svelte';
  
  // Import routes
  import Home from './routes/Home.svelte';
  import Products from './routes/Products.svelte';
  import ProductDetail from './routes/ProductDetail.svelte';
  import Quotations from './routes/Quotations.svelte';
  import QuotationDetail from './routes/QuotationDetail.svelte';
  import Settings from './routes/Settings.svelte';
  import Account from './routes/Account.svelte';

  // Define routes
  const routes = {
    '/': Home,
    '/products': Products,
    '/products/:id': ProductDetail,
    '/quotations': Quotations,
    '/quotations/:id': QuotationDetail,
    '/settings': Settings,
    '/account': Account
  };

  // Scroll to top on route change
  $: if ($location) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div id="app">
  <Header />
  <main>
    <Router {routes} />
  </main>
  <Footer />
</div>
