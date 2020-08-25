import React from 'react';
import UserItem from '../userItem/UserItem';

class UserList extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                <h2>Users list:</h2>
                {users.map((user, index) => {
                    return <UserItem
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        salary={user.salary}
                        photo={user.photo}
                        isGoldClient={user.isGoldClient}
                        key={index}
                    />
                })}
            </div>
        );
    };
};

export default UserList;