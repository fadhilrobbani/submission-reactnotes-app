import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiCheck } from 'react-icons/bi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function NoteItemDetail({
  note,
  onChangeHandler,
  onInputBodyHandler,
  onDeleteHandler,
  onArchiveHandler,
  onUnarchiveHandler,
  onEditHandler,
}) {
  const navigate = useNavigate();
  const OnClickDeleteHandler = () => {
    swal({
      title: `Apakah Anda yakin ingin menghapus catatan ${note.title}?`,
      text: 'Catatan yang dihapus akan bersifat permanen!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (note.archived) {
          navigate('/archives');
        } else {
          navigate('/');
        }
        onDeleteHandler(note.id);
      }
    });
  };

  const onClickArchiveHandler = () => {
    navigate('/');
    onArchiveHandler(note.id);
  };

  const onClickUnarchiveHandler = () => {
    navigate('/archives');
    onUnarchiveHandler(note.id);
  };

  const onCancelHandler = () => {
    if (note.archived) {
      navigate('/archives');
    } else {
      navigate('/');
    }
  };

  const onClickEditHandler = () => {
    if (note.title === '' || note.body === '') {
      swal('Judul dan Isi Catatan Anda Tidak Boleh Kosong ya!');
      return;
    }
    if (note.archived) {
      navigate('/archives');
      onEditHandler({ id: note.id, title: note.title, body: note.body });
    } else {
      navigate('/');
      onEditHandler({ id: note.id, title: note.title, body: note.body });
    }
  };

  return (
    <div className=' w-full flex py-5 justify-center items-center'>
      <div className='w-3/4 flex justify-center flex-col '>
        <input
          className='bg-yellow-400 h-28 text-3xl font-bold p-5 placeholder:text-slate-500 placeholder:text-3xl focus:outline-none '
          type='text'
          value={note.title}
          placeholder='Catatan Baru'
          onChange={onChangeHandler}
        />
        <textarea
          className='overflow-auto text-xl h-80  bg-yellow-200  p-5  placeholder:text-slate-500 placeholder: focus:outline-none'
          value={note.body}
          placeholder='Tulis sesuatu di sini...'
          onChange={onInputBodyHandler}
        />
      </div>
      <div className='bg-slate-400/75 z-[100] fixed bottom-5 flex flex-row-reverse gap-6 p-3 rounded-2xl'>
        <div
          onClick={onClickEditHandler}
          className='cursor-pointer rounded-full p-2  bg-green-300'
        >
          <BiCheck className='action-buttons' />
        </div>
        {note.archived ? (
          <div
            onClick={onClickUnarchiveHandler}
            className='cursor-pointer rounded-full p-2  bg-purple-300'
          >
            <MdOutlineUnarchive className='action-buttons' />
          </div>
        ) : (
          <div
            onClick={onClickArchiveHandler}
            className='cursor-pointer rounded-full p-2 bg-purple-300'
          >
            <MdOutlineArchive className='action-buttons' />
          </div>
        )}
        <div
          onClick={OnClickDeleteHandler}
          className='cursor-pointer rounded-full p-2  bg-pink-400'
        >
          <BiTrash className='action-buttons' />
        </div>
        <div
          onClick={onCancelHandler}
          className='cursor-pointer rounded-full p-2  bg-amber-400'
        >
          <IoMdArrowBack className='action-buttons' />
        </div>
      </div>
    </div>
  );
}

NoteItemDetail.propTypes = {
  note: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onInputBodyHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onArchiveHandler: PropTypes.func.isRequired,
  onUnarchiveHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
};

export default NoteItemDetail;
