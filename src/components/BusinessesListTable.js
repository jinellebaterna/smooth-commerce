import React from "react";
import { withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./BusinessListTable.module.scss";

class BusinessesListTable extends React.Component {
  handleBusinessClick = business => {
    const { history } = this.props;
    history.push(`/business/${business.id}`);
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Business ID</TableCell>
                <TableCell>Business Name</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(business => (
                <TableRow key={business.id}>
                  <TableCell className={styles.count}>{business.id}</TableCell>
                  <TableCell
                    onClick={() => {
                      this.handleBusinessClick(business);
                    }}
                  >
                    {business.company_name}
                  </TableCell>
                  <TableCell>{"https://www.balzacs.com"}</TableCell>
                  <TableCell>{business.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withRouter(BusinessesListTable);
