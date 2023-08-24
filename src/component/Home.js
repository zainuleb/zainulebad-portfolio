import React from "react";

const Home = () => {
  return (
    <div className="elisc_tm_section animated" id="home">
      <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="details w-full min-h-[100vh] flex items-center">
            <div className="left w-1/2">
              <div className="title w-full float-left mb-[21px]">
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                  Hi, I'm <span className="text-blue-color">Elisc!</span>
                </h3>
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                  <span className="cd-headline clip">
                    <span className="blc">Creative</span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Designer</b>
                      <b>Coder</b>
                      <b>Player</b>
                    </span>
                  </span>
                </h3>
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                  Based in Florida
                </h3>
              </div>
              <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                <p>
                  I'm a Florida based web designer &amp; front‑end developer
                  with <span className="text-blue-color">10+ years</span> of
                  experience
                </p>
              </div>
              <div className="buttons w-full float-left flex items-center mb-[150px]">
                <div className="elisc_tm_button transition_link">
                  <a href="#portfolio">Got a project?</a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact">Let's talk</a>
                </div>
              </div>
              <div className="info w-full float-left">
                <ul className="relative">
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="tel:+77 022 444 05 05"
                    >
                      +77 022 444 05 05
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="mailto:support@elisc.com"
                    >
                      support@elisc.com
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="href_location text-[#130F49] font-semibold text-[18px]"
                      href="#/"
                    >
                      Ave Street Avenue, New York
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <img src="assets/img/about/2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
