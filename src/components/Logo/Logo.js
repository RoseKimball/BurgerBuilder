import React from 'react';
import burgerLogo from '../../Assets/Images/original.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='MyBurger'/>
    </div>
);

export default logo;