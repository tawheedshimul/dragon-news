import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-1'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism without Fear or Favour</p>
            <p className='text-xl'>{moment().format('dddd, MMMM Do YYYY')} </p>
        </div>
    );
};

export default Header;