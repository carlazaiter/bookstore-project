import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <h1 className="logo">BookHaven</h1>
        </Link>
        <div className="hiddenLinks">
          <Link  style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/">Home</Link>
          <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/books">Books</Link>
          <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/about">About</Link>
          <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/contact">Contact</Link>
          <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/cart">Cart</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/">Home</Link>
        <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/books">Books</Link>
        <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/about">About</Link>
        <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/contact">Contact</Link>
        <Link style={{ fontFamily: 'Lobster, serif', fontSize: '17px' }} to="/cart">Cart</Link>
        <button onClick={toggleNavbar}>☰</button>
        
      </div>
    </div>
  )
}

export default NavBar