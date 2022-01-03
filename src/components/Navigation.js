import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav className="bg-gray text-gray-700 font-semibold w-64 py-3 px-2">
        <Link className="block hover:bg-blue-200 rounded-lg py-3 px-8" to="/dasboard">Dashboard</Link>
        <Link className="block hover:bg-blue-200 rounded-lg py-3 px-8" to="/Report">Report</Link>
      </nav>
    </div>
  );
}

