import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex flex-col justify-start h-screen">
      <nav className="text-gray-600 font-semibold py-2 px-2">
        <Link className="block hover:bg-gray-100 hover:text-gray-800 rounded-lg py-2 px-8" to="/">Dashboard</Link>
        <Link className="block hover:bg-gray-100 hover:text-gray-800 rounded-lg py-2 px-8" to="/input">Input</Link>
        <Link className="block hover:bg-gray-100 hover:text-gray-800 rounded-lg py-2 px-8" to="/report">Laporan</Link>
      </nav>
    </div>
  );
}

