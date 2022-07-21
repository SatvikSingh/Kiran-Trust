import React from "react";
import Steps from "./Steps";
import ContactForm from "./ContactForm";
import "./Contact.css";
import Contact_didi from "../../assets/contact-img.png";
const Contact = () => {
  const steps = [
    {
      title: "Step 1",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      img_url:
        "https://res.cloudinary.com/dosn4zwj8/image/upload/v1651575597/test/contact-steps_tqb25b.png",
    },
    {
      title: "Step 2",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      img_url:
        "https://res.cloudinary.com/dosn4zwj8/image/upload/v1651575597/test/contact-steps_tqb25b.png",
    },
    {
      title: "Step 3",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      img_url:
        "https://res.cloudinary.com/dosn4zwj8/image/upload/v1651575597/test/contact-steps_tqb25b.png",
    },
    {
      title: "Step 4",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      img_url:
        "https://res.cloudinary.com/dosn4zwj8/image/upload/v1651575597/test/contact-steps_tqb25b.png",
    },
  ];
  return (
    <div className="contact-us-section">
      <div id="contact-didi">
        <div className="contactheading">Contact Us</div>
        <img src={Contact_didi} alt="img" />
      </div>
      <div id="steps">
        {steps.map(function (item) {
          return <Steps item={item} key={item.title} />;
        })}
      </div>
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
