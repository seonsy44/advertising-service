import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AdManagement from './pages/AdManagement';
import { pathnames } from './utils/conts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path={pathnames.dashboard} element={<Dashboard />} />
          <Route path={pathnames.management} element={<AdManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
