import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-700">Generating Review...</p>
    </div>
  );
};

export default Loader;