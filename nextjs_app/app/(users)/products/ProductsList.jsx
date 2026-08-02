"use client";

import { useSearchParams } from "next/navigation";

const ProductsList = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const page = searchParams.get("page");
  return (
    <div>
      Name : {name} <br />
      Page : {page} <br />
    </div>
  );
};

export default ProductsList;
