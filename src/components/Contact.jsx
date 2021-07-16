import React , {useState} from 'react'

function Contact() {

    const [ data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    })

    function InputEvent (event) {
        const { name,value } = event.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function formSubmit(e) {
        e.preventDefault()
        alert(`My Name is ${data.fullname}. My mobile number is ${data.phone} with email id ${data.email} and Here is what i want to say: ${data.message}`)
}
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} autoComplete="off">
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter your name" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  type="number" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="+91-9876543210" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input 
  name="email"
  value={data.email}
  onChange={InputEvent}
  type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea 
  name="message"
  value={data.message}
  onChange={InputEvent}
  class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
