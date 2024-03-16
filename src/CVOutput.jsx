import React from 'react'
import "./CVOutput.css";

function CVOutput() {
  return (
    <div className='CVContainer'>
      <div className='headerContainer'>
          <div className='headerName'>John Jonnah Jameson Jr.</div>
          <div className='headerPosition'>Senior Position Engineer</div>
          <div className='headerBrief'>will result in 4 Needleticks and 0 Daggers. Additionally, while holding a given void item, picking up its counterpart will instantly corrupt that item as well </div>
      </div>
      <div className='contactsContainer'>
          <div>example.etcera123@email.com.edu.my</div>
          <div>+601512459087</div>
          <div>linkedin.com/exampleLCetcetera</div>
      </div>
      <div className='workContainer'>
        <div className='workContainerHeader'>Work Experience</div>
        <div className='workSubContainer'>
            <div className='workTitle'>Senior Work Position 1</div>
            <div className='workCompany'>Company Name Sdn Bhd 1</div>
            <div className='workDate'><span>DDMMYYYY</span> to <span>DDMMYYYY</span></div>
            <ul className='workDescription'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
            </ul>
        </div>
        <div className='workSubContainer'>
            <div className='workTitle'>Senior Work Position 2</div>
            <div className='workCompany'>Company Name Sdn Bhd 2</div>
            <div className='workDate'><span>DDMMYYYY</span> to <span>DDMMYYYY</span></div>
            <ul className='workDescription'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
            </ul>
        </div>
        <div className='workSubContainer'>
            <div className='workTitle'>Senior Work Position 3</div>
            <div className='workCompany'>Company Name Sdn Bhd 3</div>
            <div className='workDate'><span>DDMMYYYY</span> to <span>DDMMYYYY</span></div>
            <ul className='workDescription'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
            </ul>
        </div>
      </div>
      <div className='educationContainer'>
        <div className='educationContainerHeader'>Education</div>
        <div className='educationSubContainer'>
            <div className='educationDegree'>MSc in Greatest Engineering Specialisation in BioElectron</div>
            <div className='educationSchool'>The University of Grand Malaysia</div>
            <div className='educationDate'>MMYYYY to MMYYYY</div>
        </div>
        <div className='educationSubContainer'>
            <div className='educationDegree'>BSc in Supreme Engineering and SuperState</div>
            <div className='educationSchool'>The University of Malaysian Islands</div>
            <div className='educationDate'>MMYYYY to MMYYYY</div>
        </div>
      </div>
    </div>
    
  )
}

export default CVOutput