// import React from "react";
import "../styles/CVOutput.css";

function CVOutput(props) {
  const { generalData, workData, educationData } = props;

  const formatDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const month = parsedDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
    const year = parsedDate.getFullYear();
    return `${month.toString().padStart(2, "0")}/${year}`;
  };

  return (
    <div className="CVContainer">
      {generalData.map((info) => (
        <div key={info.name} className="headerContainer">
          <div className="headerName">{info.name}</div>
          <div className="headerPosition">{info.currentPosition}</div>
          <div className="headerBrief">
            will result in 4 Needleticks and 0 Daggers. Additionally, while
            holding a given void item, picking up its counterpart will instantly
            corrupt that item as well{" "}
          </div>
        </div>
      ))}
      {generalData.map((info) => (
        <div key={info.name} className="contactsContainer">
          <div>{info.email}</div>
          <div>{info.phoneNumber}</div>
          <div>{info.linkedIn}</div>
        </div>
      ))}
      <div className="workContainer">
        {workData.length > 0 && (<div className="workContainerHeader">Work Experience</div>)}
        {workData.map((work) => (
          <div key={work.jobTitle} className="workSubContainer">
            <div className="workTitle">{work.jobTitle}</div>
            <div className="workCompany">{work.company}</div>
            <div className="workDate">
              <span>{formatDate(work.dateStart)}</span> -{" "}
              <span>{formatDate(work.dateEnd)}</span>
            </div>
            <ul className="workDescription">
              <li>{work.jobduty1} </li>
              <li>{work.jobduty2} </li>
              <li>{work.jobduty3} </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="educationContainer">
        {educationData.length > 0 && (<div className="educationContainerHeader">Education</div>)}
        {educationData.map((education) => (
          <div key={education.school} className="educationSubContainer">
            <div className="educationDegree">{education.course} </div>
            <div className="educationSchool">{education.school} </div>
            <div className="educationDate">
              {formatDate(education.dateStart)} to{" "}
              {formatDate(education.dateEnd)}
            </div>
            <div className="educationResult">{education.result}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVOutput;
