import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Components'

export default function Layout() {
  return (
    <div className="relative flex h-[100vh]" >
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
    
  )
}
