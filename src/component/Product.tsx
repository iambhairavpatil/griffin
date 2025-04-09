
const Product: React.FC = () => {
    return (
        <>
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Shop by Category</h2>
                    <div className="row g-3">

                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category1.png" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category6.png" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category2.jpg" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category3.png" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category4.png" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <img src="../../src/assets/images/category5.jpg" className="img-fluid category-img" alt="" />
                            <p>Perfume</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product