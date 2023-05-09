// General Imports
import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import "./App.css";
import logo from './components/assets/logo.png'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CartPage from "./pages/CartPage/CartPage"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetail";
import WaitingListPage from "./pages/WaitingListPage/WaitingList";
import CustomBoardPage from "./pages/CustomBoardPage/CustomBoard";
import CheckOutPage from "./pages/CheckOutPage/CheckOut";
import AddToCartPage from "./pages/AddToCartPage/AddToCartPage";
import SuccessPage from "./pages/SuccessPage/Success";
import AboutUsPage from "./pages/AboutUsPage/AboutUs";
import MyWaitingListPage from "./pages/MyWaitingListPage/MyWaitingList";


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
                  
                  <HomePage />
                 
                  }
                  />
                  <Route path="/products" element={<WelcomePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/products/:productId" element={<PrivateRoute><ProductDetailPage/></PrivateRoute>}/> {/* ProductDetailPage component */}
                  <Route path="/products/6" element={<CustomBoardPage/>}/>
                  <Route path= "/cart/post/:productId" element={<PrivateRoute><AddToCartPage/></PrivateRoute>}/> 
                  <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
                  <Route path="/waitinglist/:productId" element={<WaitingListPage />} />
                  <Route path="/payment" element={<CheckOutPage />}/>
                  <Route path="/success" element={<SuccessPage/>}/>
                  <Route path="/about_us" element={<AboutUsPage/>}/>
                  <Route path="/my_waitinglist" element={<MyWaitingListPage/>}/>
                  
            </Routes>
      <Footer />
    </div>
  );
}

export default App;
