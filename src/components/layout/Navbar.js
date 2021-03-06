import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a class="navbar-brand" href="#">WorkCo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li> */}
     </ul>
     <Link className="btn btn-outline-dark">Add Contact</Link>

   </div>
  </div>
</nav>
    );
};

export default Navbar;