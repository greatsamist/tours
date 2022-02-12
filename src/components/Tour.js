import React, { useState } from "react";
import Styles from "./Tour.module.scss";

function Tour({ id, name, image, info, price }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={Styles.tour}>
      <img src={image} className={Styles["tour__img"]} alt={name} />
      <div className={Styles["tour__heading"]}>
        <div className={Styles["tour__header"]}>{name}</div>
        <div className={Styles["tour__price"]}>${price}</div>
      </div>
      <div className={Styles["tour__description"]}>
        <p>{info}</p>
        {/* <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p> */}
      </div>
      <div className={Styles['tour__button']}>
        <button className={Styles["tour__btn"]}>Not Interested</button>
      </div>
    </div>
  );
}

export default Tour;
