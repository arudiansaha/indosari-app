import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Input from '../pages/Input';
import Report from '../pages/Report';

export default function NavRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/input" element={<Input />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}
