import { useState } from "react";

function GeneralInfo(props) {
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

  function getGeneralInfoForm() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div>Name</div>
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>Current Position</div>
          <input
            type="text"
            name="currentPosition"
            id=""
            value={formData.currentPosition}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>Phone Number</div>
          <input
            type="text"
            name="phoneNumber"
            id=""
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>Email</div>
          <input
            type="text"
            name="email"
            id=""
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <div>LinkedIn</div>
          <input
            type="url"
            name="linkedIn"
            id=""
            value={formData.linkedIn}
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
        <summary>General Information</summary>

        {submittedData.length > 0 &&
          submittedData.map((data, index) => (
            <div key={index}>
              {isEditing && editIndex === index ? (
                getGeneralInfoForm()
              ) : (
                <div className="submittedData generalData">
                  <div>{data.name}</div>
                  <div>{data.currentPosition}</div>
                  <div>{data.phoneNumber}</div>
                  <div>{data.email}</div>
                  <div>{data.linkedIn}</div>
                  <button onClick={() => handleRemoveData(index)}>
                    Remove
                  </button>
                  <button
                    onClick={() => handleEditData(index)}
                    disabled={isEditing ? true : false}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        {showForm && !isEditing && getGeneralInfoForm()}
      </details>
    </>
  );
}

export default GeneralInfo;
