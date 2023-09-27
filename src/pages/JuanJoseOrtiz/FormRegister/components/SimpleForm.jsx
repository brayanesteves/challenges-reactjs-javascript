import { useEffect, useState }   from 'react';

const SimpleForm = () => {
    const [firstName, setFirstName] = useState('');
    const [ lastName, setLastName]  = useState('');
    const [      age, setAge]       = useState(0);

    const handleFirstNameChange = (event) => {
        // Validations would go here.
        setFirstName(event.target.value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('sent', firstName, lastName, age);
    };

    return (
        <>
            <form onSubmit={handleSubmitForm}>                
                <label htmlFor="">
                    Names
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                </label>
                <label htmlFor="">
                    Lastnames
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </label>
                <label htmlFor="">
                    Age
                    <input type="text" name="age" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
                </label>
                <button type='submit'>Send data</button>
            </form>
        </>
    );
};

export default SimpleForm;