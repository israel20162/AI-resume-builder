import { Outlet } from 'react-router'
import Navbar from './Header'

export default function Layout() {
    return (
        <div className="flex text-black h-screen bg-white dark:bg-gray-900 " >
            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 p-6 overflow-auto">
                    {/*react router outlet. displays children of the layout */}
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
