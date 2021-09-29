import React from 'react'
import { useContext } from 'react/cjs/react.development'
import UserContext from '../../context/UserContext'

export const Connected = ({ users }) => {
    const { user } = useContext(UserContext);
    return (
        <ul>
            { users.map((userOn, i) => (
                (userOn.data().uuid !== user.uuid) && <li key={ userOn.id }>{ userOn.data().user }</li>)
            )}
        </ul>
    )
}
