import React from 'react';
import '../styles/App.css';
import FilterBar from './FilterBar';
import MediaList from './MediaList';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <MediaList />
    </div>
  );
}

export default App;
