import PropTypes from 'prop-types';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function DetailPage({
  addNote,
  onDeleteHandler,
  onArchiveHandler,
  onUnarchiveHandler,
  onEditHandler,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
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

DetailPage.propTypes = {
  addNote: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onArchiveHandler: PropTypes.func.isRequired,
  onUnarchiveHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
};

export default DetailPage;
