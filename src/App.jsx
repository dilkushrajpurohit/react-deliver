import React from 'react'; 
import img1 from "./images/st.jpg"
import img2 from "./images/925816117s.jpg"
import img3 from "./images/st-johns-abu-road-1.jpg"
const st1={
  'position':'relative'
}
// import {Route,Switch} from 'react-router-dom'
// import About from './About';
// import Contact from './Contact'
// import {NavLink} from 'react-router-dom';

// const App =()=>{
//     return(<>
//       <Switch>
//         <Route exact path='/' component={About}/>
//         <Route path='/contact' component={Contact}/>
        
//     </Switch>
//     {/* <About/>
//     <Contact/> */}
  
//     </>)
// }
const Header=()=>{
  return(
    <nav className='navbar navbar-expand-lg navbar-light bg-info'>
      <div className='container-fluid'>
        <a href="/h" className='navbar-brand'>Navbar</a>
        <button href="/h" className='navbar-brand' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='toggle navigation'>
    <span className='navbar-toogle-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href="/g" className='nav-link active' aria-current='page'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="/m" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="/nasme" className='nav-link' >Home</a>
            </li>
            <li className='nav-item'>
              <a href="/About" className='nav-link' >Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

//--------------------------------------------->
const Slider=()=>{
  return(
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." height='600px' style={st1}></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." height='600px' style={st1}></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." height='600px' style={st1}></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
//------------------------------------------------------------>


export default Header;
export {Slider};
