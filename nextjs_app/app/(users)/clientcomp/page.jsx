"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";

const page = () => {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setData(data);
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Counter />

      {data.map((data) => {
        return (
          <div key={data.id} className="font-work-sans">
            <h2>{data.title}</h2>
            <p>{data.userId}</p>
            <p>{data.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default page;
