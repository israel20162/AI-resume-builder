import React from 'react'
import { Outlet } from 'react-router'
import Header from './header'
export default function Layout() {
  return (
      <div className="flex text-black h-screen bg-white dark:bg-gray-900">
          {/* Sidebar for large screens */}
        

          {/* Main Content Area */}
          <div className="flex flex-col flex-1">
              <Header />
              <main className="flex-1 p-6 overflow-auto">
                  <Outlet />
              </main>
          </div>
      </div>
  )
}
