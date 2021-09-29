import React, { useContext, useState } from 'react'
import { newUser } from '../auth/auth';
import UserContext from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid';

export const Login = ({ history }) => {
    const [userName, setUserName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubtmit = (e) => {
        e.preventDefault();
        if(userName < 4) {
            setErrorMsg('El usuario debe tener al menos 5 caracteres.')
        } else {
            const user = {
                uuid: uuidv4(),
                user: userName,
                chats: []
            }

            newUser(user).then(() => {
                setUser(user);
                history.push("/chat");
            }).catch((e) => {
                console.log(e);
            });
            
            
        }
        
    }

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div className="cover-container d-flex p-3 mx-auto flex-column fullscreen text-white bg-dark">
            <header className="mb-auto">
                <div>
                    <h1 className="float-md-start mb-0">Bienvenido</h1>
                </div>
            </header>

            <main className="px-3 row">
                <h4 className="col-12 col-lg-4 offset-lg-4">Para comenzar, ingrese un usuario:</h4>
                <form>
                    <p className="lead col-12 col-lg-4 offset-lg-4">
                        <input 
                                className="form-control"
                                placeholder="Usuario"
                                value={ userName }
                                onChange={ handleInputChange }
                        />
                    </p>
                    { errorMsg && <p className="lead offset-lg-4 fst-italic">{ errorMsg }</p> }

                    <p className="lead">
                        <input 
                                type="submit" 
                                className="btn btn-lg text-dark border-white bg-white fw-bold offset-lg-4" 
                                value="Ingresar"
                                onClick={ handleSubtmit } />
                    </p>
                </form>
            </main>

            <footer className="mt-auto text-white-50">
                <p>Chat por Luis Fernando</p>
            </footer>
        </div>
    )
}
