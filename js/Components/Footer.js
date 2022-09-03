export const Footer = (page) => {
  const footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center px-3 flex-column justify-content-center align-items-center">
      <span  class="text-muted ">CONSCIOUS COFFEES, 5403 WESTERN AVENUE, BOULDER, CO, 80301, UNITED STATES</span>
      <span  class="text-muted ">consciouscoffee@email.com</span>
     
      <span class="text-muted ">Copyright 2022</span>
    </div>
`;
  footer.classList.add("bg-light", "mt-auto", "py-3");
  if (page === "contact") {
    footer.classList.add("sticky");
  }
};
