import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import AddButton from '../components/AddButton';


function HomePage({ notes, keyword }) {
  return (
    <div>
      <p className=' text-xl font-semibold m-6  text-slate-100 text-center w-auto rounded-lg  bg-emerald-500 p-4'>Catatan Aktif</p>
      <NotesList notes={notes} keyword={keyword} />
      <AddButton />
    </div>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default HomePage;
