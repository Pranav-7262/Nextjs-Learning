const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold text-gray-700 animate-pulse">
        Loading... Please wait while we fetch the data for you.⌛
      </h1>
    </div>
  );
};

export default loading;
