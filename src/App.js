import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArchiveNotesPage from './pages/ArchiveNotesPage';
import HomePage from './pages/HomePage';
import NewNotePage from './pages/NewNotePage';
import DetailPageWrapper from './pages/DetailPageWrapper';
import NotFoundPage from './pages/NotFoundPage';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  addNote,
  editNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from './utils/local-data';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      searchKeyword: '',
    };
    autoBind(this);
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    this.setState(() => {
      return {
        notes: getAllNotes(),
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
    editNote({ id, title, body });
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onSearchKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        searchKeyword: keyword,
      };
    });
  }

  render() {
    return (
      <>
        <Navbar searchKeyword={this.onSearchKeywordChangeHandler} />
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                notes={getActiveNotes(this.state.notes)}
                keyword={this.state.searchKeyword}
              />
            }
          />
          <Route path='/notes'>
            <Route index element={<NotFoundPage />} />
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
                  keyword={this.state.searchKeyword}
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
