import PropTypes from 'prop-types';
import React,{Component} from 'react';
import { FaSearch, FaArchive } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function SearchBar({
  show,
  keyword,
  onKeywordChangeHandler,
  onShowClickHandler,
}) {
  return (
    <>
      <div className='w-1/2 flex justify-end items-center'>
        <input
          className={
            show
              ? `text-slate-900 bg-slate-200 shadow-xl px-3 py-3 w-full md:w-1/2  absolute top-16 right-0`
              : `text-slate-900 px-3 py-2 w-full rounded-md hidden md:block`
          }
          type='text'
          value={keyword}
          onChange={onKeywordChangeHandler}
          placeholder='Cari Catatan'
        />

        <div
          className={show ? `cursor-pointer` : `md:hidden cursor-pointer`}
          onClick={onShowClickHandler}
        >
          {show ? <ImCross size={24} /> : <FaSearch size={24} />}
        </div>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  searchKeyword: PropTypes.string,
};

export default SearchBar;
