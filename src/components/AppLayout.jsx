import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import { useSelector } from 'react-redux'
import Sidebar from '../features/sidebar/Sidebar'

export default function AppLayout() {
    const showSidebar = useSelector(state => state.sidebar.isOpen)
    return (
        <>
            {showSidebar && <Sidebar />}
            <Navbar />
            <Outlet />
            <BottomNav />
        </>
    )
}
