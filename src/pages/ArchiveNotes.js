import React from 'react';
import NotesList from '../components/NotesList';

function ArchiveNotes({ notes }) {
  return (
    <div>
      <p className='text-xl'>Catatan yang diarsipkan</p>
      <NotesList notes={notes} />
    </div>
  );
}

export default ArchiveNotes;
