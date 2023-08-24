import React from "react";

const Home = () => {
  return (
    <div class="elisc_tm_section animated" id="home">
      <div class="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
        <div class="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div class="details w-full min-h-[100vh] flex items-center">
            <div class="left w-1/2">
              <div class="title w-full float-left mb-[21px]">
                <h3 class="font-extrabold text-[60px] leading-[70px]">
                  Hi, I'm <span class="text-blue-color">Elisc!</span>
                </h3>
                <h3 class="font-extrabold text-[60px] leading-[70px]">
                  <span class="cd-headline clip">
                    <span class="blc">Creative</span>
                    <span class="cd-words-wrapper">
                      <b class="is-visible">Designer</b>
                      <b>Coder</b>
                      <b>Player</b>
                    </span>
                  </span>
                </h3>
                <h3 class="font-extrabold text-[60px] leading-[70px]">
                  Based in Florida
                </h3>
              </div>
              <div class="subtitle wfll max-w-[80%] float-left mb-[40px]">
                <p>
                  I'm a Florida based web designer &amp; front‑end developer
                  with <span class="text-blue-color">10+ years</span> of
                  experience
                </p>
              </div>
              <div class="buttons w-full float-left flex items-center mb-[150px]">
                <div class="elisc_tm_button transition_link">
                  <a href="#portfolio">Got a project?</a>
                </div>
                <div
                  class="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact">Let's talk</a>
                </div>
              </div>
              <div class="info w-full float-left">
                <ul class="relative">
                  <li class="pl-[15px]">
                    <a
                      class="text-[#130F49] font-semibold text-[18px]"
                      href="tel:+77 022 444 05 05"
                    >
                      +77 022 444 05 05
                    </a>
                  </li>
                  <li class="pl-[15px]">
                    <a
                      class="text-[#130F49] font-semibold text-[18px]"
                      href="mailto:support@elisc.com"
                    >
                      support@elisc.com
                    </a>
                  </li>
                  <li class="pl-[15px]">
                    <a
                      class="href_location text-[#130F49] font-semibold text-[18px]"
                      href="#"
                    >
                      Ave Street Avenue, New York
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right w-1/2 pl-[50px]">
              <img src="assets/img/about/2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
