// src/components/Navbar.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navItems = [
  { number: '01.', label: 'Services', href: '#' },
  { number: '02.', label: 'Work', href: '#' },
  { number: '03.', label: 'Company', href: '#' },
  { number: '04.', label: 'Careers', href: '#' },
];

const Navbar = () => {
  return (
    <div className="mt-6 max-w-[88rem] mx-auto border border-[#343434] rounded">
      <nav className="bg-transparent flex items-center justify-between px-4 py-3">
        {/* Left Section: Logo + Nav Items */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full border-2  text-white font-bold text-lg">
            TM
          </div>

          {/* Nav Links */}
          <ul className="flex ms-28 space-x-12 text-white font-semibold">
            {navItems.map((item) => (
              <li key={item.label} className="flex flex-col leading-tight">
                <span className="text-sm text-gray-400">{item.number}</span>
                <a href={item.href} className="hover:text-gray-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Contact Button */}
    <Button className="group flex items-center gap-4 font-semibold text-white bg-transparent hover:bg-transparent">
      Contact

      {/* Circle container stays still */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </Button>

      </nav>
    </div>
  );
};

export default Navbar;
