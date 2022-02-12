import { useEffect, useState } from "react";
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
    <div className={Styles.container}>
      <h1 className={Styles["container__underline"]}>Our Tours</h1>
      <ToursApi tour={tours} />
      <Tour />
    </div>
  );
}

export default App;
