import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import SignIn from './SignIn.jsx';
import Home from './Home.jsx';
import { gapi } from 'gapi-script';
import './App.css';

function App() {
  const clientid = "778147257206-3bf6reamgi3me18sg8kbbdjnn0nqqts5.apps.googleusercontent.com";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientid,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);
  }, [clientid]);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  const onSuccess = (res) => {
    setIsAuthenticated(true);
    console.log("Succeed", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Failed", res);
  };

  return (
    <div className="grandparent">
      <SignIn className="LandingPage" onSuccess={onSuccess} onFailure={onFailure} clientId={clientid} />
      if(isAuthenticated){ 
      <div className='grid-container '>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home />
      </div>
      }
    </div>
  );
}
export default App;
