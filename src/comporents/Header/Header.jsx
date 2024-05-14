import React from "react";
import styles from "./Header.module.scss";
import headerLogo from "./../../images/logo (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Latest</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>contact</li>
          </ul>
        </nav>
        <div className={styles.headerIconBox}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
