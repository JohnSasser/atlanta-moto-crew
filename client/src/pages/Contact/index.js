import React from "react";

const ContactForm = (props) => {
  return (
    <div>
      <section className="section section-dark"></section>
      <div className="container contactContainer">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card-body cardContainer" id="email-container">
              <h2 className="card-title">SHOOT ME AN EMAIL</h2>

              <hr size="3" color="#000" width="100%" />

              {/* ***** need to add the formspree url path.  Signing up with the AMC gmail account */}

              <form action="https://formspree.io/" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="replyto">Your Email</label>
                  <input
                    type="email"
                    name="replyto"
                    className="form-control"
                    placeholder="Your email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="12"
                    placeholder="Message"
                  ></textarea>
                  <br />

                  <input
                    className="btn btn-dark btn-lg btn-block submitButton"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
