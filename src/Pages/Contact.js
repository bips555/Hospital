import React from 'react'

function Contact() {
  return (<>
    <div className=' backgggg text-center text-white'>
    <h1 className='fw-bold py-5'>Contact Us</h1>
    <p className='fw-bold text-center py-5'>Home>>Contact</p></div>
    <div className='container'>
    <h3 className='fw-bold colc text-center my-5'>Drop Us Message For Any Query</h3>

    <p className='text-center pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolores.</p>
    </div>
    <div className='backggg my-3 text-center py-5'>
 
  <form className="row g-5 py-5 container mx-auto">
  <div className="col-md-6 ">
    
    <input type="name" class="form-control" id="inputEmail4" placeholder='Enter Full Name*'/>
  </div>
  <div className="col-md-6 ">
    
    <input type="email" class="form-control" id="inputPassword4" placeholder='Email Address'/>
  </div>
  <div className="col-md-6">
    
    <input type="subject" class="form-control" id="inputEmail4" placeholder='Subject'/>
  </div>
  <div className="col-md-6 ">
   
    <input type="phone_no" class="form-control" id="inputPassword4" placeholder='Phone Number'/>
  </div>
  
  <div className="col-md-12 mx-auto">
   
  <div class="mb-3 col-lg-6">
  
  <textarea class="form-control " id="exampleFormControlTextarea1" rows="4" placeholder='Your Messages... '></textarea>
</div>
<div class="d-grid gap-3 my-5 ">
  
  <button class="btn btn-primary" type="button">Send Message</button>
</div>
   
  </div>
  
</form>
</div>
   
   </>)
}

export default Contact