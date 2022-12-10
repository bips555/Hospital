import React from "react";

export default function Header() {
  return (
    <>
      <header className="db text-white d-none d-xl-block ">
        <div className="container">
          <div className="row  d-flex align-items-center justify-content-between">
            <div className="col-lg-2">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Hospital-Logo-by-Friendesign-Acongraphic-5.jpg"
                className="w-50"
              />
            </div>
            <div className="col-lg-6">
              <ul className="d-flex text-decoration-none list-unstyled  my-4 justify-content-center gap-5">
               
                <li className="fwbold"> <i class="bi bi-geo-alt-fill backgg mx-1"></i> Dhapasi 06, Kathmandu, Nepal</li>
                
                <li className="fwbold"><i class="bi bi-envelope-fill backgg mx-1"></i> 06dhapasi@Whitecity.com</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul className="mx-3 my-1 text-decoration-none list-unstyled  justify-content-end">
                <li className="backgg"> Call Today</li>

                <li className="fwbold">+(983)9112146</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul className="text-decoration-none my-1 list-unstyled justify-content-end">
                <li className="backgg"> Open Hour</li>
                <li className="fwbold">09:00 AM to 18:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
