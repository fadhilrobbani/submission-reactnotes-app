import React from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ show, keyword, onKeywordChangeHandler, onShowClickHandler }) {
  const navigate = useNavigate();
  return (
    <header className='z-[100] sticky top-0 flex justify-between items-center w-full py-4 px-6 bg-sky-700 opacity-90 text-slate-100 '>
      <h1 className='font-bold text-2xl uppercase'>
        <Link to='/'>Catatanku</Link>
      </h1>
      <div className='flex gap-6 items-center justify-end w-full'>
        <SearchBar
          show={show}
          keyword={keyword}
          onKeywordChangeHandler={onKeywordChangeHandler}
          onShowClickHandler={onShowClickHandler}
        />
        <div
          onClick={() => navigate('/notes/archives')}
          className='cursor-pointer'
        >
          <FaArchive size={24} />
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  show: PropTypes.bool.isRequired,
  keyword: PropTypes.string.isRequired,
  onKeywordChangeHandler: PropTypes.func.isRequired,
  onShowClickHandler: PropTypes.func.isRequired,
};

export default Navbar;
