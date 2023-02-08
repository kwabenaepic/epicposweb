import React, { useState, useEffect } from "react";


import PosClientTopNav from "../components/PosClientTopNav";
// import SearchField from "../components/SearchField";
// import SearchField2 from "../components/SearchField2";
import SearchField3 from "../components/SearchField3";
import RightDetail from "../components/RightDetail";

const PosClient = () => {
  const [productList, setProductList] = useState([]);

  // useEffect(()=>{
  //   console.log("Code");
  //   Axios.get("http://45.63.94.108:8080/api/v1/products/")
  //   .catch(function (error){
  //     if(error.response){
  //       console.log(error.response.data);
  //       // console.log(error.response.status);
  //       // console.log(error.response.headers);
  //     }
  //   })
  //   .then((response) => {
  //     // setProductList(response.data);
  //   console.log(response);
  //   // console.log(error.response.data)
  //   });
  //   }, []);

  useEffect(() => {
    // loadProducts();
  }, []);
  // const loadProducts = async () => {
  //   const result = await Axios.get("http://45.63.94.108:8080/api/v1/products/");
  //   console.log(result.data);
  // };

  return (
    <div className="h-screen w-full ">
      <PosClientTopNav />
      <div className=" flex flex-row bg-[#B0B9C2] h-full w-full pb-8 px-8 ">
        <div className="flex flex-1 p-4 bg-white my-3 relative">
          <div className="w-full ">
            <SearchField3 />
          </div>
        </div>

        <div className="flex flex-2  w-96 relative my-3">
          <RightDetail />
        </div>
      </div>
    </div>
  );
};

export default PosClient;
