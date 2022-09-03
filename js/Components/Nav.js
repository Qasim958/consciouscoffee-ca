export const Nav = (page) => {
  const nav = document.querySelector("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand-lg",
    "sticky-top",
    "navbar-light",
    "bg-light"
  );
  nav.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">CONSCIOUS COFFEE</a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div
        class="collapse navbar-collapse d-md-flex flex-row-reverse"
        id="navbarNavAltMarkup"
        >
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link ${
              page === "home" ? "active" : null
            }" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link ${
              page === "list" ? "active" : null
            }" href="location.html">Locations</a>
            </li>
            <li class="nav-item">
            <a class="nav-link ${
              page === "about" ? "active" : null
            }" href="about.html">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link ${
              page === "contact" ? "active" : null
            }" href="contact.html">Contact</a>
            </li>
        </ul>
        </div>
    </div>
  `;
};
