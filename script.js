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