import React from "react";
import styles from "./Business.module.scss";
import { connect } from "react-redux";

const Business = ({ data }) => {
  return (
    <div className={styles.business}>
      <div>
        <img className={styles.image} src={data.image} alt="business_logo" />
      </div>
      <div className={styles.businessInfo}>
        <p>
          Business Name:
          <span>{data.company_name}</span>
        </p>
        <p>
          Address:
          <span>{data.address}</span>
        </p>
        <p>
          Website:
          <span>{"https://www.balzacs.com"}</span>
        </p>
        <p>
          Hours:
          <ul>
            {data.hours
              ? data.hours.map(hour => (
                  <li>
                    {hour.day}: {hour.open}-{hour.close}
                  </li>
                ))
              : null}
          </ul>
        </p>
      </div>
    </div>
  );
};

function mapStateToProps(
  { data },
  {
    match: {
      params: { id }
    }
  }
) {
  const businessId = parseInt(id, 10);
  return {
    data: data.filter(business => business.id === businessId)[0]
  };
}

export default connect(mapStateToProps)(Business);
