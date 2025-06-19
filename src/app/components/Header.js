'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="bg-black border-bottom border-secondary sticky-top">
      <nav className="container py-3 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Link href="/" className="text-decoration-none">
          <h2 className="fw-bold text-light m-0">Arslan.dev</h2>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="d-md-none btn btn-outline-light"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Nav Links */}
        <div
          className={`d-md-flex flex-column flex-md-row gap-4 ${
            menuOpen ? 'd-flex mt-3' : 'd-none'
          } d-md-flex align-items-md-center`}
        >
          <Link href="/" className="text-light text-decoration-none fw-medium">
            Home
          </Link>
          <Link href="/about" className="text-light text-decoration-none fw-medium">
            About
          </Link>
          <Link href="/projects" className="text-light text-decoration-none fw-medium">
            Projects
          </Link>
          <Link href="/contact" className="btn btn-outline-light btn-sm">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
