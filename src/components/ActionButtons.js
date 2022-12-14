import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiCheck } from 'react-icons/bi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';

function ActionButtons({
  note,
  onClickEditHandler,
  onClickArchiveHandler,
  onClickUnarchiveHandler,
  OnClickDeleteHandler,
  onCancelHandler,
  onClickSubmitHandler,
}) {
  return (
    <div className='bg-slate-400/75 z-[100] fixed bottom-5 flex flex-row-reverse gap-6 p-3 rounded-2xl'>
      {window.location.pathname.includes('/notes/new') ? (
        <>
          <div
            className='cursor-pointer  rounded-full p-2 bottom-8 right-10  hover:scale-105 transition duration-150 bg-green-200'
            onClick={onClickSubmitHandler}
          >
            <BiCheck className='action-buttons' />
          </div>
          <div
            onClick={onCancelHandler}
            className='cursor-pointer rounded-full p-2 bottom-8 right-36  hover:scale-105 transition duration-150 bg-amber-300'
          >
            <IoMdArrowBack className='action-buttons' />
          </div>
        </>
      ) : (
        <>
          <div
            onClick={onClickEditHandler}
            className='cursor-pointer rounded-full p-2 hover:scale-105 transition duration-150 bg-green-300'
          >
            <BiCheck className='action-buttons' />
          </div>
          {note.archived ? (
            <div
              onClick={onClickUnarchiveHandler}
              className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 bg-purple-300'
            >
              <MdOutlineUnarchive className='action-buttons' />
            </div>
          ) : (
            <div
              onClick={onClickArchiveHandler}
              className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 bg-purple-300'
            >
              <MdOutlineArchive className='action-buttons' />
            </div>
          )}
          <div
            onClick={OnClickDeleteHandler}
            className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 bg-pink-400'
          >
            <BiTrash className='action-buttons' />
          </div>
          <div
            onClick={onCancelHandler}
            className='cursor-pointer rounded-full p-2  hover:scale-105 transition duration-150 bg-amber-400'
          >
            <IoMdArrowBack className='action-buttons' />
          </div>
        </>
      )}
    </div>
  );
}

ActionButtons.propTypes = {
  note: PropTypes.object.isRequired,
  onClickEditHandler: PropTypes.func.isRequired,
  onClickArchiveHandler: PropTypes.func.isRequired,
  onClickUnarchiveHandler: PropTypes.func.isRequired,
  OnClickDeleteHandler: PropTypes.func.isRequired,
  onCancelHandler: PropTypes.func.isRequired,
  onClickSubmitHandler: PropTypes.func.isRequired,
};

export default ActionButtons;
