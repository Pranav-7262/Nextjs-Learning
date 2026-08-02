"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const page = (props) => {
  const searchParams = useSearchParams();
  const username = searchParams.get("name");
  const [data, setData] = useState(null);

  const URL = `https://api.genderize.io?name=${username}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        This is a client component page Data -{" "}
        {data && (
          <>
            Name: {data.name} <br />
            Gender: {data.gender} <br />
            Probability: {data.probability} <br />
          </>
        )}
      </h1>
    </div>
  );
};

export default page;
