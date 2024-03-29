import { useState } from "react";
import "../styles/Parent.css";
import Intro from "./Intro";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExp";
import EducationInfo from "./Education";
import CVOutput from "./CVOutput";
//Uncomment below to import mockdata 
// import {
//   generalMockData,
//   workMockData,
//   educationMockData,
// } from "../assets/mockdata";

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
  // const [submittedGeneral, setSubmittedGeneral] = useState(generalMockData);
  // const [submittedWorkExp, setSubmittedWorkExp] = useState(workMockData);
  // const [submittedEducation, setSubmittedEducation] = useState(educationMockData);

  // State Hook (non-data) declarations
  //
  const [showIntro, setShowIntro] = useState(true);

  // Function Factories definitions
  //
  const handleInputChangeFactory = (setStateFunction) => {
    return (event) => {
      const { name, value } = event.target;
      setStateFunction((data) => ({
        ...data,
        [name]: value,
      }));
    };
  };
  const handleSubmitFactory = (
    setSubmittedData,
    submittedData,
    setFormData,
    formData,
    setEditIndex,
    editIndex,
    setIsEditing,
    isEditing,
    setShowForm
  ) => {
    const newData = formData;
    return (event) => {
      event.preventDefault(); //negates the deault submitbutton beahviour i.e. refresh page
      if (editIndex || Number.isInteger(editIndex)) {
        let prevData = [...submittedData];
        prevData[editIndex] = newData;
        setSubmittedData(prevData);
      } else {
        setSubmittedData((prevData) => [...prevData, newData]);
      }

      setFormData((prevState) => {
        const updatedState = {};
        Object.keys(prevState).forEach((key) => {
          updatedState[key] = "";
        });
        return updatedState;
      });
      setEditIndex(null);
      setShowForm(false);
      isEditing ? setIsEditing(false) : null;
    };
  };
  const handleRemoveDataFactory = (
    setStateFunction,
    setShowForm,
    submittedData
  ) => {
    return (index) => {
      submittedData.length === 1 && setShowForm(true);
      //if the length is 1, that means it'll be 0 by the end of this funtion, list would be empty and form will be shown
      setStateFunction(
        (prevSubmittedData) => prevSubmittedData.filter((_, i) => i !== index)
        //coampares the object with index-to-be-removed, i, and if yes, filter it out
      );
    };
  };
  const handleEditDataFactory = (
    setStateFunction,
    setIsEditing,
    setShowForm,
    setEditIndex,
    editIndex,
    submittedData
  ) => {
    return (index) => {
      setIsEditing(true); //show form for index data
      setEditIndex(index);
      setShowForm(true);
      setStateFunction(submittedData[index]); //form pre-fill
    };
  };

  return (
    <div id="mothercontainer">
      <div className="card">
        {showIntro ? (
          <Intro 
          setShowIntro={setShowIntro}
          showIntro={showIntro}/>
        ) : (
          <>
            <h1>CV Generator</h1>
            <div className="formsContainer">
              <GeneralInfo
                formData={generalForm}
                setFormData={setGeneralForm}
                submittedData={submittedGeneral}
                setSubmittedData={setSubmittedGeneral}
                handleInputChangeFactory={handleInputChangeFactory}
                handleSubmitFactory={handleSubmitFactory}
                handleRemoveDataFactory={handleRemoveDataFactory}
                handleEditDataFactory={handleEditDataFactory}
              />
              <WorkExperience
                formData={workExpForm}
                setFormData={setWorkExpForm}
                submittedData={submittedWorkExp}
                setSubmittedData={setSubmittedWorkExp}
                handleInputChangeFactory={handleInputChangeFactory}
                handleSubmitFactory={handleSubmitFactory}
                handleRemoveDataFactory={handleRemoveDataFactory}
                handleEditDataFactory={handleEditDataFactory}
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
              />
              <button onClick={() => setShowIntro(true)}>Back</button>
            </div>
          </>
        )}
      </div>
      <div className="card">
        <div>
          <CVOutput
            generalData={submittedGeneral}
            workData={submittedWorkExp}
            educationData={submittedEducation}
          />
        </div>
      </div>
    </div>
  );
}

export default Parent;
