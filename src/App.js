import Header from "./components/header/header";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes, useParams  } from "react-router-dom";
import { ThemeProvider } from './utilities/themeContext/ThemeContext'
 import SingleProduct from "./components/singleProduct/SingleProduct";

function App({ children }) {
  return (

    <ThemeProvider>
      <Router>

      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        <Route path="products/:id" element={<SingleProduct />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
