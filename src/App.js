import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Home from "./Pages/Home.js"
import Books from "./Pages/Book.js"
import About from "./Pages/About.js"
import Contact from "./Pages/Contact.js"
import Cart from "./Pages/Cart.js"
import BookDetails from "./Pages/BookDetails.js"
import {CartProvider} from "./context/CartContext";
import "./App.css"

function App() {
  return (
    
      <CartProvider>
        <div className="App">
          <Router>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
            <Footer/>
        
          </Router>
      </div>
    </CartProvider>
  );
}

export default App
