import { Redirect } from 'react-router-dom'
import Logo from '../../Assets/img/Arava1.png'
import homeLogo from '../../Assets/img/home.png'
import Vector from '../../Assets/img/Vector.png'
import Moon from '../../Assets/img/moon.png'
import Bell from '../../Assets/img/bell.png'
import Profile from '../../Assets/img/Profile.png'

function Home() {

  let token = window.localStorage.getItem("token");

  if( !token){
    return <Redirect to='login'/>
  }

  return (
    <>
      <section className="home">
        <div className="navbar">
          <div className="menu">
          <img src={Logo} alt="" />
          <img src={Vector} alt="" />
          </div>
          <ul>
            <li>
              <img src={homeLogo} alt="logo" />
              <span>Asosoy</span>
            </li>
          </ul>
        </div>
        <div className="main">
            <div className="top_header">
              <h1>Asosiy</h1>
              <div className="user">
                <img src={Moon} alt="moon" />
                <img src={Bell} alt="Bell" />
                <img src={Profile} alt="Profile" />
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
