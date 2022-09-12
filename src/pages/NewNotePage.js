import React from 'react';
import PropTypes from 'prop-types';

import NoteInputWrapper from '../components/NoteInputWrapper';

function NewNotePage({ addNote }) {
  return (
    <section>
      <NoteInputWrapper addNote={addNote} />
    </section>
  );
}

NewNotePage.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NewNotePage;
