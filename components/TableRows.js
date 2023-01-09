import React, { useEffect, useState } from "react";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

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

function createData(id, name, description, size, price, qty) {
  return { id, name, description, size, price, qty };
}


const TableRows = (props) => {
  const [tableItems, setTableItems] = useState([]);
  const [productLoaded, setProductLoaded] = useState(false);
  
  useEffect(() => {

    setTableItems(props.tableItems);
// console.log(tableItems)
  }, [tableItems, props.tableItems]);

const IsTableset = ()=>{
  if(tableItems.length > 0 ){
    return(
      <TableBody>
        {tableItems.map((row, i) => (
          <StyledTableRow key={row.id}>
            {/* <StyledTableCell component="th" scope="row">
              {(i)}
           
            </StyledTableCell> */}
            <StyledTableCell align="left">{row.name}</StyledTableCell>
            <StyledTableCell align="left">{row.description}</StyledTableCell>
            <StyledTableCell align="center">{row.size}</StyledTableCell>
            <StyledTableCell align="center">{row.unitprice}</StyledTableCell>
            <StyledTableCell align="center">{row.quantity}</StyledTableCell>
            <StyledTableCell align="center">
              <Stack direction="row" spacing={1} alignItems="center" >
      
                <IconButton aria-label="edit" color="primary" onClick={props.handleAddQuantity}>
                  
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete"  color="error" onClick={(e) => {props.deleteTableItem(i)}}>
                  <DeleteIcon />
                </IconButton>
 
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    )
  } 
  return (


 <p>Loading....</p>

   

  )


}

return(
  
    <IsTableset/>
  
)

  
};

export default TableRows;
