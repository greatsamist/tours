import { Fragment, useEffect, useState } from "react";
import Styles from "./App.module.scss";
import Tour from "./components/Tour";
import ToursApi from "./components/ToursApi";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const tours = await response.json();
        setIsLoading(false);
        setTours(tours);
      } catch (error) {
        setIsLoading(true);
      }
    };
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className={Styles.loading}>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <Fragment>
      <div className={Styles.header}>
        <h1>Our Tours</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
      <ToursApi tour={tours} />
      <Tour />
    </Fragment>
  );
}

export default App;
