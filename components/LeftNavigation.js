import React, { Component } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/24/solid";
import Link from "next/Link";

export class LeftNavigation extends Component {
  render() {
    return (
      <div className="p-3 divide-y bg-gradient-to-b from-[#191d22] to-[#20262b] w-5/3 bg-[url('/CoarseGrid.png')">
        <Link href="/">
          <div className="flex flex-row  px-3 items-center py-2 space-x-2 cursor-pointer   ">
            <div>
              <HomeIcon className="h-6 w-6 text-[#ff9900] " />
            </div>
            <div className=" text-white"> Home</div>
          </div>
        </Link>
        <Link href="/Inventory">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer   ">
            <div>
              <FolderIcon className="h-6 w-6 text-[#ff9900] " />
            </div>
            <div className=" text-white"> Inventory</div>
          </div>
        </Link>
        <Link href="/Employees">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer  ">
            <div>
              <UsersIcon className="h-6 w-6 text-[#ff9900]" />
            </div>
            <div className=" text-white"> Employees</div>
          </div>
        </Link>
        <Link href="/reports/Sales">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer  ">
            <div>
              <DocumentTextIcon className="h-6 w-6 text-[#ff9900]" />
            </div>
            <div className=" text-white"> Reports</div>
          </div>
        </Link>
        <Link href="/Settings">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer  ">
            <div>
              <Cog6ToothIcon className="h-6 w-6 text-[#ff9900]" />
            </div>
            <div className=" text-white"> Settings</div>
          </div>
        </Link>
        <Link href="/About">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer  ">
            <div>
              <InformationCircleIcon className="h-6 w-6 text-[#ff9900]" />
            </div>
            <div className=" text-white"> About</div>
          </div>
        </Link>

        <Link href="/PosClient">
          <div className="flex flex-row px-3 py-3 space-x-2 cursor-pointer  ">
            <div>
              <ArrowLeftIcon className="h-6 w-6 text-[#ff9900]" />
            </div>
            <div className=" text-white"> POS</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default LeftNavigation;
