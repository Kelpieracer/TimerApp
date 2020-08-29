import React from 'react';
import Project  from '../services/Project'
import { accountService } from '../_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
                        <Project />
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </div>
        </div>
    );
}

export { Home };