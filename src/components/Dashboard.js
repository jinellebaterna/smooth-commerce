import React from "react";
import { connect } from "react-redux";
import styles from "./Main.module.scss";
import BusinessesListTable from "../components/BusinessesListTable";

const Dashboard = ({ data }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Smooth Commerce Partners</h1>
      <BusinessesListTable data={data} />
    </div>
  );
};

function mapStateToProps({ data }) {
  return {
    data
  };
}

export default connect(mapStateToProps)(Dashboard);
