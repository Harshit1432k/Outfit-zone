import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/shop/*" element={<Shop></Shop>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>

            <Route
              path="/auth"
              element={<Authentication></Authentication>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
// sarcasticbing
