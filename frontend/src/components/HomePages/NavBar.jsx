import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";
import uday from "../../images/me.jpeg";
import axios from "axios";
// import { scroller } from "react-scroll";
const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user);
  const [toggle, setToggle] = useState(false);
  const actToggle = () => {
    setToggle(!toggle);
  };
  const closeNavBar = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };
  const logout = async () => {
    localStorage.clear();
    await axios.get("/user/logout");
    window.location.reload(true);
  };
  // const scrollToElement = (element) => {
  //   scroller.scrollTo(element, {
  //     duration: 800,
  //     delay: 50,
  //     smooth: true,
  //     offset: -80,
  //   });
  // };
  return (
    <div>
      <div className={styles.navContainer}>
        <nav>
          <div className={styles.logoBtn}>
            <Link to="/">
              <img src={uday} className={styles.logoImg} alt="logo" />
            </Link>
            <div className={styles.btn} onClick={actToggle}>
              <div
                className={
                  toggle
                    ? `${styles.bar1} ${styles.animatedBar}`
                    : `${styles.bar} ${styles.bar1}`
                }
              ></div>
              <div
                className={
                  toggle
                    ? `${styles.bar2} ${styles.animatedBar}`
                    : `${styles.bar} ${styles.bar2}`
                }
              ></div>
              <div
                className={
                  toggle
                    ? `${styles.bar3} ${styles.animatedBar}`
                    : `${styles.bar} ${styles.bar3}`
                }
              ></div>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <ul
              className={
                toggle ? `${styles.newLinks} ${styles.links}` : styles.links
              }
              onClick={closeNavBar}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Education</Link>
              </li>
              <li>
                <Link to="/">Experience</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              {/* <li>
                <Link  to="/"  onClick={() => scrollToElement("Home")}>Contact</Link>
              </li> */}

              {/* <li className={styles.adminLi}>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li> */}
              {user ? (
                <>
                  <li className={styles.adminLi}>
                    <Link to="/admin">Admin</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
