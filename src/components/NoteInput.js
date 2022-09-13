import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { getNote } from '../utils/local-data';
import swal from 'sweetalert';
import ActionButtons from './ActionButtons';
import NotFoundPage from '../pages/NotFoundPage';

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:
        getNote(props.id) === undefined &&
        window.location.pathname === '/notes/new'
          ? {
              id: '',
              title: '',
              body: '',
              createdAt: '',
              archived: false,
            }
          : getNote(props.id),
    };
    autoBind(this);
  }

  onInputChangeHandler(ev) {
    this.setState((prev) => {
      return {
        note: {
          ...prev.note,
          title: ev.target.value,
        },
      };
    });
  }
  onBodyChangeHandler(ev) {
    this.setState((prev) => {
      return {
        note: {
          ...prev.note,
          body: ev.target.value,
        },
      };
    });
  }

  onClickSubmitHandler() {
    if (this.state.note.title === '' || this.state.note.body === '') {
      swal('Judul dan Isi Catatan Anda Tidak Boleh Kosong ya!');
      return;
    }

    this.props.addNote({
      title: this.state.note.title,
      body: this.state.note.body,
    });
    this.props.navigate('/');
  }

  onClickDeleteHandler() {
    swal({
      title: `Apakah Anda yakin ingin menghapus catatan ${this.state.note.title}?`,
      text: 'Catatan yang dihapus akan bersifat permanen!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (this.state.note.archived) {
          this.props.navigate('/archives');
        } else {
          this.props.navigate('/');
        }
        this.props.onDeleteHandler(this.state.note.id);
      }
    });
  }

  onClickArchiveHandler() {
    this.props.navigate('/');
    this.props.onArchiveHandler(this.state.note.id);
  }

  onClickUnarchiveHandler() {
    this.props.navigate('/archives');
    this.props.onUnarchiveHandler(this.state.note.id);
  }

  onCancelHandler() {
    if (this.state.note.archived) {
      this.props.navigate('/archives');
    } else {
      this.props.navigate('/');
    }
  }

  onClickEditHandler() {
    if (this.state.note.title === '' || this.state.note.body === '') {
      swal('Judul dan Isi Catatan Anda Tidak Boleh Kosong ya!');
      return;
    }
    if (this.state.note.archived) {
      this.props.navigate('/archives');
      this.props.onEditHandler({
        id: this.state.note.id,
        title: this.state.note.title,
        body: this.state.note.body,
      });
    } else {
      this.props.navigate('/');
      this.props.onEditHandler({
        id: this.state.note.id,
        title: this.state.note.title,
        body: this.state.note.body,
      });
    }
  }

  render() {
    if (this.state.note !== undefined) {
      return (
        <div className=' w-full flex py-5 justify-center items-center'>
          <div className='w-3/4 flex justify-center flex-col '>
            <input
              className='bg-yellow-400 h-28 text-3xl font-bold p-5 placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '
              type='text'
              onChange={this.onInputChangeHandler}
              value={this.state.note.title}
              placeholder='Catatan Baru'
            />
            <textarea
              className='overflow-auto text-xl h-80  bg-yellow-200  p-5  placeholder:text-slate-500 placeholder: focus:outline-none'
              value={this.state.note.body}
              onChange={this.onBodyChangeHandler}
              placeholder='Tulis catatan di sini ....'
            />
          </div>
          <ActionButtons
            note={this.state.note}
            onClickEditHandler={this.onClickEditHandler}
            onClickArchiveHandler={this.onClickArchiveHandler}
            onClickUnarchiveHandler={this.onClickUnarchiveHandler}
            onCancelHandler={this.onCancelHandler}
            onClickSubmitHandler={this.onClickSubmitHandler}
            OnClickDeleteHandler={this.onClickDeleteHandler}
          />
        </div>
      );
    } else {
      return <NotFoundPage />;
    }
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onArchiveHandler: PropTypes.func.isRequired,
  onUnarchiveHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default NoteInput;
