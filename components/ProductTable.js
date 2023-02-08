import React, { useEffect, useState, useContext} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Axios from "axios";
import TableRows from "./TableRows";
import AppContext from "../components/AppContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ProductTable = (props) => {
  const context = useContext(AppContext);
  const [productList, setProductList] = useState([]);
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const result = await Axios.get("http://localhost:8080/products/");
      setProductList(result.data);
    }
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await Axios.get("http://localhost:8080/products/");
    setProductList(result.data);
  };

  useEffect(() => {}, [props.rows, props.name]);

  return (
    <div className="mt-2">
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table" >
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Item #</StyledTableCell> */}
              <StyledTableCell align="left">Item name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="center">Size</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Qty</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableRows
            tableItems={context.tableItems}
            quantity={props.quantity}
            handleAddQuantity={props.handleAddQuantity}
            deleteTableItem={props.deleteTableItem}
          />
        </Table>
      </TableContainer>

      {/* <code>{JSON.stringify(tableItems)}</code> */}
    </div>
  );
};

export default ProductTable;
