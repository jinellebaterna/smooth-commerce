import React from "react";
import styles from "./Business.module.scss";

const Business = ({
  image,
  companyName,
  address,
  website,
  hours
}) => {
  return (
    <div className={styles.business}>
      <div>
        <img className={styles.image} src={image} alt="business_logo" />
      </div>
      <div className={styles.businessInfo}>
        <p>
          Business Name:
          <span>{companyName}</span>
        </p>
        <p>
          Address:
          <span>{address}</span>
        </p>
        <p>
          Website:
          <span>{website}</span>
        </p>
        <p>
          Hours:
          <ul>
            {hours
              ? hours.map(hour => (
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

export default Business;
