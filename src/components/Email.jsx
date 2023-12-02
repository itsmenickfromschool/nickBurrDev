import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !emailRef.current.value.match(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return;
    }
    emailjs
      .sendForm(
        "service_9cpzyb9",
        "template_nzah22c",
        form.current,
        "w-b4xbd-B2lLdGQfl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full bg-slate-800 p-6 rounded-lg space-y-4"
    >
      <div className="flex flex-col">
        <label className="text-white text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="px-3 py-2 rounded shadow-sm border border-slate-600 text-slate-300 bg-slate-700 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white text-sm font-bold mb-2">Email</label>
        <input
          ref={emailRef}
          placeholder="Your Email"
          type="email"
          name="email"
          className="px-3 py-2 rounded shadow-sm border border-slate-600 text-slate-300 bg-slate-700 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white text-sm font-bold mb-2">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="px-3 py-2 rounded shadow-sm border border-slate-600 text-slate-300 bg-slate-700 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Leave a comment..."
          className="px-3 py-2 rounded shadow-sm border border-slate-600 text-slate-300 bg-slate-700 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
        />
      </div>

      <input
        type="submit"
        value="Send"
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer self-end"
      />
    </form>
  );
};
