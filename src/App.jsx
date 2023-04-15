import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="footer" element={<Footer />} />
          <Route path="/:id?" element={<CartScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
