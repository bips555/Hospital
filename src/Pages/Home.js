import React from "react";
import { Link } from "react-router-dom";
import vacc from "../Data/Data";
import { sacc } from "../Data/Data";

function Home() {
  return (
    <div className="backggg">
      <div className="container">
        <div className="row py-5 align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-12 pb-5">
            <div className="colc">
              <b className="fs-1">Caring Health</b>
            </div>
            <p className="fw-bold fs-6"> is Important Than All</p>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
            <div class="button gap-5">
              <Link to="/contact" className=" mx-auto btn1 p-3 text-decoration-none">
                
                Get Appointment
              </Link>
           
              
             
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              className="w-100"
              src="https://templates.hibootstrap.com/grin/default/assets/images/covid/banner.png"
            />
          </div>
        </div>
        <section className="p-3 my-5 box ">
          <div className="align-items-center justify-content-between d-flex py-5">
            <div>
           
              <h1 className="text-start">Your vaccination Status</h1>
            </div>
            <div>
              
            <Link to= '/doctors' className="text-decoration-none"> <p className="Meet the doctor mx-5 "><u>Meet the doctor</u></p></Link>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col-lg-3 col-md-6 col-12 my-3  mt-3  text-center">
              <input
                type="password"
                placeholder="Your name"
                className="rounded-3 border-0 shadow-lg p-2"
              ></input>
            </div>
            <div className="col-lg-3 col-md-6 col-12  my-3 mt-3 rounded-3 text-center">
              <input
                type="password"
                placeholder="Your Age"
                className="rounded-3 border-0 shadow-lg p-2"
              ></input>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center gap-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>{" "}
              <p className="mt-3">I am not a robot</p>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
           <Link to='/contact'>   <div className="btn1 p-3 text-decoration-none mx-auto text-center bg-light text-success">
                Get Appointment
              </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="vacc my-5">
        <h2 className="fw-bold colc text-center text-uppercase">why should one vaccine?  </h2>
          <div className="row d-flex align-items-center justify-content-center">
         
            {vacc.map((a)=>(
               <div className="col-lg-3 col-md-6 col-12 mx-auto py-3">
              <div className="card hi border-0 backgg mx-auto" style={{width: '70%',height:'50%'}}>
  <img src={a.img} className="card-img-top "style={{width: '100%'}} alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center colc fw-bold">{a.title}</h5>
    <p className="card-text text-center colc">{a.para}</p>
   
  </div>
</div>
  </div>
            ))}
         
      
        </div>
        </section>
        <section className="services py-5">
          <div className="container">
          <h2 className="fw-bold colc text-center text-uppercase">Our Services</h2>
          <div className="row d-flex align-items-center justify-content-center">
         
            {sacc.slice(0,3).map((a)=>(
               <div className="col-lg-4 col-md-6 col-12 mx-auto py-3">
              <div className="card hi border-0 backgg mx-auto" style={{width:'70%'}}>
  <img src={a.para} className="card-img-top " alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center colc fw-bold">{a.title}</h5>
    <p className="card-text text-center colc">{a.para1}</p>
   
  </div>
</div>
  </div>
            ))}
        ,<Link to='/services' className="text-decoration-none">    <div className="btn1 p-3 my-5 text-decoration-none mx-auto text-center ">
               Show More
              </div></Link>

         
      
        </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
