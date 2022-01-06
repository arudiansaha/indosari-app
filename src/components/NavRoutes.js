import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Input from '../pages/Input';
import Report from '../pages/Report';
import UpdateReceived from '../components/UpdateReceived'
import UpdateSent from '../components/UpdateSent'

export default function NavRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/input" element={<Input />} />
        <Route path="/report" element={<Report />} />
        <Route path="/update/received/:id" element={<UpdateReceived />} />
        <Route path="/update/sent/:id" element={<UpdateSent />} />
      </Routes>
    </div>
  );
}
