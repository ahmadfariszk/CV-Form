import { useState } from 'react';

function GeneralInfo() {
    const [formData, setFormData] = useState({
        name: '',
        currentPosition: '',
        phoneNumber: '',
        email: '',
        linkedIn: '',
    })
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault() //negates the deault submitbutton beahviour i.e. refresh page
        console.log('Form sdubmitted:', formData);
        setFormData({
            name: '',
            currentPosition: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
        })
    }
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
                    </div>
                </form>
            </div>
        </>
    )
}

export default GeneralInfo;