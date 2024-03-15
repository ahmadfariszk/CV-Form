import { useState } from "react";

function GeneralInfo(props) {
  const {
    formData,
    setFormData,
    submittedData,
    setSubmittedData,
    handleInputChangeFactory,
    handleSubmitFactory,
  } = props;
  
  const handleInputChange = handleInputChangeFactory(setFormData);
  const handleSubmit = handleSubmitFactory(setSubmittedData, setFormData, formData, submittedData);
 

  return (
    <>
      <div>
        <div>
          <h3>General Information</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              id=""
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Current Position</p>
            <input
              type="text"
              name="currentPosition"
              id=""
              value={formData.currentPosition}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneNumber"
              id=""
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              name="email"
              id=""
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>LinkedIn</p>
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
            <button onClick={() => console.log(submittedData)}>Log</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GeneralInfo;
