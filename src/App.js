import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
