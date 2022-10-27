import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkIcon from "@material-ui/icons/Work";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();
  const [sendState, setSendState] = useState("send");
  const onSubmit = (e) => {
    setSendState("sending...");
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
          setSendState("Your message has been delivered!!!");
        },
        (error) => {
          // show the user an error
          console.log(error);

          setSendState("send failed, try again after refreshing the page");
        }
      );
  };

  let timeoutId = null;

  useEffect(() => {
    // if there's a result message
    if (sendState.length > 4) {
      //remove previous timeout if any
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      // create a timeout to remove it
      timeoutId = setTimeout(() => setSendState("send"), 3000);
    }

    // cleanup
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [sendState]);
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
        <input className="btn btn-danger" type="submit" value={sendState} />
      </form>
    </div>
  );
}

export default ContactMe;
