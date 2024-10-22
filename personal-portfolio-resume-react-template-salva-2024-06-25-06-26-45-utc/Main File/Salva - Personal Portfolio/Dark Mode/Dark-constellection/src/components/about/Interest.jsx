import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Interest = () =>
{
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
    return (
      <>
        <div className="salv-about-interest">
          <h5 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            interests
          </h5>
          <Slider {...settings} className="salva-inter-list-wrap row">
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.75 31.125V10.875C40.75 9.04688 39.2031 7.5 37.375 7.5H16C12.2031 7.5 9.25 10.5234 9.25 14.25V36.75C9.25 40.5469 12.2031 43.5 16 43.5H38.5C39.6953 43.5 40.75 42.5156 40.75 41.3203C40.75 40.5469 40.2578 39.8438 39.625 39.4219V33.7266C40.2578 33.0234 40.75 32.1797 40.75 31.125ZM19.3047 16.5H32.8047C33.4375 16.5 34 17.0625 34 17.625C34 18.2578 33.4375 18.75 32.875 18.75H19.3047C18.7422 18.75 18.25 18.2578 18.25 17.625C18.25 17.0625 18.7422 16.5 19.3047 16.5ZM19.3047 21H32.8047C33.4375 21 34 21.5625 34 22.125C34 22.7578 33.4375 23.25 32.875 23.25H19.3047C18.7422 23.25 18.25 22.7578 18.25 22.125C18.25 21.5625 18.7422 21 19.3047 21ZM36.25 39H16C14.7344 39 13.75 38.0156 13.75 36.75C13.75 35.5547 14.7344 34.5 16 34.5H36.25V39Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Reading
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 25.5C43 35.4844 34.9141 43.5 25 43.5C15.0156 43.5 7 35.4844 7 25.5C7 15.5859 15.0156 7.5 25 7.5C34.9141 7.5 43 15.5859 43 25.5ZM11.0078 21.0703L11.7109 22.2656C12.2734 23.25 13.1875 24.0234 14.3828 24.375L18.3906 25.5C19.6562 25.8516 20.5 26.9766 20.5 28.2422V31.0547C20.5 31.8281 20.9219 32.5312 21.625 32.8125C22.2578 33.1641 22.75 33.8672 22.75 34.6406V37.3828C22.75 38.5078 23.7344 39.2812 24.7891 39C25.9844 38.6484 26.8281 37.7344 27.1094 36.6094L27.3203 35.8359C27.6016 34.6406 28.375 33.6562 29.4297 33.0234L29.9922 32.6719C31.0469 32.1094 31.75 30.9844 31.75 29.7891V29.1562C31.75 28.3125 31.3281 27.3984 30.6953 26.7656L30.4844 26.5547C29.8516 25.9219 28.9375 25.5 28.0938 25.5H25C24.2266 25.5 23.4531 25.3594 22.8203 24.9375L20.3594 23.5312C20.0781 23.3906 19.8672 23.1094 19.7266 22.7578C19.5156 22.125 19.7969 21.3516 20.4297 21.0703L20.8516 20.8594C21.3438 20.5781 21.8359 20.5781 22.3281 20.7188L24.0156 21.2812C24.5781 21.4922 25.2109 21.2109 25.5625 20.7188C25.8438 20.2266 25.8438 19.5938 25.4219 19.1016L24.5078 17.9766C23.8047 17.1328 23.8047 15.9375 24.5078 15.0938L25.6328 13.8281C26.2656 13.0547 26.3359 12.0703 25.8438 11.2266L25.7031 10.9453C25.4219 10.9453 25.2109 10.875 25 10.875C18.4609 10.875 12.9062 15.1641 11.0078 21.0703ZM37.7266 18.3984L35.9688 19.1016C34.8438 19.5938 34.2812 20.7891 34.6328 21.9141L35.8281 25.5C36.0391 26.2031 36.6719 26.7656 37.4453 26.9766L39.4844 27.4688C39.5547 26.8359 39.625 26.2031 39.625 25.5C39.625 22.9688 38.9219 20.5078 37.7266 18.3984Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Travel
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6406 9.75H29.2891C30.7656 9.75 32.0312 10.7344 32.4531 12.0703L33.2266 14.25H38.5C40.9609 14.25 43 16.2891 43 18.75V36.75C43 39.2812 40.9609 41.25 38.5 41.25H11.5C8.96875 41.25 7 39.2812 7 36.75V18.75C7 16.2891 8.96875 14.25 11.5 14.25H16.7031L17.4766 12.0703C17.8984 10.7344 19.1641 9.75 20.6406 9.75ZM25 34.5C28.7266 34.5 31.75 31.4766 31.75 27.75C31.75 24.0234 28.7266 21 25 21C21.2031 21 18.25 24.0234 18.25 27.75C18.25 31.4766 21.2031 34.5 25 34.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Photography
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.3984 9.75C28.1719 9.75 28.9453 10.2422 29.3672 10.9453L36.2578 23.6719C37.1016 23.4609 38.0156 23.25 39 23.25C43.9219 23.25 48 27.3281 48 32.25C48 37.2422 43.9219 41.25 39 41.25C34.0078 41.25 30 37.2422 30 32.25C30 29.4375 31.2656 26.9766 33.3047 25.2891L31.7578 22.4766L25.7812 32.6016C25.5 33.0938 24.9375 33.375 24.375 33.375H20.9297C20.3672 37.875 16.5703 41.25 12 41.25C7.00781 41.25 3 37.2422 3 32.25C3 27.3281 7.00781 23.25 12 23.25C12.7031 23.25 13.4766 23.3906 14.1797 23.5312L16.0078 19.8047L14.4609 17.625H11.4375C10.4531 17.625 9.75 16.9219 9.75 15.9375C9.75 15.0234 10.4531 14.25 11.4375 14.25H15.375C15.8672 14.25 16.3594 14.5312 16.7109 14.9531L18.6094 17.625H29.1562L26.6953 13.125H24.8672C23.9531 13.125 23.1797 12.4219 23.1797 11.4375C23.1797 10.5234 23.9531 9.75 24.8672 9.75H27.3984ZM33.9375 32.25C33.9375 35.0625 36.1875 37.3125 39 37.3125C41.7422 37.3125 44.0625 35.0625 44.0625 32.25C44.0625 29.5078 41.7422 27.1875 39 27.1875C38.7188 27.1875 38.4375 27.2578 38.1562 27.2578L40.4766 31.4766C40.8984 32.3203 40.6172 33.3047 39.7734 33.7969C38.9297 34.2188 37.9453 33.9375 37.4531 33.0938L35.2031 28.875C34.4297 29.7891 33.9375 30.9844 33.9375 32.25ZM10.5938 30.6328L12.3516 27.2578C12.2109 27.2578 12.0703 27.1875 11.9297 27.1875C9.1875 27.1875 6.86719 29.5078 6.86719 32.25C6.86719 35.0625 9.1875 37.3125 11.9297 37.3125C14.3906 37.3125 16.3594 35.6953 16.9219 33.375H12.3516C10.875 33.375 9.96094 31.8984 10.5938 30.6328ZM23.3906 30L18.2578 22.8984L14.6719 30H23.3906ZM21.0703 21L25.2891 26.8359L28.6641 21H21.0703Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Cycling
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.875 14.25C30.7031 14.25 32.25 12.7734 32.25 10.875C32.25 9.04688 30.7031 7.5 28.875 7.5C26.9766 7.5 25.5 9.04688 25.5 10.875C25.5 12.7734 26.9766 14.25 28.875 14.25ZM17.625 27.75C18.1172 27.75 18.5391 27.3984 18.6797 26.9062L21.6328 15.7266C21.6328 15.6562 21.6328 15.5859 21.6328 15.5156C21.6328 15.0234 21.2812 14.5312 20.7891 14.4609C20.2969 14.3203 19.8047 14.25 19.3828 14.25C16.7812 14.25 14.4609 15.9375 13.7578 18.4688L12 25.3594C12 25.4297 11.9297 25.5 11.9297 25.6406C11.9297 26.1328 12.2812 26.5547 12.8438 26.6953L17.3438 27.75C17.4141 27.75 17.4844 27.75 17.625 27.75ZM37.875 18.75H36.75C36.1875 18.75 35.6953 19.3125 35.6953 19.875V21H33.3047L30 17.7656C29.0859 16.9922 28.0312 16.5 26.9062 16.5C25.0078 16.5 23.3906 17.8359 22.8984 19.6641L21.0703 27.2578C21 27.3984 21 27.6094 21 27.8203C21 28.3828 21.2109 28.9453 21.6328 29.3672L27.6797 35.4844V41.25C27.6797 42.5156 28.7344 43.5 29.9297 43.5C31.0547 43.5 32.1797 42.5156 32.1797 41.25V35.4844C32.1797 34.2891 31.6875 33.1641 30.8438 32.25L27.5391 29.0156C27.5391 28.9453 27.5391 28.9453 27.6094 28.875L28.9453 23.3203L30.4922 24.8672C31.0547 25.2891 31.6172 25.5 32.25 25.5H35.5547V42.375C35.5547 43.0078 36.0469 43.5 36.6094 43.5H37.6641C38.4375 43.5 39 43.0078 39 42.375V19.875C39 19.3125 38.4375 18.75 37.875 18.75ZM17.6953 40.7578C17.625 40.8984 17.625 41.1094 17.625 41.3203C17.625 42.3047 18.2578 43.2188 19.3125 43.5C19.4531 43.5 19.6641 43.5 19.875 43.5C20.8594 43.5 21.7734 42.8672 21.9844 41.8125L23.7422 34.7109L20.0156 30.9844L17.6953 40.7578Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Hiking
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.5 12H16.5C8.97656 12 3 18.0469 3 25.5C3 33.0234 8.97656 39 16.5 39H34.5C41.9531 39 48 33.0234 48 25.5C48 18.0469 41.9531 12 34.5 12ZM20.3672 27.1875H18.1172V29.4375C18.1172 30.4219 17.3438 31.125 16.4297 31.125C15.4453 31.125 14.7422 30.4219 14.7422 29.4375V27.1875H12.5625C11.5781 27.1875 10.8047 26.4844 10.8047 25.5C10.8047 24.5859 11.5078 23.8125 12.4922 23.8125H14.7422V21.5625C14.7422 20.6484 15.4453 19.875 16.4297 19.875C17.3438 19.875 18.1172 20.6484 18.1172 21.5625V23.8125H20.3672C21.2812 23.8125 22.0547 24.5859 22.0547 25.5C22.0547 26.4844 21.3516 27.1875 20.3672 27.1875ZM33.3047 31.6875C31.6875 31.6875 30.5625 30.4922 30.5625 28.9453C30.5625 27.4688 31.7578 26.1328 33.3047 26.1328C34.7812 26.1328 36.0469 27.3984 36.0469 28.9453C36.0469 30.5625 34.9219 31.6875 33.3047 31.6875ZM37.8047 24.9375C36.1875 24.9375 35.0625 23.7422 35.0625 22.1953C35.0625 20.7188 36.2578 19.3828 37.8047 19.3828C39.3516 19.3828 40.5469 20.6484 40.5469 22.1953C40.5469 23.8125 39.4219 24.9375 37.8047 24.9375Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Gaming
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 col-md-2 col-lg-3 col-xxl-2 inter-col">
              <div className="salv-inter-main-wrap text-center">
                <div className="salv-interst-icon reading-icon dark-salv-inter-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 25.5C43 35.4844 34.9141 43.5 25 43.5C15.0156 43.5 7 35.4844 7 25.5C7 15.5859 15.0156 7.5 25 7.5C34.9141 7.5 43 15.5859 43 25.5ZM11.0078 21.0703L11.7109 22.2656C12.2734 23.25 13.1875 24.0234 14.3828 24.375L18.3906 25.5C19.6562 25.8516 20.5 26.9766 20.5 28.2422V31.0547C20.5 31.8281 20.9219 32.5312 21.625 32.8125C22.2578 33.1641 22.75 33.8672 22.75 34.6406V37.3828C22.75 38.5078 23.7344 39.2812 24.7891 39C25.9844 38.6484 26.8281 37.7344 27.1094 36.6094L27.3203 35.8359C27.6016 34.6406 28.375 33.6562 29.4297 33.0234L29.9922 32.6719C31.0469 32.1094 31.75 30.9844 31.75 29.7891V29.1562C31.75 28.3125 31.3281 27.3984 30.6953 26.7656L30.4844 26.5547C29.8516 25.9219 28.9375 25.5 28.0938 25.5H25C24.2266 25.5 23.4531 25.3594 22.8203 24.9375L20.3594 23.5312C20.0781 23.3906 19.8672 23.1094 19.7266 22.7578C19.5156 22.125 19.7969 21.3516 20.4297 21.0703L20.8516 20.8594C21.3438 20.5781 21.8359 20.5781 22.3281 20.7188L24.0156 21.2812C24.5781 21.4922 25.2109 21.2109 25.5625 20.7188C25.8438 20.2266 25.8438 19.5938 25.4219 19.1016L24.5078 17.9766C23.8047 17.1328 23.8047 15.9375 24.5078 15.0938L25.6328 13.8281C26.2656 13.0547 26.3359 12.0703 25.8438 11.2266L25.7031 10.9453C25.4219 10.9453 25.2109 10.875 25 10.875C18.4609 10.875 12.9062 15.1641 11.0078 21.0703ZM37.7266 18.3984L35.9688 19.1016C34.8438 19.5938 34.2812 20.7891 34.6328 21.9141L35.8281 25.5C36.0391 26.2031 36.6719 26.7656 37.4453 26.9766L39.4844 27.4688C39.5547 26.8359 39.625 26.2031 39.625 25.5C39.625 22.9688 38.9219 20.5078 37.7266 18.3984Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="salv-inter-name inter-font-500 w-text sm-md-font">
                  Travel
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
};
export default Interest;