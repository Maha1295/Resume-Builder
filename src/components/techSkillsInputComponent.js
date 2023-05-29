import { useState, useEffect } from "react";

const TechSkillsInputComponent = (props) => {
  const [selectedTechSkills, setSelectedTechSkills] = useState([]);

  const [checkboxes, setCheckboxes] = useState({
    "Core Java": false,
    "Advanced Java": false,
    SQL: false,
    HTML: false,
    CSS: false,
    JavaScript: false,
    React: false,
    GIT: false,
  });

  const checkBoxChangeHandler = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedTechSkills([...selectedTechSkills, name]);
    }
    if (!checked) {
      const index = selectedTechSkills.indexOf(name);
      if (index != -1) {
        selectedTechSkills.splice(index, 1);
        setSelectedTechSkills([...selectedTechSkills]);
      }
    }
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    props.inputChangeHandler(selectedTechSkills);
  }, [selectedTechSkills]);

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="tech_skills">
          Technical Skills
        </label>
        <div className="grid grid-cols-4 gap-4">
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="Core Java"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["Core Java"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">Core Java</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="Advanced Java"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["Advanced Java"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">
              Advanced Java
            </span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="SQL"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["SQL"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">SQL</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="HTML"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["HTML"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">HTML</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="CSS"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["CSS"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">CSS</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="JavaScript"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["JavaScript"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">JavaScript</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="React"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["React"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">React</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              name="GIT"
              onChange={checkBoxChangeHandler}
              checked={checkboxes["GIT"]}
            />
            <span className="ml-2 text-gray-700 font-semibold">GIT</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default TechSkillsInputComponent;
