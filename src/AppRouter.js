import React, { useState } from 'react';
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

    return (
        <Router>
            <Switch>
                <UserContext.Provider value={ value }>
                    <Route exact path="/" component={ Login } />
                    <Route exact path="/chat" component={ ChatScreen } />
                </UserContext.Provider>
            </Switch>
        </Router>
    )
}