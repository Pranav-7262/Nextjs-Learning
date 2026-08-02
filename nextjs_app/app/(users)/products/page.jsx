import ProductsList from "./ProductsList";

const Products = async (props) => {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return (
    <div>
      <h1>
        Name : {searchParams.name} <br />
        Page : {searchParams.page} <br />
      </h1>
      <span className="text-red-500">
        INSIDE Client Component: <br />
      </span>
      <br />
      <ProductsList />
    </div>
  );
};

export default Products;

//eg query string: http://localhost:3000/products?name=John&page=2
