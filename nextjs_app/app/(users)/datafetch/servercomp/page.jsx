const page = async (props) => {
  const searchParams = await props.searchParams;
  
  const URL = `https://api.genderize.io?name=${searchParams.name}`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>
        Name: {data.name} <br />
        Gender: {data.gender} <br />
        Probability: {data.probability} <br />
      </h1>
    </div>
  );
};

export default page;
