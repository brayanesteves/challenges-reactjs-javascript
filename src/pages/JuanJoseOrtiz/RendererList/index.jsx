import users from './data/users.json';

const UserListItem = (user) => {
    return (
        <div>
            Name <span>{user.name}</span>
            Phone <span>{user.phone}</span>
        </div>
    );
};

const RendererList = () => {
    return (
        <div>
            <h1>List</h1>
            {users.map(user => (
                <UserListItem  key={`user-list-item-${user.id}-${user.name}`} {...user} />
            ))}
        </div>
    );
};

export default RendererList;
