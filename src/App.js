import Styles from "./App.module.scss";
import Tour from "./components/Tour";
// import Card from "./components/Card.module.scss";

function App() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles["container__h1"]}>Our Tours</h1>
      <Tour />
    </div>
  );
}

export default App;
