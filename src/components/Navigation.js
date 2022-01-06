import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex flex-col justify-start h-screen">
      <nav className="text-sky-50 font-semibold py-3 px-2">
        <Link className="block hover:bg-sky-50 hover:text-sky-700 rounded-lg py-3 px-8" to="/">Dashboard</Link>
        <Link className="block hover:bg-sky-50 hover:text-sky-700 rounded-lg py-3 px-8" to="/input">Input</Link>
        <Link className="block hover:bg-sky-50 hover:text-sky-700 rounded-lg py-3 px-8" to="/report">Laporan</Link>
      </nav>
    </div>
  );
}

