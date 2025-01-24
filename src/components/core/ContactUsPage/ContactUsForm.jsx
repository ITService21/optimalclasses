import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../common/Input";
import CountryCode from "../../../data/countrycode.json";
import axios from "axios";
import Button from "../../common/Button.js";
import { toast } from "react-hot-toast";

const ContactUsForm = () => {
  const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_PROD  
  : process.env.REACT_APP_API_URL;  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [loading, setLoading] = useState(false);
  // const[btnDisable , setBtnDisable] = useState(false);

  // useEffect(()=>{
  //   if(file&&title){
  //       setBtnDisable(false)
  //   }
  //   else{
  //       setBtnDisable(true)
  //   }
  // },[file, title])

  const submitContactForm = async (data) => {
    console.log("data2", data);
    // console.log("Form Data - ", data)
    try {
      if (
        !data?.email ||
        !data?.firstname ||
        !data?.message ||
        !data?.phoneNo
      ) {
        if (!data?.phoneNo) {
          throw new Error("Please Add Missing Again!");
        }
      }
      setLoading(true);
      // const res = await axios.post("http://localhost:5005/contact", data);
      const res = await axios.post(`${apiUrl}/contact`, data);
      console.log("sgsddgg1",data)
      if (res?.status === 200) {
        console.log("Email sent successfully:", res?.data?.message);
      } else {
        console.error("Failed to send email:", res?.data?.message);
      }
      setLoading(false);
      toast.success("Email sent successfully!");
      reset({
        // Reset the form only if successful
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    } catch (error) {
      // toast.error("Email Sending Failed!")
      console.log("ERROR MESSAGE on contact mail sending- ", error?.message);
      if (error?.message === "Please Add Phone no again!") {
        toast.error("Please Add Phone no Again!");
      } else {
        toast.error("Email Sending Failed!");
      }
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({
  //       email: "",
  //       firstname: "",
  //       lastname: "",
  //       message: "",
  //       phoneNo: "",
  //     });
  //   }
  // }, [isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-7 "
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="p-2 rounded-md"
            {...register("firstname", { required: true })}
          />
          {errors?.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="p-2 rounded-md"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="p-2 rounded-md"
          {...register("email", { required: true })}
        />
        {errors?.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>

        <div className="flex gap-4">
          <div className="flex w-[81px] flex-col ">
            <select
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="p-2 rounded-md h-[40px] md:h-[39px]"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="12345 67890"
              className="p-2 rounded-md"
              {...register("phoneNo", { required: true })}
            />
            {errors?.phoneNo && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter phone no.
              </span>
            )}
          </div>
        </div>
        {errors?.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors?.phoneNo?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="p-2 rounded-md"
          {...register("message", { required: true })}
        />
        {errors?.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      {/* <button

        disabled={loading}
        type="submit"
        className={` rounded-md bg-[#060606] px-6 py-3 text-center text-[13px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button> */}

      <Button
        disabled={loading}
        loading={loading}
        type="submit"
        text="Send Message"
        className={`rounded-md bg-[#060606] px-6 py-3 text-center text-[13px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      ></Button>
    </form>
  );
};

export default ContactUsForm;
