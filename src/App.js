import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllNotesPage from './pages/AllNotesPage';
import ArchiveNotesPage from './pages/ArchiveNotesPage';
import HomePage from './pages/HomePage';
import NewNotePage from './pages/NewNotePage';
import DetailPageWrapper from './pages/DetailPageWrapper';
import NotFoundPage from './pages/NotFoundPage';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  addNote,
  editNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from './utils/local-data';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: '',
      show: false,
    };
    autoBind(this);
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    console.log(this.state.notes);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(ev) {
    this.setState({ keyword: ev.target.value });
  }

  onShowClickHandler() {
    this.setState((prev) => {
      return {
        show: !prev.show,
      };
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onEditHandler({ id, title, body }) {
    console.log(id);
    editNote({ id, title, body });
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  render() {
    return (
      <>
        <Navbar
          show={this.state.show}
          keyword={this.state.keyword}
          onKeywordChangeHandler={this.onKeywordChangeHandler}
          onShowClickHandler={this.onShowClickHandler}
        />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                notes={getActiveNotes(this.state.notes)}
                keyword={this.state.keyword}
              />
            }
          />
          <Route path='/notes'>
            <Route
              index
              element={
                <AllNotesPage
                  notes={this.state.notes}
                  keyword={this.state.keyword}
                />
              }
            />
            <Route
              path='note/:id'
              element={
                <DetailPageWrapper
                  onDeleteHandler={this.onDeleteHandler}
                  onArchiveHandler={this.onArchiveHandler}
                  onUnarchiveHandler={this.onUnarchiveHandler}
                  onEditHandler={this.onEditHandler}
                />
              }
            />

            <Route
              path='new'
              element={<NewNotePage addNote={this.onAddNoteHandler} />}
            />
            <Route
              path='archives'
              element={
                <ArchiveNotesPage
                  notes={getArchivedNotes(this.state.notes)}
                  keyword={this.state.keyword}
                />
              }
            />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
