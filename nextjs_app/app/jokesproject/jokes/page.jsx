"use client";

import { useEffect, useState } from "react";

const page = () => {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [data, setdata] = useState({});
  const [showBtn, setshowBtn] = useState(true);
  const fetchData = async () => {
    const data = await fetch(URL);
    const res = await data.json();
    setdata(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>RAMDOM JOKES GENERATOR</h1>
      <h3>{data.setup}</h3>
      {showBtn ? (
        <button onClick={() => setshowBtn(false)}>REVEAL</button>
      ) : (
        <div>
          <h3>{data.punchline}</h3>
          <button onClick={() => setshowBtn(true)}>HIDE PUNCHLINE</button>
        </div>
      )}
      <br />
      <button onClick={fetchData}>NEXT JOKE</button>
    </div>
  );
};

export default page;
