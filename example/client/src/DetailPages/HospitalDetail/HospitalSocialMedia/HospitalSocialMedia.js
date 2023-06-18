import React from 'react'
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default function HospitalSocialMedia() {
  return (
    <div className='d-flex mt-3 justify-content-end '>

      <FacebookShareButton
        url={"https://erxes.mn/blog/customer-experience-mistakes"}
        
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <br />
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

    </div>
  )
}
