import React from 'react'
import "./Footer.css"
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, WhatsappIcon } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Link } from 'react-router-dom';
export default function () {


  return (



    <div className="footer-clean" style={{ alignItems: "flex-end", Bottom: "0", backgroundImage: "linear-gradient(to top, rgb(197, 239, 247), rgb(255,255,255))" }}>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3 item">
              <h3 style={{ color: "black" }}>Location</h3>
              <ul>

                <li className='fw-bold' style={{ color: "#0b7fab" }}> 18 Bowling Green Ln, London EC1R 0BW, United Kingdom</li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item px-5">
              <h3 style={{ color: "black" }}>Quick Links</h3>
              <ul>
                <Link to="doctors">
                  <li className='fw-bold' style={{ color: "#0b7fab" }}>Doctors</li>
                </Link>
                <Link to="hospital">
                  <li className='fw-bold' style={{ color: "#0b7fab" }}> Hospital</li>
                </Link>

                <Link to="branches">
                  <li className='fw-bold' style={{ color: "#0b7fab" }}> Branches</li>

                </Link>


              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item ml-5">
              <h3>About</h3>
              <ul>

                <Link to="about">
                  <li className='fw-bold' style={{ color: "#0b7fab" }}>About</li>
                </Link>

                <Link to="contact">
                  <li className='fw-bold' style={{ color: "#0b7fab" }}>Contact</li>

                </Link>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <FacebookShareButton
                url={"https://erxes.mn/blog/customer-experience-mistakes"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton

                url={"https://peing.net/ja/"}

              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={"https://erxes.mn/blog/customer-experience-mistakes"}
              >
                <LinkedinIcon size={32} round>

                </LinkedinIcon>

              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://erxes.mn/blog/customer-experience-mistakes"}
              >
                <WhatsappIcon size={32} round>

                </WhatsappIcon>

              </WhatsappShareButton>
              <p className="copyright fw-bold" style={{ color: "" }}>HealerGoTurkey © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

