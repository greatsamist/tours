import { useEffect, useState } from "react";
import Styles from "./App.module.scss";

import ToursApi from "./components/ToursApi";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => id !== tour.id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className={Styles.loading}>
        <p>Loading...</p>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={Styles.header}>
          <p>No Tours Left</p>
          <button
            className={Styles["header__btn"]}
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className={Styles.header}>
        <h1 className={Styles["header__h1"]}>Our Tours</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
      <ToursApi tour={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
