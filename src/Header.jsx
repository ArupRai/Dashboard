import 
 {BsFillBellFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <span className="headerlogo">Dashboard</span>
        </div>
        <div className='header-right'>
            <input type="text" className='headersearch' placeholder='Search...   '/>
            <BsSearch  className='icon'/>
            <BsFillBellFill className='icon'/>
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <BsPersonCircle className='icon'/>
            {/* <img src="'https://lh3.googleusercontent.com/a/ACg8ocIwD0op6l9NsdmrC0out-qkJ57LsJqXuTXWbqR5xt4NGQ=s96-c'" alt="" /> */}
        </div>
    </header>
  )
}

export default Header