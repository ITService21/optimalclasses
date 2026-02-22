import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactUsPage/ContactForm";
function ContactUs() {
  return (
    <div>
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[300px] custom-bg-position bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
        style={{
          backgroundImage: "url('/images/whyTop.jpg')",
          //   backgroundPosition: "center top -340px",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position {
                background-position: center top -30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position {
                background-position: center top -200px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position {
                background-position: center top -260px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
      </div>
      <div className=" pb-10 bg-gradient-to-b from-[#BFF098] to-[#6FD6FF]">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Connect With Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-10">
          {/* Phone */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() => (window.location.href = "tel:+91 9415228666")} // Replace with actual phone number
          >
            <div className="m-4 flex ">
              {" "}
              <FaPhoneAlt className="text-[#820c0c] mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Contact Number
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center">
                +91 9415228666
              </p>
              <p className="font-cinzel text-[18px] mb-[1px] text-center">
                +91 7380922230
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() =>
              (window.location.href = "mailto:optimalclassesvns@gmail.com")
            } 
          >
            <div className="m-4 flex ">
              <FaEnvelope className="text-[#820c0c]  mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Email Us
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center">
              optimalclassesvns@gmail.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/OPTIMAL+CLASSES/@25.2840534,82.9697691,16.85z/data=!4m6!3m5!1s0x398e3391a2196597:0x2af9196892ac4703!8m2!3d25.2839709!4d82.9696073!16s%2Fg%2F11t30zrhbf?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              )
            }
          >
            <div className="m-4 flex ">
              <FaMapMarkerAlt className="text-[#820c0c]  mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Location
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center px-4 md:px-6">
              Optimal Classes, New Colony Kakarmatta Varanasi, Uttar Pradesh.
              </p>
            </div>
          </div>
        </div>
        <div className="w-auto h-[300px] md:h-[400px] lg:h-[500px] mx-2 md:mx-8 lg:mx-10 my-6 md:my-12 lg:my-16 border-2 md:border-[25px] border-[#131313]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016.7792363329595!2d82.96976914526385!3d25.284053422992653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3391a2196597%3A0x2af9196892ac4703!2sOPTIMAL%20CLASSES!5e0!3m2!1sen!2sin!4v1737197500430!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Optimal Classes Location"
          ></iframe>
        </div>
        <div><ContactForm/></div>
      </div>
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[280px] custom-bg-position1"
        style={{
          backgroundImage: "url('/images/whyBottom.webp')",
          //   backgroundPosition: "center top -200px",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position1 {
                background-position: center top 30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position1 {
                background-position: center top -80px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position1 {
                background-position: center top -130px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
        {/* <h1 className="absolute text-white text-3xl font-bold">
        Why Optimal Classes
      </h1> */}
      </div>
    </div>
  );
}

export default ContactUs;
