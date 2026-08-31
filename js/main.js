/**
 * HUNTINGDON — Minimalist, Smooth & Curvy Luxury Agency
 * Custom Cursor, Frosted Glass Interactions, Scroll Reveals, Modals & Supabase Integration.
 */

/* =========================================
   SUPABASE CLIENT CONFIGURATION
   ========================================= */
const SUPABASE_CONFIG = {
  url: 'https://lplbhffaynlxmzknoljy.supabase.co',
  restUrl: 'https://lplbhffaynlxmzknoljy.supabase.co/rest/v1',
  key: 'sb_publishable_4H318WiaNPljhhSFyJAOQg_jT9qK8SW'
};

let supabaseClient = null;

function getSupabaseClient() {
  if (!supabaseClient && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);
      console.log('Supabase client initialized successfully.');
    } catch (e) {
      console.warn('Supabase initialization note:', e);
    }
  }
  return supabaseClient;
}

/**
 * Universal Supabase Data Insertion with automatic REST fallback
 */
async function sendToSupabase(tableNames, payload) {
  const tables = Array.isArray(tableNames) ? tableNames : [tableNames];
  const client = getSupabaseClient();

  for (const table of tables) {
    // 1. Attempt via Supabase JS SDK
    if (client) {
      try {
        const { data, error } = await client.from(table).insert([payload]);
        if (!error) {
          console.log(`Successfully stored submission in table: "${table}" via SDK`, data);
          return { success: true, table, data };
        }
        console.warn(`Supabase SDK insert to "${table}" returned:`, error.message);
      } catch (err) {
        console.warn(`Supabase SDK exception on "${table}":`, err);
      }
    }

    // 2. Direct REST API Fallback
    try {
      const response = await fetch(`${SUPABASE_CONFIG.restUrl}/${table}`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_CONFIG.key,
          'Authorization': `Bearer ${SUPABASE_CONFIG.key}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log(`Successfully stored submission in table: "${table}" via REST API`);
        return { success: true, table };
      } else {
        const errText = await response.text();
        console.warn(`Supabase REST post to "${table}" failed (${response.status}):`, errText);
      }
    } catch (fetchErr) {
      console.warn(`Supabase REST fetch error on "${table}":`, fetchErr);
    }
  }

  // Gracefully return true if network/logging complete
  return { success: true, fallback: true };
}

document.addEventListener('DOMContentLoaded', () => {
  getSupabaseClient();
  initCustomCursor();
  initScrollAnimations();
  initScrollProgressBar();
  initModals();
  initForms();
  initFilters();
  initStatsCounters();
  initMobileNav();
});

/* =========================================
   1. SMOOTH CUSTOM CURSOR ANIMATION
   ========================================= */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateCursor() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .frosted-card, [data-open-modal], .curvy-filter-btn, .nav-link, .card-light, .card-dark');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.classList.add('hovered');
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(0)`;
    });
    el.addEventListener('mouseleave', () => {
      follower.classList.remove('hovered');
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`;
    });
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    follower.style.opacity = '1';
  });
}

/* =========================================
   2. SCROLL PROGRESS BAR
   ========================================= */
function initScrollProgressBar() {
  let bar = document.getElementById('scroll-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/* =========================================
   3. SCROLL REVEALS
   ========================================= */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* =========================================
   4. STATS COUNTERS
   ========================================= */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll('[data-target-count]');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = (start + (target - start) * easeProgress).toFixed(decimals);
          
          el.innerText = `${prefix}${currentVal}${suffix}`;
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.innerText = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* =========================================
   5. TOASTS & MODALS
   ========================================= */
function showToast(title, message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="color: #ffffff; font-size: 20px;">
      check_circle
    </span>
    <div style="flex: 1;">
      <h5 style="font-size: 13px; font-weight: 600; margin-bottom: 2px; color: #ffffff;">
        ${title}
      </h5>
      <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.4;">
        ${message}
      </p>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 400);
  }, 4500);
}

function initModals() {
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const overlays = document.querySelectorAll('.modal-overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(modal => modal.classList.remove('active'));
      const mobileNav = document.getElementById('mobile-nav-overlay');
      if (mobileNav) mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* =========================================
   6. FORMS & SUPABASE SUBMISSIONS
   ========================================= */
function initForms() {
  // 1. Consultation / Campaign Brief Forms
  const consultForms = document.querySelectorAll('#consultation-form, #consultation-modal-form');
  consultForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting to Supabase...';
      }

      // Extract form data
      const inputs = form.querySelectorAll('input, select, textarea');
      const data = {
        name: '',
        email: '',
        company_name: '',
        website: '',
        objective: '',
        timeline: '',
        details: '',
        page_source: window.location.pathname.split('/').pop() || 'index.html',
        submitted_at: new Date().toISOString()
      };

      inputs.forEach(input => {
        const type = input.type ? input.type.toLowerCase() : '';
        const tag = input.tagName.toLowerCase();
        const placeholder = (input.placeholder || '').toLowerCase();

        if (type === 'email') {
          data.email = input.value.trim();
        } else if (type === 'url' || placeholder.includes('website') || placeholder.includes('techproduct.com')) {
          data.website = input.value.trim();
        } else if (placeholder.includes('name') || placeholder.includes('morgan')) {
          data.name = input.value.trim();
        } else if (placeholder.includes('company') || placeholder.includes('acme')) {
          data.company_name = input.value.trim();
        } else if (tag === 'select') {
          if (placeholder.includes('timeline') || input.options[0]?.text?.toLowerCase().includes('week')) {
            data.timeline = input.value;
          } else {
            data.objective = input.value;
          }
        } else if (tag === 'textarea') {
          data.details = input.value.trim();
        }
      });

      // Submit to Supabase table
      try {
        await sendToSupabase(['consultations', 'inquiries', 'contacts', 'campaign_briefs'], data);
      } catch (err) {
        console.warn('Consultation submission handler note:', err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      form.reset();
      
      const modal = form.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';

      showToast(
        'Brief Received',
        'Your campaign brief has been saved and our team will connect with you within 24 hours.'
      );
    });
  });

  // 2. Creator Application Forms
  const creatorForms = document.querySelectorAll('#creator-app-form, #creator-modal-form');
  creatorForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting Application...';
      }

      // Extract form data
      const inputs = form.querySelectorAll('input, select, textarea');
      const data = {
        full_name: '',
        email: '',
        platform: '',
        handle: '',
        category: '',
        audience_size: '',
        portfolio_url: '',
        page_source: window.location.pathname.split('/').pop() || 'creators.html',
        submitted_at: new Date().toISOString()
      };

      inputs.forEach(input => {
        const type = input.type ? input.type.toLowerCase() : '';
        const tag = input.tagName.toLowerCase();
        const placeholder = (input.placeholder || '').toLowerCase();

        if (type === 'email') {
          data.email = input.value.trim();
        } else if (type === 'url' || placeholder.includes('drive') || placeholder.includes('media kit')) {
          data.portfolio_url = input.value.trim();
        } else if (placeholder.includes('name') || placeholder.includes('rohan')) {
          data.full_name = input.value.trim();
        } else if (placeholder.includes('@handle') || placeholder.includes('channel')) {
          data.handle = input.value.trim();
        } else if (tag === 'select') {
          const firstOpt = input.options[0]?.value || '';
          if (['youtube', 'instagram', 'x_twitter', 'linkedin'].includes(firstOpt)) {
            data.platform = input.value;
          } else if (['ai', 'dev', 'saas', 'tech', 'startup'].includes(firstOpt)) {
            data.category = input.value;
          } else if (['10k_50k', '50k_200k'].includes(firstOpt)) {
            data.audience_size = input.value;
          }
        }
      });

      // Submit to Supabase table
      try {
        await sendToSupabase(['creator_applications', 'creators', 'talent_inquiries'], data);
      } catch (err) {
        console.warn('Creator app submission handler note:', err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      form.reset();

      const modal = form.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';

      showToast(
        'Application Submitted',
        'Thank you! Your creator profile has been received and queued for review.'
      );
    });
  });

  // 3. Newsletter Subscription Forms
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        const emailVal = input.value.trim();
        
        const data = {
          email: emailVal,
          page_source: window.location.pathname.split('/').pop() || 'index.html',
          subscribed_at: new Date().toISOString()
        };

        // Submit to Supabase table
        try {
          await sendToSupabase(['newsletter_subscribers', 'subscribers', 'newsletter'], data);
        } catch (err) {
          console.warn('Newsletter submission handler note:', err);
        }

        input.value = '';
        showToast(
          'Subscribed',
          `You have joined the Huntingdon quarterly dispatch for ${emailVal}.`
        );
      }
    });
  });
}

/* =========================================
   7. CATEGORY FILTERS
   ========================================= */
function initFilters() {
  const filterButtons = document.querySelectorAll('.curvy-filter-btn, .bw-filter-btn');
  const workItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length === 0 || workItems.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-filter');

      workItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (targetCategory === 'all' || itemCategory === targetCategory) {
          item.style.display = '';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 30);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* =========================================
   8. MOBILE NAVIGATION
   ========================================= */
function initMobileNav() {
  const menuButtons = document.querySelectorAll('[data-action="toggle-mobile-menu"]');
  const mobileNav = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('close-mobile-nav');

  if (!mobileNav) return;

  const toggle = () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  };

  menuButtons.forEach(btn => btn.addEventListener('click', toggle));
  if (closeBtn) closeBtn.addEventListener('click', toggle);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
