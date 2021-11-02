import React from "react";
import './index.css';

export function Header({
    black
}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" />
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
            </div>
        </header>
    )
}