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
  { path: "/frontend/", element: <><Hero /><Product /><Newarrivals /><Favorites /><Testimonials /><Ourholiday /><Shipping /></> },
  { path: "/frontend/TermsCondition", element: <TermsCondition /> },
  { path: "/frontend/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/frontend/About", element: <About /> },
  { path: "/frontend/WomenCategory", element: <WomenCategory /> },
  { path: "/frontend/MenCategory", element: <MenCategory /> },
  { path: "/frontend/product/:id", element: <ProductDetails /> },
  { path: "/frontend/category/:categoryName", element: <ProductListing /> },
  { path: "/frontend/Cart", element: <Cart isCartVisible={false}/>},
  { path: "/frontend/*", element: <div>Page Not Found</div> }
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
