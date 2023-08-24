import React from "react";

const Mobile = () => {
  return (
    <>
      <div class="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
        <div class="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div class="logo" data-type="image">
            <a class="image" href="#">
              <img
                class="max-w-[100px] max-h-[40px]"
                src="assets/img/logo/logo.png"
                alt=""
              />
            </a>
            <a class="text" href="#">
              <span>R.Elisc</span>
            </a>
          </div>
          <div class="trigger">
            <div class="hamburger hamburger--slider">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="elisc_tm_mobile_menu">
        <div class="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div class="wrapper">
            <div class="avatar w-[70px] h-[70px] relative float-right mb-[50px]">
              <div
                class="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                data-img-url="assets/img/about/1.jpg"
              ></div>
            </div>
            <div class="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul class="transition_link m-0">
                <li class="active mb-[7px]">
                  <a class="text-dark-color" href="#home">
                    Home
                  </a>
                </li>
                <li class="mb-[7px]">
                  <a class="text-dark-color" href="#about">
                    About
                  </a>
                </li>
                <li class="mb-[7px]">
                  <a class="text-dark-color" href="#service">
                    Services
                  </a>
                </li>
                <li class="mb-[7px]">
                  <a class="text-dark-color" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="mb-[7px]">
                  <a class="text-dark-color" href="#news">
                    Blog
                  </a>
                </li>
                <li class="mb-[7px]">
                  <a class="text-dark-color" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="social w-full float-left mb-[5px]">
              <ul>
                <li class="mr-[8px] inline-block">
                  <a class="text-[#333]" href="#">
                    <img
                      class="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="mr-[8px] inline-block">
                  <a class="text-[#333]" href="#">
                    <img
                      class="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="mr-[8px] inline-block">
                  <a class="text-[#333]" href="#">
                    <img
                      class="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="mr-[8px] inline-block">
                  <a class="text-[#333]" href="#">
                    <img
                      class="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="inline-block">
                  <a class="text-[#333]" href="#">
                    <img
                      class="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="copyright w-full float-left">
              <p class="text-dark-color">Copyright &copy; 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
