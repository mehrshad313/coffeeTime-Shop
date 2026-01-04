const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener("click", () => menuOpenButton.click());


  const cart = {};

  function addToCart(name, price) {
    if (!cart[name]) {
      cart[name] = { price, qty: 0 };
    }
    cart[name].qty++;
    document.getElementById(`${name}-count`).innerText = cart[name].qty;
  }

  function showInvoice() {
    const invoice = document.getElementById("invoice");
    invoice.innerHTML = "<h3>Invoice</h3>";

    let total = 0;

    for (let item in cart) {
      const itemTotal = cart[item].price * cart[item].qty;
      total += itemTotal;
      invoice.innerHTML += `<p>${item} × ${cart[item].qty} = $${itemTotal}</p>`;
    }

    invoice.innerHTML += `<hr><strong>Total: $${total}</strong>`;
  }

  const products = [
  { name: "Espresso", price: 5, img: "img/espersso.png" },
  { name: "Latte", price: 7, img: "img/espersso.png" },
  { name: "burger and cola", price: 6, img: "img/smash.png" },
  { name: "cheese burger and sprite", price: 5, img: "img/smash.png" },
  { name: "Mocha", price: 8, img: "img/mocha.png" },
  { name: "mojito ", price: 7, img: "img/mojito.png" },
  { name: "smashed burger", price: 6, img: "img/smash.png" },
  { name: "Iced Coffee", price: 6, img: "img/espersso.png" },
  { name: "Cold Brew", price: 7, img: "img/espersso.png" },
  { name: "tiramisu", price: 8, img: "img/mocha.png" },
  { name: "ice cream", price: 5, img: "img/mojito.png" },
  { name: "royale burger", price: 6, img: "img/royale-burger.png" }
]
