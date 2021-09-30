import React, { useEffect } from 'react'
// import UserContext from '../../context/UserContext';
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Connected } from './Connected';
import { useState } from 'react/cjs/react.development';
import { getChats } from '../../auth/chat';
import { Chat } from './Chat';

export const ChatScreen = ({ history }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // setChats(getChats());
        getChats((data) => {
            setChats(data);
            // console.log(data);
        });
    }, [])
    
    const handleSend = () => {
        console.log(chats);
    }

    return (
        <>
            <Navbar history={ history } />

            <div className="row bg-lighter bg-gradient text-light fullscreen">
                <div className="col-3 fullscreen right-divider">
                    <Connected chats={ chats } />
                </div>

                <div className="col-9 fullscreen right-divider" >
                    <Chat />
                    <Input handleSend={ handleSend } />
                </div>
            </div>
        </>
    )
}
