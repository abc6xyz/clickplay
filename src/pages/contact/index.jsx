import React from "react";
import Helmet from "../../layouts/Helmet/Helmet";

export default function About() {
  const description =
    "I value your feedback and are eager to hear from you. my contact page is designed to provide you with a convenient way to reach out to me. Whether you have a question, suggestion, or simply want to say hello, I encourage you to get in touch.";
  const title = "ClickPlay - Contact";

  return (
    <div className="contact">
      <Helmet title={title} description={description} />
      <div className="contact-body">
        <h1 className="more-pages-title">Contact Me</h1>

        <div className="contact-us-email">
          Please reach out to me, whether you have questions, suggestions, or
          simply want to send a friendly greeting. I warmly encourage you to
          get in touch, as your feedback is highly valuable to me. Contact me to
          <span style={{ fontWeight: "600" }}> michael.edy623@gmail.com </span>
        </div>
      </div>
    </div>
  );
}
