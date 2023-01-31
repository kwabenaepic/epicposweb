import React from "react";
import Link from 'next/link'

const PosClientTopNav = () => {

  const logout = () => {

  }
  const getDate = () => {
    var today = new Date(),
      date =
       
        (today.getMonth() + 1) +
        "-" +
        today.getDate() + "-" +
        today.getFullYear() 
 

    return date;
  };


  return (
    <div className=" p-2 px-4 divide-y bg-gradient-to-b from-[#191d22] to-[#4b5257] w-full bg-[url('/CoarseGrid.png')">
      <div className="flex flex-row px-4 items-center">
        <div className="flex flex-col flex-1">
    <Link href="/login">
          <img src="/lock.png" width="50" height="100" className=" cursor-pointer" />
         </Link>
          <div className=" text-white"> Kwabena Epic</div>
        </div>

        <div className="flex flex-1 ">
          <div className="text-white text-3xl  ">EPICPOS</div>
        </div>
        <div className="flex flex-3 flex-col">
          <div className="text-white ">{getDate()}</div>
          <div className="text-white text-2xl">0:00:00</div>
        </div>
      </div>
    </div>
  );
};

export default PosClientTopNav;
