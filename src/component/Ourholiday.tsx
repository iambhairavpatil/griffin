const Ourholiday: React.FC = () => {
    return (
      <>
      <section className="py-5">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center">
                  <h6 className="card-title fw-bold pb-3">Our Holiday Gift Picks</h6>
                  <img src="../../src/assets/images/product1.png" className="img-fluid rounded-start" alt="Gift 1" />
                  <div className="card-body text-center">
                    <p className="card-text text-muted small">Timeless scents that turn heads with sophistication.</p>
                    <p className="readmore"><a href="#">Read More </a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0 align-items-center">

                  <h6 className="card-title fw-bold  pb-3">For the Elegant</h6>
                  <img src="../../src/assets/images/product2.png" className="img-fluid rounded-start" alt="Gift 1" />
                  <div className="card-body text-center">
                    <p className="card-text text-muted small">Timeless scents that turn heads with sophistication.</p>
                    <p className="readmore"><a href="#">Read More </a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      </>
    )
  }
  
  export default Ourholiday