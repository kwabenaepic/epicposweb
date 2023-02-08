import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";

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
const Top10Selling = () => {
  const [toptenselling, setToptenSelling] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const toptenSelling = async () => {
    // const response = await fetch("http://45.63.94.108:8080/api/v1/products");
    // const data = await response.json();
    // setProductList(data);

    await fetch("http://45.63.94.108:8080/toptenselling")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setToptenSelling(data);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    toptenSelling();
  }, []);
  return (
    <div className="flex flex-col shadow-lg">
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table
              sx={{ minWidth: 200 }}
              aria-label="customized table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  {/* <StyledTableCell>Item #</StyledTableCell> */}
                  <StyledTableCell align="left">Item name</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="center">Qty Bought</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {toptenselling
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <StyledTableRow key={row.id}>
                      {/* <StyledTableCell component="th" scope="row">
              {(i)}
           
            </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {row.itemname}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.description}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.quantitybought}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={toptenselling.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <div></div>
    </div>
  );
};

export default Top10Selling;
