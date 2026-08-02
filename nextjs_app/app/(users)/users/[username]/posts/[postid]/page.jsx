"use client";

import { use } from "react";

const page = (props) => {
  const user = use(props.params);
  console.log(user);
  return (
    <div>
      <h2>POST ID: {user.postid}</h2>
    </div>
  );
};

export default page;

//in react server component we can use async await to fetch data but in react client component we can not use async await to fetch data so we have to use use() hook to fetch data in react client component.
