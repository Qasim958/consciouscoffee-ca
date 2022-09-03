import { ALL_PRODUCTS } from "../data/products.js";
export const Products = () => {
  const products = document.querySelector(".mainContainer__cardsSection");
  products.innerHTML = "";
  ALL_PRODUCTS.map((v, i) => {
    products.innerHTML += `
    <div class="col mainContainer__cardsSection__colCard">
    <div class="card mainContainer__cardsSection__colCard--card">
      <div class="img">
        <img src="${v.image}" alt="product 1" />
      </div>
      <div class="descripton">
        <a href="index.html">${v.description}</a>
      </div>
      <h5 class="price">${v.price}</h5>
    </div>
  </div>
  `;
  });
};
