import React from 'react';
import NotesList from '../components/NotesList';

function AllNotes({ notes }) {
  return (
    <div>
      <p className='text-xl'>Semua Catatan</p>
      <NotesList notes={notes} />
    </div>
  );
}

export default AllNotes;
