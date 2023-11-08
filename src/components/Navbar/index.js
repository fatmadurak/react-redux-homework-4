import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Style.module.css"

function Navbar() {
  return (
    <ul className={Styles.navList}>
      <li className={Styles.navItem}>
        <Link to="/products">Products</Link>
      </li>

      <li className={Styles.navItem}>
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  );
}

export default Navbar;
