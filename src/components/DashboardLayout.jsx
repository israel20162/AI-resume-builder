import { Search, Bell, User } from 'lucide-react';
import { Outlet, Link } from 'react-router'
import Sidebar from './Sidebar'
import Navbar from './Header'
import { Button } from './ui/Button'
import { useState } from 'react';

export default function DashboardLayout() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="flex mx-auto text-black h-screen bg-white dark:bg-gray-900 " >
            {/* Main Content Area */}
            <div className="flex flex-col flex-1  ">
                <Navbar />
                <div className='flex flex-nowrap items-center justify-between gap-6 px-4 py-3 border-b-accent'>
                    <Sidebar />
                    
                    <div className='bg-transparent w-full flex justify-between items-center  lg:pl-12 dark:text-white '>
                        <span>Untitled Resume </span>
                        <div>
                            <Button className='bg-teal-500 dark:bg-teal-700 text-white  '>
                                + Create Resume
                            </Button>
                        </div>
                    </div>
                </div>
                <main className="flex-1  overflow-auto p-8 ">
                    {/*react router outlet. displays children of the layout */}
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
