import { useState } from 'react'
import { Menu, X, User, Home, Cog ,File} from "lucide-react";
import { Link } from 'react-router';

import { SidebarItem } from './ui/SidebarItem';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarItems = [
        {
            href: '/dashboard',
            icon: <Home />,
            label: 'Home',
        },
        {
            href: '/profile',
            icon: <User />,
            label: 'Profile',

        },
        {
            href: '/settings',
            icon: <Cog />,
            label: 'Settings',

        },
    ];
    return (
        <aside className="drawer"> {/* drawer is a daisyui class, used for responsive sidebar menus */}
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="sidebar-drawer" className="drawer-button">
                    <button
                        onClick={() => setIsOpen(prev => !prev)}
                        className=" text-black transition dark:text-white bg-transparent border-0 shadow-none "
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-drawer" onClick={() => setIsOpen(prev => !prev)} aria-label="close sidebar" className="drawer-overlay"></label>
                <div className=' menu bg-slate-100 dark:bg-slate-800 flex flex-1 flex-col h-screen  transition-all duration-300 w-80 p-4'>
                    <div className="flex h-16 items-center justify-between border-b border-b-slate-500">
                        <Link href="/" className="flex items-center gap-2">
                            <File className="h-6 w-6" />
                            <span className="text-xl font-bold">AI Resume Builder</span>
                        </Link>

                        <label onClick={() => setIsOpen(prev => !prev)} htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay cursor-pointer">  <X size={24} /></label>
                    </div>


                    <div className=" flex flex-col px-3 py-8 space-y-4">
                        <ul>
                            {sidebarItems.map((item, index) => {

                                return (
                                    <SidebarItem
                                        key={index}
                                        href={item.href}
                                        icon={item.icon}
                                        label={item.label}
                                    />
                                );
                            })}
                        </ul>

                    </div>


                </div>

            </div>
        </aside>
    )
}
