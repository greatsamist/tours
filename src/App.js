import { useEffect, useState } from "react";
import Styles from "./App.module.scss";

import ToursApi from "./components/ToursApi";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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

  return (
    <main>
      <div className={Styles.header}>
        <h1 className={Styles['header__h1']}>Our Tours</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
      <ToursApi tour={tours} />
    </main>
  );
}

export default App;
