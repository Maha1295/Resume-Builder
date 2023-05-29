import { useState } from "react";

const PhoneNumberInputComponent = (props) => {
  const [phoneNo, setPhoneNo] = useState("");

  const phoneNoChangeHandler = (event) => {
    setPhoneNo(event.target.value);
    props.inputChangeHandler(event);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor="phoneNumber">
        Phone Number:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        placeholder="Enter your phone number"
        onChange={phoneNoChangeHandler}
        value={phoneNo}
      />
    </div>
  );
};

export default PhoneNumberInputComponent;
