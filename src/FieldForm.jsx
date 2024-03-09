import {useState} from `react`;

function FieldForm() {
    const [formData, setFormData] = useState({
        name: 'default',
        currentPosition: 'default',
        phoneNumber: 'default',
        email: 'default',
        linkedIn: 'default',
    })
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault //negates the deault submitbutton beahviour i.e. refresh page
        console.log('Form suubmitted:', formData);
        setFormData({
            name: '',
            currentPosition: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
        })
    }
    
}