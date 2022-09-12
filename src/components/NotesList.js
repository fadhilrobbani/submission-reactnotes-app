import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NotesList({ notes, keyword }) {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().replace(/\s+/g, '').includes(keyword)
  );
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6'>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
            archived={note.archived}
          />
        ))
      ) : (
        <h1 className='text-slate-100'>Catatan Kosong</h1>
      )}
      {}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NotesList;
