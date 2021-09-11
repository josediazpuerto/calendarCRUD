import React from 'react'

export const Navbar = () => {
    return (
        <div className= "navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand px-2">
                Jose
            </span>

            <button className="btn btn-outline-danger me-4">
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
            
        </div>
    )
}
