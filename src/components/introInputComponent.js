import { useState } from "react";

const IntroInputComponent = (props) => {
  const [intro, setIntro] = useState("");

  const introChangeHandler = (event) => {
    setIntro(event.target.value);
    props.inputChangeHandler(event);
  };
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor="briefIntroduction">
        Brief Introduction:
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="briefIntroduction"
        name="briefIntroduction"
        placeholder="Tell us about yourself in a few sentences...(Maxiumum of 500 words)"
        onChange={introChangeHandler}
        value={intro}></textarea>
    </div>
  );
};

export default IntroInputComponent;
