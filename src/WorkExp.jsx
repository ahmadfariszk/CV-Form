import { useState } from "react";

function WorkExperience(props) {
  const {
    formData,
    setFormData,
    submittedData,
    setSubmittedData,
    showForm,
    setshowForm,
    handleInputChangeFactory,
    handleSubmitFactory,
    handleRemoveDataFactory,
    handleEditDataFactory,
    toggleForm,
  } = props;

  const handleInputChange = handleInputChangeFactory(setFormData);
  const handleSubmit = handleSubmitFactory(setSubmittedData, setFormData, formData, submittedData);
  const handleRemoveData = handleRemoveDataFactory(setSubmittedData);
  const handleEditData = handleEditDataFactory(setFormData, submittedData);
  // const [showForm, setShowForm] = useState(false);
  // const [submittedData, setSubmittedData] = useState([]);

  // const [formData, setFormData] = useState({
  //   jobTitle: "",
  //   company: "",
  //   dateStart: "",
  //   dateEnd: "",
  // });
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault(); //negates the deault submitbutton beahviour i.e. refresh page
  //   console.log("Form submitted:", formData);
  //   setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
  //   setFormData({
  //     jobTitle: "",
  //     company: "",
  //     dateStart: "",
  //     dateEnd: "",
  //   });
  //   setShowForm(false);
  // };
  // const handleRemoveData = (index) => {
  //   setSubmittedData((prevSubmittedData) =>
  //     prevSubmittedData.filter((_, i) => i !== index)
  //   );
  // };
  // const toggleForm = () => {
  //   setShowForm(!showForm);
  // };
  return (
    <>
      <div>
        <div>
          <h3>Work Experience</h3>
        </div>
        {submittedData.length > 0 && submittedData.map((data, index) => (
            <div key={index}>
              <p>Submitted Data:</p>
              <p>{data.jobTitle}</p>
              <p>{data.company}</p>
              <button onClick={() => handleRemoveData(index)}>Remove</button>
              <button onClick={() => handleEditData(index)} disabled={showForm? (true) : (false) }>Edit</button>
            </div>
          ))}
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                id=""
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Company</p>
              <input
                type="text"
                name="company"
                id=""
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Date</p>
              <input
                type="date"
                name="dateStart"
                id=""
                value={formData.dateStart}
                onChange={handleInputChange}
              />
              <p>to</p>{" "}
              <input
                type="date"
                name="dateEnd"
                id=""
                value={formData.dateEnd}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
              <button onClick={() => console.log(submittedData)}>Log</button>
            </div>
          </form>
        ) : (
          <button onClick={toggleForm}>+</button>
        )}
      </div>
    </>
  );
}

export default WorkExperience;
