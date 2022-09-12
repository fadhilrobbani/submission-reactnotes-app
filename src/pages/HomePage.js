import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import AddButton from '../components/AddButton';

function HomePage({ notes, keyword }) {
  return (
    <div>
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
