import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className="font-roboto font-bold text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      Count: {count}
    </button>
  );
};

export default Counter;
