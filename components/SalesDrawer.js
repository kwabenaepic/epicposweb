import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Divider from "@mui/material/Divider";

import Axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SalesDrawer = (props) => {
  const [saleitems, setSaleitems] = useState([]);
  const [reportdetail, setReportdetail] = useState([]);

  useEffect(() => {
    setSaleitems(props.saleitems);
    // console.log(tableItems)
  }, [props.saleitems]);

  useEffect(() => {
    setReportdetail(props.salereportitem);
    // console.log(props.salereportitem.total)
  }, [props.salereportitem]);

  return (
    <div className="">
      <div className="flex flex-col p-3 px-5 border-b-2 mb-5 ">
        <div className="font-bold">Sale Item Detail</div>
        <div>{props.salereportitem.receiptdate}</div>
      </div>
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 900 }}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  {/* <StyledTableCell>Item #</StyledTableCell> */}
                  <StyledTableCell align="left">Item #</StyledTableCell>
                  <StyledTableCell align="center">Item Name</StyledTableCell>
                  <StyledTableCell align="center">
                    Item Description
                  </StyledTableCell>
                  <StyledTableCell align="center">Qty</StyledTableCell>
                  <StyledTableCell align="center">Unit Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {saleitems.map((row, i) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="left">
                      {row.productid}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {row.productname}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.productdescription}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.quantitybought}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.unitprice}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div>
        <div className="flex flex-row justify-end p-4 space-x-5">
          <div className="flex flex-col  items-end">
            <div className="font-bold text-2xl">Subtotal:</div>
            <div className="text-2xl">Tax:</div>
            <div className="font-bold text-2xl border-b-2">Total:</div>
            <div className="text-2xl">Cash Paid:</div>
            <div className="text-2xl border-b-2">Change:</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-2xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GHS",
              }).format(props.salereportitem.total)}
            </div>
            <div className="text-2xl">0:0</div>
            <div className="text-2xl border-b-2">
           
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GHS",
              }).format(props.salereportitem.total)}
            </div>
            <div className="text-2xl">
     
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GHS",
              }).format(props.salereportitem.amountpaid)}
            </div>
            <div className="text-2xl border-b-2">
      
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GHS",
              }).format(props.salereportitem.balance)}
            </div>
          </div>
        </div>
        <div className=" flex mt-4 justify-end">
          <button
            // onClick={onCashout}
            type="button"
            className="text-gray-900 w-5 h-5 bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-2xl px-20 py-6 text-center  justify-center items-center inline-flex  "
          >
            Reprint
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesDrawer;
