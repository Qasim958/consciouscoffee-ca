export const Header = () => {
  const header = document.querySelector("header");

  header.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="./../../assets/images/c1.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                <h5></h5>
                <p></p>
            </div>
                </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./../../assets/images/c1.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
            </div>
                </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./../../assets/images/c1.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
            </div>
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
  `;

  header.innerHTML = `
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./../../assets/images/c1.jpg" class="d-block w-100" alt="Organic, Sustainable, Delicious.">
      <div class="carousel-caption d-none d-md-block">
        <h5>Organic, Sustainable, Delicious.</h5>
        <p>We believe that the very best beans should be good for you and the planet. That’s why we’re roasting single origin, organic coffee out of our craft roastery in Boulder, CO.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./../../assets/images/c2.jpg" class="d-block w-100" alt="Committed to Transparency">
      <div class="carousel-caption d-none d-md-block">
        <h5>Committed to Transparency</h5>
        <p>
        By sourcing coffee from the same producer-partners year after year, we guarantee farmers a more reliable source to sell their harvests than other fair trade models do.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./../../assets/images/c3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Organic Coffee Subscription
        </h5>
        <p>Reoccurring, monthly shipments bring our finest single-origin coffees to your door, no hassle.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;
};
