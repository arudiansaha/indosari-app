import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex flex-col justify-start h-screen">
      <nav className="text-blue-400 font-semibold py-3 px-2">
        <Link className="block hover:bg-blue-100 rounded-lg py-3 px-8" to="/">Dashboard</Link>
        <Link className="block hover:bg-blue-100 rounded-lg py-3 px-8" to="/input">Input</Link>
        <Link className="block hover:bg-blue-100 rounded-lg py-3 px-8" to="/report">Laporan</Link>
      </nav>
    </div>
  );
}

