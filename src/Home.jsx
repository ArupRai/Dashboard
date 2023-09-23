import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } 
 from 'recharts';
import Model from "react-modal"
import { useState } from 'react';

function switchContent() {
  var content1 = document.querySelector('.content1');
  var content2 = document.querySelector('.content2');
  var next = document.querySelector('.next');
  var back = document.querySelector('.back');
  var done = document.querySelector('.done');
  
  if (content1.style.display !== 'none') {
    content1.style.display = 'none'; 
    content2.style.display = 'block'; 
  } else {
    content1.style.display = 'block';
    content2.style.display = 'none'; 
  }
  
  if(content1.style.display !== 'none'){
    back.style.display = 'none';
    done.style.display = 'none';
    next.style.display = 'inline-block';
  }
  else{
    back.style.display = 'inline-block';
    done.style.display = 'inline-block';
    next.style.display = 'none';
  }
}


function Profile() {
  const [visible, setVisible] = useState(false);
  
  const openModal = () => {
    setVisible(true);
  };
  
  const closeModal = () => {
    setVisible(false);
    
  };
  
  const updateModal = () => {

    var proinitial = document.querySelector('.profile-initial');
    var proheading = document.querySelector('.profile-heading');
    var prouser = document.querySelector('.profile-user');
    var whatsapp = document.querySelector('.whatsapp');
    var insta = document.querySelector('.insta');
    var email = document.querySelector('.email');
    var youtu = document.querySelector('.youtu');
    
    setVisible(false);
    proinitial.style.display='none';
    proheading.style.display='block';
    prouser.style.display='flex';

    proheading.innerHTML= document.getElementById('basicname').value;
    whatsapp.innerHTML= document.getElementById('basicnumber').value;
    insta.innerHTML= document.getElementById('instagram').value;
    email.innerHTML= document.getElementById('basicemail').value;
    youtu.innerHTML= document.getElementById('youtube').value;


  };

  return (
    <div className='profile'>
      <div className="profile-initial"><button onClick={openModal}>Add Profile</button></div>
      <h2 className='profile-heading'>John Doe</h2>
          <div className="profile-user">
            <img src="" alt="" />
            <div className="usercontent whatsapp">abcd</div>
          </div>
          <div className="profile-user">
            <img src="" alt="" />
            <div className="usercontent insta">abcd</div>
          </div>
          <div className="profile-user">
            <img src="" alt="" />
            <div className="usercontent email">abcd</div> 
          </div>
          <div className="profile-user">
            <img src="" alt="" />
            <div className="usercontent youtu">abcd</div>
          </div>
      <Model
        isOpen={visible}
        onRequestClose={closeModal}
        contentLabel="Profile Modal"
        ariaHideApp={false} // to prevent accessibility warnings
        className="custom-modal" 
        overlayClassName="custom-modal-overlay" // custom overlay CSS class name 
      >
        <div className="modal-content">
          <h3>Add New Profile</h3>
          <div className="flexme">
            <div className="opt basic">Basic</div>
            <div className="opt content social">Contact</div>
          </div>
          <div className="content1">
            <p>Enter Name*</p>
            <input className="basic" type="text" placeholder="Eg. John Doe" id='basicname' />
            <p>Enter Email*</p>
            <input className="basic" type="email" id="basicemail" placeholder='Eg. John@xyz.com'/>
            <p>Enter Phone*</p>
            <input className="basic" type="tel" id="basicnumber" placeholder='Eg.  9123456789' />
          </div>

          <div className="content2">
            <span>Instagram link*</span><span>(Optional)</span>
            <input className="social" id="instagram"type="text" placeholder='Eg. ..instagram.com/username' name='instagram' />
            <span>Youtube link*</span><span>(Optional)</span>
            <input className="social" type="url" name="youtube" id="youtube" placeholder='Eg. ..youtebe/username'/>
          </div>

          <button onClick={switchContent} className="modal-button back">
            Back
          </button>
          <button onClick={switchContent} className="modal-button next">
            Next
          </button>
          <button onClick={updateModal} className="modal-button done">
            Done
          </button>
        </div>
      </Model>
    </div>
  );
}


function Home() {

    const data = [
        {name: 'Week 1',uv: 4000,pv: 2400,amt: 2400 },
        {name: 'Week 2',uv: 3000,pv: 1398,amt: 2210 },
        {name: 'Week 3',uv: 2000,pv: 9800,amt: 2290 },
        {name: 'Week 4',uv: 2780,pv: 3908,amt: 2000 },];
     
      const data2 = [
  {name: "Geeksforgeeks", students: 400 },
  {name: "Technical scripter", students: 700 },
  {name: 'Geek-i-knack', students: 200 },
  {name: 'Geek-o-mania', students: 1000 }];

  return (
    <main className='main-container'>
      <div className="main-cards">
            <div className='card one'>
                <div className='card-inner'>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>PRODUCTS</h3>
                <div className="figure">
                  <h1 >300</h1>
                  <div className="times">1.2x</div>
                  </div>
            </div>
            <div className='card two'>
                <div className='card-inner'>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>CATEGORIES</h3>
                <div className="figure">
                  <h1 >300,23,440</h1>
                  <div className="times">1.2x</div>
                  </div>
            </div>
            <div className='card three'>
                <div className='card-inner'>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3>CUSTOMERS</h3>
                <div className="figure">
                  <h1 >300</h1>
                  <div className="times">1.2x</div>
                  </div>
            </div>
            <div className='card four'>
                <div className='card-inner'>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h3>ALERTS</h3>
                <div className="figure">
                  <h1 >300</h1>
                  <div className="times">1.2x</div>
                  </div>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#98D89E" />
                <Bar dataKey="uv" fill="#EE8484" />
                </BarChart>
            </ResponsiveContainer> 
        </div>
        <div className="pie">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={200} height={200} className='donut'>
                <Pie data={data2} dataKey="students" outerRadius={120}
                innerRadius={90} fill="green" className='donut'/>
              </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="profile">
            <Profile/>
        </div>  
    </main>
  )
}

export default Home