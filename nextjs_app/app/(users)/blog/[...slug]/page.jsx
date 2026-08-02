const page = async (props) => {
  const { slug } = await props.params;
  console.log(slug);
  return (
    <div>
      <h1>
        Slug:
        {slug.map((data) => {
          return <span key={data}>{data} </span>;
        })}
      </h1>
    </div>
  );
};

export default page;
