import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';

function ArchiveNotesPage({ notes, keyword }) {
  return (
    <div>
      <p className=' text-xl font-semibold m-6  text-slate-100 text-center w-auto rounded-lg  bg-red-400 p-4'>
        Catatan yang Diarsipkan
      </p>

      <NotesList notes={notes} keyword={keyword} />
    </div>
  );
}

ArchiveNotesPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ArchiveNotesPage;
