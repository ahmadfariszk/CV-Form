import { useState } from "react";

function WorkExperience(props) {
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

  function getWorkExpForm() {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>Job Title</div>
          <input
            type="text"
            name="jobTitle"
            id=""
            value={formData.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>Company</div>
          <input
            type="text"
            name="company"
            id=""
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>Date</div>
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
        <div>
          <div>Job duties</div>
          <div>
            <span>1:</span>
            <input
              type="text"
              name="jobduty1"
              id=""
              value={formData.jobduty1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span>2:</span>
            <input
              type="text"
              name="jobduty2"
              id=""
              value={formData.jobduty2}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span>3:</span>
            <input
              type="text"
              name="jobduty3"
              id=""
              value={formData.jobduty3}
              onChange={handleInputChange}
            />
          </div>
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
      <div>
        <div>
          <h3>Work Experience</h3>
        </div>
        {submittedData.length > 0 &&
          submittedData.map((data, index) => (
            <div key={index}>
              {isEditing && editIndex === index ? (
                getWorkExpForm()
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
                    disabled={isEditing || showForm ? true : false}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        {showForm && !isEditing && getWorkExpForm()}
        {!isEditing && !showForm && (
          <button onClick={() => setShowForm(true)}>+ Add Workplace</button>
        )}
      </div>
    </>
  );
}

export default WorkExperience;