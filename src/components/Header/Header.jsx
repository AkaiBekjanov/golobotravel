import React from "react";

import classes from "./Header.module.css";
import img from "./img/golobo.png";
import imgFlight from "./img/findflight.png";
import imgStay from "./img/findstate.png";

const Header = () => {
  return (
    <div className={classes.head}>
      <div className="container">
        <div className={classes.inner}>
          <div className={`${classes.ctg} ${classes.row}`}>
            <div className={`${classes.text}`}>
              <img src={imgFlight} alt="imgFlight" />
              Find Flight
            </div>
            <div className={`${classes.text}`}>
              <img src={imgStay} alt="imgStay" />
              Find Stays
            </div>
          </div>
          <div className={classes.img}>
            <img src={img} alt="golobo" />
          </div>
          <div className={`${classes.row}`}>
            <div className={`${classes.login} ${classes.btn}`}>Login</div>
            <div className={`${classes.signup} ${classes.btn}`}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
