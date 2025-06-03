import React from 'react';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen text-white">
            <Navbar />
            <main className="p-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
