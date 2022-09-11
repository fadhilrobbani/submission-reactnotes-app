import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllNotes from './pages/AllNotes';
import ArchiveNotes from './pages/ArchiveNotes';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NotFound from './pages/NotFound';
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
              <Home
                notes={getActiveNotes(this.state.notes)}
                keyword={this.state.keyword}
              />
            }
          />
          <Route path='/notes'>
            <Route
              index
              element={
                <AllNotes
                  notes={this.state.notes}
                  keyword={this.state.keyword}
                />
              }
            />
            <Route path='note/:id' />
            <Route
              path='new'
              element={<NewNote addNote={this.onAddNoteHandler} />}
            />
            <Route
              path='archives'
              element={
                <ArchiveNotes
                  notes={getArchivedNotes(this.state.notes)}
                  keyword={this.state.keyword}
                />
              }
            />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
