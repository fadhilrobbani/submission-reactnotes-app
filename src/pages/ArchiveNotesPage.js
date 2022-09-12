import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';

function ArchiveNotesPage({ notes, keyword }) {
  return (
    <div>
      <p className='text-xl'>Catatan yang diarsipkan</p>
      <NotesList notes={notes} keyword={keyword} />
    </div>
  );
}

ArchiveNotesPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ArchiveNotesPage;
