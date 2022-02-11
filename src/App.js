import { useState } from "react";
import Styles from "./App.module.scss";
import Tour from "./components/Tour";
// import Card from "./components/Card.module.scss";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setIsLoading] = useState(true);
  const [tour, setTours] = useState();

  if (loading) {
    return (
      <main className={Styles.loading}>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <div className={Styles.container}>
      <h1 className={Styles["container__h1"]}>Our Tours</h1>
      <Tour />
    </div>
  );
}

export default App;
