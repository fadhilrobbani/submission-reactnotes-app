import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import autoBind from 'react-autobind';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      show: false,
    };
    autoBind(this);
  }

  onKeywordChangeHandler(ev) {
    this.setState({ keyword: ev.target.value });
    // this.props.search(this.state.keyword);
  }

  onShowClickHandler() {
    this.setState((prev) => {
      return {
        show: !prev.show,
      };
    });
  }
  render() {
    return (
      <header className='z-[100] sticky top-0 flex justify-between items-center w-full py-4 px-6 bg-sky-700 opacity-90 text-slate-100 '>
        <h1 className='font-bold text-2xl uppercase'>
          <Link to='/'>Catatanku</Link>
        </h1>
        <div className='flex gap-6 items-center justify-end w-full'>
          <SearchBar
            show={this.state.show}
            keyword={this.state.keyword}
            onKeywordChangeHandler={this.onKeywordChangeHandler}
            onShowClickHandler={this.onShowClickHandler}
          />
          <div className='cursor-pointer'>
            <FaArchive size={24} />
          </div>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
