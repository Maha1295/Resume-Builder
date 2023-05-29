import { useState } from "react";

const LanguagesInputComponent = (props) => {
  const [languages, setLanguages] = useState("");

  const languagesChangeHandler = (event) => {
    setLanguages(event.target.value);
    props.inputChangeHandler(event);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor="languagesKnown">
        Languages Known:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="languagesKnown"
        name="languagesKnown"
        type="text"
        placeholder="Enter the languages you know with spaces in between two languages"
        onChange={languagesChangeHandler}
        value={languages}
      />
    </div>
  );
};

export default LanguagesInputComponent;
