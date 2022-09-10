import React from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/NotesList';

function Home({notes}) {
  return (
    <div>
      <NotesList notes={notes} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
