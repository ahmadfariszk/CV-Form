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
    setShowForm,
    setEditIndex,
    editIndex,
    submittedData
  );
  function getEducationForm() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div>Course</div>
          <input
            type="text"
            name="course"
            id=""
            value={formData.course}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>School/Instituition</div>
          <input
            type="text"
            name="school"
            id=""
            value={formData.school}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>Date</div>
          <div className="date">
            <input
              type="date"
              name="dateStart"
              id=""
              value={formData.dateStart}
              onChange={handleInputChange}
            />
            <div>to</div>{" "}
            <input
              type="date"
              name="dateEnd"
              id=""
              value={formData.dateEnd}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="field">
          <div>Results</div>
          <input
            type="text"
            name="result"
            id=""
            value={formData.result}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
          {submittedData.length > 0 && (
            <button
              onClick={() => (
                setIsEditing(false), setEditIndex(null), setShowForm(false)
              )}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    );
  }

  return (
    <>
      <details open className="formSection">
        <summary>Education</summary>

        {submittedData.length > 0 &&
          submittedData.map((data, index) => (
            <div key={index}>
              {isEditing && editIndex === index ? (
                getEducationForm()
              ) : (
                <div className="submittedData">
                  <div>
                    {data.school}, {data.course}
                  </div>
                  <button onClick={() => handleRemoveData(index)}>
                    Remove
                  </button>
                  <button
                    onClick={() => handleEditData(index)}
                    disabled={isEditing || showForm ? true : false}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        {showForm && !isEditing && getEducationForm()}
        {!isEditing && !showForm && (
          <button onClick={() => setShowForm(true)}>+ Add Workplace</button>
        )}
      </details>
    </>
  );
}

export default EducationInfo;
