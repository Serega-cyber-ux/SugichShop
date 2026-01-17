const products = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    price: 899,
    category: "PC Games",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: true,
    discount: true,
    isTop: true,
    description: "Футуристичний RPG-шутер від CD Projekt RED з відкритим світом та глибокою історією.",
    feedback: "",
    age_limit: "18+",
    image: "cyberpunk2077.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 2,
    title: "Minecraft: Java Edition",
    price: 499,
    category: "Sandbox",
    pc_platform: true,
    ps_platform: false,
    xbox_platform: false,
    inStock: true,
    discount: false,
    isTop: true,
    description: "Популярна кубічна пісочниця, де можна будувати, досліджувати та виживати.",
    feedback: "",
    age_limit: "7+",
    image: "minecraft_java.jpg",
    OS: "Windows / macOS / Linux",
    region: "global",
  },
  {
    id: 3,
    title: "EA FC 24",
    price: 1299,
    category: "Sports Games",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: true,
    discount: false,
    isTop: false,
    description: "Новітній футбольний симулятор зі справжніми командами та оновленою фізикою.",
    feedback: "",
    age_limit: "3+",
    image: "fc24.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 4,
    title: "GTA V: Premium Edition",
    price: 349,
    category: "Action Games",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: false,
    discount: true,
    isTop: false,
    description: "Екшн з відкритим світом про злочинний Лос-Сантос та три культових персонажі.",
    feedback: "",
    age_limit: "18+",
    image: "gta5.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 5,
    title: "Rust",
    price: 699,
    category: "Survival Games",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: true,
    discount: false,
    isTop: true,
    description: "Хардкорна гра на виживання в багатокористувацькому світі, де головний ворог — інші гравці.",
    feedback: "",
    age_limit: "18+",
    image: "rust.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 6,
    title: "The Witcher 3: Wild Hunt",
    price: 299,
    category: "RPG",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: true,
    discount: true,
    isTop: false,
    description: "Легендарна RPG про пригоди відьмака Ґеральта у величезному фентезійному світі.",
    feedback: "",
    age_limit: "18+",
    image: "witcher3.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 7,
    title: "Roblox Premium 450 Robux",
    price: 219,
    category: "Game Currency",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: true,
    discount: false,
    isTop: false,
    description: "Пак робуксів для Roblox. Ідеально для покупок улюблених ігор та предметів.",
    feedback: "",
    age_limit: "0+",
    image: "robux450.jpg",
    OS: "Any",
    region: "global",
  },
  {
    id: 8,
    title: "Fortnite: 2800 V-Bucks",
    price: 519,
    category: "Game Currency",
    pc_platform: true,
    ps_platform: true,
    xbox_platform: true,
    inStock: false,
    discount: true,
    isTop: false,
    description: "Набір V-Bucks для Fortnite, який дозволяє купувати скіни, емоції та бойові пропуски.",
    feedback: "",
    age_limit: "12+",
    image: "fortnite_vbucks.jpg",
    OS: "Any",
    region: "global",
  },
  {
    id: 9,
    title: "CS2 Prime Status",
    price: 799,
    category: "Accounts-Boosts",
    pc_platform: true,
    ps_platform: false,
    xbox_platform: false,
    inStock: true,
    discount: false,
    isTop: true,
    description: "Prime статус для CS2 — менше читерів, кращий матчмейкінг та ексклюзивні нагороди.",
    feedback: "",
    age_limit: "16+",
    image: "cs2_prime.jpg",
    OS: "Windows",
    region: "global",
  },
  {
    id: 10,
    title: "Valorant: 1250 VP",
    price: 319,
    category: "Game Currency",
    pc_platform: true,
    ps_platform: false,
    xbox_platform: false,
    inStock: true,
    discount: false,
    isTop: false,
    description: "Пакет VP для Valorant — купуй скіни, контракти агентів та нові набори.",
    feedback: "",
    age_limit: "16+",
    image: "valorant_vp.jpg",
    OS: "Windows",
    region: "global",
  },
  {
  id: 11,
  title: "Elden Ring",
  price: 1399,
  category: "RPG",
  pc_platform: true,
  ps_platform: true,
  xbox_platform: true,
  inStock: true,
  discount: false,
  isTop: true,
  description: "Динамічна екшен-RPG у відкритому світі, створена FromSoftware у співпраці з Джорджем Мартіном.",
  feedback: "",
  age_limit: "16+",
  image: "elden_ring.jpg",
  OS: "Windows",
  region: "global",
},
{
  id: 12,
  title: "Call of Duty: Modern Warfare II",
  price: 1599,
  category: "Shooter",
  pc_platform: true,
  ps_platform: true,
  xbox_platform: true,
  inStock: false,
  discount: true,
  isTop: false,
  description: "Нова частина популярного шутера з ефектною графікою, кооперативом та оновленим мультиплеєром.",
  feedback: "",
  age_limit: "18+",
  image: "mw2.jpg",
  OS: "Windows",
  region: "global",
},
{
  id: 13,
  title: "Terraria",
  price: 249,
  category: "Adventure",
  pc_platform: true,
  ps_platform: true,
  xbox_platform: true,
  inStock: true,
  discount: false,
  isTop: false,
  description: "Піксельна пригодницька гра з крафтом, будівництвом, битвами та величезною кількістю контенту.",
  feedback: "",
  age_limit: "12+",
  image: "terraria.jpg",
  OS: "Windows / macOS / Linux",
  region: "global",
},
];

let cart = [];
const cartInfo = document.getElementById("cart-info");
const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const clearCartBtn = document.getElementById("clear-cart-btn");
const minPriceInput = document.getElementById("min-price-input");
const resultsInfo = document.getElementById("results-info");

function loadCard(){
  const savedCart = localStorage.getItem( "cart");
  if (savedCart) {
    try {
      const parse = JSON.parse(savedCart);
      if (Array.isArray(parsed)){
        cart = parsed;
      }
      else {
        cart = [];
      }
    } catch(error) {
      cart = [];
    }
  } else{
    cart = [];
  }
}
//Збереження у local

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  if (!cartInfo) return;
  cartInfo.textContent = `Товарів у кошику: ${cart.length}`;
}

function renderProducts(productsArray){

productsArray.forEach(function (product){

  const card = document.createElement("div");
  card.classList.add("product-card");


  card.innerHTML = `
    <h3>${product.title}</h3>
    <p class="product-category">Категорія: ${product.category}</p>
    <p class="product-description">${product.description}</p>
    <p class="product-price">Ціна: ${product.price}</p>
    <button class="add-to-card-btn">Додати в кошик</button>

  `;

  const addButton = card.querySelector(".add-to-card-btn");
  addButton.addEventListener("click", function (){
    cart.push(product.id);
    saveCart();
    updateCartCount();
    console.log(`Поточній список товарів: ${cart}`);
  });

  productsContainer.appendChild(card);
});
}
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCartCount();
}

function clearCart() {
  if (confirm("Ви впевнені, що хочете очистити кошик?")) {
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();
  }
}

const urlParams = new URLSearchParams(window.location.search);

if (categoryFilter) {
  const categoryFromUrl = urlParams.get("category");
  if (categoryFromUrl) {
    categoryFilter.value = categoryFromUrl;
  }
}

if (searchInput) {
  const searchFromUrl = urlParams.get("search");
  if (searchFromUrl) {
    searchInput.value = searchFromUrl;
  }
}


function filterAndRender() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const minPrice = minPriceInput.value;

  const filteredProducts = products.filter(function (product) {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();

    const matchesText = searchText === "" || title.includes(searchText) || description.includes(searchText);
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = minPrice === "" || product.price >= Number(minPrice);
    return matchesText && matchesCategory && matchesPrice;
  });


 if (filteredProducts.length > 0) {
    resultsInfo.textContent = `Знайдено товарів: ${filteredProducts.length}`;
  } else {
    resultsInfo.textContent = "За вашим запитом товарів не знайдено.";
  }

productsContainer.innerHTML = "";
renderProducts(filteredProducts);
}













const isCatalogPage = document.getElementById("products-container");

if (isCatalogPage) {
  loadCard();
  updateCartCount();
  filterAndRender();

  minPriceInput.addEventListener("input", filterAndRender);
  clearCartBtn.addEventListener("click", clearCart);
  searchInput.addEventListener("input", filterAndRender);
  categoryFilter.addEventListener("change", filterAndRender);
}