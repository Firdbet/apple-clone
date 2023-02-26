import React from 'react'

import logo from "../../images/icone/logo.png";
import search from "../../images/icone/search-icon.png";
import cart from "../../images/icone/cart.png" 


function Header() {
  return (
    <header>
        <div className="container-top">
          <div className="heading-wrapper">
             <a className="logo apple-logo" href="/"><img src={logo} alt="" /></a>
              <ul className="top-link-wrapper">
                  <li><a href="/store">Store</a></li>
                  <li><a href="/mac">Mac</a></li>
                  <li><a href="/ipad">iPad</a></li>
                  <li><a href="/iphone">iPhone</a></li>
                  <li><a href="/watch">Watch</a></li>
                  <li><a href="/airpods">AirPods</a></li>
                  <li><a href="/tv&home">Tv & Home</a></li>
                  <li><a href="/onlyapple">Only on Apple</a></li>
                  <li><a href="/accessories">Accessories</a></li>
                  <li><a className="search" href="/"><img src={search} alt="" /></a></li>
                  <li><a className="cart" href="/"><img src={cart} alt="" /></a></li>
              </ul>       
                <div className="menu-logo"><i className="fa-solid fa-bars"></i></div>
          </div>
       </div>
    </header>
  )
}

export default Header;