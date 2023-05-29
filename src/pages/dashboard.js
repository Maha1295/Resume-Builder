import EducationInputComponent from "@/components/educationInputComponent";
import EmailInputComponent from "@/components/emailInputComponent";
import ImageInputComponent from "@/components/imageInputComponent";
import IntroInputComponent from "@/components/introInputComponent";
import LanguagesInputComponent from "@/components/languagesInputComponent";
import NameInputComponent from "@/components/nameInputComponent";
import PersonalInterestComponent from "@/components/personalInterestComponent";
import PhoneNumberInputComponent from "@/components/phoneNumberInputComponent";
import TechSkillsInputComponent from "@/components/techSkillsInputComponent";
import SubmitButton from "@/utils/submitButton";
import { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    profilePic: {},
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    languagesKnown: "",
    briefIntroduction: "",
    education_10th: { passedOutYear: "", institution: "", marks: "" },
    education_12th: { passedOutYear: "", institution: "", marks: "" },
    education_grad: {
      passedOutYear: "",
      institution: "",
      course: "",
      marks: "",
    },
    education_masters: {
      passedOutYear: "",
      institution: "",
      course: "",
      marks: "",
    },
    technicalSkills: [],
    personalIntersts: "",
  });

  const handleImageChange = (imageDataURL) => {
    setFormData((prevState) => ({
      ...prevState,
      profilePic: imageDataURL,
    }));
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTechSkillsInputChange = (skills) => {
    setFormData((prevState) => ({
      ...prevState,
      technicalSkills: [...skills],
    }));
  };

  const handleEducationInputChange = (grade, input) => {
    if (grade === "10") {
      setFormData((prevState) => ({
        ...prevState,
        education_10th: input,
      }));
    }

    if (grade === "12") {
      setFormData((prevState) => ({
        ...prevState,
        education_12th: input,
      }));
    }

    if (grade === "13") {
      setFormData((prevState) => ({
        ...prevState,
        education_grad: input,
      }));
    }

    if (grade === "14") {
      setFormData((prevState) => ({
        ...prevState,
        education_masters: input,
      }));
    }

    // if (grade === "10") {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     education_10th: { ...input },
    //   }));
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:5000/api/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);

  //   fetch("http://localhost:5000/api/save-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  // };

  return (
    <form
      className="w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
      method="POST">
      <ImageInputComponent inputChangeHandler={handleImageChange} />
      <NameInputComponent inputChangeHandler={handleInputChange} />
      <EmailInputComponent inputChangeHandler={handleInputChange} />
      <PhoneNumberInputComponent inputChangeHandler={handleInputChange} />
      <LanguagesInputComponent inputChangeHandler={handleInputChange} />
      <IntroInputComponent inputChangeHandler={handleInputChange} />
      <EducationInputComponent
        inputChangeHandler={handleEducationInputChange}
      />
      <TechSkillsInputComponent
        inputChangeHandler={handleTechSkillsInputChange}
      />
      <PersonalInterestComponent inputChangeHandler={handleInputChange} />
      <SubmitButton />
    </form>
  );
};

export default Dashboard;
