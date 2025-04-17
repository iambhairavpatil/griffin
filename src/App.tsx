import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Product from './component/Product';
import Newarrivals from './component/Newarrivals';
import Favorites from './component/Favorites';
import Testimonials from './component/Testimonials';
import Ourholiday from './component/Ourholiday';
import Shipping from './component/Shipping';
import About from './component/About';
import ProductDetails from './component/ProductDetails';
import ProductListing from './component/ProductListing';
import WomenCategory from './component/WomenCategory';
import MenCategory from './component/MenCategory';
import TermsCondition from './component/TermsCondition';
import PrivacyPolicy from './component/PrivacyPolicy';
import Cart from './component/Cart';

const routes = [
  { path: "/", element: <><Hero /><Product /><Newarrivals /><Favorites /><Testimonials /><Ourholiday /><Shipping /></> },
  { path: "/TermsCondition", element: <TermsCondition /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/About", element: <About /> },
  { path: "/WomenCategory", element: <WomenCategory /> },
  { path: "/MenCategory", element: <MenCategory /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/category/:categoryName", element: <ProductListing /> },
  { path: "/Cart", element: <Cart/>},
  { path: "*", element: <div>Page Not Found</div> }
];

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
