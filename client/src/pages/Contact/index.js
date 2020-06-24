import React from "react";
import "./style.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="email-form container">
        <h3>SHOOT ME AN EMAIL</h3>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mgenlwbr"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="replyto"></label>
            <input
              type="email"
              name="replyto"
              className="form-control"
              placeholder="Your: email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              className="form-control"
              name="message"
              rows="12"
              placeholder="Message"
            ></textarea>
            <br />

            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <input
                className="btn btn-dark btn-lg btn-block submitButton"
                type="submit"
                value="Send"
              />
            )}
            {status === "ERROR" && <p>Ooops! There was an error, try again.</p>}
            
          </div>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
