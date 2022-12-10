import React from 'react'
import { sacc } from '../Data/Data'

function Services() {
  return (
    <>
   <div className=' backgggg text-center text-white my-5'>
    <h1 className='fw-bold py-5'>Our Sevices</h1>
    <p className='fw-bold text-center py-5'>Home>>Services</p></div>
    <div className='container'>
    <div className="row d-flex align-items-center  justify-content-center">
         
         {sacc.map((a)=>(
            <div className="col-lg-3 col-md-6 col-12  mx-auto py-3">
           <div className="card hi border-0 backgg backggg mx-auto">
<img src={a.para} className="card-img-top " alt="..." />
<div className="card-body">
 <h5 className="card-title text-center colc fw-bold">{a.title}</h5>
 <p className="card-text text-center colc">{a.para1}</p>

</div>
</div>
</div>
         ))}

      
   
     </div>
    </div>
    
   
   
   </>)
}

export default Services