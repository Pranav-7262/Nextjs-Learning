const page = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Server Component</h1>;
      {data.map((data) => {
        return (
          <div key={data.id} className="font-work-sans">
            <h2>{data.title}</h2>
            <p>{data.id}</p>
            <p>{data.body}</p>
          </div>
        );
      })}
    </>
  );
};
export default page;
