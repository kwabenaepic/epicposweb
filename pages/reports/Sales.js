import React, { useEffect, useState } from "react";
import LeftNavigation from "../../components/LeftNavigation";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import TablePagination from "@mui/material/TablePagination";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import SalesDrawer from "../../components/SalesDrawer";
import ReportsNav from "./reportsNav";
import Axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

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

const Sales = () => {
  const [datefrom, setDatefrom] = useState("");
  const [dateto, setDateto] = useState("");
  const [postresponse, setPostResponse] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [salereports, setSalereports] = useState([]);
  const [salereportitem, setSalereportitem] = useState([]);
  const [saleitems, setSaleitems] = useState([]);
  const [productLoaded, setProductLoaded] = useState(false);
  const [ondelete, setOndelete] = useState(false);

  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getTableItems = (id) => {
    // console.log((id.total))
    setSalereportitem(id);
  };

  const handleDatefrom = (newValue) => {
    setDatefrom(newValue);
  };
  const handleDateto = (newValue) => {
    setDateto(newValue);
  };

  const loadSales = async () => {
    await fetch("http://localhost:9999/salereports")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setSalereports(data);
      });
  };

  const getSaleItem = async (ticketnumber, row) => {
    await fetch(
      "http://localhost:9999/productbyticketnumber/ticketnumber?ticketnumber=" +
        ticketnumber
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setSaleitems(data);
      });

    getTableItems(row);
  };

  useEffect(() => {
    setProductLoaded(true);
    loadSales();
    setProductLoaded(false);
  }, [ondelete]);

  useEffect(() => {
    // console.log(saleitems);
  }, [saleitems]);

  useEffect(() => {
    // console.log(salereportitem.total);
  }, [salereportitem]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex h-screen container w-screen">
        <div className="flex flex-col ">
          <div className="bg-red-300 h-10 w-full"></div>
          <div className="flex flex-row h-screen w-full">
            <LeftNavigation />
            <ReportsNav />

            <div className="flex-col p-8 w-screen">
              <div className="border-b-2 mb-6 font-medium text-xl">Sales</div>
              <div className="flex flex-row items-center space-x-3 justify-center mb-4">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="">Export To:</div>
                  <div className="justify-end">
                    <button
                      // onClick={onCashout}
                      type="button"
                      className="text-gray-900 w-2 h-3 bg-gradient-to-b from-yellow-500 via-yellow-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-x px-6 py-4 text-center  justify-center items-center inline-flex  "
                    >
                      PDF
                    </button>
                  </div>
                  <div className="justify-end">
                    <button
                      // onClick={onCashout}
                      type="button"
                      className="text-gray-900 w-2 h-3 bg-gradient-to-b from-yellow-500 via-yellow-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-x px-6 py-4 text-center  justify-center items-center inline-flex  "
                    >
                      Excel
                    </button>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="">From:</div>
                  <div className="justify-end">
                    <DesktopDatePicker
                      className=""
                      label=""
                      inputFormat="MM/DD/YYYY"
                      value={datefrom}
                      onChange={handleDatefrom}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                  <div className="">To:</div>
                  <div className="justify-end">
                    <DesktopDatePicker
                      label=""
                      inputFormat="MM/DD/YYYY"
                      value={dateto}
                      onChange={handleDateto}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
    
                  <div className="justify-end">
                    <button
                      // onClick={onCashout}
                      type="button"
                      className="w-5 h-5 bg-gradient-to-b from-yellow-500 via-yellow-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-x px-12 py-4 text-center  justify-center items-center inline-flex  "
                    >
                      Range
                    </button>
                  </div>
                  <div className="justify-end">
                    <button
                      // onClick={onCashout}
                      type="button"
                      className="text-gray-900 w-2 h-3 bg-gradient-to-b from-yellow-500 via-yellow-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-x px-6 py-4 text-center  justify-center items-center inline-flex  "
                    >
                      Excel
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full ">
                <div className="w-3/5">
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
                              <StyledTableCell align="left">
                                Date
                              </StyledTableCell>
                              {/* <StyledTableCell align="left">
                            Sale Outlet
                          </StyledTableCell> */}
                              <StyledTableCell align="center">
                                Receipt #
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Teller
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                No. Of Items
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Amount Paid
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Mode of Payment
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Ticket #
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Action
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {salereports
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row, i) => (
                                <StyledTableRow key={row.id}>
                                  {/* <StyledTableCell component="th" scope="row">
                                {(i)}
                            
                              </StyledTableCell> */}
                                  <StyledTableCell align="left">
                                    {row.receiptdate}
                                  </StyledTableCell>
                                  {/* <StyledTableCell align="left">
                                {row.salesoutletid}
                              </StyledTableCell> */}
                                  <StyledTableCell align="center">
                                    {row.ticketnumber}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.employeeid}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.numberofitems}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.amountpaid}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.modeofpayment}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    {row.ticketnumber}
                                  </StyledTableCell>

                                  <StyledTableCell align="center">
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      alignItems="center"
                                    >
                                      <IconButton
                                        aria-label="edit"
                                        color="primary"
                                        onClick={(e) => {
                                          getSaleItem(row.ticketnumber, row);
                                        }}
                                      >
                                        <EditIcon />
                                      </IconButton>
                                      <IconButton
                                        aria-label="delete"
                                        color="error"
                                        // onClick={(e) => {
                                        //   getSaleItem(row.ticketnumber);
                                        // }}
                                      >
                                        <DeleteIcon />
                                      </IconButton>
                                    </Stack>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={salereports.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </div>
                </div>

                <div className="w-2/5 shadow-lg p-2">
                  <SalesDrawer
                    saleitems={saleitems}
                    salereportitem={salereportitem}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Sales;
