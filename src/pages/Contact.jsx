import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="w-full h-screen text-4xl flex items-center justify-center text-blue-500">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">Top Right label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>
        
      </div>
      < Footer />
    </div>
  );
}

export default Contact;
