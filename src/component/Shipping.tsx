const Shipping: React.FC = () => {
    return (
      <>
     <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-4">
              <img src="../../src/assets/images/icon1.png" alt="Shipping" className="mb-3" style={{ width: '78px' }} />
              <h6 className="fw-bold">Complimentary Shipping</h6>
              <p className="text-muted small mb-0">Enjoy free shipping on all orders over $50. No codes needed.</p>
            </div>


            <div className="col-md-4">
              <img src="../../src/assets/images/icon2.png" alt="Eco Friendly" className="mb-3" style={{ width: '78px' }} />
              <h6 className="fw-bold">Consciously Crafted</h6>
              <p className="text-muted small mb-0">Our products are cruelty-free, sustainably made & ethically sourced.</p>
            </div>


            <div className="col-md-4">
              <img src="../../src/assets/images/icon3.png" alt="Store" className="mb-3" style={{ width: '78px' }} />
              <h6 className="fw-bold">Come Say Hi</h6>
              <p className="text-muted small mb-0">Visit us in-store to explore our fragrances up close and personal.</p>
            </div>

          </div>
        </div>
      </section>
      
      </>
    )
  }
  
  export default Shipping