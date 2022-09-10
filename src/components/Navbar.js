import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Navbar({}) {
  return (
    <header className='flex justify-between items-center w-full py-4 px-6 bg-sky-800 text-slate-100 '>
      <h1 className='font-bold text-lg uppercase'>
        <Link to='/'>Catatanku</Link>
      </h1>
      <SearchBar />
    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
