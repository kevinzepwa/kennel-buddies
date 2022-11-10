import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-5 bg-dark">
        <div className="row px-3">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white">Hotline Numbers</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">0712345678</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">0723456789</a></li>
              {/* <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li> */}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white">About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ask To Meet</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Know More</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Get Notified</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Shop</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white">Customer Care</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return Policy</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Warrant</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Refund</a></li>
              {/* <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li> */}
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 className="text-white">Subscribe to our newsletter</h5>
              <p className="text-white">Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
