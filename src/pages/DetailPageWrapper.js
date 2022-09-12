import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPage from './DetailPage';

function DetailPageWrapper({
  onDeleteHandler,
  onArchiveHandler,
  onUnarchiveHandler,
  onEditHandler,
}) {
  const { id } = useParams();

  return (
    <div>
      <DetailPage
        onDeleteHandler={onDeleteHandler}
        id={id}
        onArchiveHandler={onArchiveHandler}
        onUnarchiveHandler={onUnarchiveHandler}
        onEditHandler={onEditHandler}
      />
    </div>
  );
}

DetailPageWrapper.propTypes = {};

export default DetailPageWrapper;
