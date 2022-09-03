import { ALL_PARTNERS } from "../data/partners.js";

export const Partners = () => {
  const partners = document.querySelector(".mainContainer__cardsSection");
  partners.innerHTML = "";
  ALL_PARTNERS.map((v, i) => {
    partners.innerHTML += `
    <div class="col mainContainer__cardsSection__colCard">
    <div class="card mainContainer__cardsSection__colCard--card">
      <div class="img">
        <img src="${v.image}" alt="product 1" />
      </div>
      <div class="descripton">
        <a href="${v.url}">${v.description}</a>
      </div>
    </div>
  </div>
  `;
  });
};
