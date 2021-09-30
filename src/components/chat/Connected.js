import React from 'react'
import { useContext } from 'react/cjs/react.development'
import UserContext from '../../context/UserContext'

export const Connected = ({ chats }) => {
    const { user } = useContext(UserContext);
    //console.log(chats);
    return (
        <div className="row">
            { chats.map((chat) => (
                (
                    chat.id !== user.uuid) && 
                    <div 
                            key={ chat.id }
                            className="card mb-1 bg-dark bg-gradient"        
                    >
                        <div className="row g-0">
                            <div className="col-3">
                                <img src="./imgs/user.png" className="img-fluid rounded-start" alt="unser" />
                            </div>

                            <div className="col-9">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{ chat.data().user }</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    // <li key={ chat.id }>{ chat.data().user }</li>
                )
            )}
        </div>
    )
}
