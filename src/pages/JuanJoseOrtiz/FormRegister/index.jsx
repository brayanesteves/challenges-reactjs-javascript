import { useEffect, useState }   from 'react';
import SimpleForm                from './components/SimpleForm';

const FormRegister = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
    }, []);
    return (
        <div>
            <h1>List</h1>
            <SimpleForm />
        </div>
    );
};

export default FormRegister;
