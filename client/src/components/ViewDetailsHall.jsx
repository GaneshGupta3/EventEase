import React from "react";
import "./ViewDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user";
import { IoMdArrowBack } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
<<<<<<< HEAD
import { FaWhatsapp } from "react-icons/fa";
import ContactAgentButton from "./ContactAgentButton";
=======
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
const ViewDetailsHall= () => {
  const {currServiceProvider} = useSelector(store => store.user);
  const dispatch = useDispatch();
  console.log(currServiceProvider);
<<<<<<< HEAD
  const handleSendMessage = ()=>{
    console.log("send button clicked");
    const message = encodeURIComponent('Hello, I would like to inquire about...');
    const url = `https://wa.me/${currServiceProvider.serviceProvider.phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
=======
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
  const backClicked = ()=>{
    dispatch(userActions.cancelViewDetails());
  }
  return (
    <>
      <div className="property-details">
      <div className="frame">
        <div className="div">
          <div className="header-header">
            <div className="frame-2">
              <IoMdArrowBack size={30} onClick={backClicked}/>
              <div className="frame-wrapper">
                <div className="frame-3" />
              </div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper">Home</div>
                  <img
                    className="icon-arrow-down"
                    alt="Icon arrow down"
                    src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down.svg"
                  />
                </div>
                <div className="frame-5">
                  <div className="text-wrapper">Listing</div>
                  <img
                    className="icon-arrow-down"
                    alt="Icon arrow down"
                    src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down-2.svg"
                  />
                </div>
                <div className="frame-5">
                  <div className="text-wrapper">Agents</div>
                  <img
                    className="icon-arrow-down"
                    alt="Icon arrow down"
                    src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down-2.svg"
                  />
                </div>
                <div className="text-wrapper-2">Property</div>
                <div className="text-wrapper">Blog</div>
              </div>
              <div className="frame-6">
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="frame-7">
              <div className="rectangle-wrapper">
                <img className="rectangle" src={currServiceProvider.path ? currServiceProvider.path : "../../hall10.jpeg"}/>
              </div>
              <div className="frame-8">
                <img className="rectangle-2" src={currServiceProvider.patha ? currServiceProvider.patha : "../../hall3a.jpg"}/>
                <div className="frame-9">
                  <img className="rectangle-2" src={currServiceProvider.pathb ? currServiceProvider.pathb : "../../hall3b.jpg"}/>
                  <div className="inf">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-10">
            <div className="frame-11">
              <div className="frame-12">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="div-2">
                        <div className="text-wrapper-5">Hall Name</div>
                        <div className="element-ave">address</div>
                      </div>
                      <div className="button-othes-price-v-wrapper">
                        <div className="button-othes-price-v">
                          <div className="frame-16">
                            <div className="pressed"><FaIndianRupeeSign />{currServiceProvider.totalCost}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-2">
                      <div className="well-constructed">main description</div>
                      <div className="a-slider-is-great">detail description</div>
                    </div>
                  </div>
                </div>
                <div className="frame-17">
                  <div className="frame-15">
                    <div className="text-wrapper-7">Home Highlights</div>
                    <div className="frame-18">
                      <div className="frame-19">
                        <div className="point">
                          <div className="frame-20">
                            <div className="ellipse" />
                            <div className="text-wrapper-8">Parking</div>
                          </div>
                          <div className="text-wrapper-9">{currServiceProvider.parkingNumbers}</div>
                        </div>
                        <div className="point-2">
                          <div className="frame-20">
                            <div className="ellipse" />
                            <div className="text-wrapper-8">Land Area</div>
                          </div>
                          <div className="text-wrapper-9">{currServiceProvider.landArea}</div>
                        </div>
                        <div className="point-3">
                          <div className="frame-20">
                            <div className="ellipse" />
                            <div className="text-wrapper-8">A/C</div>
                          </div>
                          <div className="text-wrapper-9">yes</div>
                        </div>
                        <div className="point-4">
                          <div className="frame-20">
                            <div className="ellipse" />
                            <div className="text-wrapper-8">Year Built</div>
                          </div>
                          <div className="text-wrapper-9">2021</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="point-5">
                          <div className="frame-20">
                            <div className="ellipse" />
                            <div className="text-wrapper-8">HOA</div>
                          </div>
                          <div className="text-wrapper-9">None</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-17">
                  <div className="frame-21">
                    <div className="text-wrapper-5">Agent Information</div>
                    <div className="frame-22">
<<<<<<< HEAD
                      <img src="../../public/serviceProviderProfilePhoto.jpg" className="rectangle-3" />
=======
                      <div className="rectangle-3" />
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
                      <div className="agent-profile">
                        <div className="text-wrapper-10">{currServiceProvider.serviceProvider.username}</div>
                        <div className="div-3">
                          <img className="start" alt="Start" src="https://c.animaapp.com/N2aztpBp/img/start.svg" />
                          <div className="text-wrapper-11">4 review</div>
                        </div>
                        <div className="div-4">
                          <img
                            className="img-2"
                            alt="Icon email"
                            src="https://c.animaapp.com/N2aztpBp/img/icon---20px---email.svg"
                          />
                          <div className="text-wrapper-12">{currServiceProvider.serviceProvider.email} </div>
                        </div>
                        <div className="div-4">
                          <img
                            className="img-2"
                            alt="Icon call"
                            src="https://c.animaapp.com/N2aztpBp/img/icon---20px---call.svg"
                          />
                          <div className="text-wrapper-12">+91 {currServiceProvider.serviceProvider.phoneNumber}</div>
                        </div>
<<<<<<< HEAD






                      </div>
                      <FaWhatsapp size={32}/> 
                      <div style={{backgroundColor : "Black" , fontSize:"20px",color:"white",padding:"10px",borderRadius:"10%"}} onClick={handleSendMessage}>sendMessage</div>
=======
                      </div>
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              
=======
              <div className="frame-23">
                <div className="frame-24">
                  <div className="frame-15">
                    <div className="text-wrapper-5">{""}</div>
                    <div className="labels">
                      <div className="text-field-large">
                        <div className="div-3">
                          <img
                            className="img"
                            alt="Icon user"
                            src="https://c.animaapp.com/N2aztpBp/img/icon---24px---user.svg"
                          />
                          <div className="text-wrapper-13">Full Name</div>
                        </div>
                      </div>
                      <div className="text-field-large">
                        <div className="div-3">
                          <img
                            className="img"
                            alt="Icon call"
                            src="https://c.animaapp.com/N2aztpBp/img/icon---24px---call.svg"
                          />
                          <div className="text-wrapper-13">Phone Number</div>
                        </div>
                      </div>
                      <div className="text-field-large">
                        <div className="div-3">
                          <img
                            className="img"
                            alt="Icon calendar"
                            src="https://c.animaapp.com/N2aztpBp/img/icon---24px---calendar.svg"
                          />
                          <div className="text-wrapper-13">Date</div>
                        </div>
                      </div>
                      <div className="input-box">
                        <div className="text-wrapper-13">Message</div>
                      </div>
                      <div className="button-style-small">
                        <div className="text-wrapper-4">Send Message</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="frame-25">
          <div className="frame-26">
            <div className="frame-27">
              <div className="frame-28">
                <img
                  className="real-estate"
                  alt="Real estate"
                  src="https://c.animaapp.com/N2aztpBp/img/real-estate-1.svg"
                />
                <div className="text-wrapper-14">Relasto</div>
              </div>
              <div className="frame-29">
                <p className="element-bervely-hill-ave">
                  59 Bervely Hill Ave, Brooklyn Town,
                  <br />
                  New York, NY 5630, CA, US
                </p>
                <div className="frame-30">
                  <div className="element-info">+(123) 456-7890</div>
                  <div className="element-info-2">info@mail.com</div>
                </div>
                <img
                  className="social-media"
                  alt="Social media"
                  src="https://c.animaapp.com/N2aztpBp/img/social-media.svg"
                />
              </div>
            </div>
            <div className="frame-31">
              <div className="div-5">
                <div className="text-wrapper-15">Features</div>
                <div className="frame-32">
                  <div className="home-home">Home v1</div>
                  <div className="home-v-home-v">Home v2</div>
                  <div className="home-v-home-v">About</div>
                  <div className="home-v-home-v">Contact</div>
                  <div className="home-v-home-v">Search</div>
                </div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-15">Information</div>
                <div className="frame-32">
                  <div className="home-home">Listing v1</div>
                  <div className="home-v-home-v">Listing v2</div>
                  <div className="home-v-home-v">Property Details</div>
                  <div className="home-v-home-v">Agent List</div>
                  <div className="home-v-home-v">Agent Profile</div>
                </div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-15">Documentation</div>
                <div className="frame-32">
                  <div className="home-home">Blog</div>
                  <div className="home-v-home-v">FAQ</div>
                  <div className="home-v-home-v">Privacy Policy</div>
                  <div className="home-v-home-v">License</div>
                </div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-15">Others</div>
                <div className="frame-32">
                  <div className="home-home">Log in</div>
                  <div className="home-v-home-v">Enter OTP</div>
                  <div className="home-v-home-v">New Password</div>
                  <div className="home-v-home-v">Reset Password</div>
                  <div className="home-v-home-v">Create Account</div>
                </div>
              </div>
            </div>
          </div>
          <p className="static-mania">© 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default ViewDetailsHall;