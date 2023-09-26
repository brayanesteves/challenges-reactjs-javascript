import { useEffect, useState }   from 'react';
import { UserListItem }          from './components/UserListItem';

const RedererListAPIUserJSONPlaceholder = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result   = await response.json();
                // console.log(result);
                setUsers(result);
            } catch(error) {
                console.error(error);
            }
        };
        fetchContent();
    }, []);
    return (
        <div>
            <h1>List</h1>
            {users.map(user => (
                <UserListItem key={`user-list-item-${user.id}-${user.name}`} {...user} />
            ))}
        </div>
    );
};

export default RedererListAPIUserJSONPlaceholder;
