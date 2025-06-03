// src/components/Navbar.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Contact from "../../components/ui/Contact";

const navItems = [
  { number: '01.', label: 'Services', href: '#' },
  { number: '02.', label: 'Work', href: '#' },
  { number: '03.', label: 'Company', href: '#' },
  { number: '04.', label: 'Careers', href: '#' },
];

const navLinkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.4 },
  }),
};

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, borderColor: 'rgba(52,52,52,0)' }}
      animate={{ opacity: 1, borderColor: '#343434' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="mt-6 max-w-[88rem] mx-auto border border-[#343434] "
    >
      <nav className="bg-transparent font-grotesk font-normal flex items-center justify-between px-4 py-3">
        {/* Left Section: Logo + Nav Items */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center justify-center w-14 h-14 rounded-full border-2 text-white font-bold text-lg"
          >
            TM
          </motion.div>

          {/* Nav Links */}
          <ul className="flex ms-28 space-x-12 text-white font-semibold relative">
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                custom={i}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col leading-tight group relative"
              >
                <span className="text-sm text-gray-400">{item.number}</span>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition-colors duration-300 relative pb-1"
                >
                  {item.label}

                  {/* underline animation */}

                </a>

                {/* navbar border highlight effect */}
                <span className="absolute -bottom-[20px] left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full" />

              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: Contact Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Button className="group text-md flex items-center gap-4 font-semibold text-white bg-transparent hover:bg-transparent">
            Contact
            <Contact />
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
