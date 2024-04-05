import React from "react";
import { useEffect, useState } from "react";
import "../styles/CVOutput.css";

const CVOutput = React.forwardRef((props, ref) => {
  const { generalData, workData, educationData } = props;

  //new states to handle the data arrays locally
  //"ord" prefix means "ordered"
  const [ordWorkData, setOrdWorkData] = useState([]);
  const [ordEducationData, setOrdEducationData] = useState([]);

  //fcn to format date into string
  const formatDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const currentDate = new Date(); // Get today's date

    if (
      parsedDate.getDate() === currentDate.getDate() &&
      parsedDate.getMonth() === currentDate.getMonth() &&
      parsedDate.getFullYear() === currentDate.getFullYear()
    ) {
      return "Present";
    } else {
      const month = parsedDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
      const year = parsedDate.getFullYear();
      return `${month.toString().padStart(2, "0")}/${year}`;
    }
  };

  //fcn to reorder objects chronoligically
  const compareDates = (a, b) => {
    // Compare dateEnd first
    if (a.dateEnd > b.dateEnd) return -1;
    if (a.dateEnd < b.dateEnd) return 1;

    // If dateEnds are the same, compare dateStart
    if (a.dateStart > b.dateStart) return -1;
    if (a.dateStart < b.dateStart) return 1;

    // If both dates are the same, return 0
    return 0;
  };
  //sort and store the data array
  const tempWorkData = [...workData].sort(compareDates);
  useEffect(() => {
    setOrdWorkData(tempWorkData);
    console.log("ehe");
  }, [workData]);
  const tempEducationData = [...educationData].sort(compareDates);
  useEffect(() => {
    setOrdEducationData(tempEducationData);
    console.log("ehe");
  }, [educationData]);

  return (
    <>
    <div className="textPreview">Preview</div>
      <div className="CVContainer" ref={ref}>
        {generalData.map((info) => (
          <div key={info.name} className="headerContainer">
            <div className="headerName">{info.name}</div>
            <div className="headerPosition">{info.currentPosition}</div>
            <div className="headerBrief">
              will result in 4 Needleticks and 0 Daggers. Additionally, while
              holding a given void item, picking up its counterpart will
              instantly corrupt that item as well{" "}
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
          {workData.length > 0 && (
            <div className="workContainerHeader">Work Experience</div>
          )}
          {ordWorkData.map((work) => (
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
          {educationData.length > 0 && (
            <div className="educationContainerHeader">Education</div>
          )}
          {ordEducationData.map((education) => (
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
    </>
  );
})

CVOutput.displayName = 'CVOutput';

export default CVOutput;
