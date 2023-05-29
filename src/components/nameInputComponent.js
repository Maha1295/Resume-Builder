import { useState } from "react";

const NameInputComponent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    props.inputChangeHandler(event);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    props.inputChangeHandler(event);
  };

  return (
    <div className="mb-4 flex justify-between">
      <div className="w-2/4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="firstName">
          First Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          onChange={firstNameChangeHandler}
          value={firstName}
        />
      </div>
      <div className="w-2/4 ml-2">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          onChange={lastNameChangeHandler}
          value={lastName}
        />
      </div>
    </div>
  );
};

export default NameInputComponent;
