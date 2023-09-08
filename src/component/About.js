import React from "react";

const About = () => {
  return (
    <div className="elisc_tm_section" id="about">
      <div className="elisc_tm_about w-full float-left pt-[80px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
            {/* <div className="left w-[40%]">
              <div className="title w-full float-left mb-[40px]">
                <span className="mini block uppercase font-medium mb-[12px]">
                  - Nice to meet you!
                </span>
                <h3 className="name font-extrabold text-[40px]">
                  Zain Ul Ebad
                </h3>
                <span className="job font-semibold text-[20px] text-dark-color">
                  <span className="cd-headline clip">
                    <span className="blc">Web designer &amp;</span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Developer</b>
                      <b>Coder</b>
                      <b>Player</b>
                    </span>
                  </span>
                </span>
              </div>
              <div className="elisc_tm_button transition_link">
                <a href="#portfolio">Got a project?</a>
              </div>
            </div> */}
            <div className="right w-[70%]">
              <div className="text w-full float-left mb-[44px] px-[50px]">
                <p className="mb-[30px]">
                  Hello there! My name is
                  <span className="text-yellow-color"> Zain Ul Ebad</span>. I am
                  a seasoned DevOps professional &amp; Solutions Architect with
                  a deep-seated passion for system design and development.
                </p>
                <p>
                  I have a track record of creating and executing intricate
                  software solutions for various clients, from start-ups to
                  well-established enterprises. I excel in assessing client
                  requirements, selecting suitable technologies, and designing
                  systems that cater to both immediate and future needs.
                </p>
                <p>
                  My experience includes creating robust, scalable, and
                  cost-efficient systems, and I have extensive experience with
                  <b> AWS and GCP</b> services, enhancing my DevOps skills.
                  Additionally, I am proficient in web development technologies
                  like Node Express, React.js, and Angular, as well as database
                  management systems such as mySQL and MongoDB.
                </p>
              </div>
              {/* <div className="info w-full float-left">
                <ul>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Age</span>
                    <span className="block font-inter font-bold text-dark-color">
                      25
                    </span>
                  </li>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Born In</span>
                    <span className="block font-inter font-bold text-dark-color">
                      <a className="href_location" href="#stuff">
                        Florida, USA
                      </a>
                    </span>
                  </li>
                  <li className="mr-[40px] mb-[20px] inline-block">
                    <span className="block uppercase underline">Mail</span>
                    <span className="block font-inter font-bold text-dark-color">
                      <a href="mailto:zainulebadd@gmail.com">
                        zainulebadd@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="elisc_tm_counter w-full float-left mb-[90px]">
            <ul className="ml-[-30px]">
              <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#D3F4EC]">
                  <h3 className="text-[40px] mb-[7px]">4+</h3>
                  <span className="font-medium font-karla uppercase">
                    Years of Experience
                  </span>
                </div>
              </li>
              <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#FCE8D4]">
                  <h3 className="text-[40px] mb-[7px]">50+</h3>
                  <span className="font-medium font-karla uppercase">
                    Projects Completed
                  </span>
                </div>
              </li>
              <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#E3F9E0]">
                  <h3 className="text-[40px] mb-[7px]">30+</h3>
                  <span className="font-medium font-karla uppercase">
                    Happy Clients
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="elisc_tm_title w-full float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Experience
              </span>
              <h3 className="text-[40px] font-extrabold">
                Everything about me!
              </h3>
            </div>
            <div className="list w-full float-left mt-[40px]">
              <ul className="ml-[-30px] flex flex-wrap">
                <li className="mb-[40px] pl-[30px] float-left w-1/2">
                  <img
                    className="popup_image"
                    src="assets/img/experience/1.jpg"
                    alt=""
                  />
                  <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          &#160;2023 - Present
                        </span>
                        <h3 className="text-[20px]">DevOps Engineer</h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">- AIME</span>
                      </div>
                    </div>
                    <div className="text w-full float-left">
                      <p className="opacity-[0.7] text-justify">
                        I utilized a variety of AWS services to streamline
                        operations, increase releases, and minimize downtime. I
                        played a pivotal role in implementing Infrastructure as
                        Code (IaC) using AWS Cloud Development Kit (CDK) which
                        allowed us to swiftly set up the necessary
                        infrastructure for Continuous Integration and Continuous
                        Deployment (CI/CD) for multiple projects encompassing
                        both front-end and back-end components.
                      </p>
                    </div>
                    <a
                      className="elisc_tm_full_link absolute inset-0 z-[5]"
                      href="#stff"
                    ></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          Implementing AWS Services: Extensively used various
                          AWS services such as EC2 for virtual server hosting,
                          S3 for scalable storage, RDS for managed relational
                          databases, and Lambda for serverless computing, among
                          others. Utilized Elastic Load Balancing and Auto
                          Scaling to ensure high availability and fault
                          tolerance of applications.
                        </p>
                        <p>
                          Increasing Release Frequency: Implemented a CI/CD
                          pipeline using AWS CodePipeline, CodeBuild, and
                          CodeDeploy which automated the software release
                          process, thereby increasing the frequency of releases
                          and enabling the development and operations teams to
                          deliver changes more quickly and reliably.
                        </p>
                        <p>
                          Reducing Downtime: Implemented blue/green deployments
                          using AWS CodeDeploy and Route 53, which drastically
                          reduced downtime during deployments by directing
                          traffic between two identical environments running
                          different versions of the application.
                        </p>
                        <p>
                          Infrastructure as Code (IaC): Utilized AWS CDK to
                          define cloud resources in a familiar programming
                          language, which enabled the team to quickly spin up
                          and manage the necessary infrastructure for CI/CD.
                          This approach not only saved time but also ensured
                          consistency and repeatability of the infrastructure
                          setup.
                        </p>
                        <p>
                          Monitoring and Optimization: Implemented CloudWatch
                          for monitoring the AWS resources and the applications
                          that run on AWS. Utilized CloudTrail for auditing and
                          tracking user activity and API usage across the AWS
                          infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-[40px] pl-[30px] float-left w-1/2">
                  <img
                    className="popup_image"
                    src="assets/img/experience/2.jpg"
                    alt=""
                  />
                  <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          &#160;2021 - 2022
                        </span>
                        <h3 className="text-[20px]">React.js Developer</h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          -iPlex Pvt Ltd
                        </span>
                      </div>
                    </div>
                    <div className="text w-full float-left">
                      <p className="opacity-[0.7] text-justify">
                        At iPlex, I dove deeper into the world of cutting-edge
                        web technologies, becoming particularly proficient in
                        React, Redux, Node Express, and the latest versions of
                        Angular (13+). These skills were not merely academic –
                        they were rigorously applied to real-world projects that
                        made a substantial difference.
                      </p>
                    </div>
                    <a
                      className="elisc_tm_full_link absolute inset-0 z-[5]"
                      href="#stuff"
                    ></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          One of the pinnacle projects I contributed to was the
                          creation of a state-of-the-art marketing platform
                          named Finch Ecommerce. Designed with intricate
                          frontend dynamics using Angular 13+ and backed by a
                          robust backend built with SpringBoot.
                        </p>
                        <p>
                          Beyond Finch, I played a significant role in the
                          development and enhancement of several other platforms
                          at iPlex. This involved crafting fluid user interfaces
                          with React and Redux and ensuring seamless data flow
                          and operations, all tailored to deliver superior user
                          experiences and operational efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-[40px] pl-[30px] float-left w-1/2">
                  <img
                    className="popup_image"
                    src="assets/img/experience/3.jpg"
                    alt=""
                  />
                  <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                    <div className="short w-full float-left flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          2020 - 2021
                        </span>
                        <h3 className="text-[20px]">Web Developer</h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          -CyberDen
                        </span>
                      </div>
                    </div>
                    <div className="text w-full float-left">
                      <p className="opacity-[0.7]">
                        At Cyberden, I embarked on my journey as an associate,
                        distinguishing myself through my adeptness in
                        JavaScript, particularly ES6, and mastery in frontend
                        libraries such as Bootstrap, Material UI, and Tailwind.
                        My skill set and commitment to excellence earned me a
                        transition from an associate to a permanent role within
                        the company.
                      </p>
                    </div>
                    <a
                      className="elisc_tm_full_link absolute inset-0 z-[5]"
                      href="#stuff"
                    ></a>

                    <div className="hidden_details">
                      <div className="descriptions">
                        <p>
                          Beyond my technical contributions, I was recognized
                          for my innovation, dedication, and professional
                          expertise. These qualities rendered me an invaluable
                          member of the Cyberden team. As I venture into new
                          opportunities, I fondly look back on a tenure that was
                          marked by continuous learning, collaboration, and
                          tangible achievements in the realm of frontend
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
