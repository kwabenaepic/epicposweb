import React, { Children, useState, useContext, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Axios from "axios";
import AppContext from "../components/AppContext";

function items(productid, quantity, ticketnumber) {
  return { productid, quantity, ticketnumber };
}

const RightDetail = () => {
  const context = useContext(AppContext);
  const [postresponse, setPostResponse] = useState();
  const [ticketnumber, setTicketnumber] = useState(randomNumberInRange());
  context.setTicketnumber(ticketnumber);
  const [saleitems, setSaleitems] = useState([]);

  const data = [
    {
      productid: 1,
      quantity: 1,
      ticketnumber: ticketnumber,
    },
  ];

  const restFields = () => {
    context.setTableItems([]);
    context.setSaleitems([]);
    setSaleitems([]);
    context.setAmountpaid("");
    context.setBalance("");
    context.setSubtotal("");
    setTicketnumber(randomNumberInRange());
  };

  const onCashout = () => {
    if (saleitems.length > 0) {
      saveReceipt();
      saveSaleItem();
      restFields();
    }
  };
  const saveReceipt = () => {
    Axios.post("http://localhost:9999/api/v1/receipts", {
      customerid: ticketnumber,
      receiptdate: getDate() + " " + getTime(),
      employeeid: context.employeeid,
      modeofpayment: context.modeofpayment,
      salesoutletid: context.salesoutletid,
      ticketnumber: ticketnumber,
      amountpaid: context.amountpaid,
      balance: context.balance,
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

  const saveSaleItem = () => {
    Axios.post("http://localhost:9999/api/v1/saleitemsall", saleitems)
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

  const getDate = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    return date;
  };

  const getTime = () => {
    var today = new Date(),
      curTime =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return curTime;
  };

  const handleCashout = () => {
    console.log(context.saleitems);
  };

  function randomNumberInRange() {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (10000 - 100 + 101)) + 1;
  }

  useEffect(() => {
    context.saleitems.map((item) => {
      setSaleitems([...saleitems, items(item.id, item.quantity, ticketnumber)]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.saleitems]);

  useEffect(() => {
    console.log(saleitems);
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saleitems]);

  useEffect(() => {
    context.setTicketnumber(ticketnumber);
    console.log(ticketnumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketnumber]);

  return (
    <div>
      <div className="flex flex-row space-x-10 p-8 items-center ">
        <div className="text-2xl ">Ticket No.</div>
        <div className="text-xl">{ticketnumber}</div>
      </div>
      <div className="flex flex-1 items-center justify-center absolute inset-x-0 bottom-0">
        <div className="flex flex-col space-y-2 w-full  items-center">
          <button
            onClick={restFields}
            type="button"
            className="text-white w-5/6 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-20 py-6 text-center inline-flex items-center justify-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <XMarkIcon className="h-6 w-6 text-white mr-3" />
            Cancel
          </button>
          {/* <button
            onClick={handleCashout}
            type="button"
            className="text-gray-900 bg-gray-100 w-5/6 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-2xl px-20 py-6 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 mb-2"
          >
            <Cog6ToothIcon className="h-6 w-6 text-[#000000] mr-3" />
            Settings
          </button> */}
          <Link href="/">
            <div
       
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-2xl px-20 py-6 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 mb-2"
            >
              <HomeIcon className="h-6 w-6 text-[#000000] mr-3 " />
              Dashboard
            </div>
          </Link>
          <button
            onClick={onCashout}
            type="button"
            className="text-gray-900 w-5/6 bg-gradient-to-b from-lime-600 via-lime-500 to-lime-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-2xl px-20 py-6 text-center  justify-center items-center inline-flex  "
          >
            <HomeIcon className="h-6 w-6 text-black mr-3 " />
            Cashout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightDetail;
