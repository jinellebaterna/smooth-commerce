import React from "react";
import Business from "./Business";

const ViewBusiness = ({businesses}) => {
  return (
    <div>
      {businesses.map(business => (
        <Business
          companyName={business.company_name}
          address={business.address}
          website={business.website}
          hours={business.hours}
        />
      ))}
    </div>
  );
};

export default ViewBusiness;
