import React from 'react'
import Link from "next/Link";

const ReportsNav = () => {
  return (
    <div className="flex-col ">
    <div className="divide-y bg-gray-100 border-l-4 w-48 h-full">
      <Link href="/reports/Sales">
        <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
          <div></div>
          <div className=" text-black"> Sales</div>
        </div>
      </Link>
      <Link href="/reports/BestOrWorst">
        <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
          <div></div>
          <div className=" text-black"> Best/Worst Sales</div>
        </div>
      </Link>
      <Link href="/reports/CompareDates">
        <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
          <div></div>
          <div className=" text-black"> Compare Dates</div>
        </div>
      </Link>
      <Link href="/Inventory">
        <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer  hover:border hover:border-l-yellow-500  ">
          <div></div>
          <div className=" text-black"> Best/Worst Sales</div>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default ReportsNav
