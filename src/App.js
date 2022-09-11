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
      allNotes: getAllNotes(),
      activeNotes: getActiveNotes(),
      archiveNote: getArchivedNotes(),
    };
    autoBind(this);
  }

  addNoteHandler({ title, body }) {
    addNote({ title, body });
    console.log(this.state.activeNotes);
    this.setState(() => {
      return {
        activeNotes: getActiveNotes(),
      };
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home notes={this.state.activeNotes} />} />
          <Route path='/notes'>
            <Route index element={<AllNotes notes={this.state.allNotes} />} />
            <Route path='note/:id' />
            <Route
              path='new'
              element={<NewNote addNote={this.addNoteHandler} />}
            />
            <Route
              path='archives'
              element={<ArchiveNotes notes={this.state.archiveNote} />}
            />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
