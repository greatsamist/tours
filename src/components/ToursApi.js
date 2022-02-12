import React from "react";
import Tour from "./Tour";

function ToursApi({ tour }) {
  return (
    <div>
      {tour.map((tour) => (
        <Tour
          key={tour.id}
          name={tour.name}
          image={tour.image}
          info={tour.info}
          price={tour.price}
        />
      ))}
    </div>
  );
}

export default ToursApi;
