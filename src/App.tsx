import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import About from './component/About';
import Hero from './component/Hero';
import Product from './component/Product';
import Newarrivals from './component/Newarrivals';
import Favorites from './component/Favorites';
import Testimonials from './component/Testimonials';
import Ourholiday from './component/Ourholiday';
import Shipping from './component/Shipping';
import Footer from './component/Footer';
import ProductDetails from './component/ProductDetails'; // ✅ Corrected
import ProductListing from './component/ProductListing';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Product />
              <Newarrivals />
              <Favorites />
              <Testimonials />
              <section className="py-3">
                <div className="container">
                  <hr />
                </div>
              </section>
              <Ourholiday />
              <Shipping />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<ProductListing />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
