import Header from "./components/header/header";
import Shop from "./components/shop/Shop";
import { ThemeProvider } from './utilities/themeContext/ThemeContext'
function App({ children }) {
  return (

    <ThemeProvider>
      <Header />
      <Shop />
    </ThemeProvider>
  );
}

export default App;
