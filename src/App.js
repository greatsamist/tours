import { useEffect, useState } from "react";
import Styles from "./App.module.scss";
import Tour from "./components/Tour";
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
      setIsLoading(true);
      setTours(tours);
    } catch (error) {
      setIsLoading(true);
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
        <h1>Our Tours</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
      <ToursApi tour={tours} />
      <Tour />
    </main>
  );
}

export default App;
