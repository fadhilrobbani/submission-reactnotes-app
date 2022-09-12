import React from 'react';
import NotesList from '../components/NotesList';

function ArchiveNotesPage({ notes, keyword }) {
  return (
    <div>
      <p className='text-xl'>Catatan yang diarsipkan</p>
      <NotesList notes={notes} keyword={keyword} />
    </div>
  );
}

export default ArchiveNotesPage;
