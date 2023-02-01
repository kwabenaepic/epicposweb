import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import LeftNavigation from "../components/LeftNavigation";
import HomeDashboard from "../components/HomeDashboard";
import Login from "./login";

const Navigatior = () => {
  const isLoggedin = true;
  if (!isLoggedin) {
    return (
      <div className="flex flex-row h-screen w-screen">
        <Login />
      </div>
    );
  }
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col ">
        <div className="bg-red-300 h-10 w-full"></div>
        <div className="flex flex-row h-screen w-full">
          <LeftNavigation />
          <HomeDashboard />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <Navigatior />
    </div>
  );
}

