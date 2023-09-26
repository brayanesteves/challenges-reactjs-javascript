export const UserListItem = (user) => {
    return (
        <div>
            Name <span>{user.name}</span>
            Phone <span>{user.phone}</span>
        </div>
    );
};