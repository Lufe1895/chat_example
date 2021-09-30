import { useContext } from 'react';
import { deletUser } from '../../auth/auth';
import UserContext from '../../context/UserContext';

export const Navbar = ({ history }) => {
    const { user } = useContext(UserContext);
    const handleLogout = () => {
        deletUser(user.uuid).then(res => {
            history.push("/");
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div className="container-fluid">
                <h5 className="navbar-brand" >Bienvenido al chat, { user.user }</h5>
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
