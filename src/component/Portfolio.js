import React from "react";

const Portfolio = () => {
  return (
    <div className="elisc_tm_section" id="portfolio">
      <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Projects
              </span>
              <h3 className="text-[40px] font-extrabold">
                Recent completed works
              </h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#/">
                <img className="svg" src="assets/img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#/">
                <img className="svg" src="assets/img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
            <ul className="owl-carousel gallery_zoom mb-[65px]">
              <li>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt=""
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/1.jpg"
                    ></div>
                    <a
                      className="elisc_tm_full_link popup-youtube absolute inset-0 z-[5]"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    ></a>
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        className="inline-block uppercase text-[#55527C] font-medium"
                        href="#/"
                      >
                        Youtube
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube font-semibold text-[24px] text-[#130F49]"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      >
                        New Technology
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt=""
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/2.jpg"
                    ></div>
                    <a
                      className="elisc_tm_full_link popup-vimeo absolute inset-0 z-[5]"
                      href="https://vimeo.com/337293658"
                    ></a>
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a href="#/">Vimeo</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-vimeo"
                        href="https://vimeo.com/337293658"
                      >
                        Firogo Majestic Ltd.
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt=""
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/3.jpg"
                    ></div>
                    <a
                      className="elisc_tm_full_link soundcloude_link mfp-iframe audio absolute inset-0 z-[5]"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></a>
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a href="#/">Soundcloud</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      >
                        Creative Building
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt=""
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/4.jpg"
                    ></div>
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#/"
                    ></a>
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a href="#/">Modalbox</a>
                    </span>
                    <h3 className="title">
                      <a className="line_effect portfolio_popup" href="#/">
                        Beautiful Boat
                      </a>
                    </h3>
                  </div>
                </div>

                <div className="hidden_content_portfolio">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance ease of
                          modification. Building mockups strikes the ideal
                          balance ease of modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you're trying to figure
                          out your user flows or the proper visual hierarchy -
                          and the production phase when they phase when they
                          will represent the target product. Building mockups
                          strikes the ideal balance ease of modification.
                        </p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span>
                              <a href="#/">Modalbox</a>
                            </span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>April 10, 2023</span>
                          </li>
                          <li>
                            <span className="first">Share</span>
                            <ul className="share">
                              <li>
                                <a href="#/">
                                  <img
                                    className="svg"
                                    src="assets/img/svg/social/facebook.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <img
                                    className="svg"
                                    src="assets/img/svg/social/twitter.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <img
                                    className="svg"
                                    src="assets/img/svg/social/instagram.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="assets/img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                data-img-url="assets/img/portfolio/5.jpg"
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="assets/img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                data-img-url="assets/img/portfolio/6.jpg"
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="assets/img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                data-img-url="assets/img/portfolio/7.jpg"
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="elisc_tm_button" data-position="center">
              <a href="#/">View all projects</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="elisc_tm_partners w-full float-left mb-[120px] py-0 px-[20px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_title w-full float-left">
            <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
              - Clients
            </span>
            <h3 className="text-[40px] font-extrabold">
              Customers &amp; clients
            </h3>
          </div>
          <div className="partners_inner w-full float-left clear-both overflow-hidden rounded-[10px] mt-[58px]">
            <ul>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/1.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/2.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/3.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/4.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/5.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/6.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/7.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/partners/8.png" alt="" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#/"
                  ></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="elisc_tm_testimonial_wrapper w-full float-left mb-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_testimonials w-full float-left bg-[#FFF5F6] pt-[100px] pr-[150px] pb-[105px] pl-[100px] small:px-[40px]">
            <div className="elisc_tm_title w-full float-left text-center">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Testimonial
              </span>
              <h3 className="text-[40px] font-extrabold">What client's say?</h3>
            </div>
            <div className="testimonials_list w-full float-left text-center mt-[43px]">
              <ul className="owl-carousel owl-theme">
                <li>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      I rarely like to write reviews, but the Marketify team
                      truly deserve a standing ovation for their customer
                      support, customisation and most importantly, friendliness
                      and professionalism.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="image relative w-[60px] h-[60px] rounded-full">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url="assets/img/testimonials/1.jpg"
                      ></div>
                    </div>
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">John Doe</h3>
                    </div>
                  </div>
                  <p className="job text-center">
                    User Interface Design at PCL Lab
                  </p>
                </li>
                <li>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      Really the Code Quality, Customer Support, and design are
                      awesome and its good support they are giving. They give an
                      instant solution to our needs. Really awesome. I will
                      strongly recommend to my friends.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="image relative w-[60px] h-[60px] rounded-full">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url="assets/img/testimonials/2.jpg"
                      ></div>
                    </div>
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">Keita Smith</h3>
                    </div>
                  </div>
                  <p className="job text-center">Senior Designer at Behance</p>
                </li>
                <li>
                  <div className="text mb-[33px]">
                    <p className="text-[24px] leading-[40px] font-inter">
                      Loved the template design, documentation, customizability
                      and the customer support from Marketify team! I am a noob
                      in programming but the Marketify team helped me
                      successfully.
                    </p>
                  </div>
                  <div className="short w-auto flex items-center justify-center mb-[5px]">
                    <div className="image relative w-[60px] h-[60px] rounded-full">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url="assets/img/testimonials/3.jpg"
                      ></div>
                    </div>
                    <div className="detail text-left pl-[18px]">
                      <h3 className="text-[30px] font-medium">Alan Walker</h3>
                    </div>
                  </div>
                  <p className="job text-center">
                    Sales Manager at Vivaco Shop
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
