import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { pathnames } from './utils/conts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path={pathnames.dashboard} element={<Dashboard />} />
          <Route path={pathnames.management} element={<div>management</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
