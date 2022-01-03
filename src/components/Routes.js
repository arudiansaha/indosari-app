import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Report from '../pages/Report';

export default function Routes() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/report" element={ <Report /> } />
      </Routes>
    </div>
  );
}
