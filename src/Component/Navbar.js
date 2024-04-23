import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Doctors from '../Pages/Doctors';
import Blog from '../Pages/Blog';
import Services from '../Pages/Services';


import Contact from '../Pages/Contact';
function Navbar() {
  return (
   <>
   <section className='s sticky-top'> 
   <nav className="navbar navbar-expand-lg backg ">
  <div className="container-fluid d-flex justify-content-between">
  
  <div className='d-lg-none  d-md-block'>
  <a class="navbar-brand" href="#">
  <Link to="/">
  <img style={{width:'92px',height:'63px'}} src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Hospital-Logo-by-Friendesign-Acongraphic-5.jpg" /></Link>
</a>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav gap-lg-5  text-center text-xs-center mx-auto fs-5">
      
          <Link className="nav-link colc" aria-current="page" to="/">  <li className="nav-item p-2">Home </li></Link>
       
     
          <Link className="nav-link  colc" to="/services">   <li className="nav-item p-2">Services </li></Link>
     
       
          <Link className="nav-link  colc" to="/blog"> <li className="nav-item p-2">Blog </li></Link>
      
      
          <Link className="nav-link colc" to="/doctors">  <li className="nav-item p-2">Doctors </li></Link>
     
       
         
        
          <Link className="nav-link colc" to="/contact"><li className="nav-item p-2">Contact </li></Link>
       
      
      
      </ul>
    
    </div>
   
  </div>
</nav>
</section>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/services" element={<Services/>} />
  
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>


   </>
  )
}

export default Navbar