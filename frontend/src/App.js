// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CartPage from "./pages/CartPage/CartPage"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetail";
import WaitingListPage from "./pages/WaitingListPage/WaitingList";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Navigationbar from "./components/NavigationBar/NavigationBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
          <Navigationbar />
            <Routes>
              <Route
                path="/"
                 element={
                  <PrivateRoute>
                  <HomePage />
                  </PrivateRoute>
                  }
                  />
                  <Route path="/products" element={<WelcomePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/products/:productId" element={<ProductDetailPage />}/> {/* ProductDetailPage component */}
                  <Route path= "/cart/post/:productId" element={<PrivateRoute><CartPage/></PrivateRoute>}/> 
                  <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
                  <Route path="/waitinglist" element={<WaitingListPage />} />
            </Routes>
      <Footer />
    </div>
  );
}

export default App;
