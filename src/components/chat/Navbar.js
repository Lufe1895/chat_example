import React from 'react'

export const Navbar = ({ history, userName }) => {
    const handleLogout = () => {
        history.push("/");
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top" aria-label="Second navbar example">
            <div className="container-fluid">
                <h5 className="navbar-brand" >Bienvenido al Chat, { userName }</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="text-end">
                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button 
                                        className="btn btn-outline-secondary"
                                        onClick={ handleLogout }
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
