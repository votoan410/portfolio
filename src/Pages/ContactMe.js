import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkIcon from "@material-ui/icons/Work";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_j18edga",
        "template_mfiiopo",
        form.current,
        "58FLcjeZnfEM4BoYo"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log(result);
        },
        (error) => {
          // show the user an error
          console.log(error);
        }
      );
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">
        Hire Me <WorkIcon />
      </h2>
      <form onSubmit={onSubmit} ref={form}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="from_name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" required />
        </div>
        <input className="btn btn-danger" type="submit" value="send" />
      </form>
    </div>
  );
}

export default ContactMe;
