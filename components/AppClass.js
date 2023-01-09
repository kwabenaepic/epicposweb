import React, { useState, useEffect } from "react";

function AppClass() {
  const [count, setCount] = useState(0);
  const [overview, setOverview] = useState("Hello");
  const [name, setName] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  //on every render
  useEffect(() => {
    setOverview(name)
    console.log("I re rendered");
  });

    //on first Render/Mount only - componentDidMount Alternative
       useEffect(() => {

      console.log("The name changed");
    }, []);

        //on first Render + anytime dependency changes - component did update
        useEffect(() => {
     
          console.log('The name changed:"' + name)
        }, [name]);

  return (
    <div className="flex flex-col items-center ">
      Welcome to my {overview}
      <p>The count is {count}</p>
      <button
        onClick={increment}
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
      >
        +{/* <TrashIcon className="h-5 w-5 text-[#ffffff]" /> */}
      </button>
      <button
        onClick={decrement}
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
      >
        -{/* <TrashIcon className="h-5 w-5 text-[#ffffff]" /> */}
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="shadow-md appearance-none focus:border-[#ff9900] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Enter or Scan Product"
      />
    </div>
  );
}

export default AppClass;
