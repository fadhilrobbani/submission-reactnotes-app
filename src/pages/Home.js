import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';
import AddButton from '../components/AddButton';

function Home({notes}) {
  return (
    <div>
      <NotesList notes={notes} />
      <AddButton/>
    </div>
  );
}

Home.propTypes = {};

export default Home;
