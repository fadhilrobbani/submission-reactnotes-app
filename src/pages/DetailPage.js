import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import NoteItemDetail from '../components/NoteItemDetail';
import NotFoundPage from './NotFoundPage';
import { getNote } from '../utils/local-data';
import autobind from 'react-autobind';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
    autobind(this);
  }

  onChangeHandler(ev) {
    this.setState((prev) => {
      return {
        note: {
          ...prev.note,
          title: ev.target.value,
        },
      };
    });
  }

  onInputBodyHandler(ev) {
    this.setState((prev) => {
      return {
        note: {
          ...prev.note,
          body: ev.target.textContent,
        },
      };
    }, console.log(this.state.note.body));
  }

  render() {
    const checkNote =
      this.state.note !== undefined ? (
        <NoteItemDetail
          onChangeHandler={this.onChangeHandler}
          onInputBodyHandler={this.onInputBodyHandler}
          onDeleteHandler={this.props.onDeleteHandler}
          onArchiveHandler={this.props.onArchiveHandler}
          onUnarchiveHandler={this.props.onUnarchiveHandler}
          note={this.state.note}
        />
      ) : (
        <NotFoundPage />
      );
    return <>{checkNote}</>;
  }
}

export default DetailPage;
