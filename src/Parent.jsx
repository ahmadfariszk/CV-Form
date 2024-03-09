import { useState } from "react";

function Parent() {
  const [generalForm, setGeneralForm] = useState({
    name: "",
    currentPosition: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
  });
  const handleInputChangeFactory = (setStateFunction) => {
    return (event) => {
      const { name, value } = event.target;
      setStateFunction((data) => ({
        ...data,
        [name]: value,
      }));
      console.log(name, value);
    };
  };
  const handleSubmitFactory = (setStateFunction) => {
    return (event) => {
      event.preventDefault(); //negates the deault submitbutton beahviour i.e. refresh page
      setStateFunction((prevData) => {
        const newData = {...prevData};
        for (const key in newData){
            newData[key]="";
        }
        return newData;
      });
    };
  };
  
}
