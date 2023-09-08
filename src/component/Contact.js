import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // eslint-disable-next-line
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const validEmail = (email) => {
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    // if (formData.email && !validEmail(formData.email)) {
    //   setEmailValid(false);
    //   return;
    // } else {
    //   setEmailValid(true);
    // }
    const fields = Object.keys(formData);
    const structuredData = {
      ...formData,
      formDataNameOrder: JSON.stringify(fields),
      formGoogleSheetName: "tech", // Default sheet name (you can replace this with a prop or state)
      formGoogleSendEmail: "zainulebadd@gmail.com", // No email by default (again, replace this as needed)
    };

    try {
      const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: new URLSearchParams(structuredData).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(response);
      if (response.status === 200) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="elisc_tm_section" id="contact">
      <div className="elisc_tm_contact w-full min-h-[100vh] float-left bg-[#E9F9FF] pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="wrapper w-full float-left flex">
            <div className="left w-1/2 pr-[50px]">
              <div className="elisc_tm_title w-full float-left">
                <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                  - Let's Connect
                </span>
                <h3 className="text-[40px] font-extrabold">Get in touch</h3>
              </div>
              <div className="text w-full float-left mt-[20px] mb-[40px]">
                <p>
                  Looking to revolutionize your tech game? Let's connect! I'm on
                  the lookout for fresh ideas and collaborations. Reach out
                  anytime – I'm here to innovate with you. 🌐🔍🤝
                </p>
              </div>
              <div className="info w-full float-left">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <a
                      className="text-dark-color font-semibold font-inter inline-block relative"
                      href="mailto:zainulebadd@gmail.com"
                    >
                      zainulebadd@gmail.com
                    </a>
                  </li>
                  <li className="w-full float-left">
                    <a
                      className="href_location text-dark-color font-semibold font-inter inline-block relative"
                      href="#/"
                    >
                      Overseas 2 Phase 8 Bahria Islamabad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <div className="fields w-full float-left h-auto clear-both">
                {submitted ? (
                  <div className="elisc_tm_title w-full float-left text-center">
                    <div className="ext-[30px] font-extrabold">
                      <h4>
                        Thank you for your response, I will get back asap.
                      </h4>
                    </div>
                  </div>
                ) : (
                  <form
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    data-email="zainulebadd@gmail.com"
                    onSubmit={handleSubmit} // <-- Add this line
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first w-full float-left">
                      <ul>
                        <li className="w-full mb-[25px] float-left">
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </li>
                        <li className="w-full mb-[25px] float-left">
                          <input
                            id="email"
                            type="text"
                            placeholder="Your email"
                            autoComplete="off"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea
                        id="message"
                        placeholder="Write something..."
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="elisc_tm_button">
                      <button type="submit">Submit now</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="elisc_tm_map w-full float-left mt-[100px] mb-[120px]">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="375"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4058.7312475941317!2d73.08360151348157!3d33.51296287994873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1694137157940!5m2!1sen!2s"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="address"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
