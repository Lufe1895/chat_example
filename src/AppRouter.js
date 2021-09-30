import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ChatScreen } from './components/chat/ChatScreen';
import { Login } from './components/Login';
import UserContext from './context/UserContext';

export const AppRouter = () => {
    const [user, setUser] = useState();
    const value = { user, setUser };

    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, [])

    return (
        <UserContext.Provider value={ value }>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Login } />
                    <Route exact path="/chat" component={ ChatScreen } />
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}