import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your AJAX call or any other logic can go here

    // On success:
    setSubmitted(true);
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
                    {/* <a
                      className="text-dark-color font-semibold font-inter inline-block relative"
                      href="tel:+77 022 444 05 05"
                    >
                      +77 022 444 05 05
                    </a> */}
                  </li>
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
                <form
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  data-email="zainulebadd@gmail.com"
                  action="https://script.google.com/macros/s/AKfycbyhjo7Esm2TFf0EvsRUaXCb2-gS3CuRNEVkk5NK4UDf_izsUYVHqeRvo8wwB8ORICal/exec"
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
                          autocomplete="off"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li className="w-full mb-[25px] float-left">
                        <input
                          id="email"
                          type="text"
                          placeholder="Your email"
                          autocomplete="off"
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
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="elisc_tm_button">
                    <a id="send_message" href="#/">
                      Submit now
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div classNameName="elisc_tm_map w-full float-left mt-[100px] mb-[120px]">
            <div classNameName="mapouter">
              <div classNameName="gmap_canvas">
                <iframe
                  width="100%"
                  height="375"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"></a>
                <br />
                <style>
                  {`
                            .mapouter {
                                position: relative;
                                text-align: right;
                                height: 375px;
                                width: 100%;
                            }
                            .gmap_canvas {
                                overflow: hidden;
                                background: none!important;
                                height: 375px;
                                width: 100%;
                            }
                        `}
                </style>
                <a href="https://www.embedgooglemap.net">
                  how to add google map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
