import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiCheck } from 'react-icons/bi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
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
          navigate('/notes/archives');
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
    navigate('/notes/archives');
    onUnarchiveHandler(note.id);
  };

  const onCancelHandler = () => {
    if (note.archived) {
      navigate('/notes/archives');
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
      navigate('/notes/archives');
      onEditHandler({ id: note.id, title: note.title, body: note.body });
    } else {
      navigate('/');
      onEditHandler({ id: note.id, title: note.title, body: note.body });
    }
  };

  return (
    <div className='mt-[-72px] w-full flex bg-sky-700 h-screen py-5 justify-center items-center'>
      <div className='w-3/4 h-1/2 flex justify-center flex-col '>
        <input
          className='bg-yellow-400 text-2xl p-5 placeholder:text-slate-500 placeholder:text-2xl focus:outline-none '
          type='text'
          value={note.title}
          placeholder='Catatan Baru'
          onChange={onChangeHandler}
        />
        <textarea
          className='overflow-auto focus: bg-yellow-200 p-5 h-full placeholder:text-slate-500 placeholder: focus:outline-none'
          value={note.body}
          placeholder='Tulis sesuatu di sini...'
          onChange={onInputBodyHandler}
        />
      </div>
      <div
        onClick={onClickEditHandler}
        className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-10 bg-green-300'
      >
        <BiCheck size={50} />
      </div>
      {note.archived ? (
        <div
          onClick={onClickUnarchiveHandler}
          className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-36 bg-purple-300'
        >
          <MdOutlineUnarchive size={50} />
        </div>
      ) : (
        <div
          onClick={onClickArchiveHandler}
          className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-36 bg-purple-300'
        >
          <MdOutlineArchive size={50} />
        </div>
      )}

      <div
        onClick={onCancelHandler}
        className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-[352px] bg-amber-400'
      >
        <IoMdClose size={50} />
      </div>
      <div
        onClick={OnClickDeleteHandler}
        className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-[248px] bg-pink-400'
      >
        <BiTrash size={50} />
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
