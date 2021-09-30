import React from 'react'

export const Input = ({ handleSend }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="bg-dark p-2 bottom">
            <form onSubmit={ handleSubmit } className="row">
                <div className="col-10">
                    <input 
                            type="text" 
                            className="form-control"
                            placeholder="Di algo..."        
                    />
                </div>
                <div className="col-2">
                    <button 
                            type="submit"
                            className="btn btn-secondary"
                            onClick={ handleSend }
                    >
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
