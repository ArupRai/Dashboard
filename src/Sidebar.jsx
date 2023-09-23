
import 
{BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck }
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <div className='icon_header'/>Board. 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                {/* <a href=""> */}
                    <BsGrid1X2Fill className='icon'/> Dashboard
                {/* </a> */}
            </li>
            <li className='sidebar-list-item'>
                {/* <a href=""> */}
                    <BsFillArchiveFill className='icon'/> Transactions
                {/* </a> */}
            </li>
            <li className='sidebar-list-item'>
                {/* <a href=""> */}
                    <BsFillGrid3X3GapFill className='icon'/> Schedules
                {/* </a> */}
            </li>
            <li className='sidebar-list-item'>
                {/* <a href=""> */}
                    <BsPeopleFill className='icon'/> Users
                {/* </a> */}
            </li>
            <li className='sidebar-list-item'>
                {/* <a href=""> */}
                    <BsListCheck className='icon'/> Settings
                {/* </a> */}
            </li>
        </ul>
        <ul className='sidebar-list sidebar-revlist'>
        <li className='sidebar-list-item'>
            Help
            </li>
        <li className='sidebar-list-item'>
            Contact Us
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar