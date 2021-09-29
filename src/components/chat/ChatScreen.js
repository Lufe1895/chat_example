import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import UserContext from '../../context/UserContext';
import { getChats } from '../../auth/chat';
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Connected } from './Connected';

export const ChatScreen = ({ history }) => {
    const { user } = useContext(UserContext);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        getChats().then(res => {
            const { docs } = res;
            setChats(docs);
        }).catch(err => {
            console.log(err)
        })
    }, [user]);

    const handleSend = () => {
        console.log(chats);
    }

    return (
        <>
            <Navbar history={ history } userName={ user.user } />

            <div className="row bg-lighter text-light fullscreen">
                <div className="col-4 fullscreen mt-5 pt-3 right-divider">
                    <Connected users={ chats } />
                </div>

                <div className="col-8 fullscreen right-divider">
                    <Input handleSend={ handleSend } />
                </div>
            </div>
        </>
    )
}
