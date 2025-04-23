
const Newarrivals: React.FC = () => {
    return (
        <>
        <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 image-zoom-effect">
              <img src="./images/new_arrival2.png" className="img-fluid promo-img image-holder" alt="" />
              <h5 className="mt-2">New Arrivals</h5>
            </div>
            <div className="col-md-4 image-zoom-effect">
              <img src="./images/new_arrival1.png" className="img-fluid promo-img image-holder" alt="" />
              <h5 className="mt-2">Best Sellers</h5>
            </div>
            <div className="col-md-4 image-zoom-effect">
              <img src="./images/new_arrival3.png" className="img-fluid promo-img image-holder" alt="" />
              <h5 className="mt-2">The Holiday Outfit</h5>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Newarrivals