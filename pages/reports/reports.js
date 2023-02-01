import React from "react";
import LeftNavigation from "../../components/LeftNavigation";
import Link from "next/link";

const Reports = () => {
  return (
    <div className="flex h-screen container">
      <div className="flex flex-col ">
        <div className="bg-red-300 h-10 w-screen"></div>
        <div className="flex flex-row h-screen ">
          <LeftNavigation />
        
   
            <div className="flex-col ">
              <div className="divide-y bg-gray-100 border-l-4 w-48 h-full">
                <Link href="/reports/sales">
                  <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
                    <div></div>
                    <div className=" text-black"> Sales</div>
                  </div>
                </Link>
                <Link href="/reports/bestOrWorst">
                <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
                    <div></div>
                    <div className=" text-black"> Best/Worst Sales</div>
                  </div>
                </Link>
                <Link href="/reports/compareDates">
                <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
                    <div></div>
                    <div className=" text-black"> Compare Dates</div>
                  </div>
                </Link>
                <Link href="/inventory">
                <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
                    <div></div>
                    <div className=" text-black"> Best/Worst Sales</div>
                  </div>
                </Link>
              </div>
            </div>
 

          <div className="flex-col p-8 w-screen">
            <div className="border-b-2 mb-6 font-medium text-xl">Reports</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
