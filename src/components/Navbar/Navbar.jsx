import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <h1 className={styles.logo}>Security Data Networks Web</h1>
      <svg onClick={() => setIsMenuOpen(!isMenuOpen)}
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
      {isMenuOpen ?
        <>
          <nav className={styles.navbar}>
            {/* Logo */}


            {/* Lista de enlaces */}
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
            </ul>
          </nav>
        </>
        : ''
      }

    </>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Botón de menú hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 m-4 bg-gray-800 text-white rounded-md md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú lateral */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}>
        <h2 className="text-xl font-bold mb-6">Security Data Networks</h2>
        <ul className="space-y-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About Me</Link></li>
          <li><Link to="/curriculum" className="hover:text-gray-300">Curriculum</Link></li>
          <li><Link to="/schedule" className="hover:text-gray-300">Schedule</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
