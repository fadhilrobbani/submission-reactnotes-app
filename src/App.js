import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArchiveNotes from './pages/ArchiveNotes';
import Home from './pages/Home';
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
      activeNotes: getActiveNotes(),
      archiveNote: getArchivedNotes(),
    };
    autoBind(this);
  }
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home notes={this.state.activeNotes} />} />
          <Route path='/notes/new' />
          <Route
            path='/archives'
            element={<ArchiveNotes notes={this.state.archiveNote} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
