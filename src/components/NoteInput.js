import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { IoMdClose } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';
import swal from 'sweetalert';

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
      swal('Judul dan Isi Catatan Anda Tidak Boleh Kosong ya!');
      return;
    }

    this.props.addNote(this.state);
    this.props.navigate();
  }

  render() {
    return (
      <div className='mt-[-72px] w-full flex bg-sky-700 h-screen py-5 justify-center items-center'>
        <div className='w-3/4 h-1/2 flex justify-center flex-col '>
          <input
            className='bg-yellow-400 text-2xl font-bold p-5 placeholder:text-slate-500 placeholder:text-2xl focus:outline-none '
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
          <BiCheck size={50} />
        </div>
        <div
          onClick={this.props.navigate}
          className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-36 bg-amber-300'
        >
          <IoMdClose size={50} />
        </div>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NoteInput;
