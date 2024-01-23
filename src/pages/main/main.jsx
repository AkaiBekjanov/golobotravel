import Header from "../../components/Header/Header";
import classes from "./Main.module.css";
import bg from "./img/bg.png";

export const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.bg}></div>
      <div className={classes.bgEffect}></div>
      <Header pd="24px 32px" clr="#FFF" />

      <div className={classes.center}>
        <h1 className={classes.title} style={{ fontSize: "45px" }}>
          Helping Others
        </h1>
        <h1 className={classes.title}>LIVE & TRAVEL</h1>
        <p className={classes.text}>Special offers to suit your plan</p>
      </div>
    </div>
  );
};
