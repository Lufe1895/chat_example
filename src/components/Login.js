import React, { useState } from 'react'

export const Login = () => {

    const [userName, setUserName] = useState('');

    const handleSubtmit = (e) => {
        e.preventDefault();
        console.log(userName);
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
