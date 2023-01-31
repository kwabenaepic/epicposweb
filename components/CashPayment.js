import React, { useEffect, useState, useContext } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import AppContext from "../components/AppContext";

// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function CashPayment({ show, setShow, getCashpaid, subtotal }) {
  const context = useContext(AppContext);

  const [visible, setVisible] = useState(false);
  const [amountPaid, setAmountPaid] = useState();
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setShow(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇️ your logic here
      if (context.subtotal > amountPaid) {
      } else {
        getCashpaid(amountPaid);
        context.setAmountpaid(amountPaid);

        console.log("Enter key pressed ✅" + amountPaid);
        closeHandler();
      }
    }
  };

  useEffect(() => {
    context.receiptsid;
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountPaid]);

  return (
    <div>
      <Modal
        closeButton
        // blur
        aria-labelledby="modal-title"
        open={show}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={15}>
            Cash Paid
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
            placeholder="Amount"
            onChange={(e) => {
              setAmountPaid(e.target.value);

              // getTableItems(productId)
            }}
            onKeyDown={handleKeyDown}

            // contentLeft={<Mail fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Ok
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
