import React from 'react'
import { Outlet } from 'react-router'
import { Sidebar } from './Sidebar'

const Layout = () => {
  return (
    <div>
      <Sidebar isSidebarOpen={true} onClose={() => {}} />
      <main className="ml-64 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
