import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NotesList({ notes, keyword }) {
  function EmptyMessage() {
    if (window.location.pathname.includes('/notes/archives')) {
      return (
        <h1 className=' absolute  text-2xl font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center w-full p-4'>
          Tidak Ada Catatan yang Diarsipkan
        </h1>
      );
    } else {
      return (
        <h1 className=' absolute  text-2xl font-semibold text-slate-300 text-center  flex justify-center rounded-lg h-[400px] items-center w-full p-4'>
          Tidak Ada Catatan Aktif
        </h1>
      );
    }
  }
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().replace(/\s+/g, '').includes(keyword)
  );
  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6'>
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
        <EmptyMessage />
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
