import { useState } from "react";

function EducationInfo(props) {
  const {
    formData,
    setFormData,
    submittedData,
    setSubmittedData,
    handleInputChangeFactory,
    handleSubmitFactory,
    handleRemoveDataFactory,
    handleEditDataFactory,
  } = props;
  const [showForm, setShowForm] = useState(true); // Set initial state to true by default because user by default need to see input form first
  const [editIndex, setEditIndex] = useState(null); // stores index of data being edited
  const [isEditing, setIsEditing] = useState(false); // determines if there is an entry being edited or not

  const handleInputChange = handleInputChangeFactory(setFormData);
  const handleSubmit = handleSubmitFactory(
    setSubmittedData,
    submittedData,
    setFormData,
    formData,
    setEditIndex,
    editIndex,
    setIsEditing,
    isEditing,
    setShowForm
  );
  const handleRemoveData = handleRemoveDataFactory(
    setSubmittedData,
    setShowForm,
    submittedData
  );
  const handleEditData = handleEditDataFactory(
    setFormData,
    setIsEditing,
    setEditIndex,
    editIndex,
    submittedData
  );
  function getEducationForm() {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <p>School/Instituition</p>
          <input
            type="text"
            name="jobTitle"
            id=""
            value={formData.jobTitle}
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
          <p>Results</p>
          <input
            type="text"
            name="company"
            id=""
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }

  return (
    <>
      <div>
        <div>
          <h3>Education</h3>
        </div>
        {submittedData.length > 0 &&
          submittedData.map((data, index) => (
            <div key={index}>
              {isEditing && editIndex === index ? (
                getEducationForm()
              ) : (
                <>
                  <p>Submitted Data:</p>
                  <p>{data.jobTitle}</p>
                  <p>{data.company}</p>
                  <button onClick={() => handleRemoveData(index)}>
                    Remove
                  </button>
                  <button
                    onClick={() => handleEditData(index)}
                    disabled={isEditing ? true : false}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        {showForm && getEducationForm()}
        {showForm && submittedData.length > 0 && <button>Cancel</button>}
        {!isEditing && !showForm && (
          <button onClick={() => setShowForm(true)}>+ Add Workplace</button>
        )}
      </div>
    </>
  );
}

export default EducationInfo;
