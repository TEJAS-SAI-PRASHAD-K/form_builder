import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tailwind Counter App</h1>
        <p className="text-6xl font-semibold text-indigo-600 mb-6">{count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            - Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
