import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { useCart } from '../context/cart'
import './Navbar.css'
const Navbar = ({ cartitemcount }) => {

  // const{cartitemcount}=useCart();



  return (
    <>
      <nav className="navbar navbar-expand-lg nav position-absolute navbar-dark">
        <div className="container">
          <Link className="navbar-brand fs-3" to="/">ShopperStock's</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-4" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active fs-4 ms-md-3 ms-0" to="/womensclothing">Women's</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-4 ms-md-3 ms-0" href="#">Kids</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active carttext fs-4 cart-troll" to="/Cart">Cart&#x1F6D2; {
                  cartitemcount > 0 && (
                    <div className='cart-wrap nav-cart'>{cartitemcount}</div>
                  )
                } </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
