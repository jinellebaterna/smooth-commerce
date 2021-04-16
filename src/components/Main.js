import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Business from "./Business";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

const Main = ({ fetchBusinessList }) => {
  useEffect(() => {
    fetchBusinessList();
  }, []);
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/business/:id" component={Business} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Main);
