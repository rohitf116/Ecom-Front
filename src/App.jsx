import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ProductScreen from "./screens/ProductScreen";
const Login = () => {
  return <div>I am login</div>;
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="login" element={<Login />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
