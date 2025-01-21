import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="mb-16 mx-auto bg-gradient-to-b from-[#FF512F] to-[#FBB03B] w-[95vw] md:w-[70vw] lg:md-[60vw] border border-richblack-600  rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-[#ffffff] text-center">
         Any Enquiry
      </h1>
      {/* <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p> */}

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
