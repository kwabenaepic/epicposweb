import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import LeftNavigation from "../components/LeftNavigation";
import HomeDashboard from "../components/HomeDashboard";
import Login from "./Login";

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
    <Wrapper>
      <div className="flex flex-col ">
        <div className="bg-red-300 h-10 w-full"></div>
        <div className="flex flex-row h-screen w-full">
          <LeftNavigation />
          <HomeDashboard />
        </div>
      </div>
    </Wrapper>
  );
};

export default function Home() {
  return (
    <Wrapper>
      <Navigatior />
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex h-screen w-full
`;

const Main = tw.div`
flex h-screen container
`;
