import React from 'react';

const Contact = () => {
  return (
    <>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">For the love of pets!</h1><br></br>
            <p class="lead fw-normal">We welcome your feedback and suggestions. Use our Contact Us page to tell us what we’re doing right or what we can improve on. 
            <br/><blockquote>‘Until one has loved an animal, a part of one’s soul remains unawakened.’</blockquote>   <cite title="Anatole France">~Anatole France</cite></p>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="px-4 py-5 my-5">
            <div className="container col-xl-8 col-xxl-6 px-4 py-5">
                <h1 className="text-center">Contact Us!</h1><br></br>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input type="names" class="form-control" id="names"></input><br></br>
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input><br></br>
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input type="phoneNumber" class="form-control" id="phoneNumber" placeholder="+254 xxx xxx xxx"></input><br></br>
                    <label for="exampleFormControlInput1">Message</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="..."></input><br></br>

                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
