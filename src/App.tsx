import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<div>dashboard</div>} />
        <Route path="/management" element={<div>management</div>} />
      </Routes>
    </Router>
  );
}

export default App;
