import './App.css';
import Sidenav from './components/SideNav/Sidenav';
import NotesArea from './components/MainNotes/Notes';
import { useState } from 'react';

function App() {
  const [selectedGroupName, setSelectedGroupName] = useState('');
  const [selectedGroupColor, setSelectedGroupColor] = useState('');

  return (
    <div className='container'>
      <Sidenav
        setSelectedGroupName={setSelectedGroupName}
        setSelectedGroupColor={setSelectedGroupColor}
      />
      <NotesArea
        selectedGroupName={selectedGroupName}
        selectedGroupColor={selectedGroupColor}
      />
    </div>
  );
}

export default App;