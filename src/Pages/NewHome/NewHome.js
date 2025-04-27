import React from 'react'
import Feeds from '../../Components/Feeds/Feeds'
import Suggestions from '../../Components/Suggestions/Suggestions';
import './NewHome.css'

const NewHome = () => {
    return (
        <div className='div-newhome'>
            <Feeds />
            <Suggestions />
        </div>
    )
}

export default NewHome;