import React from "react";
import Styles from "./Tour.module.scss";

function Tour() {
  return (
    <div className={Styles.tour}>
      <div className={Styles["tour__img"]}>rr</div>
      <div className={Styles["tour__heading"]}>
        <div className={Styles["tour__header"]}>
          This is suppose to be an header
        </div>
        <div className={Styles["tour__price"]}>$2.999</div>
      </div>
      <div className={Styles["tour__description"]}>
        Some bla bla bla txt her isbdusbda scjgu biza biza{"..."}
        <span>Read More</span>
      </div>
      <button className={Styles["tour__btn"]}>Not Interested</button>
    </div>
  );
}

export default Tour;
