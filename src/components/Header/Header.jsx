import React from "react";

import classes from "./Header.module.css";
import golobowhite from "./img/golobowhite.png";
import goloboblack from "./img/golobo.png";
import imgFlightBlack from "./img/findflight.png";
import imgFlightWhite from "./img/findflightwhite.png";
import imgStayBlack from "./img/findstate.png";
import imgStayWhite from "./img/findstatewhite.png";

const Header = ({ bg = "transparent", clr, pd }) => {
  return (
    <div className={classes.head} style={{ backgroundColor: bg, padding: pd }}>
      <div className={classes.inner}>
        <div className={`${classes.ctg} ${classes.row}`}>
          <div className={`${classes.text}`} style={{ color: clr }}>
            <img
              src={clr === "#FFF" ? imgFlightWhite : imgFlightBlack}
              alt="imgFlight"
            />
            Find Flight
          </div>
          <div className={`${classes.text}`} style={{ color: clr }}>
            <img
              src={clr === "#FFF" ? imgStayWhite : imgStayBlack}
              alt="imgStay"
            />
            Find Stays
          </div>
        </div>
        <div className={classes.img}>
          <img src={clr === "#FFF" ? golobowhite : goloboblack} alt="golobo" />
        </div>
        <div className={`${classes.row}`} style={{ color: clr }}>
          <div className={`${classes.login} ${classes.btn}`}>Login</div>
          <div
            className={`${classes.signup} ${classes.btn}`}
            style={{
              backgroundColor: clr,
              color: clr === "#FFF" ? "#121" : clr,
            }}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
