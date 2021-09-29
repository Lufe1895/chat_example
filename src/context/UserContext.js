import { createContext } from 'react'

export const UserContext = createContext({
    user: {},
    setUser: () => {}
});

export default UserContext;