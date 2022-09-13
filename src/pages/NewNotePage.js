import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function NewNotePage({
  addNote,
  onDeleteHandler,
  onArchiveHandler,
  onUnarchiveHandler,
  onEditHandler,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <NoteInput
        addNote={addNote}
        onDeleteHandler={onDeleteHandler}
        onArchiveHandler={onArchiveHandler}
        onUnarchiveHandler={onUnarchiveHandler}
        onEditHandler={onEditHandler}
        navigate={navigateTo}
        id={id}
      />
    </>
  );
}

NewNotePage.propTypes = {
  addNote: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onArchiveHandler: PropTypes.func.isRequired,
  onUnarchiveHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
};

export default NewNotePage;
