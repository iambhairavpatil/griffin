import { Link } from "react-router-dom"

const WomenCategory: React.FC = () => {
    return (
      <div className="container">
      <h4 className="text-center pt-5 pb-3">
        Categories
      </h4>
      <div className="mens-wrap">
        <div className="row">
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/new_arrival1.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Men</h2>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/slide4.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Party & Night Out</h2>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/w-1.webp" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Date Wear</h2>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/p2.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Office Fragrances</h2>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/p3.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Travel Fragrances</h2>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link to="http://localhost:5173/category/15">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src="./images/p6.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="face face2">
                <h2>Exotic Oudhs</h2>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <hr className="py-3 mt-4"></hr>
        <div className="row">
          <img src="./images/pdetails_img.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    )
  }
  
  export default WomenCategory