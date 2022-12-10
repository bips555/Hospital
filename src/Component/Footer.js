import React from "react";

function Footer() {
  return (
    <>
      <footer className="db text-white p-3">
        <div className="container border-bottom  ">
          <div className="row d-flex">
            <div className="col-lg-3 col-md-6 col-12 col-sm-6 lh-lg">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Hospital-Logo-by-Friendesign-Acongraphic-5.jpg"
                className="w-25 py-3"
              />
              <p>
                Lorem ipsum dolor sit amet 
                <br></br>elit sed do eiusmod
                tempor ut labore dolore magna consectetur 
              </p>
              <div className="box d-flex">
                <img
                  src="https://img.freepik.com/premium-vector/vector-flat-illustration-man-doctor-white-coat-with-medical-mask-stethoscope-his-neck_364586-608.jpg"
                  className="w-25"
                />
                <ul className="mx-3 my-1 list-unstyled">
                  <li>Dr.Subedi</li>
                  <li>CEO and Founder</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6 lh-lg">
              <h3 className="py-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li> About us</li>
                <li> Blog</li>
                <li> Our Expertise</li>
                <li> Faq</li>
                <li>Doctors</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
              <h3 className="py-3">News & Blog</h3>
              <div className="box d-flex">
                <img
                  src="https://cdn.bcm.edu/sites/default/files/styles/two_thirds_width_component_image/public/media/images/istock-000017843026medium.png?h=b76d0694&itok=DArAUifx"
                  className="w-25 py-2"
                />
                <ul className="mx-3 my-1 list-unstyled">
                  <li className="backgg">By Henry Potter</li>
                  <li>Why do we feel sick?</li>
                </ul>
              </div>
              <div className="box d-flex">
                <img
                  src="https://www.indiafilings.com/learn/wp-content/uploads/2016/02/healthcare-clinic.jpg"
                  className="w-25 py-2"
                />
                <ul className="mx-3 my-1 list-unstyled">
                  <li className="backgg">By Fenry Gotter</li>
                  <li>regular checkup for good health</li>
                </ul>
              </div>
              <div className="box d-flex">
                <img
                  src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/healthcare/doctor.jpg?1480971680"
                  className="w-25 py-2"
                />
                <ul className="mx-3 my-1 list-unstyled">
                  <li className="backgg">By Genry Cotter</li>
                  <li>Read your anatomy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
              <h3 className="py-3">Contact </h3>
              <div className="box d-flex">
              <i class="bi bi-telephone-plus-fill fs-2 mt-1"></i>
                <ul className="mx-3 my-1 list-unstyled">
               
                  <li className="backgg"> Call Today</li>
                  <li>+(977) 9840112111</li>
                </ul>
              </div>
              <div className="box d-flex">
              <i class="bi bi-clock-fill fs-2 mt-1"></i>
                <ul className="mx-3 my-1 list-unstyled">
              
                  <li className="backgg">Open Hour</li>
                  <li>09:00 AM to 18:00 PM</li>
                </ul>
              </div>
              <div className="box d-flex">
              <i class="bi bi-pin-map-fill fs-2 mt-1"></i>
                <ul className="mx-3 my-1 list-unstyled">
              
                  <li className="backgg">Our Location</li>
                  <li> Dhapasi 06, Kathmandu, Nepal</li>
                </ul>
              </div>
             

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-3">
            <div className="col-lg-4 fs-3 mx-auto d-flex gap-4 ">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-wechat"></i>
              <i class="bi bi-snapchat"></i>
            </div>
            <div className="col-lg-8 backgg">
              Copyright. All Rights Reserved By White CIty Hopsital
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
