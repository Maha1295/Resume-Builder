import { useState, useEffect } from "react";

const EducationInputComponent = (props) => {
  const [education_10th, setEducation_10th] = useState({
    passedOutYear: "",
    institution: "",
    marks: "",
  });

  const [education_12th, setEducation_12th] = useState({
    passedOutYear: "",
    institution: "",
    marks: "",
  });

  const [education_grad, setEducation_grad] = useState({
    passedOutYear: "",
    institution: "",
    course: "",
    marks: "",
  });

  const [education_masters, setEducation_masters] = useState({
    passedOutYear: "",
    institution: "",
    course: "",
    marks: "",
  });

  const [input, setInput] = useState(false);

  const educationInputChangeHandler = (event) => {
    const { name, value, id } = event.target;
    //  console.log(name, value, id);
    // if (name === "10") {
    //   setEducation_10th((prevState) => ({
    //     ...prevState,
    //     [id]: value,
    //   }));
    //   props.inputChangeHandler(name, education_10th);
    //   setInput(!input);
    // }

    if (name === "10") {
      const updatedEducation_10th = {
        ...education_10th,
        [id]: value,
      };
      setEducation_10th(updatedEducation_10th);
      props.inputChangeHandler(name, updatedEducation_10th);
    }

    if (name === "12") {
      const updatedEducation_12th = {
        ...education_12th,
        [id]: value,
      };
      setEducation_12th(updatedEducation_12th);
      props.inputChangeHandler(name, updatedEducation_12th);
    }

    if (name === "13") {
      const updatedEducation_grad = {
        ...education_grad,
        [id]: value,
      };
      setEducation_grad(updatedEducation_grad);
      props.inputChangeHandler(name, updatedEducation_grad);
    }

    if (name === "14") {
      const updatedEducation_masters = {
        ...education_grad,
        [id]: value,
      };
      setEducation_masters(updatedEducation_masters);
      props.inputChangeHandler(name, updatedEducation_masters);
    }
  };

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="education_10th">
          10th Education:
        </label>
        <div className="ml-10 w-3/4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Passed Out Year:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passedOutYear"
              name="10"
              type="text"
              placeholder="Enter Year Of Passing for 10th Class"
              onChange={educationInputChangeHandler}
              value={education_10th.passedOutYear}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Institution or Board:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="institution"
              name="10"
              type="text"
              placeholder="Enter Name of Institution where you completed 10th"
              onChange={educationInputChangeHandler}
              value={education_10th.institution}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Marks Scored in Percentage:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="marks"
              name="10"
              type="text"
              placeholder="Enter your Marks in 10th Class in percentage(%)"
              onChange={educationInputChangeHandler}
              value={education_10th.marks}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="education_12th">
          12th Education:
        </label>
        <div className="ml-10 w-3/4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Passed Out Year:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passedOutYear"
              name="12"
              type="text"
              placeholder="Enter Year Of Passing for 12th Class"
              onChange={educationInputChangeHandler}
              value={education_12th.passedOutYear}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Institution or Board:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="institution"
              name="12"
              type="text"
              placeholder="Enter Name of Institution where you completed 12th"
              onChange={educationInputChangeHandler}
              value={education_12th.institution}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_12th">
              Marks Scored in Percentage:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="marks"
              name="12"
              type="text"
              placeholder="Enter your Marks in 12th Class in percentage(%)"
              onChange={educationInputChangeHandler}
              value={education_12th.marks}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="education_grad">
          Graduation Education:
        </label>
        <div className="ml-10 w-3/4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_grad">
              Passed Out Year:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passedOutYear"
              name="13"
              type="text"
              placeholder="Enter Year Of Passing of Graduation"
              onChange={educationInputChangeHandler}
              value={education_grad.passedOutYear}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="13">
              Institution or Board:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="institution"
              name="13"
              type="text"
              placeholder="Enter Name of Institution/University of your Graduation"
              onChange={educationInputChangeHandler}
              value={education_grad.institution}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="13">
              Course And Branch:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="course"
              name="13"
              type="text"
              placeholder="Enter Name of the Course and Branch of your Graduation"
              onChange={educationInputChangeHandler}
              value={education_grad.course}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Marks Scored in Percentage:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="marks"
              name="13"
              type="text"
              placeholder="Enter your Marks in Graduation in percentage(%)"
              onChange={educationInputChangeHandler}
              value={education_grad.marks}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="education_pg">
          PostGraduation Education:
        </label>
        <div className="ml-10 w-3/4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_masters">
              Passed Out Year:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passedOutYear"
              name="14"
              type="text"
              placeholder="Enter Year Of Passing of Masters"
              onChange={educationInputChangeHandler}
              value={education_masters.passedOutYear}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Institution or Board:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="institution"
              name="14"
              type="text"
              placeholder="Enter Name of Institution/University of your Masters"
              onChange={educationInputChangeHandler}
              value={education_masters.institution}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="13">
              Course And Branch:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="course"
              name="13"
              type="text"
              placeholder="Enter Name of the Course and Branch of your Masters"
              onChange={educationInputChangeHandler}
              value={education_masters.course}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="education_10th">
              Marks Scored in Percentage:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="marks"
              name="14"
              type="text"
              placeholder="Enter your Marks in Masters in percentage(%)"
              onChange={educationInputChangeHandler}
              value={education_masters.marks}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInputComponent;
