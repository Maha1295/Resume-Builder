import { useState } from "react";

const EmailInputComponent = (props) => {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    props.inputChangeHandler(event);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor="emailAddress">
        Email Address:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="emailAddress"
        name="emailAddress"
        type="email"
        placeholder="Enter your email address"
        onChange={emailChangeHandler}
        value={email}
      />
    </div>
  );
};

export default EmailInputComponent;
