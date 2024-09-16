import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-800">DevSecOps Doctor</span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/compare" className="text-gray-600 hover:text-gray-800">Compare</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
          <Link href="/docs" className="text-gray-600 hover:text-gray-800">Documentation</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;