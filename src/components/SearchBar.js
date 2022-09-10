import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { FaSearch, FaArchive } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

class SearchBar extends Component {
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
    this.props.searchKeyword(ev.target.value);
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
      <>
        <div className='flex gap-6 items-center w-1/2 justify-end '>
          <input
            className={
              this.state.show
                ? `text-slate-900 bg-slate-100 shadow-lg px-3 py-2 w-full md:w-1/2 rounded-md absolute top-16 right-0  `
                : `text-slate-900 px-3 py-2 w-full rounded-md hidden md:block`
            }
            type='text'
            value={this.state.keyword}
            onChange={this.onKeywordChangeHandler}
            placeholder='Cari Catatan'
          />
          <div className='cursor-pointer'>
            <FaArchive size={24} />
          </div>
          <div
            className={
              this.state.show ? `cursor-pointer` : `md:hidden cursor-pointer`
            }
            onClick={this.onShowClickHandler}
          >
            {this.state.show ? <ImCross size={24} /> : <FaSearch size={24} />}
          </div>
        </div>
      </>
    );
  }
}

SearchBar.propTypes = {
  searchKeyword: PropTypes.string,
};

export default SearchBar;
