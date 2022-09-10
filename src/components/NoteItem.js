import React from 'react';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className='bg-slate-400 rounded-md text-black'>
      <p>{id}</p>
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
