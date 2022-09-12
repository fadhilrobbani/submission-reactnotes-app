import React from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBarWrapper from './SearchBarWrapper';

function Navbar({ searchKeyword }) {
  const navigate = useNavigate();
  const searchParam = useSearchParams();
  return (
    <header className='z-[100] sticky top-0 flex justify-between items-center w-full py-4 px-6 bg-sky-700 opacity-90 text-slate-100 '>
      <h1 className='font-bold text-2xl uppercase'>
        <Link
          to={
            searchParam[0].get('title')
              ? `/?title=${searchParam[0].get('title')}`
              : '/'
          }
        >
          Catatanku
        </Link>
      </h1>
      <div className='flex gap-6 items-center justify-end w-full'>
        {window.location.pathname.includes('/note/') ||
        window.location.pathname.includes('/new') ? null : (
          <SearchBarWrapper searchKeyword={searchKeyword} />
        )}

        <div
          onClick={() =>
            navigate(
              searchParam[0].get('title')
                ? `/notes/archives/?title=${searchParam[0].get('title')}`
                : '/notes/archives'
            )
          }
          className='cursor-pointer'
        >
          <FaArchive size={24} />
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  searchKeyword: PropTypes.func.isRequired,
};

export default Navbar;
