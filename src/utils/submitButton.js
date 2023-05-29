import React from "react";

const SubmitButton = () => {
  return (
    <>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="personal_intersts"
          type="submit"
          placeholder="Submit"
        />
      </div>
    </>
  );
};

export default SubmitButton;
