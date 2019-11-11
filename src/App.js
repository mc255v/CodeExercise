import React from 'react';
import './styles/App.css';
import FilterBar from './components/FIlterBar';
import MediaList from './components/MediaList';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <MediaList />
    </div>
  );
}

export default App;
