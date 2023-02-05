import React, { useState } from "react";
import Home from "../pages";
import AppClass from "./AppClass";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ProductTable from "./ProductTable";
import Top10Selling from "./Top10Selling";
import ReorderList from "./ReorderList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomeDashboard = () => {
  const [count, setCount] = useState(0);
  const [overview, setOverview] = useState("Hello");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex-col p-8 w-screen">
      <div className="border-b-2 mb-6 font-medium text-xl">Overview</div>
      <div className="flex ">
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium"> Sum Sales Today</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium"> Total Items Sold Today</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium">Sales This Month</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium">Total Items Sold This Month</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium">Stock Value</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
        <div className="shadow-md flex flex-auto flex-col mr-4 p-3 bg-gray-150 border-2">
          <div className="text-orange-600 font-medium">Sum Inventory</div>
          <div className="mt-3 mb-3"> $ 0.00</div>
          <div>
            <div className="font-xs text-orange-700 ">Total</div>
          </div>
        </div>
      </div>
      <div>{/* <ProductTable /> */}</div>
      <div className="flex flex-row h-98 w-full mt-6">
        <div className="flex flex-1 flex-col 200 p-2 m-1">
          <div className="text-xl font-medium mb-1">Top 10 Selling</div>
          <Top10Selling />
        </div>
        <div className="flex flex-1 flex-col 200 p-2 m-1">
          <div className=" text-xl font-medium mb-1">Products on Reorder List</div>
          <ReorderList />
        </div>
        <div className="flex flex-1 p-2 m-1 h-full mt-8">
          <div className="shadow-md items-center space-y-2 flex flex-col px-10 py-4 bg-gray-150 border-2">
            <div className="text-xl font-bold mb-4">Sales Monthly</div>
            <div className=" flex flex-row w-full items-center mx-4">
              <div className="text-xs mr-2 text-yellow-500 ">
                Month of:
              </div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>January</MenuItem>
                  <MenuItem value={2}>Feruary</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>April</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>June</MenuItem>
                  <MenuItem value={7}>July</MenuItem>
                  <MenuItem value={8}>August</MenuItem>
                  <MenuItem value={9}>September</MenuItem>
                  <MenuItem value={10}>October</MenuItem>
                  <MenuItem value={11}>November</MenuItem>
                  <MenuItem value={12}>December</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className=" flex flex-row ">
              <div className="text-xl font-medium mr-2">₵ </div>
              <div className="text-xl ">0.0 </div>
            </div>
            <div className=" flex flex-row">
              <div className="text-xl font-medium mr-2">Previous: </div>
              <div className="text-xl ">0.0 </div>
            </div>
            <div className=" shadow-md flex flex-row p-2">
              <div className="text-xl font-medium mr-2 text-yellow-500">
                No of Sales:{" "}
              </div>
              <div className="text-xl ">0 </div>
            </div>
          </div>

          {/* <ReorderList /> */}
        </div>
      </div>

      {/* <AppClass /> */}
    </div>
  );
};

export default HomeDashboard;

