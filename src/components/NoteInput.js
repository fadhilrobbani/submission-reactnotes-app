import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { IoMdArrowBack } from 'react-icons/io';
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
        body: ev.target.value,
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
      <div className=' w-full flex py-5 justify-center items-center'>
        <div className='w-3/4 flex justify-center flex-col '>
          <input
            className='bg-yellow-400 h-28 text-3xl font-bold p-5 placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '
            type='text'
            onChange={this.onInputChangeHandler}
            value={this.state.title}
            placeholder='Catatan Baru'
          />
          <textarea
            className='overflow-auto text-xl h-80  bg-yellow-200  p-5  placeholder:text-slate-500 placeholder: focus:outline-none'
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            placeholder='Tulis catatan di sini ....'
          />
        </div>
        <div className='bg-slate-400/75 z-[100] fixed bottom-5 flex flex-row-reverse gap-6 p-3 rounded-2xl'>
          <div
            className='cursor-pointer  rounded-full p-2 bottom-8 right-10 bg-green-200'
            onClick={this.onClickSubmitHandler}
          >
            <BiCheck className='action-buttons' />
          </div>
          <div
            onClick={this.props.navigate}
            className='cursor-pointer rounded-full p-2 bottom-8 right-36 bg-amber-300'
          >
            <IoMdArrowBack className='action-buttons' />
          </div>
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
