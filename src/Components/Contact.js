import React, { useState } from 'react';

export const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return{
        ...preVal,
        [name]: value,
        
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name ${data.fullname}, Phone ${data.phone}, Email ${data.email}, Message ${data.msg}`
      // Your Respond has been recorded.
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name" 
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile #" 
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  />
              </div>
              
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="abc@gmail.com" 
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                >
                </textarea>
              </div>

              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
