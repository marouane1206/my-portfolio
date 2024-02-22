import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AOS from "aos";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000); // Hide success message after 5 seconds

      resetForm(); // Reset form after successful submission
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
    AOS.refresh();
  };

  const validationSchema = Yup.object({
    senderName: Yup.string().required("Enter your full name please!"),
    senderEmail: Yup.string()
      .email("Invalid email address")
      .required("Enter your email please!"),
    subject: Yup.string().required("Enter a subject please!"),
    message: Yup.string().required("Enter your message please!"),
  });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            In the Contact section of my portfolio, I provide a seamless avenue
            for communication, welcoming inquiries, collaborations, or simply a
            friendly conversation.
            <br />
            Feel free to reach out through the provided contact form, and I'll
            be sure to respond promptly.
            <br />
            Additionally, you can connect with me through various social media
            channels for updates on my latest work and professional endeavors.
            <br />
            Your feedback and messages are valuable, and I look forward to
            engaging with you to create meaningful connections in the world of
            design and development.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>40, Rue Ibnou Habous, Maarif, Casablanca, Morocco</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>marouane.sanhaji@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+212 64 071 3333</p>
              </div>

              <iframe
                title="Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26593.1611835673!2d-7.665540633739257!3d33.5755804426379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2db38c861c3%3A0xa735763e58709a7!2s40%20Rue%20Ibnou%20Habous%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1705605598460!5m2!1sen!2sma"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Formik
              initialValues={{
                senderName: " ",
                senderEmail: " ",
                subject: " ",
                message: " ",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form role="form" className="email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="senderName">Enter your name</label>
                      <Field
                        type="text"
                        name="senderName"
                        className="form-control"
                        id="senderName"
                      />
                      <ErrorMessage name="senderName" component="div" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="senderEmail">Enter your email</label>
                      <Field
                        type="email"
                        className="form-control"
                        name="senderEmail"
                        id="senderEmail"
                      />
                      <ErrorMessage name="senderEmail" component="div" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Enter a subject</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                    <ErrorMessage name="subject" component="div" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Enter your message</label>
                    <Field
                      as="textarea"
                      className="form-control"
                      name="message"
                      rows="10"
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>
                  <div className="my-3">
                    {isSubmitting && (
                      <div className="loading">
                        Loading...
                        <div className="loading-indicator"></div>
                      </div>
                    )}
                    {error && <div className="error-message">{error}</div>}
                    {success && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    {!isSubmitting && !success && (
                      <div className="text-center">
                        <button type="submit" disabled={isSubmitting}>
                          Send Message
                        </button>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
