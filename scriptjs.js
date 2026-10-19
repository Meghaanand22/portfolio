const products = [
  {
    id: 1,
    name: "Elegant Diamond Ring",
    price: 4999,
    image: "assets/product1.jpg"
  },
  {
    id: 2,
    name: "Gold-Plated Necklace",
    price: 7999,
    image: "assets/product2.jpg"
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: 2999,
    image: "assets/product3.jpg"
  }
];

const productList = document.getElementById('productList');

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
  `;
  productList.appendChild(div);
});
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }
});
// Highlight current section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});
