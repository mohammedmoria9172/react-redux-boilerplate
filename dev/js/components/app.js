import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/userdetail';

const App = () => {
    return (
        <div>
            <h1>user List</h1>
            <UserList />
            <hr />
            <h1>User Detals</h1>
            <hr />
            <UserDetails />
        </div>
    )
}

export default App;