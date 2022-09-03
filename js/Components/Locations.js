import { ALL_LOCATIONS } from "../data/locations.js";


export const Locations = () => {
  const locations = document.querySelector(".mainContainer__cardsSection");
  locations.innerHTML = "";
  ALL_LOCATIONS.map((v, i) => {
    locations.innerHTML += `
    <div class="col mainContainer__cardsSection__colCard">
    <div class="card mainContainer__cardsSection__colCard--card">
      <div class="img">
        ${v.map}
      </div>
      <div class="descripton">
        <a href="${v.url}">${v.description}</a>
      </div>
    </div>
  </div>
  `;
  });
};
