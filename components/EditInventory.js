import React, { useEffect, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function EditInventory({ show, setShow }) {
  const [visible, setVisible] = useState(false);
  const [amountPaid, setAmountPaid] = useState();
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setShow(false);
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

  useEffect(() => {}, [amountPaid]);

  return (
    <div>
      <Modal
        closeButton
        // blur
        width="600px"
        aria-labelledby="modal-title"
        open={show}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={15}>
            Edit Inventory Item
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Item Name"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Category"
            // contentLeft={<Password fill="currentColor" />}
          />
                 <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Description"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Size"
            // contentLeft={<Password fill="currentColor" />}
          />
                   <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Cost Price"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Unit Price"
            // contentLeft={<Password fill="currentColor" />}
          />
                   <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Quantity"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="UPC"
            // contentLeft={<Password fill="currentColor" />}
          />
                   <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="ALU"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Item Number"
            // contentLeft={<Password fill="currentColor" />}
          />
                   <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Reorder Level"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Password"
            // contentLeft={<Password fill="currentColor" />}
          />
 
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Update
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
