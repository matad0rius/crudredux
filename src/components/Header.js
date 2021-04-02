import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to ={'/'} className="text-light">
            Crud - React, Redux, Rest Api & Axios
          </Link>
        </h1>
      </div>

      <a href="/products/new"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >Add Products &#43;</a>
    </nav>
  );
}

export default Header;
