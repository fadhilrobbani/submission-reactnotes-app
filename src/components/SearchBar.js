import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import autoBind from 'react-autobind';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.activeKeyword ? props.activeKeyword : '',
      show: false,
    };
    autoBind(this);
  }

  onKeywordChangeHandler(ev) {
    this.setState(
      () => {
        return {
          keyword: ev.target.value,
        };
      },
      () => {
        const filteredKeyword = this.state.keyword
          .toLowerCase()
          .replace(/\s+/g, '');
        this.props.onSearch(filteredKeyword);
        this.props.searchKeyword(filteredKeyword);
      }
    );
  }

  componentDidMount() {
    const filteredKeyword = this.state.keyword
      .toLowerCase()
      .replace(/\s+/g, '');
    this.props.searchKeyword(filteredKeyword);
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
        <div className='w-full flex justify-end'>
          <input
            className={
              this.state.show
                ? `text-slate-900 bg-slate-200 shadow-xl px-3 py-3 w-full md:w-1/2  absolute top-16 right-0`
                : `text-slate-900 px-3 py-2 w-full rounded-md hidden md:block`
            }
            type='text'
            value={this.state.keyword}
            onChange={this.onKeywordChangeHandler}
            placeholder='Cari Catatan'
          />

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
  searchKeyword: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
