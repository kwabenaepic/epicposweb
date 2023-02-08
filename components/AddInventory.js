import React, { useEffect, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Divider from "@mui/material/Divider";
import Axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Label } from "flowbite-react";

// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function AddInventory({ showAddInventry, setShowAddInventry }) {
  const [visible, setVisible] = useState(false);
  const [amountPaid, setAmountPaid] = useState();
  const [postresponse, setPostResponse] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [costprice, setCostprice] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [reorderlevel, setReorderlevel] = useState("");
  const [category, setCategory] = useState("");
  const [attribute, setAttribute] = useState("");
  const [alu, setAlu] = useState("");
  const [upc, setUpc] = useState("");

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setShowAddInventry(false);
    console.log("closed");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇️ your logic here
      if (subtotal > amountPaid) {
      } else {
        getCashpaid(amountPaid);
        console.log("Enter key pressed ✅" + amountPaid);
        closeHandler();
      }
    }
  };

  const restFields = () => {
    setName("");
    setDescription("");
    setSize("");
    setQuantity("");
    setCostprice("");
    setUnitprice("");
    setReorderlevel("");
    setAlu("");
    setUpc("");
    setAttribute("");
    setCategory("");
  };

  const addProduct = () => {
    Axios.post("http://45.63.94.108:8080/products", {
      name: name,
      description: description,
      size: size,
      quantity: quantity,
      costprice: costprice,
      unitprice: unitprice,
      reorderlevel: reorderlevel,
      ALU: alu,
      UPC: upc,
      attribute: attribute,
      category: category,
    })
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
  };

  const displayAlert = () => {
   if(postresponse === 500){
      return (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )
      }
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      );
    
  };

  useEffect(() => {}, [amountPaid]);

  useEffect(() => {
    if (postresponse === 201) {
      console.log("Post was Okay");
      restFields();
    } else if (postresponse === 500) {
      // displayAlert
      console.log("Post Error");
    } else {
      console.log("Network Error");
    }
  }, [postresponse]);

  return (
    <div>
      <Modal
        closeButton
        // blur
        width="600px"
        aria-labelledby="modal-title"
        open={showAddInventry}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" className="font-bold text-2xl">
            Add Inventory Item
          </Text>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Item Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Cost Price"
            value={costprice}
            onChange={(e) => {
              setCostprice(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Unit Price"
            value={unitprice}
            onChange={(e) => {
              setUnitprice(e.target.value);
            }}
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="UPC"
            value={upc}
            onChange={(e) => {
              setUpc(e.target.value);
            }}
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="ALU"
            value={alu}
            onChange={(e) => {
              setAlu(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Reorder Level"
            value={reorderlevel}
            onChange={(e) => {
              setReorderlevel(e.target.value);
            }}
            // contentLeft={<Mail fill="currentColor" />}
          />
          <displayAlert  />
          <div className=" justify-center items-center text-xl font-bold text-yellow-500">
            {" "}
            Message
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={addProduct}>
            Add
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
