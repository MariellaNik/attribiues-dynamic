import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
const products = document.querySelectorAll(".product");
for(let product of products){
  const price = product.querySelector(".price").innerText;
  product.setAttribute("data-price", price);
}
});
