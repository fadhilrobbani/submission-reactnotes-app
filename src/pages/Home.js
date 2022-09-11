import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import AddButton from '../components/AddButton';

function Home({ notes, keyword }) {
  return (
    <div>
      <NotesList notes={notes} keyword={keyword} />
      <AddButton />
    </div>
  );
}

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default Home;
