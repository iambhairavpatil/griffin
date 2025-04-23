const Favorites: React.FC = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Everlane Favorites</h2>
          <p className="mb-5 text-muted">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>

          <div id="favoritesCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row g-3 justify-content-center">
                  <div className="col-6 col-md-3">
                    <img src="./images/slide1.png" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/slide4.png" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/w-1.webp" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/men1.webp" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row g-3 justify-content-center">
                  <div className="col-6 col-md-3">
                    <img src="./images/slide1.png" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/category3.png" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/men2.webp" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="./images/men3.webp" className="d-block w-100" alt="Favorite 5" />
                    <p className="mt-2 small">Feel the richness.</p>
                  </div>
                </div>
              </div>
              
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#favoritesCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#favoritesCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Favorites