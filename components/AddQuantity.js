import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function AddQuantity() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


  return (
    <div>
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
    </div>
  );
}
