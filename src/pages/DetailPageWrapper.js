import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPage from './DetailPage';

function DetailPageWrapper({ onDeleteHandler,onArchiveHandler, onUnarchiveHandler }) {
  const { id } = useParams();

  return (
    <div>
      <DetailPage onDeleteHandler={onDeleteHandler} id={id} onArchiveHandler={onArchiveHandler} onUnarchiveHandler={onUnarchiveHandler} />
    </div>
  );
}

DetailPageWrapper.propTypes = {};

export default DetailPageWrapper;
