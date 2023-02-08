import React, { useEffect, useState } from "react";
import LeftNavigation from "../components/LeftNavigation";
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
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Axios from "axios";
import EditInventory from "../components/EditInventory";
import AddInventory from "../components/AddInventory";
// import TableRows from "./TableRows";


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

const Inventory = () => {
  const [productLoaded, setProductLoaded] = useState(false);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [showAddInventry, setShowAddInventry] = useState(false);
  const [postresponse, setPostResponse] = useState();
  const [ondelete, setOndelete] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const addInventory = () => {
    setShowAddInventry(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteInventory = (id) => {
    Axios.delete("http://45.63.94.108:8080/products/" + id)
      .then((response) => {
        console.log(response.status);
        setPostResponse(response.status);
      })
      .catch((error) => {
        if (error.response) {
          setPostResponse(500);
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          setPostResponse(600);
          console.log("network error");
        } else {
          console.log(error);
        }
      });

    setOndelete(true);
  };

  const getdata = ()=>{
console.log(productList)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const loadProducts = async () => {

    await fetch("http://45.63.94.108:8080/products")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setProductList(data);
      });
  };

  useEffect(() => {
    setProductLoaded(true);

    loadProducts();
    setProductLoaded(false);
  }, []);

  useEffect(() => {
    setProductLoaded(true);

    loadProducts();
    setProductLoaded(false);
  }, [ondelete]);

  useEffect(() => {
    if (postresponse === 200) {
      console.log("Post was deleted");
      restFields();
    } else if (postresponse === 500) {
      console.log("Post Error");
    } else {
      console.log("Network Error");
    }
  }, [postresponse]);

  return (
    <div className="flex h-screen container ">
      <div className="flex flex-col ">
        <div className="bg-red-300 h-10 w-screen"></div>

        <div className="flex flex-row h-screen ">
          <LeftNavigation />
          <div className="flex-col p-8 w-full">
            <div className="border-b-2 mb-6 font-medium text-xl">Inventory</div>
            <div>

              <div className="flex flex-row items-center justify-end py-2 ">
                <div className=" ">
                  <Autocomplete
                    sx={{ width: 400 }}
                    freeSolo
                    clearOnEscape
                    disablePortal
                    disableClearable
                    autoHighlight
                    id="combo-box-demo"
                    // getOptionLabel={(option) => option.description }
                    options={productList.map(
                      (option) =>
                        option.name +
                        " " +
                        option.description +
                        " " +
                        option.size +
                        " " +
                        option.unitprice +
                        " " +
                        option.id
                    )}
                    // getOptionLabel={(option) => ((option.year) +" " + (option.label))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Product..."
                        // className="appearance-none focus:border-[#ff9900] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      />
                    )}
                    value={value}
                    onChange={(event, newValue) => {
                      setProductId(newValue.slice(-1));
                      setValue(newValue);
                      handleAddQuantity();
                      // getTableItems(newValue.slice(-1))
                      // console.log((newValue.slice(-1)).trim());
                      // setTableItems(tableItems => [...tableItems, newValue]);
                      // splitString()
                    }}
                  />
                </div>
                <div className="flex flex-row">
                  <div>
                    <IconButton aria-label="edit" color="primary">
                      <RefreshIcon />
                    </IconButton>
                  </div>
                  <div>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={addInventory}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 700 }}>
                      <Table
                        sx={{ minWidth: 700 }}
                        aria-label="customized table"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow>
                            {/* <StyledTableCell>Item #</StyledTableCell> */}
                            <StyledTableCell align="left">
                              Item name
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Description
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Size
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Price
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Qty
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Action
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {productList
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
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {row.description}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.size}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.unitprice}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.quantity}
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
                                      onClick={showModal}
                                    >
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton
                                      aria-label="delete"
                                      color="error"
                                      onClick={(e) => {
                                        deleteInventory(row.id);
                                      }}
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
                      count={productList.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <EditInventory show={show} setShow={(bool) => setShow(bool)} />
      <AddInventory
        showAddInventry={showAddInventry}
        setShowAddInventry={(bool) => setShowAddInventry(bool)}
      />
    </div>
  );
};

export default Inventory;
