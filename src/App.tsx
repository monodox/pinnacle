import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/site/Home';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import Forgot from '@/pages/auth/Forgot';
import Reset from '@/pages/auth/Reset';
import Terms from '@/pages/legal/Terms';
import Privacy from '@/pages/legal/Privacy';
import Cookies from '@/pages/legal/Cookies';
import Dashboard from '@/pages/console/Dashboard';
import Settings from '@/pages/console/Settings';
import Reports from '@/pages/console/Reports';
import Agents from '@/pages/console/Agents';
import Research from '@/pages/console/Research';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Site */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />

        {/* Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />

        {/* Console */}
        <Route path="/console" element={<Dashboard />} />
        <Route path="/console/settings" element={<Settings />} />
        <Route path="/console/reports" element={<Reports />} />
        <Route path="/console/agents" element={<Agents />} />
        <Route path="/console/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
