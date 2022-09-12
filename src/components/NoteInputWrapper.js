import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NoteInput from './NoteInput';

function NoteInputWrapper({ addNote }) {
  const navigate = useNavigate();

  return (
    <>
      <NoteInput navigate={() => navigate('/')} addNote={addNote} />
    </>
  );
}

NoteInputWrapper.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInputWrapper;
