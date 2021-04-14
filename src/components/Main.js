import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import styles from "./Main.module.scss";
import BusinessesListTable from "../components/BusinessesListTable";

const Main = ({ data, fetchBusinessList }) => {
  useEffect(() => {
    fetchBusinessList();
  }, []);

  return (
    <div className={styles.main}>
      <BusinessesListTable data={data} />
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
