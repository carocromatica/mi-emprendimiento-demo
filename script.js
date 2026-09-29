// ==========================================================================
// BROTE - INTERACTIVE JAVASCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCart();
  initDiagnosticWidget();
  initShopFilters();
});

// Global Cart State
const state = {
  cart: [
    { id: 'brote-1', title: 'Monstera Deliciosa (Jardín de Interior)', price: 24500, qty: 1, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' }
  ]
};

// Navigation
function initNavigation() {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Active Nav Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Shopping Cart Drawer
function initCart() {
  const cartBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const closeCartBtn = document.querySelector('.close-cart-btn');

  function openCart() {
    if (cartOverlay && cartDrawer) {
      cartOverlay.classList.add('open');
      cartDrawer.classList.add('open');
    }
  }

  function closeCart() {
    if (cartOverlay && cartDrawer) {
      cartOverlay.classList.remove('open');
      cartDrawer.classList.remove('open');
    }
  }

  cartBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Global Add-to-cart listener
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-cart-btn');
    if (addBtn) {
      const card = addBtn.closest('.card-product') || document.querySelector('.product-details');
      const id = addBtn.dataset.id || Math.random().toString();
      const title = card ? (card.querySelector('.title-md, h1')?.textContent || 'Planta Brote') : 'Planta Brote';
      const priceText = card ? (card.querySelector('.price')?.textContent || '$24.500') : '$24.500';
      const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 24500;
      const image = card ? (card.querySelector('img')?.src || '') : '';

      addToCart({ id, title, price, image });
      showToast(`Añadido al carrito: ${title}`);
      openCart();
    }
  });

  renderCart();
}

function addToCart(item) {
  const existing = state.cart.find(i => i.title === item.title);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartBody = document.querySelector('.cart-body');
  const cartBadges = document.querySelectorAll('.cart-badge');
  const cartTotal = document.querySelector('.cart-total-price');

  if (!cartBody) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  cartBadges.forEach(b => b.textContent = totalCount);
  if (cartTotal) cartTotal.textContent = `$${totalPrice.toLocaleString('es-CL')}`;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align: center; color: var(--text-olive-grey); margin-top: 40px;">
        <span class="material-symbols-outlined" style="font-size: 48px; opacity: 0.5;">potted_plant</span>
        <p style="margin-top: 12px;">Tu carrito está vacío</p>
      </div>
    `;
    return;
  }

  cartBody.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" />
      <div style="flex-grow: 1;">
        <div style="font-weight: 600; font-size: 14px;">${item.title}</div>
        <div style="color: var(--primary-sage); font-weight: 700; font-size: 14px;">$${item.price.toLocaleString('es-CL')} x ${item.qty}</div>
      </div>
      <button onclick="removeFromCart(${idx})" class="icon-btn" style="color: var(--error);" aria-label="Eliminar">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  `).join('');
}

// Diagnostic Triage Module ("¿Qué le pasa a tu planta?")
function initDiagnosticWidget() {
  const cards = document.querySelectorAll('.diagnostic-card');
  const results = document.querySelectorAll('.diagnostic-result');

  if (cards.length === 0) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.target;
      cards.forEach(c => c.classList.remove('selected'));
      results.forEach(r => r.classList.remove('active'));

      card.classList.add('selected');
      const targetResult = document.getElementById(targetId);
      if (targetResult) {
        targetResult.classList.add('active');
      }
    });
  });
}

// Shop Filters
function initShopFilters() {
  const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
  const cards = document.querySelectorAll('.card-product');

  if (checkboxes.length === 0 || cards.length === 0) return;

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const activeFilters = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.dataset.filter || c.nextElementSibling.textContent.trim().toLowerCase());

      if (activeFilters.length === 0) {
        cards.forEach(c => c.style.display = 'flex');
        return;
      }

      cards.forEach(card => {
        const tags = (card.dataset.tags || '').toLowerCase();
        const matches = activeFilters.some(f => tags.includes(f));
        card.style.display = matches ? 'flex' : 'none';
      });
    });
  });
}

// Toast
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined">check_circle</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

window.removeFromCart = removeFromCart;
