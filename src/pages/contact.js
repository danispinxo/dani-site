import React from "react";
import "./styles.scss";
import "./contact.scss";
import {useForm, ValidationError} from "@formspree/react";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkneyzbr");

  return (
    <main className="page-content">
      <div className="contact-title-holder">
        <p className="contact-title">Get In Touch</p>
      </div>

      <div className="contact-body">
        <div className="contact-form">
          <form onSubmit={handleSubmit} style={{display: "block"}}>
            <TextField
              className="input"
              id="standard-basic"
              name="name"
              label="Name"
              variant="standard"
              required
              fullWidth
            />
            <TextField
              className="input"
              id="standard-basic"
              name="email"
              label="Email"
              variant="standard"
              required
              fullWidth
            />
            <ValidationError
              className="error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              className="input"
              id="outlined-multiline-static"
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
            <br />
            <button
              className="form-submit-btn"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
            <ValidationError className="error" errors={state.errors} />
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export {Head} from "./index";
