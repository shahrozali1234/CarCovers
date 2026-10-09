// ==========================================================================
// AUTOSHIELD MULTI-PAGE APPLICATION LOGIC
// ==========================================================================

const BASE_URL = 'http://localhost/autoshield/api.php';
const WHATSAPP_NUMBER = '923001234567'; // AutoShield Support WhatsApp

// Expanded 12+ Distinct Product Catalog with Unique Cover Photography
const productsData = [
  {
    id: 1,
    name: 'AutoShield Black Armor 3-Layer Sedan Cover',
    cat: 'Car Covers',
    price: 6999,
    old: 8999,
    image: 'images/cover_sedan_black.png',
    rating: 4.9,
    reviews: 48,
    badge: 'BESTSELLER',
    fitMake: 'Honda',
    fitModel: 'Civic',
    bodyStyle: 'Sedan',
    shortDesc: 'Ultra heavy-duty 3-layer waterproof car top cover designed for Honda Civic, Toyota Corolla & mid-size sedans.',
    fabricSpecs: '3-Layer Composite (Aluminum Film + PE Waterproof Membrane + Soft Cotton Fleece)',
    waterproofRating: '10,000mm Hydrostatic Head',
    uvProtection: '99.5% UV-B & UV-A Deflector',
    guarantee: '2-Year Fabric Stitching Warranty',
    sizesAvailable: ['Small (Civic / City)', 'Medium (Corolla / Yaris)', 'Large (Accord / Sonata)', 'Custom Tailored']
  },
  {
    id: 2,
    name: 'AutoShield Silver Reflective Heat Deflector',
    cat: 'Car Covers',
    price: 7499,
    old: 8999,
    image: 'images/cover_sedan_silver.png',
    rating: 4.8,
    reviews: 35,
    badge: 'UV HEAT SHIELD',
    fitMake: 'Toyota',
    fitModel: 'Corolla',
    bodyStyle: 'Sedan',
    shortDesc: 'Reflective aluminum exterior layer blocks 99% UV radiation and reduces interior cabin temperature by up to 25°C.',
    fabricSpecs: 'Reflective Aluminum Foil + High-Density Micro-Pores + Fleece',
    waterproofRating: '8,500mm Hydrostatic Head',
    uvProtection: '99.9% Thermal Heat Reflector',
    guarantee: '1-Year Heat Resistance Warranty',
    sizesAvailable: ['Medium (Corolla / Elantra)', 'Large (Camry / Accord)', 'XL (Mercedes S-Class)']
  },
  {
    id: 3,
    name: 'AutoShield Fortuner 4x4 Heavy Duty SUV Cover',
    cat: 'SUV Covers',
    price: 8999,
    old: 10999,
    image: 'images/cat_suv_cover.png',
    rating: 5.0,
    reviews: 62,
    badge: 'HEAVY DUTY',
    fitMake: 'Toyota',
    fitModel: 'Fortuner',
    bodyStyle: 'SUV',
    shortDesc: 'Designed specifically for full-size 7-seater SUVs. Extra height profile with heavy windproof buckle straps.',
    fabricSpecs: '400D Heavy Duty Oxford Polyester + Rubber Coating + Plush Inner Velvet',
    waterproofRating: '12,000mm Hydrostatic Head',
    uvProtection: '98.8% Sun Block',
    guarantee: '3-Year Heavy Duty Warranty',
    sizesAvailable: ['Fortuner Fit', 'Prado Fit', 'Land Cruiser / Patrol Fit']
  },
  {
    id: 4,
    name: 'AutoShield Tucson All-Weather Crossover Cover',
    cat: 'SUV Covers',
    price: 8499,
    old: 9999,
    image: 'images/hero_car_cover.png',
    rating: 4.7,
    reviews: 29,
    badge: 'ALL WEATHER',
    fitMake: 'Hyundai',
    fitModel: 'Tucson',
    bodyStyle: 'SUV',
    shortDesc: 'Custom tailored cover for mid-size compact crossovers like Tucson, Sportage, MG HS, and Haval Jolion.',
    fabricSpecs: 'Triple-Layered WeatherGuard Fabric + Reinforced Mirror Pockets',
    waterproofRating: '9,500mm Hydrostatic Head',
    uvProtection: '99.0% UV Deflector',
    guarantee: '2-Year Stitching Warranty',
    sizesAvailable: ['Crossover M (Tucson / Sportage)', 'Crossover L (Haval H6 / MG HS)']
  },
  {
    id: 5,
    name: 'AutoShield Swift Hatchback Tailored Cover',
    cat: 'Car Covers',
    price: 5999,
    old: 7499,
    image: 'images/cover_sedan_black.png',
    rating: 4.6,
    reviews: 22,
    badge: 'COMPACT FIT',
    fitMake: 'Suzuki',
    fitModel: 'Swift',
    bodyStyle: 'Hatchback',
    shortDesc: 'Precision contoured cover for hatchbacks like Swift, Alto, Cultus, Vitz, and Picanto with fast zip access.',
    fabricSpecs: 'Soft-Touch Weather-Tite Fabric + Double Stitched Hems',
    waterproofRating: '8,000mm Hydrostatic Head',
    uvProtection: '97.5% UV Block',
    guarantee: '1-Year Replacement Guarantee',
    sizesAvailable: ['Micro (Alto / Every)', 'Compact (Swift / Cultus / Vitz)', 'Hatchback (Aqua / Note)']
  },
  {
    id: 6,
    name: 'AutoShield Waterproof Superbike Body Cover',
    cat: 'Bike Covers',
    price: 2999,
    old: 3999,
    image: 'images/cat_bike_cover.png',
    rating: 4.9,
    reviews: 41,
    badge: 'BIKE SHIELD',
    fitMake: 'Yamaha',
    fitModel: 'Heavy Bike',
    bodyStyle: 'Bike',
    shortDesc: '100% waterproof motorcycle body cover with elastic double-stitched bottom hem and lock grommets.',
    fabricSpecs: '210T Ripstop Nylon + Heat Shield Exhaust Panel',
    waterproofRating: '10,000mm Hydrostatic Head',
    uvProtection: '98.0% UV Shield',
    guarantee: '1-Year Tearproof Guarantee',
    sizesAvailable: ['Standard (70cc - 150cc)', 'Heavy Bike (250cc - 1000cc)', 'Touring Adventure Bike']
  },
  {
    id: 7,
    name: 'AutoShield Tactical Camo All-Terrain Cover',
    cat: 'SUV Covers',
    price: 9499,
    old: 11999,
    image: 'images/cat_suv_cover.png',
    rating: 4.9,
    reviews: 19,
    badge: 'TACTICAL EDITION',
    fitMake: 'Toyota',
    fitModel: 'Hilux Revo',
    bodyStyle: 'SUV',
    shortDesc: 'Military-grade camouflage pattern water repellant body cover for 4x4 offroad jeeps and pickup trucks.',
    fabricSpecs: '600D Military Grade Camo Polyester + Polyurethane Coating',
    waterproofRating: '15,000mm Hydrostatic Head',
    uvProtection: '99.9% Military Sun Block',
    guarantee: '3-Year Extreme Conditions Warranty',
    sizesAvailable: ['Revo / D-Max Pickup', 'Jeep Wrangler / FJ Cruiser', 'Full Size 4x4']
  },
  {
    id: 8,
    name: 'AutoShield Matte Black Luxury Sports Cover',
    cat: 'Car Covers',
    price: 9999,
    old: 12999,
    image: 'images/product_silver_cover.png',
    rating: 5.0,
    reviews: 54,
    badge: 'LUXURY EDITION',
    fitMake: 'Audi',
    fitModel: 'A6',
    bodyStyle: 'Sedan',
    shortDesc: 'Showroom grade indoor & outdoor satin-touch stretch cover for luxury sports coupes and executive sedans.',
    fabricSpecs: 'Breathable Velvet Stretch Lycra + Satin Finish Outer',
    waterproofRating: '7,000mm Hydrostatic Head',
    uvProtection: '99.0% UV Shield',
    guarantee: '3-Year Showroom Coating Protection Warranty',
    sizesAvailable: ['Luxury Sedan (Audi A4/A6, BMW 3/5 Series)', 'Sports Coupe (Mustang, C-Class Coupe)']
  },
  {
    id: 9,
    name: 'AutoShield Anti-Theft Steel Cable & Lock Set',
    cat: 'Accessories',
    price: 1299,
    old: 1799,
    image: 'images/hero_car_cover.png',
    rating: 4.8,
    reviews: 31,
    badge: 'SECURITY',
    fitMake: 'Universal',
    fitModel: 'All Cars',
    bodyStyle: 'Accessory',
    shortDesc: 'PVC-coated heavy steel cable with brass padlock to secure your cover against theft and high wind blow-away.',
    fabricSpecs: 'Galvanized Steel Wire + Rustproof Brass Padlock + 2 Keys',
    waterproofRating: '100% Rustproof',
    uvProtection: 'N/A',
    guarantee: 'Lifetime Lock Mechanism Warranty',
    sizesAvailable: ['Universal Fit (Fits all car cover grommets)']
  },
  {
    id: 10,
    name: 'AutoShield Heavy Duty Reinforced Storage Bag',
    cat: 'Accessories',
    price: 1499,
    old: 1999,
    image: 'images/cat_suv_cover.png',
    rating: 4.7,
    reviews: 18,
    badge: 'CONVENIENCE',
    fitMake: 'Universal',
    fitModel: 'All Covers',
    bodyStyle: 'Accessory',
    shortDesc: 'Zippered carry bag for easy folding, storage, and trunk transport of your AutoShield body cover.',
    fabricSpecs: 'Waterproof Heavy Canvas + Reinforced Nylon Handles',
    waterproofRating: 'Repellent Canvas',
    uvProtection: 'N/A',
    guarantee: '1-Year Zipper Guarantee',
    sizesAvailable: ['Standard Bag (Car & Bike)', 'Extra Large Bag (SUV Covers)']
  },
  {
    id: 11,
    name: 'AutoShield Microfiber Auto Detailing Cloth Set',
    cat: 'Accessories',
    price: 999,
    old: 1499,
    image: 'images/cover_sedan_silver.png',
    rating: 4.9,
    reviews: 67,
    badge: 'CARE KIT',
    fitMake: 'Universal',
    fitModel: 'All Vehicles',
    bodyStyle: 'Accessory',
    shortDesc: 'Pack of 3 ultra-plush 800 GSM dual-sided microfiber towels for dust wiping before covering your vehicle.',
    fabricSpecs: '80% Polyester + 20% Polyamide (800 GSM Density)',
    waterproofRating: 'Super Absorbent',
    uvProtection: 'N/A',
    guarantee: '100% Scratch-Free Guarantee',
    sizesAvailable: ['40cm x 40cm (3 Pack)']
  },
  {
    id: 12,
    name: 'AutoShield Heavy Wind Lock Strap Extension',
    cat: 'Accessories',
    price: 899,
    old: 1299,
    image: 'images/cover_sedan_black.png',
    rating: 4.6,
    reviews: 14,
    badge: 'WINDPROOF',
    fitMake: 'Universal',
    fitModel: 'All Cars',
    bodyStyle: 'Accessory',
    shortDesc: 'Adjustable heavy-duty webbed buckle straps designed to secure cover ends during severe coastal or mountain storms.',
    fabricSpecs: 'High-Tensile Nylon Webbing + ABS Quick Release Clips',
    waterproofRating: 'Weatherproof Nylon',
    uvProtection: 'N/A',
    guarantee: '2-Year Clip Warranty',
    sizesAvailable: ['Universal Length (Adjustable up to 3 meters)']
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('autoshield_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('autoshield_wishlist')) || [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

// Vehicle Model Options for Fit Finder
const vehicleModels = {
  Honda: ['Civic', 'City', 'BR-V', 'HR-V', 'Accord'],
  Toyota: ['Corolla', 'Yaris', 'Fortuner', 'Land Cruiser', 'Hilux Revo', 'Aqua'],
  Suzuki: ['Alto', 'Cultus', 'Swift', 'Wagon R', 'Every'],
  Hyundai: ['Tucson', 'Elantra', 'Sonata', 'Santa Fe'],
  Kia: ['Sportage', 'Picanto', 'Stonic', 'Sorento'],
  MG: ['MG HS', 'MG ZS', 'MG GT'],
  Haval: ['H6', 'Jolion'],
  Audi: ['A4', 'A6', 'Q5', 'Q7'],
  BMW: ['3 Series', '5 Series', 'X5', 'X7']
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  renderCart();
  
  // Page specific renderers
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('shop.html')) {
    initShopPage();
  } else if (path.includes('product-detail.html')) {
    initProductDetailPage();
  } else if (path.includes('categories.html')) {
    initCategoriesPage();
  } else if (path.includes('cart.html')) {
    initCartPage();
  } else {
    // Default Home Page rendering
    renderHomeProducts();
  }

  // Global Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (path.includes('shop.html')) {
        renderShopGrid();
      } else {
        renderHomeProducts();
      }
    });
  }
});

// ===== RENDER HOME PAGE BESTSELLERS =====
function renderHomeProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const featured = productsData.slice(0, 8); // Top 8 featured products

  grid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

// ===== SHOP PAGE LOGIC =====
function initShopPage() {
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderShopGrid();
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat') || 'all';
      renderShopGrid();
    });
  });

  renderShopGrid();
}

function renderShopGrid() {
  const grid = document.getElementById('shopProductGrid');
  if (!grid) return;

  let filtered = [...productsData];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.cat === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || (p.fitModel && p.fitModel.toLowerCase().includes(q)));
  }

  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const countEl = document.getElementById('productCountLabel');
  if (countEl) countEl.textContent = `Showing ${filtered.length} products`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3>No covers match your search</h3>
        <p>Try searching for a different car model or category.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()" style="margin-top:16px">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

// ===== PRODUCT CARD HTML GENERATOR =====
function createProductCardHTML(p) {
  const discount = Math.round((1 - p.price / p.old) * 100);
  const isWishlisted = wishlist.includes(p.id);

  return `
    <article class="product-card">
      ${discount > 0 ? `<span class="badge-discount">-${discount}% OFF</span>` : ''}
      <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
        ${isWishlisted ? '♥' : '♡'}
      </button>
      <div class="product-thumb" onclick="navigateToDetail(${p.id})" style="cursor:pointer;">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="quick-view-overlay">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); navigateToDetail(${p.id})">Full Details →</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat-tag">${p.cat}</div>
        <h3 class="product-title" onclick="navigateToDetail(${p.id})" style="cursor:pointer;">${p.name}</h3>
        <div class="product-rating">
          ★★★★★ <span>(${p.reviews} reviews)</span>
        </div>
        <div class="product-price-row">
          <span class="current-price">${formatMoney(p.price)}</span>
          <span class="old-price">${formatMoney(p.old)}</span>
        </div>
        <div style="display:flex; gap:8px; margin-top: auto;">
          <button class="add-cart-btn" style="flex:1;" onclick="addToCart(${p.id})">
            🛒 Add to Cart
          </button>
          <button class="btn btn-whatsapp" style="padding:10px 14px;" onclick="orderViaWhatsApp(${p.id})" title="Order via WhatsApp">
            💬
          </button>
        </div>
      </div>
    </article>
  `;
}

// ===== PRODUCT DETAILS PAGE BINDER =====
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id')) || 1;
  const p = productsData.find(item => item.id === id) || productsData[0];

  document.title = `${p.name} — AutoShield Car Top Covers`;

  // Populate UI
  const imgEl = document.getElementById('detailImage');
  const titleEl = document.getElementById('detailTitle');
  const catEl = document.getElementById('detailCat');
  const priceEl = document.getElementById('detailPrice');
  const oldPriceEl = document.getElementById('detailOldPrice');
  const descEl = document.getElementById('detailDesc');
  const fabEl = document.getElementById('detailFabSpecs');
  const waterEl = document.getElementById('detailWater');
  const uvEl = document.getElementById('detailUv');
  const warrantyEl = document.getElementById('detailWarranty');
  const sizeSelect = document.getElementById('detailSizeSelect');

  if (imgEl) imgEl.src = p.image;
  if (titleEl) titleEl.textContent = p.name;
  if (catEl) catEl.textContent = p.cat;
  if (priceEl) priceEl.textContent = formatMoney(p.price);
  if (oldPriceEl) oldPriceEl.textContent = formatMoney(p.old);
  if (descEl) descEl.textContent = p.shortDesc;
  if (fabEl) fabEl.textContent = p.fabricSpecs;
  if (waterEl) waterEl.textContent = p.waterproofRating;
  if (uvEl) uvEl.textContent = p.uvProtection;
  if (warrantyEl) warrantyEl.textContent = p.guarantee;

  if (sizeSelect && p.sizesAvailable) {
    sizeSelect.innerHTML = p.sizesAvailable.map(s => `<option value="${s}">${s}</option>`).join('');
  }

  // Setup Actions
  const addBtn = document.getElementById('detailAddToCartBtn');
  if (addBtn) addBtn.onclick = () => addToCart(p.id);

  const waBtn = document.getElementById('detailWhatsAppBtn');
  if (waBtn) waBtn.onclick = () => orderViaWhatsApp(p.id);
}

function navigateToDetail(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

// ===== FIT FINDER =====
function updateFitModels() {
  const makeSelect = document.getElementById('fitMake');
  const modelSelect = document.getElementById('fitModel');
  if (!makeSelect || !modelSelect) return;

  const selectedMake = makeSelect.value;
  modelSelect.innerHTML = '<option value="">Select Model</option>';

  if (selectedMake && vehicleModels[selectedMake]) {
    vehicleModels[selectedMake].forEach(m => {
      modelSelect.innerHTML += `<option value="${m}">${m}</option>`;
    });
  }
}

function searchFitCover() {
  const make = document.getElementById('fitMake')?.value;
  const model = document.getElementById('fitModel')?.value;

  if (!make && !model) {
    showToast('Please select a Make and Model first!');
    return;
  }

  window.location.href = `shop.html?search=${encodeURIComponent(model || make)}`;
}

// ===== CART & WISHLIST MANAGERS =====
function addToCart(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateBadges();
  renderCart();
  openCartDrawer();
  showToast(`Added ${item.name} to Cart! 🛒`);
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  saveCart();
  updateBadges();
  renderCart();
  if (window.location.pathname.includes('cart.html')) initCartPage();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateBadges();
  renderCart();
  if (window.location.pathname.includes('cart.html')) initCartPage();
  showToast('Item removed from cart');
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (!container || !subtotalEl) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 0; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🛒</div>
        <p>Your cart is empty.</p>
        <a href="shop.html" class="btn btn-outline btn-sm" style="margin-top:16px; display:inline-block;">Explore Catalogue</a>
      </div>
    `;
    subtotalEl.textContent = formatMoney(0);
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
        <div style="flex:1;">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatMoney(item.price)}</div>
          <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
            <button onclick="updateCartQty(${item.id}, -1)" style="background:var(--dark-bg); color:#fff; width:24px; height:24px; border-radius:4px; border:1px solid var(--border);">-</button>
            <span style="font-weight:700; font-size:0.9rem;">${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)" style="background:var(--dark-bg); color:#fff; width:24px; height:24px; border-radius:4px; border:1px solid var(--border);">+</button>
            <button onclick="removeFromCart(${item.id})" style="margin-left:auto; color:var(--red); font-size:0.8rem;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.textContent = formatMoney(total);
}

function initCartPage() {
  const tableContainer = document.getElementById('cartPageItems');
  const subtotalEl = document.getElementById('cartPageSubtotal');
  const grandTotalEl = document.getElementById('cartPageGrandTotal');

  if (!tableContainer) return;

  if (cart.length === 0) {
    tableContainer.innerHTML = `
      <div style="text-align:center; padding: 64px 0; color: var(--text-muted);">
        <div style="font-size: 3.5rem; margin-bottom: 16px;">🛒</div>
        <h2>Your Cart is Currently Empty</h2>
        <p style="margin-bottom: 24px;">Add protective covers for your car to proceed with checkout.</p>
        <a href="shop.html" class="btn btn-primary">Browse Catalogue →</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatMoney(0);
    if (grandTotalEl) grandTotalEl.textContent = formatMoney(0);
    return;
  }

  let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  tableContainer.innerHTML = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr>
            <td style="display:flex; align-items:center; gap:16px;">
              <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;">
              <div>
                <strong>${item.name}</strong>
                <div style="font-size:0.8rem; color:var(--text-muted);">${item.cat}</div>
              </div>
            </td>
            <td><strong>${formatMoney(item.price)}</strong></td>
            <td>
              <div style="display:flex; align-items:center; gap:8px;">
                <button onclick="updateCartQty(${item.id}, -1)" style="padding:4px 10px; background:var(--card-bg); color:#fff; border:1px solid var(--border); border-radius:4px;">-</button>
                <span>${item.qty}</span>
                <button onclick="updateCartQty(${item.id}, 1)" style="padding:4px 10px; background:var(--card-bg); color:#fff; border:1px solid var(--border); border-radius:4px;">+</button>
              </div>
            </td>
            <td><strong style="color:var(--red);">${formatMoney(item.price * item.qty)}</strong></td>
            <td><button onclick="removeFromCart(${item.id})" style="color:var(--red); border:0; background:none;">Remove</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  if (subtotalEl) subtotalEl.textContent = formatMoney(total);
  if (grandTotalEl) grandTotalEl.textContent = formatMoney(total);
}

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from Wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to Wishlist ♥');
  }
  saveCart();
  localStorage.setItem('autoshield_wishlist', JSON.stringify(wishlist));
  updateBadges();
  if (window.location.pathname.includes('shop.html')) renderShopGrid();
  else renderHomeProducts();
}

function saveCart() {
  localStorage.setItem('autoshield_cart', JSON.stringify(cart));
}

function updateBadges() {
  const cartBadge = document.getElementById('cartCount');
  const wishBadge = document.getElementById('wishCount');

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cartBadge) cartBadge.textContent = totalCartCount;
  if (wishBadge) wishBadge.textContent = wishlist.length;
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('open');
}

// ===== WHATSAPP ORDER GENERATOR =====
function orderViaWhatsApp(productId) {
  const item = productId ? productsData.find(p => p.id === productId) : null;

  let msg = "Hello AutoShield! I want to order:\n\n";

  if (item) {
    msg += `• Product: ${item.name}\n• Category: ${item.cat}\n• Price: ${formatMoney(item.price)}\n`;
  } else if (cart.length > 0) {
    cart.forEach(c => {
      msg += `• ${c.name} x ${c.qty} = ${formatMoney(c.price * c.qty)}\n`;
    });
    const total = cart.reduce((t, i) => t + (i.price * i.qty), 0);
    msg += `\nTotal Amount: ${formatMoney(total)}\n`;
  } else {
    showToast('Your cart is empty!');
    return;
  }

  msg += "\nPlease confirm shipment & delivery address.";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ===== CHECKOUT SUBMISSION =====
function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('custName')?.value;
  const phone = document.getElementById('custPhone')?.value;

  if (!name || !phone) {
    showToast('Please fill out all required shipping fields');
    return;
  }

  cart = [];
  saveCart();
  updateBadges();
  renderCart();

  showToast(`🎉 Thank you ${name}! Your order has been placed via Cash on Delivery.`);
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2500);
}

// ===== CONTACT FORM =====
function handleContactSubmit(e) {
  e.preventDefault();
  showToast('📩 Thank you for your inquiry! Our AutoShield team will respond shortly.');
  e.target.reset();
}

// ===== HELPERS =====
function formatMoney(num) {
  return 'Rs. ' + Number(num).toLocaleString('en-PK');
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `🛡 <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  renderShopGrid();
}