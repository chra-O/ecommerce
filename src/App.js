import "./App.css";
import Home from "./component/Home";
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";
import LoginCom from "./component/LoginCom";
import InBasket from "./component/InBasket"
import ShowProduct from "./component/ShowProduct"
import Register from "./component/Register"
import UserAccount from "./component/UserAccount"
function App() {
  return (
    <>
  
  
      <Routes>
       
        <Route path="/Product" element={<Product />} />
        <Route path="/" element={<Home />} />
       
        <Route path="/LoginCom" element={<LoginCom />} />
        <Route path="/InBasket" element={<InBasket />} />
        <Route path="/ShowProduct" element={<ShowProduct />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserAccount" element={<UserAccount />} />
        
      </Routes>
      
     {/* <FooterCom/> */}
      
      
    </>
  );
}

export default App;
