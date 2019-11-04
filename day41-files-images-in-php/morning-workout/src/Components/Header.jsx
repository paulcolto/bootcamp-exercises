import React from 'react';
import UserInfo from './UserInfo.jsx';
import Navigation from './Navigation.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />
                    <UserInfo />
                    <Navigation />
                </header>
            </>
        )
    }

}