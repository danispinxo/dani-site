import { useForm, ValidationError } from "@formspree/react";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const [state, handleSubmit] = useForm("xleqzjrj");

  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="contact-page">
          <div className="contact-container">
            <h1 className="contact-title">Get In Touch</h1>

            {state.succeeded ? (
              <div className="success-container">
                <p className="success-message">
                  Thanks for getting in touch! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      required
                      fullWidth
                      className="contact-input"
                    />
                  </div>

                  <div className="form-field">
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      required
                      fullWidth
                      className="contact-input"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="field-error"
                    />
                  </div>

                  <div className="form-field">
                    <TextField
                      name="message"
                      label="Message"
                      multiline
                      rows={6}
                      variant="outlined"
                      fullWidth
                      className="contact-input"
                    />
                  </div>

                  <button
                    className="contact-submit-btn"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>

                  <ValidationError
                    errors={state.errors}
                    className="form-error"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
