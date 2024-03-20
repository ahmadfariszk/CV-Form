import { useState } from "react";
import "./Parent.css";
import WorkExperience from "./WorkExp";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./Education";

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
  });
  const [EducationForm, setEducationForm] = useState({
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
  const [showForm, setShowForm] = useState(true); // Set initial state to true by default because user by default need to see input form first
  const [editIndex, setEditIndex] = useState(null);

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
      if (editIndex || Number.isInteger(editIndex)) {
        let prevData = [...submittedData];
        prevData[editIndex] = newData;
        setSubmitted(prevData)
      } else {
        setSubmitted((prevData) => [...prevData, newData]);
      }

      setForm((prevState) => {
        const updatedState = {};
        Object.keys(prevState).forEach((key) => {
          updatedState[key] = "";
        });
        return updatedState;
      });
      setShowForm(false);
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
      setEditIndex(index);
      console.log('editindex: ', editIndex, index)
      setStateFunction(submittedData[index]); //form pre-fill
    };
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="mothercontainer">
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
  );
}

export default Parent;
