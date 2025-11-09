<script>
  import { theme, setTheme } from '../lib/stores/theme.js';
  import { language, setLanguage } from '../lib/stores/language.js';
  import Button from '../lib/components/common/Button.svelte';

  let selectedTheme = $theme;
  let selectedLanguage = $language;
  let notifications = {
    email: true,
    sms: false,
    push: true
  };

  // Apply theme changes immediately
  $: if (selectedTheme) {
    setTheme(selectedTheme);
  }

  // Apply language changes immediately
  $: if (selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  function handleSave() {
    localStorage.setItem('notifications', JSON.stringify(notifications));
    alert('Settings saved successfully!');
  }

  // Load saved notifications
  const savedNotifications = localStorage.getItem('notifications');
  if (savedNotifications) {
    notifications = JSON.parse(savedNotifications);
  }
</script>

<div class="settings-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Settings</h1>
      <p class="page-description">Customize your experience</p>
    </div>

    <div class="settings-content">
      <!-- Theme Settings -->
      <section class="settings-section">
        <h2 class="section-title">Theme</h2>
        <p class="section-description">Choose your preferred color scheme</p>
        
        <div class="radio-group">
          <label class="radio-option">
            <input
              type="radio"
              name="theme"
              value="light"
              bind:group={selectedTheme}
            />
            <div class="radio-content">
              <div class="radio-icon">☀️</div>
              <div class="radio-text">
                <div class="radio-label">Light</div>
                <div class="radio-desc">Bright and clear interface</div>
              </div>
            </div>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="theme"
              value="dark"
              bind:group={selectedTheme}
            />
            <div class="radio-content">
              <div class="radio-icon">🌙</div>
              <div class="radio-text">
                <div class="radio-label">Dark</div>
                <div class="radio-desc">Easy on the eyes</div>
              </div>
            </div>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="theme"
              value="auto"
              bind:group={selectedTheme}
            />
            <div class="radio-content">
              <div class="radio-icon">🔄</div>
              <div class="radio-text">
                <div class="radio-label">Auto</div>
                <div class="radio-desc">Match system preference</div>
              </div>
            </div>
          </label>
        </div>
      </section>

      <!-- Language Settings -->
      <section class="settings-section">
        <h2 class="section-title">Language</h2>
        <p class="section-description">Select your preferred language</p>
        
        <div class="radio-group">
          <label class="radio-option">
            <input
              type="radio"
              name="language"
              value="en"
              bind:group={selectedLanguage}
            />
            <div class="radio-content">
              <div class="radio-icon">🇬🇧</div>
              <div class="radio-text">
                <div class="radio-label">English</div>
                <div class="radio-desc">English language</div>
              </div>
            </div>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="language"
              value="hi"
              bind:group={selectedLanguage}
            />
            <div class="radio-content">
              <div class="radio-icon">🇮🇳</div>
              <div class="radio-text">
                <div class="radio-label">हिंदी</div>
                <div class="radio-desc">Hindi language</div>
              </div>
            </div>
          </label>
        </div>
      </section>

      <!-- Notification Settings -->
      <section class="settings-section">
        <h2 class="section-title">Notifications</h2>
        <p class="section-description">Manage how you receive updates</p>
        
        <div class="checkbox-group">
          <label class="checkbox-option">
            <input
              type="checkbox"
              bind:checked={notifications.email}
            />
            <div class="checkbox-content">
              <div class="checkbox-text">
                <div class="checkbox-label">Email Notifications</div>
                <div class="checkbox-desc">Receive updates via email</div>
              </div>
            </div>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              bind:checked={notifications.sms}
            />
            <div class="checkbox-content">
              <div class="checkbox-text">
                <div class="checkbox-label">SMS Notifications</div>
                <div class="checkbox-desc">Receive updates via SMS</div>
              </div>
            </div>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              bind:checked={notifications.push}
            />
            <div class="checkbox-content">
              <div class="checkbox-text">
                <div class="checkbox-label">Push Notifications</div>
                <div class="checkbox-desc">Receive browser notifications</div>
              </div>
            </div>
          </label>
        </div>
      </section>

      <!-- Save Button -->
      <div class="settings-actions">
        <Button variant="primary" size="lg" on:click={handleSave}>
          Save Settings
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .settings-page {
    width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .page-header {
    margin-bottom: var(--spacing-2xl);
  }

  .page-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .page-description {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }

  .settings-content {
    max-width: 800px;
  }

  .settings-section {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
  }

  .section-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
  }

  .section-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0 0 var(--spacing-lg) 0;
  }

  .radio-group,
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .radio-option,
  .checkbox-option {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .radio-option:hover,
  .checkbox-option:hover {
    border-color: var(--color-primary);
    background-color: rgba(37, 99, 235, 0.05);
  }

  .radio-option:has(input:checked),
  .checkbox-option:has(input:checked) {
    border-color: var(--color-primary);
    background-color: rgba(37, 99, 235, 0.1);
  }

  .radio-option input[type="radio"],
  .checkbox-option input[type="checkbox"] {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }

  .radio-content,
  .checkbox-content {
    display: flex;
    gap: var(--spacing-md);
    flex: 1;
  }

  .radio-icon {
    font-size: var(--font-size-2xl);
  }

  .radio-text,
  .checkbox-text {
    flex: 1;
  }

  .radio-label,
  .checkbox-label {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
  }

  .radio-desc,
  .checkbox-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }

  .settings-actions {
    display: flex;
    justify-content: flex-end;
    padding-top: var(--spacing-lg);
  }

  @media (max-width: 640px) {
    .settings-actions {
      justify-content: stretch;
    }

    .settings-actions :global(button) {
      width: 100%;
    }
  }
</style>
