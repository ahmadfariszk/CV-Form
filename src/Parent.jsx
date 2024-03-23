import { useState } from "react";
import "./Parent.css";
import WorkExperience from "./WorkExp";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./Education";
import CVOutput from "./CVOutput";
import { generalMockData, workMockData, educationMockData } from "./assets/mockdata";

function Parent() {
  // State Hook (form data) declarations
  //
  const [generalForm, setGeneralForm] = useState({
    name: "",
    currentPosition: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
  });
  const [workExpForm, setWorkExpForm] = useState({
    jobTitle: "",
    company: "",
    dateStart: "",
    dateEnd: "",
    jobduty1: "",
    jobduty2: "",
    jobduty3: "",
  });
  const [EducationForm, setEducationForm] = useState({
    course: "",
    school: "",
    dateStart: "",
    dateEnd: "",
    result: "",
  });
  
  const [submittedGeneral, setSubmittedGeneral] = useState([]);
  const [submittedWorkExp, setSubmittedWorkExp] = useState([]);
  const [submittedEducation, setSubmittedEducation] = useState([]);

  // State Hook (non-data) declarations
  //
  const [showForm, setShowForm] = useState(false);

  // Function Factories definitions
  //
  const handleInputChangeFactory = (setStateFunction) => {
    return (event) => {
      const { name, value } = event.target;
      setStateFunction((data) => ({
        ...data,
        [name]: value,
      }));
      console.log(name, value);
    };
  };
  const handleSubmitFactory = (
    setSubmitted,
    setForm,
    formData,
    submittedData
  ) => {
    const newData = formData;
    return (event) => {
      event.preventDefault(); //negates the deault submitbutton beahviour i.e. refresh page
      console.log("Form submitted:", JSON.stringify(formData));
      console.log("new data:", JSON.stringify(newData));
      console.log("submitted data:", JSON.stringify(submittedData));
      setSubmitted((prevData) => [...prevData, newData]);
      console.log("in setsubmitted: ", [...submittedData, newData]);
      setForm((prevState) => {
        const updatedState = {};
        Object.keys(prevState).forEach((key) => {
          updatedState[key] = "";
        });
        return updatedState;
      });
      setShowForm(false);
      console.log("new data:", JSON.stringify(newData));
    };
  };
  const handleRemoveDataFactory = (setStateFunction) => {
    return (index) => {
      setStateFunction(
        (prevSubmittedData) => prevSubmittedData.filter((_, i) => i !== index)
        //coampares the object with index-to-be-removed, i, and if yes, filter it out
      );
    };
  };
  const handleEditDataFactory = (setStateFunction, submittedData) => {
    return (index) => {
      setShowForm(true); //show form for index data
      setStateFunction(submittedData[index]); //form pre-fill
    };
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="mothercontainer">
      <div>
        <GeneralInfo
          formData={generalForm}
          setFormData={setGeneralForm}
          submittedData={submittedGeneral}
          setSubmittedData={setSubmittedGeneral}
          handleInputChangeFactory={handleInputChangeFactory}
          handleSubmitFactory={handleSubmitFactory}
          handleRemoveDataFactory={handleRemoveDataFactory}
          handleEditDataFactory={handleEditDataFactory}
          toggleForm={toggleForm}
        />
        <WorkExperience
          formData={workExpForm}
          setFormData={setWorkExpForm}
          submittedData={submittedWorkExp}
          setSubmittedData={setSubmittedWorkExp}
          showForm={showForm}
          setShowForm={setShowForm}
          handleInputChangeFactory={handleInputChangeFactory}
          handleSubmitFactory={handleSubmitFactory}
          handleRemoveDataFactory={handleRemoveDataFactory}
          handleEditDataFactory={handleEditDataFactory}
          toggleForm={toggleForm}
        />
        <EducationInfo
          formData={EducationForm}
          setFormData={setEducationForm}
          submittedData={submittedEducation}
          setSubmittedData={setSubmittedEducation}
          handleInputChangeFactory={handleInputChangeFactory}
          handleSubmitFactory={handleSubmitFactory}
          handleRemoveDataFactory={handleRemoveDataFactory}
          handleEditDataFactory={handleEditDataFactory}
          toggleForm={toggleForm}
        />
      </div>
      <CVOutput
        generalData={submittedGeneral}
        workData={submittedWorkExp}
        educationData={submittedEducation}
      />
    </div>
  );
}

export default Parent;
