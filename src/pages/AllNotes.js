import React from 'react';
import NotesList from '../components/NotesList';

function AllNotes({ notes, keyword }) {
  return (
    <div>
      <p className='text-xl'>Semua Catatan</p>
      <NotesList notes={notes} keyword={keyword} />
    </div>
  );
}

export default AllNotes;
