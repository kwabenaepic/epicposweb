// import "../styles/global.css"

// import AppContext from "../components/AppContext";
// import React, { useEffect, useState } from "react";

// // import { SessionProvider } from "next-auth/react";

// export default function App({
//   Component,
//   pageProps
// }) {
//   const [message, setMessage] = useState("default");
//   const [receiptsid, setReceiptsid] = useState("")
//   const [customerid, setCustomerid] = useState("")
//   const [receiptsdate, setReceiptsdate] = useState("")
//   const [employeeid, setEmployeeid] = useState("1")
//   const [modeofpayment, setModeofpayment] = useState("Cash")
//   const [salesoutletid, setSalesoutletid] = useState("DESKTOP-IAV61KP")
//   const [ticketnumber, setTicketnumber] = useState("56545454")
//   const [amountpaid, setAmountpaid] = useState("HEllo")
//   const [balance, setBalance] = useState("")
//   const [quantity, setQuantity] = useState("")
//   const [productid, setProductid] = useState("")
//   const [saleitems, setSaleitems] = useState([])
//   const [subtotal, setSubtotal] = useState(0);
//   const [tableItems, setTableItems] = useState([]);


//   return (
//     // <SessionProvider session={session}>
//       <AppContext.Provider value={{ message, setMessage, receiptsid, setReceiptsid, 
//        customerid, setCustomerid, receiptsdate, setReceiptsdate, employeeid, setEmployeeid, 
//        modeofpayment, setModeofpayment, salesoutletid, setSalesoutletid, ticketnumber, setTicketnumber, 
//        amountpaid, setAmountpaid, balance, setBalance, quantity, setQuantity, productid, setProductid, saleitems, setSaleitems, subtotal, setSubtotal,
//        tableItems, setTableItems
//        }}>
//          <Component {...pageProps} />
//       </AppContext.Provider>
//     // </SessionProvider>
//   );
// }
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

