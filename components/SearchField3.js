import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Data from "../public/datasource";
import AddQuantity from "./AddQuantity";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import ProductTable from "../components/ProductTable";
import Bottomdetail from "../components/Bottomdetail";
import RightDetail from "./RightDetail";
import AppContext from "../components/AppContext";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function sayHello(name) {
  alert(`hello, ${name}`);
}

const SearchField3 = () => {
  const context = useContext(AppContext);
  const [message, setMessage] = useState("default");
  const [productList, setProductList] = useState([]);
  const [tableItems, setTableItems] = useState([]);
  const [value, setValue] = useState("");
  const [cashPaid, setCashPaid] = useState(55);
  const [addquantity, setAddquantity] = useState([]);
  const [quantity, setQuantity] = useState();
  const [productLoaded, setProductLoaded] = useState(false);
  const [productId, setProductId] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ondelete, setOndelete] = useState(false);
  const [num, setNum] = useState(0);
  const handler = () => setVisible(true);

  const decrement = () => {
    // rows.push({id: 1, name: "Joshua", description: 3, size: 4, price:5, qty:7})
    setTableItems([...tableItems, rows]);
    // setTableItems(rows);
    console.log("HEllo");
  };

  const calSubTotal = () => {
    const temp = subtotal;
    // tableItems.map((item) => {
    //   // Return updated quantityfield
    //   setSubtotal(temp + item.unitprice * quantity);
    //   context.setSubtotal(temp + item.unitprice * quantity)
    // });
    context.tableItems.map((item) => {
      // Return updated quantityfield
      // setSubtotal(temp + item.unitprice * quantity);
      context.setSubtotal(temp + item.unitprice * quantity);
    });
  };

  const deleteTableItem = (id) => {
    // setTableItems((current) => current.filter((_, i) => i !== id));
    context.setTableItems((current) => current.filter((_, i) => i !== id));
    context.setSaleitems((current) => current.filter((_, i) => i !== id));
    setOndelete(true);
  };

  const getTableItems = (id) => {
    const tempArray = [];
    productList.forEach((element) => {
      // console.log((element.id))
      if (id == element.id) {
        tempArray.push(element);
        const nextShapes = tempArray.map((item) => {
          // Return updated quantityfield
          return {
            ...item,
            quantity: quantity,
          };
        });

        // setTableItems([...tableItems, ...nextShapes]);
        context.setTableItems([...context.tableItems, ...nextShapes]);
        context.setSaleitems([...nextShapes]);
      }
    });
    setValue("");
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleAddQuantity = () => {
    setVisible(true);
  };

  const updateQuantity = (array) => {
    const nextShapes = array.map((item) => {
      // Return updated quantityfield
      return {
        ...item,
        quantity: quantity,
      };
    });
    setTableItems([...tableItems, nextShapes]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("User pressed: ", event.key + quantity);
      // 👇️ your logic here
      getTableItems(productId);
      console.log("Enter key pressed ✅");
      closeHandler();
    }
  };

  const loadProducts = async () => {
    // const response = await fetch("http://localhost:9999/api/v1/products");
    // const data = await response.json();
    // setProductList(data);

    await fetch("http://localhost:9999/products")
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
    if (ondelete == true) {
      var result = 0;
      // setSubtotal(0);
      context.setSubtotal(0);
      // tableItems.map((item) => {
      //   result += item.unitprice * item.quantity;
      // });
      context.tableItems.map((item) => {
        result += item.unitprice * item.quantity;
      });

      // setSubtotal(result);
      context.setSubtotal(result);
    } else {
      calSubTotal();
    }
    // console.log(tableItems);
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableItems, ondelete, context.tableItems]);

  if (productLoaded) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <Autocomplete
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
            className="appearance-none focus:border-[#ff9900] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
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
      {/* <code>{JSON.stringify(productList)}</code> */}
      {/* <div> {searchField}</div> */}

      <Modal
        closeButton
        // blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={15}>
            Add Quantity
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            autoFocus
            color="primary"
            size="lg"
            placeholder="Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);

              // getTableItems(productId)
            }}
            onKeyDown={handleKeyDown}

            // contentLeft={<Mail fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Add
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <button
        // onClick={()}
        type="button"
        className="w-50 h-50 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
      >

      </button> */}

      <div>
        <ProductTable
          rows={tableItems}
          name={value}
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          deleteTableItem={deleteTableItem}
        />
      </div>
      <div className="">
        <Bottomdetail
          subtotal={subtotal}
          cashPaid={cashPaid}
          tableItems={tableItems}
        />
      </div>
      {/* <RightDetail/> */}
    </div>
  );
};

export default SearchField3;
