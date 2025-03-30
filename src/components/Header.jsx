import  { useState } from "react";
import { Link } from "react-router";
import { Menu, X, } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
   
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
                       
                    </div>

                    {/* Right Side: Dark Mode & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="hidden md:block rounded-md bg-slate-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 dark:hover:bg-slate-500"
                                to="/login"
                            >
                                Login
                            </Link>

                            <Link
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:text-slate-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                to="/register"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Dark Mode Toggle */}
                            <ThemeToggle/>
                           

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(prev => !prev)}
                                // variant='ghost'
                                className="md:hidden p-2 text-black transition dark:text-white bg-transparent border-0 shadow-none "
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                        </div>
                    
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Dashboard
                    </Link>
                  
                    <div className="flex gap-4 m-4 p-4">
                        <Link
                            className="  md:block rounded-md bg-slate-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 dark:hover:bg-slate-500"
                            to="/login"
                        >
                            Login
                        </Link>

                        <Link
                            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:text-slate-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            to="/register"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

