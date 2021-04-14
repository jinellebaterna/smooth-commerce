import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import styles from "./App.module.scss";
import Business from "./components/Business";

const App = () => (
  <div className={styles.app}>
    <div className={styles.content}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/business/:id" component={Business} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
