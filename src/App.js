import Header from "./components/header/header";
import Shop from "./components/pages/shop/Shop";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/not-found/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './utilities/themeContext/ThemeContext'
import SingleProduct from "./components/singleProduct/SingleProduct";

function App({ children }) {
  return (

    <ThemeProvider>
      <div className="bg-[#f9f9f9] dark:bg-[#0d0c10f1] ">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="products/:id" exact element={<SingleProduct /> }  />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
