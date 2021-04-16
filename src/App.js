import React from "react";
import Main from "./components/Main";
import styles from "./App.module.scss";

const App = () => (
  <div className={styles.app}>
    <div className={styles.content}>
      <Main />
    </div>
  </div>
);

export default App;
