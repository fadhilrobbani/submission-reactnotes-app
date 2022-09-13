import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineArchive } from 'react-icons/md';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({ searchKeyword }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };
  return (
    <header className='z-[100] sticky top-0 flex justify-between items-center w-full py-4 px-6 bg-sky-700 opacity-90 text-slate-100 '>
      <h1 className='font-bold text-2xl uppercase'>
        <Link to={title ? `/?title=${title}` : '/'}>Catatanku</Link>
      </h1>
      <div className='flex gap-6 items-center justify-end w-full'>
        {window.location.pathname.includes('/notes/') ? null : (
          <div className='w-1/2 flex justify-e items-center'>
            <SearchBar
              onSearch={changeSearchParams}
              searchKeyword={searchKeyword}
              activeKeyword={title}
            />
          </div>
        )}
        <div
          onClick={() =>
            navigate(title ? `/archives/?title=${title}` : '/archives')
          }
          className='cursor-pointer'
        >
          <MdOutlineArchive className='hover:scale-105 transition duration-150' size={34} />
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  searchKeyword: PropTypes.func.isRequired,
};

export default Navbar;
