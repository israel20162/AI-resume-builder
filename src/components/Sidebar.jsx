import { useState } from 'react'
import { Menu, X, User, Home, Cog ,File,Clipboard} from "lucide-react";
import { Link } from 'react-router';

import { SidebarItem } from './ui/SidebarItem';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarItems = [
        {
            href: '',
            icon: <Home />,
            label: 'Home',
        },
        {
            href: '/resume-builder',
            icon: <Clipboard />,
            label: 'Resume Builder',

        },
        {
            href: '/settings',
            icon: <Cog />,
            label: 'Settings',

        },
    ];
    return (
        <aside className="drawer dark:text-white w-0 flex items-center"> {/* drawer is a daisyui class, used for responsive sidebar menus */}
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="sidebar-drawer" className="drawer-button">
                    <button
                        onClick={() => setIsOpen(prev => !prev)}
                        className=" text-black transition dark:text-white bg-transparent border-0 shadow-none m-0 md:m-4"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-drawer" onClick={() => setIsOpen(prev => !prev)} aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='z-50 menu bg-slate-100 dark:bg-slate-800 flex flex-1 flex-col h-screen  transition-all duration-300 w-80 p-4'>
                    <div className="flex h-16 items-center justify-between border-b border-b-slate-500">
                        <Link href="/" className="flex items-center gap-2">
                            <File className="h-6 w-6" />
                            <span className="text-xl font-bold">AI Resume Builder</span>
                        </Link>

                        <label onClick={() => setIsOpen(prev => !prev)} htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay cursor-pointer">  <X size={24} /></label>
                    </div>


                  
                        <ul className='flex flex-col px-3 py-8 space-y-4'>
                            {sidebarItems.map((item, index) => {

                                return (
                                    <SidebarItem
                                        key={index}
                                        href={`/dashboard${item.href}`}
                                        icon={item.icon}
                                        label={item.label}
                                    />
                                );
                            })}
                        </ul>

                   


                </div>

            </div>
        </aside>
    )
}
