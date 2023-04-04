// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import BasicBoardPage from "./pages/BasicBoardPage/BasicBoardPage"
import ThreeWoodPage from "./pages/ThreeWoodPage/ThreeWoodPage";
import LargeBasicPage from "./pages/LargeBasicPage/LargeBasicPage";
import BrisketPage from "./pages/BrisketPage/BrisketPage";
import CartPage from "./pages/CartPage/CartPage"

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
        <Route path="/products/1" element={<BasicBoardPage/>} />
        <Route path="/products/2" element={<ThreeWoodPage/>} />
        <Route path="/products/3" element={<LargeBasicPage/>} />
        <Route path="/products/4" element={<BrisketPage/>} />
        <Route path= "/cart/" element={<CartPage/>}/> 
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
