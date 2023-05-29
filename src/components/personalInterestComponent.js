import { useState } from "react";

const PersonalInterestComponent = (props) => {
  const [interest, setInterst] = useState("");

  const interestChangeHandler = (event) => {
    setInterst(event.target.value);
    props.inputChangeHandler(event);
  };

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="personal_intersts">
          Personal Interests
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="personal_intersts"
          name="personalIntersts"
          type="text"
          placeholder="Enter your 2 to 4 personal interests with space in b/w ex: Reading Singing ..."
          onChange={interestChangeHandler}
          value={interest}
        />
      </div>
    </>
  );
};

export default PersonalInterestComponent;
