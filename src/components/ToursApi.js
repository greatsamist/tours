import React from "react";
import Tour from "./Tour";

function ToursApi({ tour, removeTour }) {
  return (
    <div>
      {tour.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default ToursApi;
