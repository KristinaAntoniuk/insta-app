import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore';
import Profile from '../Profile/Profile';

const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <Routes>
                <Route path="/" element={<NewHome/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/:username" element={<Profile/>} />
            </Routes>
        </div>
    )
}

export default Home;