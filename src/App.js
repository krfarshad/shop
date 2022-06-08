import Header from "./components/header/header";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './utilities/themeContext/ThemeContext'
function App({ children }) {
  return (

    <ThemeProvider>
      <Router>

      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
