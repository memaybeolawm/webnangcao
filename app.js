// Apex Gear - E-Commerce Application State & Logic

// Inline SVG templates for products to ensure zero placeholders and beautiful vector renderings
const SVG_TEMPLATES = {
  prebuilt_titan: `<svg viewBox="0 0 200 200" width="100%" height="100%"><defs><linearGradient id="pTitan" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00f2fe"/><stop offset="100%" stop-color="#8200ff"/></linearGradient><radialGradient id="fanGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(0, 242, 254, 0.4)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient></defs><rect x="40" y="20" width="120" height="160" rx="10" fill="#131722" stroke="url(#pTitan)" stroke-width="2"/><rect x="44" y="24" width="112" height="152" rx="6" fill="#0c0e15"/><path d="M 45,25 L 155,25 L 155,175 L 45,175 Z" fill="rgba(255,255,255,0.05)"/><circle cx="100" cy="65" r="22" fill="url(#fanGlow)" stroke="#00f2fe" stroke-width="1" stroke-dasharray="4,4"/><circle cx="100" cy="65" r="8" fill="#8200ff"/><circle cx="100" cy="125" r="22" fill="url(#fanGlow)" stroke="#ff007f" stroke-width="1" stroke-dasharray="4,4"/><circle cx="100" cy="125" r="8" fill="#00f2fe"/><rect x="52" y="32" width="6" height="136" rx="2" fill="rgba(255,255,255,0.1)"/><rect x="142" y="32" width="6" height="136" rx="2" fill="rgba(255,255,255,0.1)"/><path d="M 60,80 L 140,80 L 140,110 L 60,110 Z" fill="#202538" stroke="#00f2fe" stroke-width="1"/><text x="100" y="98" fill="#fff" font-family="monospace" font-size="10" text-anchor="middle" letter-spacing="1">RTX 4080</text></svg>`,
  
  prebuilt_nebula: `<svg viewBox="0 0 200 200" width="100%" height="100%"><defs><linearGradient id="pNebula" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff007f"/><stop offset="100%" stop-color="#8200ff"/></linearGradient><radialGradient id="meshGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255, 0, 127, 0.3)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient></defs><rect x="50" y="30" width="100" height="140" rx="8" fill="#131722" stroke="url(#pNebula)" stroke-width="2"/><rect x="54" y="34" width="92" height="132" rx="4" fill="#0c0e15"/><path d="M 55,35 L 145,35 L 145,165 L 55,165 Z" fill="rgba(255,255,255,0.03)"/><circle cx="100" cy="80" r="28" fill="url(#meshGlow)" stroke="#ff007f" stroke-width="1" stroke-dasharray="6,4"/><circle cx="100" cy="80" r="6" fill="#00f2fe"/><path d="M 70,120 L 130,120 L 130,140 L 70,140 Z" fill="#202538" stroke="#ff007f" stroke-width="1"/><text x="100" y="133" fill="#fff" font-family="monospace" font-size="9" text-anchor="middle">RTX 4070</text></svg>`,
  
  ram_veng: `<svg viewBox="0 0 200 200" width="100%" height="100%"><defs><linearGradient id="ramRGB" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00f2fe"/><stop offset="30%" stop-color="#8200ff"/><stop offset="70%" stop-color="#ff007f"/><stop offset="100%" stop-color="#ffd700"/></linearGradient></defs><rect x="20" y="80" width="160" height="40" rx="4" fill="#1c2030" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><rect x="20" y="70" width="160" height="10" rx="2" fill="url(#ramRGB)"/><rect x="25" y="85" width="150" height="12" rx="2" fill="#0f111a"/><line x1="20" y1="120" x2="180" y2="120" stroke="#ffd700" stroke-width="2" stroke-dasharray="4,2"/><text x="100" y="94" fill="#8200ff" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">DDR5 RGB</text><rect x="35" y="102" width="20" height="12" rx="1" fill="rgba(255,255,255,0.05)"/><rect x="65" y="102" width="20" height="12" rx="1" fill="rgba(255,255,255,0.05)"/><rect x="95" y="102" width="20" height="12" rx="1" fill="rgba(255,255,255,0.05)"/><rect x="125" y="102" width="20" height="12" rx="1" fill="rgba(255,255,255,0.05)"/></svg>`,
  
  ram_dom: `<svg viewBox="0 0 200 200" width="100%" height="100%"><defs><linearGradient id="domRGB" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00f2fe"/><stop offset="50%" stop-color="#ff007f"/><stop offset="100%" stop-color="#00f2fe"/></linearGradient></defs><rect x="15" y="70" width="170" height="55" rx="6" fill="#10121a" stroke="#00f2fe" stroke-width="1.5"/><rect x="20" y="75" width="160" height="8" rx="1" fill="url(#domRGB)"/><path d="M 20,88 L 180,88 L 180,100 L 20,100 Z" fill="#252b41"/><line x1="15" y1="125" x2="185" y2="125" stroke="#ffd700" stroke-width="3" stroke-dasharray="5,2"/><text x="100" y="97" fill="#fff" font-family="sans-serif" font-size="9" font-weight="800" text-anchor="middle" letter-spacing="1">DOMINATOR</text><circle cx="40" cy="112" r="4" fill="rgba(255,255,255,0.1)"/><circle cx="70" cy="112" r="4" fill="rgba(255,255,255,0.1)"/><circle cx="100" cy="112" r="4" fill="rgba(255,255,255,0.1)"/><circle cx="130" cy="112" r="4" fill="rgba(255,255,255,0.1)"/><circle cx="160" cy="112" r="4" fill="rgba(255,255,255,0.1)"/></svg>`,
  
  mon_odyssey: `<svg viewBox="0 0 200 200" width="100%" height="100%"><path d="M 20,40 Q 100,50 180,40 L 180,120 Q 100,130 20,120 Z" fill="#0d0f17" stroke="#00f2fe" stroke-width="2"/><path d="M 24,44 Q 100,53 176,44 L 176,116 Q 100,125 24,116 Z" fill="#181c2b"/><rect x="92" y="125" width="16" height="40" fill="#2e354f" stroke="rgba(255,255,255,0.1)"/><path d="M 60,165 L 140,165 L 120,175 L 80,175 Z" fill="#1c2030"/><ellipse cx="100" cy="125" rx="14" ry="4" fill="#00f2fe" opacity="0.8"/><path d="M 28,48 L 172,48 L 172,112 L 28,112 Z" fill="rgba(0, 242, 254, 0.05)"/></svg>`,
  
  mon_predator: `<svg viewBox="0 0 200 200" width="100%" height="100%"><path d="M 10,45 Q 100,52 190,45 L 190,115 Q 100,122 10,115 Z" fill="#0d0f17" stroke="#ff007f" stroke-width="2"/><path d="M 14,48 Q 100,55 186,48 L 186,112 Q 100,119 14,112 Z" fill="#181c2b"/><path d="M 90,118 L 110,118 L 120,165 L 80,165 Z" fill="#22283a"/><path d="M 50,165 L 150,165 L 130,175 L 70,175 Z" fill="#151924"/><ellipse cx="100" cy="118" rx="8" ry="8" fill="#ff007f" opacity="0.6"/><path d="M 18,52 L 182,52 L 182,108 L 18,108 Z" fill="rgba(255, 0, 127, 0.05)"/></svg>`,
  
  case_titan: `<svg viewBox="0 0 200 200" width="100%" height="100%"><rect x="45" y="20" width="110" height="160" rx="8" fill="#1c2030" stroke="#00f2fe" stroke-width="1.5"/><rect x="50" y="25" width="100" height="150" rx="4" fill="#0d0f17"/><path d="M 51,26 L 149,26 L 149,174 L 51,174 Z" fill="rgba(0, 242, 254, 0.08)"/><circle cx="100" cy="55" r="18" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe" stroke-dasharray="3,3"/><circle cx="100" cy="100" r="18" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe" stroke-dasharray="3,3"/><circle cx="100" cy="145" r="18" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe" stroke-dasharray="3,3"/></svg>`,
  
  case_nebula: `<svg viewBox="0 0 200 200" width="100%" height="100%"><rect x="55" y="30" width="90" height="140" rx="12" fill="#1c2030" stroke="#ff007f" stroke-width="1.5"/><rect x="60" y="35" width="80" height="130" rx="8" fill="#0d0f17"/><rect x="68" y="45" width="64" height="110" rx="4" fill="rgba(255,0,127,0.05)" stroke="rgba(255,0,127,0.2)"/><circle cx="100" cy="100" r="24" fill="rgba(255, 0, 127, 0.15)" stroke="#ff007f" stroke-dasharray="4,2"/></svg>`,
  
  kb_hyperion: `<svg viewBox="0 0 200 200" width="100%" height="100%"><defs><linearGradient id="kbGlow" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00f2fe"/><stop offset="100%" stop-color="#ff007f"/></linearGradient></defs><rect x="15" y="70" width="170" height="60" rx="6" fill="#1c2030" stroke="url(#kbGlow)" stroke-width="2"/><rect x="20" y="75" width="160" height="50" rx="4" fill="#0d0f17"/><rect x="25" y="80" width="14" height="10" rx="1" fill="#ff007f"/><rect x="43" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="61" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="79" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="97" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="115" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="133" y="80" width="14" height="10" rx="1" fill="#252a3d"/><rect x="151" y="80" width="14" height="10" rx="1" fill="#ff007f"/><rect x="161" y="80" width="14" height="10" rx="1" fill="#00f2fe"/><rect x="25" y="95" width="18" height="10" rx="1" fill="#00f2fe"/><rect x="47" y="95" width="14" height="10" rx="1" fill="#252a3d"/><rect x="65" y="95" width="14" height="10" rx="1" fill="#252a3d"/><rect x="83" y="95" width="14" height="10" rx="1" fill="#252a3d"/><rect x="101" y="95" width="14" height="10" rx="1" fill="#252a3d"/><rect x="119" y="95" width="14" height="10" rx="1" fill="#252a3d"/><rect x="137" y="95" width="18" height="10" rx="1" fill="#00f2fe"/><rect x="25" y="110" width="22" height="10" rx="1" fill="#252a3d"/><rect x="51" y="110" width="85" height="10" rx="1" fill="#8200ff"/><rect x="140" y="110" width="35" height="10" rx="1" fill="#252a3d"/></svg>`,
  
  mouse_cobra: `<svg viewBox="0 0 200 200" width="100%" height="100%"><path d="M 100,40 C 70,40 65,80 65,110 C 65,140 80,160 100,160 C 120,160 135,140 135,110 C 135,80 130,40 100,40 Z" fill="#1c2030" stroke="#00f2fe" stroke-width="2"/><path d="M 100,45 C 75,45 70,80 70,110 C 70,135 82,152 100,152 C 118,152 130,135 130,110 C 130,80 125,45 100,45 Z" fill="#0d0f17"/><line x1="100" y1="40" x2="100" y2="85" stroke="rgba(255,255,255,0.15)" stroke-width="1"/><rect x="97" y="52" width="6" height="16" rx="3" fill="#00f2fe" stroke="#00f2fe" stroke-width="1"/><path d="M 67,110 C 67,120 70,130 75,135" stroke="#00f2fe" stroke-width="1.5" fill="none"/><path d="M 133,110 C 133,120 130,130 125,135" stroke="#00f2fe" stroke-width="1.5" fill="none"/></svg>`,
  
  headset_void: `<svg viewBox="0 0 200 200" width="100%" height="100%"><path d="M 50,110 A 50,50 0 0,1 150,110" fill="none" stroke="#252b41" stroke-width="8" stroke-linecap="round"/><path d="M 46,110 A 54,54 0 0,1 154,110" fill="none" stroke="#8200ff" stroke-width="2" stroke-linecap="round"/><rect x="35" y="95" width="22" height="40" rx="8" fill="#1c2030" stroke="#00f2fe" stroke-width="1.5"/><rect x="143" y="95" width="22" height="40" rx="8" fill="#1c2030" stroke="#00f2fe" stroke-width="1.5"/><path d="M 46,125 Q 70,155 100,155" fill="none" stroke="#252b41" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="155" r="4" fill="#00f2fe"/><circle cx="46" cy="115" r="7" fill="#ff007f" opacity="0.8"/><circle cx="154" cy="115" r="7" fill="#ff007f" opacity="0.8"/></svg>`,

  generic_peripheral: `<svg viewBox="0 0 200 200" width="100%" height="100%"><rect x="30" y="80" width="100" height="40" rx="4" fill="#1c2030" stroke="#00f2fe"/><rect x="140" y="80" width="30" height="50" rx="10" fill="#1c2030" stroke="#ff007f"/><circle cx="155" cy="95" r="4" fill="#ff007f"/></svg>`
};

// Local fallback database of products (in case server loads slowly)
const LOCAL_PRODUCTS = [
  { id: "prebuilt-titan", name: "Apex Titan-9 Gaming Rig", category: "prebuilt", price: 2499.00, rating: 4.9, reviews: 142, badge: "Bestseller", image: SVG_TEMPLATES.prebuilt_titan, desc: "The absolute pinnacle of gaming performance. Armed with a liquid-cooled AMD Ryzen 9 processor and the powerhouse NVIDIA GeForce RTX 4080.", features: ["Ryzen 9 7900X", "NVIDIA RTX 4080", "32GB DDR5 RAM", "2TB NVMe SSD", "850W Gold PSU"] },
  { id: "prebuilt-nebula", name: "Apex Nebula-7 Pro", category: "prebuilt", price: 1699.00, rating: 4.8, reviews: 96, badge: "Trending", image: SVG_TEMPLATES.prebuilt_nebula, desc: "Compact footprint, massive performance. The Nebula-7 Pro is an ITX masterpiece.", features: ["Ryzen 7 7700X", "RTX 4070 12GB", "16GB DDR5 RAM", "1TB NVMe SSD"] },
  { id: "ram-veng", name: "Vengeance RGB 32GB DDR5 Memory", category: "ram", price: 149.00, rating: 4.7, reviews: 320, badge: "RGB Elite", image: SVG_TEMPLATES.ram_veng, desc: "Optimize your system memory with ultra-fast Vengeance DDR5.", features: ["Speed: 6000 MHz", "Capacity: 32GB (2x16GB)", "Aluminum Heatspreader"] },
  { id: "ram-dom", name: "Dominator Extreme 64GB DDR5 Memory", category: "ram", price: 299.00, rating: 4.9, reviews: 87, badge: "Extreme", image: SVG_TEMPLATES.ram_dom, desc: "The ultimate DDR5 memory kit for creators and extreme enthusiasts.", features: ["Speed: 6400 MHz", "Capacity: 64GB", "Custom Capellix RGB"] },
  { id: "mon-odyssey", name: "Odyssey G7 27\" Curved Monitor", category: "monitor", price: 499.00, rating: 4.8, reviews: 215, badge: "240Hz Curved", image: SVG_TEMPLATES.mon_odyssey, desc: "Unmatched immersion featuring a deep 1000R curvature matching the human eye.", features: ["Screen Size: 27 Inches", "Refresh Rate: 240Hz", "1ms Response Time"] },
  { id: "mon-predator", name: "Predator X34 Ultra-Wide Monitor", category: "monitor", price: 799.00, rating: 4.6, reviews: 64, badge: "Ultrawide 21:9", image: SVG_TEMPLATES.mon_predator, desc: "Expand your field of view with gorgeous curved color dynamics.", features: ["Screen Size: 34 Inches", "Refresh Rate: 144Hz", "NVIDIA G-Sync Ultimate"] },
  { id: "case-titan", name: "Apex Titan Glass Mid-Tower", category: "case", price: 189.00, rating: 4.8, reviews: 104, badge: "Airflow + RGB", image: SVG_TEMPLATES.case_titan, desc: "Showcase your setup with three premium tinted tempered glass panels.", features: ["Motherboard Support: ATX, ITX", "4x 120mm ARGB Fans Included"] },
  { id: "case-nebula", name: "Nebula Mini-ITX Case", category: "case", price: 139.00, rating: 4.7, reviews: 51, badge: "Compact Master", image: SVG_TEMPLATES.case_nebula, desc: "A SFF powerhouse with zero performance compromises.", features: ["ITX Only", "Ultra-Airflow Mesh Panels"] },
  { id: "kb-hyperion", name: "Apex Hyperion Linear Keyboard", category: "keyboard", price: 129.00, rating: 4.9, reviews: 183, badge: "Hot-Swappable", image: SVG_TEMPLATES.kb_hyperion, desc: "CNC-milled aluminum top frame, hot-swappable sockets.", features: ["Form Factor: TKL", "Switches: Red Linear", "PBT Double-Shot"] },
  { id: "mouse-cobra", name: "Apex Cobra Wireless Mouse", category: "mouse", price: 89.00, rating: 4.8, reviews: 247, badge: "59g Ultralight", image: SVG_TEMPLATES.mouse_cobra, desc: "Lightweight 59 grams, proprietary 26K DPI optical sensor.", features: ["Sensor: 26K DPI Optical", "Weight: 59g", "Battery: Up to 90 Hours"] },
  { id: "headset-void", name: "Apex Void 7.1 Wireless Headset", category: "headset", price: 119.00, rating: 4.6, reviews: 133, badge: "Spatial 7.1", image: SVG_TEMPLATES.headset_void, desc: "50mm Hi-Res neodymium drivers and 7.1 DTS spatial sound.", features: ["Drivers: 50mm Neodymium", "Battery: Up to 30 Hours"] }
];

// Configurator Builder catalog
const BUILDER_CATALOG = {
  cases: [
    { id: "bc-titan", name: "Titan Glass Mid-Tower", price: 189, img: SVG_TEMPLATES.case_titan },
    { id: "bc-nebula", name: "Nebula ITX Case", price: 139, img: SVG_TEMPLATES.case_nebula }
  ],
  rams: [
    { id: "br-veng", name: "32GB DDR5 6000MHz", price: 149, img: SVG_TEMPLATES.ram_veng },
    { id: "br-dom", name: "64GB DDR5 Extreme", price: 299, img: SVG_TEMPLATES.ram_dom }
  ],
  monitors: [
    { id: "bm-odyssey", name: "27\" Curved 240Hz", price: 499, img: SVG_TEMPLATES.mon_odyssey },
    { id: "bm-predator", name: "34\" Ultrawide 144Hz", price: 799, img: SVG_TEMPLATES.mon_predator }
  ],
  peripherals: [
    { id: "bp-none", name: "No Accessories", price: 0, img: SVG_TEMPLATES.generic_peripheral },
    { id: "bp-bundle", name: "Cobra Mouse + Keyboard Bundle", price: 199, img: SVG_TEMPLATES.kb_hyperion }
  ]
};

// Global App State
let PRODUCTS = [];
let cart = [];
let currentUser = JSON.parse(localStorage.getItem("apex_user")) || null;
let activeCategory = "all";
let searchQuery = "";
let sortOption = "rating";
let builderSelections = {
  case: BUILDER_CATALOG.cases[0],
  ram: BUILDER_CATALOG.rams[0],
  monitor: BUILDER_CATALOG.monitors[0],
  peripheral: BUILDER_CATALOG.peripherals[0]
};
let appliedPromo = JSON.parse(localStorage.getItem("apex_promo")) || null;
let currentDetailProduct = null;
let checkoutStep = 1;

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  // Setup header scroll listener
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Load user-bound cart
  loadUserCart();

  // Load product catalog from backend API
  await fetchProducts();

  // Render builder & cart
  initPCBuilder();
  renderCart();
  updateAuthHeader();

  // Setup Event Listeners
  setupEventListeners();
}

// Load cart bound to current authenticated user session
function loadUserCart() {
  const cartKey = currentUser ? `apex_cart_${currentUser.username}` : "apex_cart_guest";
  cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  updateCartBadge();
}

// Save cart bound to current session
function saveUserCart() {
  const cartKey = currentUser ? `apex_cart_${currentUser.username}` : "apex_cart_guest";
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

// Fetch Catalog items from the API
async function fetchProducts() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error("Network response error");
    const data = await response.json();
    
    // Merge backend data with local SVG representations
    PRODUCTS = data.map(item => {
      let imageSvg = SVG_TEMPLATES.generic_peripheral;
      if (item.id === "prebuilt-titan") imageSvg = SVG_TEMPLATES.prebuilt_titan;
      if (item.id === "prebuilt-nebula") imageSvg = SVG_TEMPLATES.prebuilt_nebula;
      if (item.id === "ram-veng") imageSvg = SVG_TEMPLATES.ram_veng;
      if (item.id === "ram-dom") imageSvg = SVG_TEMPLATES.ram_dom;
      if (item.id === "mon-odyssey") imageSvg = SVG_TEMPLATES.mon_odyssey;
      if (item.id === "mon-predator") imageSvg = SVG_TEMPLATES.mon_predator;
      if (item.id === "case-titan") imageSvg = SVG_TEMPLATES.case_titan;
      if (item.id === "case-nebula") imageSvg = SVG_TEMPLATES.case_nebula;
      if (item.id === "kb-hyperion") imageSvg = SVG_TEMPLATES.kb_hyperion;
      if (item.id === "mouse-cobra") imageSvg = SVG_TEMPLATES.mouse_cobra;
      if (item.id === "headset-void") imageSvg = SVG_TEMPLATES.headset_void;
      
      return { ...item, image: imageSvg };
    });
  } catch (err) {
    console.error("API error loading products, using local fallback", err);
    PRODUCTS = LOCAL_PRODUCTS;
  }
  renderCatalog();
}

// Setup Application Listeners
function setupEventListeners() {
  // Category Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Sort Selection
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortOption = e.target.value;
      renderCatalog();
    });
  }

  // Instant Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Cart Drawer toggles
  const cartBtn = document.getElementById("cart-btn");
  const closeCartBtn = document.getElementById("cart-close-btn");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartDrawer = cartOverlay ? cartOverlay.querySelector(".cart-drawer") : null;

  const openCartDrawer = () => {
    if (!cartOverlay) return;
    cartOverlay.classList.add("open");
    if (cartDrawer) cartDrawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeCartDrawer = () => {
    if (!cartOverlay) return;
    cartOverlay.classList.remove("open");
    if (cartDrawer) cartDrawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  // Auth Modal toggles
  const navLoginBtn = document.getElementById("nav-login-btn");
  const authOverlay = document.getElementById("auth-overlay");
  const authCloseBtn = document.getElementById("auth-close-btn");
  
  if (navLoginBtn && authOverlay) {
    navLoginBtn.addEventListener("click", () => {
      openAuthModal("login");
    });
  }

  const closeAuthModal = () => {
    authOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (authCloseBtn) authCloseBtn.addEventListener("click", closeAuthModal);
  if (authOverlay) {
    authOverlay.addEventListener("click", (e) => {
      if (e.target === authOverlay) closeAuthModal();
    });
  }

  // Auth Tab Toggles
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener("click", () => {
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
    });

    tabRegister.addEventListener("click", () => {
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");
      registerForm.classList.add("active");
      loginForm.classList.remove("active");
    });
  }

  // Handle Login submission
  const submitLoginBtn = document.getElementById("submit-login-btn");
  if (submitLoginBtn) {
    submitLoginBtn.addEventListener("click", handleLoginSubmit);
  }

  // Handle Register submission
  const submitRegisterBtn = document.getElementById("submit-register-btn");
  if (submitRegisterBtn) {
    submitRegisterBtn.addEventListener("click", handleRegisterSubmit);
  }

  // Order history overlay
  const ordersOverlay = document.getElementById("orders-overlay");
  const ordersCloseBtn = document.getElementById("orders-close-btn");
  const closeOrdersModal = () => {
    ordersOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };
  if (ordersCloseBtn) ordersCloseBtn.addEventListener("click", closeOrdersModal);
  if (ordersOverlay) {
    ordersOverlay.addEventListener("click", (e) => {
      if (e.target === ordersOverlay) closeOrdersModal();
    });
  }

  // Checkout Modal triggers
  const checkoutBtn = document.getElementById("checkout-btn");
  const checkoutOverlay = document.getElementById("checkout-overlay");
  const closeCheckoutBtn = document.getElementById("checkout-close-btn");
  const shortcutLogin = document.getElementById("checkout-signin-shortcut");

  if (checkoutBtn && checkoutOverlay) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Your cart is empty!", "pink");
        return;
      }
      // Close cart drawer properly (both overlay + drawer)
      if (cartOverlay) cartOverlay.classList.remove("open");
      if (cartDrawer) cartDrawer.classList.remove("open");
      document.body.style.overflow = "";
      checkoutStep = 1;
      updateCheckoutModalState();
      checkoutOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  const closeCheckoutModal = () => {
    checkoutOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

  if (shortcutLogin) {
    shortcutLogin.addEventListener("click", () => {
      closeCheckoutModal();
      openAuthModal("login");
    });
  }

  // Promo Code Validation
  const promoBtn = document.getElementById("promo-btn");
  const promoInput = document.getElementById("promo-input");
  if (promoBtn && promoInput) {
    promoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === "APEX10") {
        appliedPromo = { code: "APEX10", discount: 0.1 };
        localStorage.setItem("apex_promo", JSON.stringify(appliedPromo));
        showToast("Promo code APEX10 applied! 10% Discount.");
        promoInput.value = "";
        renderCart();
      } else if (code === "") {
        showToast("Please enter a coupon.", "pink");
      } else {
        showToast("Invalid coupon code.", "pink");
      }
    });
  }

  // Product detail modal close
  const detailOverlay = document.getElementById("detail-overlay");
  const closeDetailBtn = document.getElementById("detail-close-btn");
  const closeDetailModal = () => {
    detailOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };
  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetailModal);
  if (detailOverlay) {
    detailOverlay.addEventListener("click", (e) => {
      if (e.target === detailOverlay) closeDetailModal();
    });
  }

  // Quantity controls detail modal
  const detailQtyVal = document.getElementById("detail-qty-val");
  const detailQtyMinus = document.getElementById("detail-qty-minus");
  const detailQtyPlus = document.getElementById("detail-qty-plus");
  const detailAddBtn = document.getElementById("detail-add-btn");

  let detailQty = 1;
  if (detailQtyMinus && detailQtyPlus && detailQtyVal) {
    detailQtyMinus.addEventListener("click", () => {
      if (detailQty > 1) {
        detailQty--;
        detailQtyVal.textContent = detailQty;
      }
    });
    detailQtyPlus.addEventListener("click", () => {
      detailQty++;
      detailQtyVal.textContent = detailQty;
    });
  }

  if (detailAddBtn) {
    detailAddBtn.addEventListener("click", () => {
      if (currentDetailProduct) {
        addToCart(currentDetailProduct.id, detailQty);
        closeDetailModal();
        detailQty = 1;
        detailQtyVal.textContent = "1";
      }
    });
  }

  // Checkout Stepper Buttons
  const nextStepBtn = document.getElementById("checkout-next-btn");
  const prevStepBtn = document.getElementById("checkout-prev-btn");

  if (nextStepBtn) {
    nextStepBtn.addEventListener("click", () => {
      if (checkoutStep === 1) {
        if (!currentUser) {
          showToast("Please log in first.", "pink");
          return;
        }
        if (validateShippingForm()) {
          checkoutStep = 2;
          updateCheckoutModalState();
        } else {
          showToast("Please complete the address form.", "pink");
        }
      } else if (checkoutStep === 2) {
        if (validatePaymentForm()) {
          submitOrderToServer();
        } else {
          showToast("Please enter valid card digits.", "pink");
        }
      }
    });
  }

  if (prevStepBtn) {
    prevStepBtn.addEventListener("click", () => {
      if (checkoutStep > 1) {
        checkoutStep--;
        updateCheckoutModalState();
      }
    });
  }

  const successCloseBtn = document.getElementById("success-close-btn");
  if (successCloseBtn) {
    successCloseBtn.addEventListener("click", () => {
      closeCheckoutModal();
    });
  }
}

// Open Login/Register card
function openAuthModal(tab = "login") {
  const authOverlay = document.getElementById("auth-overlay");
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  
  if (!authOverlay) return;

  // Clear errors
  document.getElementById("login-error").style.display = "none";
  document.getElementById("register-error").style.display = "none";

  if (tab === "login") {
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  } else {
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  }

  authOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Handle login POST api call
async function handleLoginSubmit() {
  const usernameVal = document.getElementById("login-username").value.trim();
  const passwordVal = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  errorEl.style.display = "none";

  if (!usernameVal || !passwordVal) {
    errorEl.textContent = "Please fill in all inputs.";
    errorEl.style.display = "block";
    return;
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usernameVal, password: passwordVal })
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Login failed");

    // Login successful
    currentUser = result.user;
    localStorage.setItem("apex_user", JSON.stringify(currentUser));
    
    showToast(`Welcome back, ${currentUser.username}!`);
    document.getElementById("login-form").reset();
    document.getElementById("auth-overlay").classList.remove("open");
    document.body.style.overflow = "";

    // Sync cart and header
    loadUserCart();
    renderCart();
    updateAuthHeader();

  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.style.display = "block";
    showToast("Invalid credentials.", "pink");
  }
}

// Handle register POST api call
async function handleRegisterSubmit() {
  const usernameVal = document.getElementById("register-username").value.trim();
  const emailVal = document.getElementById("register-email").value.trim();
  const passwordVal = document.getElementById("register-password").value;
  const errorEl = document.getElementById("register-error");

  errorEl.style.display = "none";

  if (!usernameVal || !emailVal || !passwordVal) {
    errorEl.textContent = "Please fill in all inputs.";
    errorEl.style.display = "block";
    return;
  }

  if (usernameVal.length < 3) {
    errorEl.textContent = "Username must be at least 3 characters.";
    errorEl.style.display = "block";
    return;
  }

  if (passwordVal.length < 6) {
    errorEl.textContent = "Password must be at least 6 characters.";
    errorEl.style.display = "block";
    return;
  }

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usernameVal, email: emailVal, password: passwordVal })
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Registration failed");

    showToast("Registration successful! Please Sign In.");
    document.getElementById("register-form").reset();
    
    // Switch to Login Tab
    document.getElementById("tab-login").click();

  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.style.display = "block";
    showToast("Registration failed.", "pink");
  }
}

// Handle user log out
function handleLogOut() {
  currentUser = null;
  localStorage.removeItem("apex_user");
  showToast("Logged out successfully.");
  
  // Reload guest cart and update UI
  loadUserCart();
  renderCart();
  updateAuthHeader();
}

// Refresh header auth nodes
function updateAuthHeader() {
  const container = document.getElementById("auth-status-container");
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div class="welcome-user-text">Welcome, <span>${currentUser.username}</span></div>
      <span class="nav-action-link" onclick="openOrderHistory()">Orders</span>
      <span class="nav-action-link" onclick="handleLogOut()">Log Out</span>
    `;
  } else {
    container.innerHTML = `
      <button id="nav-login-btn" class="btn-secondary nav-auth-btn" onclick="openAuthModal('login')">Sign In</button>
    `;
  }
}

// Fetch and open past transactions
async function openOrderHistory() {
  if (!currentUser) return;

  const overlay = document.getElementById("orders-overlay");
  const listContainer = document.getElementById("orders-list-container");

  if (!overlay || !listContainer) return;

  listContainer.innerHTML = `<p style="text-align:center; color:var(--text-secondary);">Loading order database records...</p>`;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  try {
    const response = await fetch(`/api/orders/${currentUser.username}`);
    if (!response.ok) throw new Error("Could not fetch order history.");
    const orders = await response.json();

    if (orders.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding: 40px 0; color:var(--text-secondary);">
          <p>No transactions found for this account.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = orders.reverse().map(order => {
      const itemsHtml = order.items.map(item => `
        <tr class="order-item-row">
          <td>${item.quantity}x ${item.name}</td>
          <td class="price-col">$${(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
        </tr>
      `).join("");

      const dateStr = new Date(order.date).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      return `
        <div class="order-card">
          <div class="order-card-header">
            <div>Order ID: <span class="order-card-id">${order.orderId}</span></div>
            <div class="order-card-date">${dateStr}</div>
          </div>
          <table class="order-items-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th style="text-align:right">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          <div class="order-card-footer">
            <span style="color:var(--text-secondary)">Total Paid (incl. tax & promo):</span>
            <span class="order-total-price">$${order.totals.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      `;
    }).join("");

  } catch (err) {
    listContainer.innerHTML = `<p style="text-align:center; color:var(--accent-pink);">${err.message}</p>`;
  }
}

// Render dynamic catalog products
function renderCatalog() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  // Filter
  let filtered = PRODUCTS.filter(p => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  // Sort
  filtered.sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-secondary);">
        <p>No products match your current filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
      <div class="product-card-wish" title="Add to Wishlist" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </div>
      <div class="product-img-box" onclick="openProductDetail('${p.id}')" style="cursor: pointer;">
        ${p.image}
      </div>
      <div class="product-info" onclick="openProductDetail('${p.id}')" style="cursor: pointer;">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          ${getRatingStars(p.rating)}
          <span>(${p.reviews})</span>
        </div>
      </div>
      <div class="product-footer">
        <span class="product-price">$${p.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart('${p.id}')" title="Add to Cart">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </button>
      </div>
    </div>
  `).join("");
}

// Build stars string
function getRatingStars(rating) {
  let stars = "";
  const rounded = Math.round(rating * 2) / 2;
  for (let i = 1; i <= 5; i++) {
    stars += i <= rounded ? "★" : "☆";
  }
  return stars;
}

// Toast System
function showToast(message, type = "cyan") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "pink" ? "toast-pink" : ""}`;
  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Add Item to active cart
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity
    });
  }

  saveUserCart();
  renderCart();
  updateCartBadge();
  animateCartBtn();
  showToast(`Added ${quantity}x ${product.name} to cart.`);
}

// Update Cart badge count
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalQty > 0) {
    badge.textContent = totalQty;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// Trigger small micro-bounce on cart icon
function animateCartBtn() {
  const cartBtn = document.getElementById("cart-btn");
  if (!cartBtn) return;
  cartBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartBtn.style.transform = "";
  }, 200);
}

// Simulated wishlist
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    showToast(`Added ${product.name} to wishlist!`);
  }
}

// Render cart drawer panels
function renderCart() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <div class="cart-empty-icon">🛒</div>
        <p>Your shopping cart is empty</p>
        <button class="btn-primary" onclick="document.getElementById('catalog-section').scrollIntoView({behavior: 'smooth'})" style="padding: 10px 20px; font-size: 13px;">Browse Gear</button>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img-box">
        ${item.image}
      </div>
      <div class="cart-item-details">
        <span class="cart-item-meta">${item.category}</span>
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-footer">
          <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          <div class="cart-qty-controls">
            <button class="cart-qty-btn" onclick="updateItemQty('${item.id}', -1)">-</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
      <div class="cart-item-remove" onclick="removeCartItem('${item.id}')" title="Remove Item">✕</div>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  updateCartTotals(subtotal);
}

// Increment/Decrement cart quantity
function updateItemQty(productId, amount) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  saveUserCart();
  renderCart();
  updateCartBadge();
}

// Remove item completely
function removeCartItem(productId) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  cart = cart.filter(i => i.id !== productId);
  saveUserCart();
  renderCart();
  updateCartBadge();
  showToast(`Removed ${item.name} from cart.`, "pink");
}

// Update calculated totals (tax, subtotal, promo code)
function updateCartTotals(subtotal) {
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("cart-discount-row");
  const discountEl = document.getElementById("cart-discount");
  const taxEl = document.getElementById("cart-tax");
  const totalEl = document.getElementById("cart-total");

  if (!subtotalEl) return;

  let discount = 0;
  if (appliedPromo && subtotal > 0) {
    discount = subtotal * appliedPromo.discount;
    discountRow.style.display = "flex";
    discountEl.textContent = `-$${discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  } else {
    discountRow.style.display = "none";
  }

  const baseForTax = subtotal - discount;
  const tax = baseForTax * 0.08;
  const grandTotal = baseForTax + tax;

  subtotalEl.textContent = `$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  taxEl.textContent = `$${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  totalEl.textContent = `$${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

// Open Product Quick View
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentDetailProduct = product;
  
  const overlay = document.getElementById("detail-overlay");
  const gallery = document.getElementById("detail-gallery");
  const cat = document.getElementById("detail-cat");
  const name = document.getElementById("detail-name");
  const rating = document.getElementById("detail-rating");
  const price = document.getElementById("detail-price");
  const desc = document.getElementById("detail-desc");
  const featuresList = document.getElementById("detail-features-list");
  const qtyVal = document.getElementById("detail-qty-val");

  if (!overlay) return;

  gallery.innerHTML = product.image;
  cat.textContent = product.category;
  name.textContent = product.name;
  rating.innerHTML = `${getRatingStars(product.rating)} <span>(${product.reviews} reviews)</span>`;
  price.textContent = `$${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  desc.textContent = product.desc;
  qtyVal.textContent = "1";

  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join("");
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Initialize Custom PC configurator
function initPCBuilder() {
  const steps = ["case", "ram", "monitor", "peripheral"];
  
  steps.forEach(step => {
    const grid = document.getElementById(`builder-${step}-grid`);
    if (!grid) return;

    let items = [];
    if (step === "case") items = BUILDER_CATALOG.cases;
    if (step === "ram") items = BUILDER_CATALOG.rams;
    if (step === "monitor") items = BUILDER_CATALOG.monitors;
    if (step === "peripheral") items = BUILDER_CATALOG.peripherals;

    grid.innerHTML = items.map((item, idx) => `
      <div class="builder-item-card ${idx === 0 ? 'selected' : ''}" data-step="${step}" data-id="${item.id}" onclick="selectBuilderOption('${step}', '${item.id}', this)">
        <div class="builder-item-img">${item.img}</div>
        <div class="builder-item-name">${item.name}</div>
        <div class="builder-item-price">+ $${item.price}</div>
      </div>
    `).join("");
  });

  updateBuilderSummary();

  const buildBtn = document.getElementById("builder-add-btn");
  if (buildBtn) {
    buildBtn.addEventListener("click", () => {
      const totalBuildPrice = builderSelections.case.price + 
                              builderSelections.ram.price + 
                              builderSelections.monitor.price + 
                              builderSelections.peripheral.price + 
                              999.00;

      const customRigId = `custom-rig-${Date.now()}`;
      const bundleName = `Apex Custom Rig (${builderSelections.case.name})`;
      
      const customRigSVG = `<svg viewBox="0 0 200 200" width="100%" height="100%"><rect x="40" y="20" width="120" height="160" rx="10" fill="#131722" stroke="#00f2fe" stroke-width="2.5"/><rect x="44" y="24" width="112" height="152" rx="6" fill="#0c0e15"/><circle cx="100" cy="65" r="24" fill="none" stroke="#00f2fe" stroke-width="2" stroke-dasharray="4,4"/><circle cx="100" cy="125" r="24" fill="none" stroke="#ff007f" stroke-width="2" stroke-dasharray="4,4"/><text x="100" y="98" fill="#fff" font-family="monospace" font-size="10" text-anchor="middle" font-weight="bold">CUSTOM</text><text x="100" y="112" fill="#00f2fe" font-family="monospace" font-size="8" text-anchor="middle">ASSEMBLED</text></svg>`;

      cart.push({
        id: customRigId,
        name: bundleName,
        price: totalBuildPrice,
        image: customRigSVG,
        category: "prebuilt",
        quantity: 1,
        details: `Case: ${builderSelections.case.name}, Memory: ${builderSelections.ram.name}, Screen: ${builderSelections.monitor.name}, Accessories: ${builderSelections.peripheral.name}`
      });

      saveUserCart();
      renderCart();
      updateCartBadge();
      animateCartBtn();
      showToast("Custom Configuration added to cart!");
      
      const cartOverlayEl = document.getElementById("cart-overlay");
      const cartDrawerEl = cartOverlayEl ? cartOverlayEl.querySelector(".cart-drawer") : null;
      if (cartOverlayEl) cartOverlayEl.classList.add("open");
      if (cartDrawerEl) cartDrawerEl.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
}

// Configurator selections
function selectBuilderOption(step, itemId, element) {
  const siblings = element.parentNode.querySelectorAll(".builder-item-card");
  siblings.forEach(card => card.classList.remove("selected"));

  element.classList.add("selected");

  let items = [];
  if (step === "case") items = BUILDER_CATALOG.cases;
  if (step === "ram") items = BUILDER_CATALOG.rams;
  if (step === "monitor") items = BUILDER_CATALOG.monitors;
  if (step === "peripheral") items = BUILDER_CATALOG.peripherals;

  const selectedItem = items.find(i => i.id === itemId);
  builderSelections[step] = selectedItem;

  updateBuilderSummary();
}

// Update live PC configurator preview diagnostics
function updateBuilderSummary() {
  const summaryImg = document.getElementById("builder-preview-img");
  const specCase = document.getElementById("spec-case");
  const specRam = document.getElementById("spec-ram");
  const specMonitor = document.getElementById("spec-monitor");
  const specPeripheral = document.getElementById("spec-peripheral");
  const totalLabel = document.getElementById("builder-total-price");
  const compatibilityEl = document.getElementById("builder-compatibility");

  if (summaryImg) {
    summaryImg.innerHTML = builderSelections.case.img;
  }

  if (specCase) specCase.textContent = builderSelections.case.name;
  if (specRam) specRam.textContent = builderSelections.ram.name;
  if (specMonitor) specMonitor.textContent = builderSelections.monitor.name;
  if (specPeripheral) specPeripheral.textContent = builderSelections.peripheral.name;

  const totalBuildPrice = builderSelections.case.price + 
                          builderSelections.ram.price + 
                          builderSelections.monitor.price + 
                          builderSelections.peripheral.price + 
                          999.00;

  if (totalLabel) {
    totalLabel.textContent = `$${totalBuildPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  }

  if (compatibilityEl) {
    const isSmallITX = builderSelections.case.id === "bc-nebula";
    const isBigRAM = builderSelections.ram.id === "br-dom";

    if (isSmallITX && isBigRAM) {
      compatibilityEl.className = "builder-compatibility warning";
      compatibilityEl.innerHTML = `
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="margin-right:6px">
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.143a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044 10.393h-1.96v-1.96h1.96v1.96zm0-3.267h-1.96V5.48h1.96v3.662z"/>
        </svg>
        <span>Warning: High-Profile Dominator RAM in Mini-ITX case requires low-profile CPU cooler.</span>
      `;
    } else {
      compatibilityEl.className = "builder-compatibility";
      compatibilityEl.innerHTML = `
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="margin-right:6px">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <span>System stable. Barebone motherboard & 750W PSU verified.</span>
      `;
    }
  }
}

// Shipping Address validations
function validateShippingForm() {
  if (!currentUser) return false;
  const fields = ["ship-name", "ship-email", "ship-address", "ship-zip"];
  let valid = true;
  fields.forEach(fid => {
    const el = document.getElementById(fid);
    if (!el || el.value.trim() === "") {
      valid = false;
      if (el) el.style.borderColor = "var(--accent-pink)";
    } else {
      if (el) el.style.borderColor = "var(--border-light)";
    }
  });
  return valid;
}

// Credit Card mock validations
function validatePaymentForm() {
  const card = document.getElementById("pay-card");
  const exp = document.getElementById("pay-exp");
  const cvv = document.getElementById("pay-cvv");

  let valid = true;
  if (!card || card.value.replace(/\s+/g, "").length < 15) {
    valid = false;
    if (card) card.style.borderColor = "var(--accent-pink)";
  } else {
    if (card) card.style.borderColor = "var(--border-light)";
  }

  if (!exp || exp.value.trim().length !== 5 || !exp.value.includes("/")) {
    valid = false;
    if (exp) exp.style.borderColor = "var(--accent-pink)";
  } else {
    if (exp) exp.style.borderColor = "var(--border-light)";
  }

  if (!cvv || cvv.value.trim().length < 3) {
    valid = false;
    if (cvv) cvv.style.borderColor = "var(--accent-pink)";
  } else {
    if (cvv) cvv.style.borderColor = "var(--border-light)";
  }

  return valid;
}

// Step-by-Step wizard controller
function updateCheckoutModalState() {
  const step1 = document.getElementById("checkout-step-1");
  const step2 = document.getElementById("checkout-step-2");
  const step3 = document.getElementById("checkout-step-3");
  const navItems = document.querySelectorAll(".checkout-step-nav-item");
  const progress = document.getElementById("checkout-progress");
  const nextBtn = document.getElementById("checkout-next-btn");
  const prevBtn = document.getElementById("checkout-prev-btn");
  const guardPanel = document.getElementById("checkout-login-guard");
  const fieldsPanel = document.getElementById("checkout-shipping-fields");

  // Reset steps active state
  step1.classList.remove("active");
  step2.classList.remove("active");
  step3.classList.remove("active");
  navItems.forEach(n => {
    n.classList.remove("active");
    n.classList.remove("completed");
  });

  if (checkoutStep === 1) {
    step1.classList.add("active");
    navItems[0].classList.add("active");
    progress.style.width = "0%";
    if (prevBtn) prevBtn.style.display = "none";
    
    // Lock address input if Guest checkout
    if (!currentUser) {
      guardPanel.style.display = "flex";
      fieldsPanel.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
    } else {
      guardPanel.style.display = "none";
      fieldsPanel.style.display = "block";
      if (nextBtn) {
        nextBtn.style.display = "block";
        nextBtn.textContent = "Continue to Payment";
      }

      // Pre-fill user data
      document.getElementById("ship-name").value = currentUser.username;
      document.getElementById("ship-email").value = currentUser.email;
    }

  } else if (checkoutStep === 2) {
    step2.classList.add("active");
    navItems[0].classList.add("completed");
    navItems[1].classList.add("active");
    progress.style.width = "50%";
    if (prevBtn) prevBtn.style.display = "block";
    if (nextBtn) {
      nextBtn.style.display = "block";
      nextBtn.textContent = "Place Order & Pay";
    }
  } else if (checkoutStep === 3) {
    step3.classList.add("active");
    navItems[0].classList.add("completed");
    navItems[1].classList.add("completed");
    navItems[2].classList.add("active");
    progress.style.width = "100%";
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
  }
}

// POST purchase logs to express database
async function submitOrderToServer() {
  if (!currentUser) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (appliedPromo) discount = subtotal * appliedPromo.discount;
  const baseForTax = subtotal - discount;
  const tax = baseForTax * 0.08;
  const total = baseForTax + tax;

  // Build clean cart items summary without visual SVG codes for clean db storage
  const cleanItems = cart.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }));

  const orderPayload = {
    username: currentUser.username,
    items: cleanItems,
    totals: { subtotal, discount, tax, total },
    date: new Date().toISOString()
  };

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Order placement failed.");

    // Checkout successful, update wizard confirmation page
    checkoutStep = 3;
    updateCheckoutModalState();

    const orderIdEl = document.getElementById("success-order-id");
    if (orderIdEl) {
      orderIdEl.textContent = result.order.orderId;
    }

    // Reset cart states
    cart = [];
    appliedPromo = null;
    saveUserCart();
    localStorage.removeItem("apex_promo");
    renderCart();
    updateCartBadge();
    showToast("Order placed and saved successfully!");

  } catch (err) {
    showToast("Server checkout failed: " + err.message, "pink");
  }
}
