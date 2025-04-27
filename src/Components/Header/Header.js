import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import './Header.css';

const Header = ({isLogged}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        isLogged(false);
    }

    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => navigate('/')}>
                    <Logo />
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined}><Home className='div-svg'/></NavLink>
                    <NavLink to='/explore' className={({ isActive }) => isActive ? 'active' : undefined}><Explore className='div-svg'/></NavLink>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;