import React from 'react'
import Footer from '../Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import './Main.css'
import MainHeader from './MainHeader/MainHeader';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

const Main = (props) => {
    return (
        <>
            <MainHeader loggedIn={props.loggedIn} openNavigation={props.openNavigation}/>
            <Promo />
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </>
    )
};

export default Main