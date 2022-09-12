import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { useSearchParams } from 'react-router-dom';

function SearchBarWrapper({ searchKeyword }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };
  return (
    <div className='w-1/2 flex justify-e items-center'>
      <SearchBar
        onSearch={changeSearchParams}
        searchKeyword={searchKeyword}
        activeKeyword={title}
      />
    </div>
  );
}

SearchBarWrapper.propTypes = {
  searchKeyword: PropTypes.func.isRequired,
};

export default SearchBarWrapper;
