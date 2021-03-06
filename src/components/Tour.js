import React, { useState } from "react";
import Styles from "./Tour.module.scss";

function Tour({ id, name, image, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={Styles.tour}>
      <img src={image} className={Styles["tour__img"]} alt={name} />
      <div className={Styles["tour__heading"]}>
        <div className={Styles["tour__header"]}>{name}</div>
        <div className={Styles["tour__price"]}>${price}</div>
      </div>
      <div className={Styles["tour__description"]}>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <div className={Styles["tour__button"]}>
        <button className={Styles["tour__btn"]} onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
