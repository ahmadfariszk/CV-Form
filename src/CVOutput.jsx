import React from "react";
import "./CVOutput.css";

function CVOutput(props) {
  const { generalData, workData, educationData } = props;

  const limitedWorkData = [...workData.slice(0, 3)]; //limit data entry to 3
  
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
        <div className="workContainerHeader">Work Experience</div>
        {limitedWorkData.map((work) => (
          <div key={work.jobTitle} className="workSubContainer">
            <div className="workTitle">{work.jobTitle}</div>
            <div className="workCompany">{work.company}</div>
            <div className="workDate">
              <span>{formatDate(work.dateStart)}</span> - <span>{formatDate(work.dateEnd)}</span>
            </div>
            <ul className="workDescription">
              <li>
                {work.jobduty1}{" "}
              </li>
              <li>
                {work.jobduty2}{" "}
              </li>
              <li>
                {work.jobduty3}{" "}
              </li>
            </ul>
          </div>
        ))}
        {/* <div className="workSubContainer">
          <div className="workTitle">Senior Work Position 2</div>
          <div className="workCompany">Company Name Sdn Bhd 2</div>
          <div className="workDate">
            <span>DDMMYYYY</span> to <span>DDMMYYYY</span>
          </div>
          <ul className="workDescription">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
          </ul>
        </div>
        <div className="workSubContainer">
          <div className="workTitle">Senior Work Position 3</div>
          <div className="workCompany">Company Name Sdn Bhd 3</div>
          <div className="workDate">
            <span>DDMMYYYY</span> to <span>DDMMYYYY</span>
          </div>
          <ul className="workDescription">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </li>
          </ul>
        </div> */}
      </div>
      <div className="educationContainer">
        <div className="educationContainerHeader">Education</div>
        <div className="educationSubContainer">
          <div className="educationDegree">
            MSc in Greatest Engineering Specialisation in BioElectron
          </div>
          <div className="educationSchool">
            The University of Grand Malaysia
          </div>
          <div className="educationDate">MMYYYY to MMYYYY</div>
        </div>
        <div className="educationSubContainer">
          <div className="educationDegree">
            BSc in Supreme Engineering and SuperState
          </div>
          <div className="educationSchool">
            The University of Malaysian Islands
          </div>
          <div className="educationDate">MMYYYY to MMYYYY</div>
        </div>
      </div>
    </div>
  );
}

export default CVOutput;
