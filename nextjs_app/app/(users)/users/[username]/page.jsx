const page = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <>
      <div>
        <h2>Username: {user.username}</h2>
      </div>
    </>
  );
};

export default page;
