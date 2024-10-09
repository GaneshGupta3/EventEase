import React from "react";
import "./AboutUs.css";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();

  const handleHomePage = ()=>{
    navigate("/");
  }
  return (
    <div className="about-us">
      <div className="header-header">
        <div className="frame">
          <div className="frame-wrapper">
            <div className="div" />
          </div>
          <div className="frame-2" style={{cursor : "pointer"}}>
            <div className="frame-3">
              <div className="text-wrapper" onClick={handleHomePage}>Home</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper">Listing</div>
              <img
                className="icon-arrow-down"
                alt="Icon arrow down"
                src="https://c.animaapp.com/gw9BBciN/img/icon---16px---arrow---down-2.svg"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper">Agents</div>
              <img
                className="icon-arrow-down"
                alt="Icon arrow down"
                src="https://c.animaapp.com/gw9BBciN/img/icon---16px---arrow---down-2.svg"
              />
            </div>
            <div className="text-wrapper-2">Property</div>
            <div className="text-wrapper">Blog</div>
          </div>
          <div className="frame-4">
            <div className="button-anchor-text">
              <img
                className="icon-search"
                alt="Icon search"
                src="https://c.animaapp.com/gw9BBciN/img/icon---24px---search.svg"
              />
              <div className="icon-after">Search</div>
            </div>
            <div className="button-small-v">
              <Link to={"/user/login"} className="text-wrapper-3">Log in</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="div-wrapper">
        <div className="frame-5">
          <div className="title">
            <p className="reimagining-real">
              Reimagining event spaces to make booking easier for your special moments.
            </p>
            <p className="on-the-other-hand-we">
              Whether it&#39;s a wedding, corporate event, or celebration, <br />
              we provide seamless booking for a variety of halls. <br />
              Find the perfect venue for any occasion with ease and convenience
            </p>
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/gw9BBciN/img/rectangle-5592.png" />
              <img className="img" alt="Rectangle" src="https://c.animaapp.com/gw9BBciN/img/rectangle-5593@2x.png" />
            </div>
            <div className="frame-7">
              <img className="img" alt="Rectangle" src="https://c.animaapp.com/gw9BBciN/img/rectangle-5595@2x.png" />
              <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/gw9BBciN/img/rectangle-5594.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="number-count">
        <div className="frame-8">
          <div className="number-count-2">
            <div className="icon">
              <img className="frame-9" alt="Frame" src="https://c.animaapp.com/gw9BBciN/img/frame.svg" />
            </div>
            <div className="frame-10">
              <div className="text-wrapper-4">$15.4M</div>
              <p className="text-wrapper-5">Total Event Booking Value Processed</p>
            </div>
          </div>
          <div className="number-count-2">
            <div className="icon">
              <img className="frame-9" alt="Frame" src="https://c.animaapp.com/gw9BBciN/img/frame-1.svg" />
            </div>
            <div className="frame-10">
              <div className="text-wrapper-4">25K+</div>
              <div className="text-wrapper-5">Events Successfully Booked</div>
            </div>
          </div>
          <div className="number-count-2">
            <div className="icon-2">
              <div className="bg" />
              <img className="img-2" alt="Group" src="https://c.animaapp.com/gw9BBciN/img/icon---happy@2x.png" />
            </div>
            <div className="frame-10">
              <div className="text-wrapper-4">500</div>
              <div className="text-wrapper-5">Daily Venue Reservations</div>
            </div>
          </div>
          <div className="number-count-2">
            <div className="icon-2">
              <div className="bg-2" />
              <img className="img-2" alt="Icon happy" src="https://c.animaapp.com/gw9BBciN/img/icon---happy@2x.png" />
            </div>
            <div className="frame-10">
              <div className="text-wrapper-4">600+</div>
              <div className="text-wrapper-5">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about">
          <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/gw9BBciN/img/rectangle-20.png" />
          <div className="content">
            <div className="frame-11">
              <div className="text-wrapper-6">Our vision is simple.</div>
              <p className="lorem-ipsum-is">
                To simplify event planning by offering accessible, beautiful venues for every occasion, ensuring
                memorable experiences for all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="frame-12">
          <div className="frame-13">
            <div className="frame-14">
              <div className="frame-15">
                <div className="frame-16" />
              </div>
              <div className="frame-17">
                <a
                  href="https://maps.google.com/maps?rlz=1C1CHBF_enIN1060IN1060&amp;gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIGCAAQRRg5Mg8IARAuGEMYsQMYgAQYigUyDAgCEC4YJxiABBiKBTIYCAMQLhhDGIMBGK8BGMcBGLEDGIAEGIoFMg0IBBAuGIMBGLEDGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDM0NTZqMGoxqAIAsAIA&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=in&amp;sa=X&amp;ftid=0x3be7c8add9569a29:0xb7ad04bf9a389df7&amp;ved=2ahUKEwjKrebS-OWIAxXQzzgGHUQVCd0Q4kB6BAhHEAE"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className="element-bervely-hill-ave">
                    Hashu Adwani Memorial Complex, Collector&#39;s Colony, Chembur, Mumbai, Maharashtra 400074
                  </p>
                </a>
                <div className="frame-18">
                  <div className="element-info">+91 87797 06761</div>
                  <div className="element-info-2">2022.ganesh.gupta@ves.ac.in</div>
                </div>
                <img
                  className="social-media"
                  alt="Social media"
                  src="https://c.animaapp.com/gw9BBciN/img/social-media.svg"
                />
              </div>
            </div>
            <div className="frame-19">
              <div className="div-2">
                <div className="text-wrapper-7">Explore</div>
                <div className="frame-10">
                  <div className="home-home">View Halls</div>
                  <div className="home-v-home-v">Catering Services</div>
                  <div className="home-v-home-v">Event Planners</div>
                  <div className="home-v-home-v">Decor and Lighting</div>
                  <div className="home-home-2">Entertainment Services</div>
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">Book Now</div>
                <div className="frame-10">
                  <div className="home-home">Available Halls</div>
                  <div className="home-v-home-v">Service Packages</div>
                  <div className="home-v-home-v">Book Event Spaces</div>
                  <div className="home-v-home-v">Payment Portal</div>
                  <div className="home-home-3">Booking Confirmation</div>
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">Account</div>
                <div className="frame-20">
                  <div className="home-home">Login / Sign Up</div>
                  <div className="home-v-home-v">My Bookings</div>
                  <div className="home-v-home-v">Pay Advance</div>
                  <div className="home-v-home-v">Track Payment</div>
                  <div className="home-home-4">Reset Password</div>
                </div>
              </div>
              <div className="frame-21">
                <div className="text-wrapper-7">Customer Support</div>
                <div className="frame-10">
                  <div className="home-home">Contact us</div>
                  <div className="home-v-home-v">FAQ’s</div>
                  <div className="home-v-home-v">Booking Policy</div>
                  <div className="home-v-home-v">Payment Policies</div>
                  <div className="home-v-home-v">Terms and Conditions</div>
                </div>
              </div>
            </div>
          </div>
          <p className="static-mania">© 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;