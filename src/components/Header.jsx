import  { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                        AI Resume
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
                            Dashboard
                        </Link>
                        <Link to="/resume" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
                            Resume Builder
                        </Link>
                        <Link to="/jobs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
                            Job Search
                        </Link>
                    </div>

                    {/* Right Side: Dark Mode & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Dashboard
                    </Link>
                    <Link to="/resume" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Resume Builder
                    </Link>
                    <Link to="/jobs" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Job Search
                    </Link>
                </div>
            )}
        </nav>
    )
}

