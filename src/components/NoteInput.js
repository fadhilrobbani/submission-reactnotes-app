import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    autoBind(this);
  }

  onInputChangeHandler(ev) {
    this.setState(() => {
      return {
        title: ev.target.value,
      };
    });
  }
  onBodyChangeHandler(ev) {
    this.setState(() => {
      return {
        body: ev.target.textContent,
      };
    });
  }

  onClickSubmitHandler() {
    if (this.state.title === '' || this.state.body === '') {
      console.log('ini title ' + this.state.title);
      console.log('ini body ' + this.state.body);
      return;
    }

    this.props.addNote(this.state);
    this.props.navigate();
    console.log(this.state);
  }

  render() {
    return (
      <div className='mt-[-72px] w-full flex bg-sky-700 h-screen py-5 justify-center items-center'>
        <div className='w-3/4 h-1/2 flex justify-center flex-col '>
          <input
            className='bg-yellow-400 text-2xl p-5 placeholder:text-slate-500 placeholder:text-2xl focus:outline-none '
            type='text'
            onChange={this.onInputChangeHandler}
            value={this.state.title}
            placeholder='Catatan Baru'
          />
          <div
            className='overflow-auto focus: bg-yellow-200 p-5 h-full placeholder:text-slate-500 placeholder: focus:outline-none'
            contentEditable='true'
            onInput={this.onBodyChangeHandler}
            data-placeholder='Catatan Baru'
          />
        </div>
        <div
          className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-10 bg-green-200'
          onClick={this.onClickSubmitHandler}
        >
          <AiOutlineCheck size={50} />
        </div>
        <div
          onClick={this.props.navigate}
          className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-36 bg-pink-200'
        >
          <AiOutlineClose size={50} />
        </div>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;