import React from 'react'
import { dacc } from '../Data/Data'
import { Link } from 'react-router-dom'
function Blog() {
  return (
    <>
    <div className=' backgggg text-center text-white'>
    <h1 className='fw-bold py-5'>Our Blog and News</h1>
    <p className='fw-bold text-center py-5'>Home>>Our Blog And News</p></div>
    <div className='container my-5'>
    <div className="row">
        <div className="col-lg-8 border pt-3 col-lg-6 col-12 backggg">
          <img
            className="w-100"
            src="https://templates.hibootstrap.com/grin/default/assets/images/blog-details.jpg"
          />

          <div className="admin d-flex pt-3 fw-bold fs-5">
            <p className="mx-3"><b>Posted On:</b> September 31, 2022 </p>
            <p className="mx-3"><b>Posted By:</b> Dr. SAHAB</p>
          </div>
          <h2 className="w-bold text-start py-5 border-top border-dark pt-5 fw-bold fs-1">
            Advancement in the field of Surgery
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ecespiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quci velit modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>

        <div className="col-lg-4">
        <div className="cardc p-5 backggg">
          <h5 className=" text-center colc">Recent Posts</h5>
        <ul className="list-group  shadow-lg  mb-5  bg-body rounded border-bottom">
  
  <li className="list-group-item p-3">
    <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://disin-react.hibootstrap.com/images/blog/blog2.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>World AIDS Day, designated on 1 December.</h5>
    <p>June 11, 2022</p></div></div></li>
  <li className="list-group-item p-3">
  <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://disin-react.hibootstrap.com/images/blog/blog1.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>World Tuberculosis Day, designated on 23 february.</h5>
    <p>March 11, 2022</p></div></div>
  </li>
  <li className="list-group-item p-3">
  <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://disin-react.hibootstrap.com/images/blog/blog1.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>World Cancer Day, designated on 18 December.</h5>
    <p>August 11, 2022</p></div></div>
  </li>

</ul>
</div>
       
          <div className="cardc p-3 my-5 backggg">
          <h4 className="colc text-center">Categories</h4>
        <ul className="list-group  shadow-lg  mb-5 bg-body rounded border-bottom">
  
  <li className="list-group-item p-3">Dental</li>
  <li className="list-group-item p-3"> Medical</li>
  <li className="list-group-item p-3"> Dentist</li>
  <li className="list-group-item p-3">Hygiene  </li>
  <li className="list-group-item p-3">  Hospital</li>
  <li className="list-group-item p-3"> Child Care</li>
  
  










</ul>
</div>


        </div>
      </div>
      <h3 className='fw-bold text-center colc py-5'>Our Latest Blogs</h3>
      <div className="row d-flex align-items-center justify-content-center">
         
         {dacc.slice(0,3).map((a)=>(
            <div className="col-lg-4 col-md-6 col-12 mx-auto py-3">
           <div className="card hi border-0 backggg mx-auto">
<img src={a.img} className="card-img-top " alt="..." />
<div className="card-body">
 <h5 className="card-title text-center colc fw-bold text-uppercase">{a.title}</h5>
 <p className="card-text text-center colc">{a.lorem}</p>
 <p className='border-botom'><a href='' className='text-decoration-none'>Read More</a></p>
 <div className='d-flex justify-content-between'>
  <p className='colc fw-bold'>By {a.name}</p>
  <p className='fw-bold'>2 comments</p>
 </div>

</div>
</div>
</div>
         ))}
     

      
   
     </div>
    </div>
   </>
  )
}

export default Blog