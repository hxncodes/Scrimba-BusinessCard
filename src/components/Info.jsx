import React from "react";
import ProfileImg from "../assets/profile-pic.png";

export default function Info() {
  return (
    <div className="info-section">
      <img src={ProfileImg} alt="" />
      <h1>Laura Smith</h1>
      <h5>Frontend Developer</h5>
      <h6>www.hxncodes.com</h6>
      <div className="btn-area">
        <button className="btn-secondary">
          <img src="/mail-icon.svg" alt="" srcset="" /> <span>Email</span>
        </button>
        <button className="btn-primary">
          <img src="/linkedin-icon.svg" alt="" srcset="" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
