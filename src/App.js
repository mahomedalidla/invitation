import React, { useState } from 'react';
import GraduationInvitation from './components/GraduationInvitation';

function App() {
  const [currentPage, setCurrentPage] = useState('invitation'); // Solo una página para este ejemplo

  return (
    <div className="App">
      {currentPage === 'invitation' && <GraduationInvitation />}
    </div>
  );
}

export default App;