import React, { useEffect, useState, useContext } from "react";
import CashPayment from "./CashPayment";
import AppContext from "../components/AppContext";

const Bottomdetail = (props) => {
  const context = useContext(AppContext);

  // const [subtotal, setSubtotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0.0);
  const [cashPaid, setCashPaid] = useState(0);
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const getCashpaid = (cash) => {
    setCashPaid(cash);
  };

  const handleCashout = () => {
    // console.log(getDate() + " " + getTime());
    console.log(context.ticketnumber);
    // setTicketnumber(randomNumberInRange);
  };

  const restFields = () => {
    setBalance("");
    setTax("");
    setDiscount("");
    setCashPaid("");
    context.setAmountpaid("");
    context.setBalance("");
    setSubtotal("");
  };

  useEffect(() => {
    if (context.tableItems.length === 0) {
      restFields();
    } else {
      // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.subtotal));
      setBalance(context.amountpaid - context.subtotal);
      context.setAmountpaid(cashPaid);
      context.setBalance(context.amountpaid - context.subtotal);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.amountpaid, context.tableItems]);

  useEffect(() => {
    // setBalance(cashPaid - props.subtotal);
    context.setBalance(context.amountpaid - context.subtotal);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.subtotal]);
  return (
    <div className="absolute inset-x-0 bottom-0 border-t-4 bg-white px-8 py-4 flex flex-row items-center ">
      <div className="flex flex-col flex-auto">
        <div className="flex flex-row ">
          <div className="text-xl flex-1 font-bold">Sub Total:</div>
          <div className="text-xl flex-1">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GHS",
            }).format(context.subtotal)}
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex-1 text-xl font-bold">Tax:</div>
          <div className="flex-1 text-xl">{tax}</div>
        </div>

        <div className="flex flex-row ">
          <div className="flex-1 text-red-600 text-xl font-bold">Discount:</div>
          <div className="flex-1 text-red-600 text-xl">{discount}</div>
        </div>
      </div>

      <div className="flex flex-row flex-auto  ">
        <div className="space-x-2">
          <button
            onClick={showModal}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cash
          </button>
          <button
            onClick={handleCashout}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Card
          </button>
          <button
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Momo
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-auto">
        <div className="flex flex-row">
          <div className="text-xl flex-1 font-bold"> Total</div>
          <div className="text-xl flex-1">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GHS",
            }).format(context.subtotal)}
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="flex-1 text-xl font-bold">Amount Paid:</div>
          <div className="flex-1 text-xl">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GHS",
            }).format(context.amountpaid)}
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex-1 text-red-600 text-xl font-bold">
            Balance Due:
          </div>
          <div className="flex-1 text-red-600 text-xl">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GHS",
            }).format(context.balance)}
          </div>
        </div>
      </div>
      <CashPayment
        show={show}
        getCashpaid={getCashpaid}
        subtotal={props.subtotal}
        setShow={(bool) => setShow(bool)}
      />
    </div>
  );
};

export default Bottomdetail;
