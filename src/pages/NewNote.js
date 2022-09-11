import React from 'react';
import PropTypes from 'prop-types';

import NoteInputWrapper from '../components/NoteInputWrapper';

function NewNote({ addNote }) {
  return (
    <section>
      <NoteInputWrapper addNote={addNote} />
    </section>
  );
}

NewNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NewNote;
