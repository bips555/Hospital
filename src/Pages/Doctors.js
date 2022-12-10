import React from 'react'
import { Link } from 'react-router-dom'
import { doc } from '../Data/Data'
function Doctors() {
  return (
    <>
    <div className=' backgggg text-center text-white'>
    <h1 className='fw-bold py-5'>Our Doctors</h1>
    <p className='fw-bold text-center py-5'>Home>>Doctors</p></div>
    <div className='container'>
    <div className="row d-flex align-items-center justify-content-center my-5">
         
         {doc.map((a)=>(
            <div className="col-lg-4 col-md-6 col-12 mx-auto py-3 ">
           <div className="card hi border-0 backgg mx-auto his backggg">
<img src={a.img} className="card-img-top " alt="..." />
<div className="card-body">
 <h5 className="card-title text-center colc fw-bold">{a.title}</h5>
 <p className="card-text text-center colc">{a.pos}</p>
 <Link to='/contact'> <div className="btn1 p-3 hisa text-decoration-none mx-auto text-center bg-light text-success">
                Get Appointment
              </div>
              </Link>

</div>
</div>
</div>
         ))}

      
   
     </div>
    </div>
    
    
    </>)
}

export default Doctors