"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
interface ContactInfo {
  fullname: string;
  email: string;
  phone: number;
  message: string;
  subject: string;
}

const ContactForm: React.FC = () => {
  const [isloading, setisloading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInfo>();

  const onSubmit: SubmitHandler<ContactInfo> = (data: object) => {
    setisloading(true);
    emailjs
      .sendForm(
        "service_o7dtp1a",
        "template_l0fxo5c",
        document.querySelector("form") as HTMLFormElement,
        "fVsE17VJyVluhQ8s5"
      )
      .then((response) => {
        reset();
        setisloading(false);
        console.log(response);
        console.log(data)
      })
      .catch((error) => {
        setisloading(false);
        console.error("Error sending email:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6 mb-4 ">
          <label htmlFor="" className="mt-3">
            Full Name <span className="clr-secondary">*</span>{" "}
          </label>
          <input
            type="text"
            className="form-control inp mt-2"
            placeholder="Hunain Aslam "
            id=""
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="para-sm clr-light">This field is required</span>
          )}
        </div>
        <div className="col-md-6 mb-4 ">
          <label htmlFor="" className="mt-3">
            Email Address <span className="clr-secondary">*</span>
          </label>
          <input
            type="email"
            className="form-control inp mt-2"
            placeholder="hunainaslam.ha@gmail.com"
            {...register("email", { required: true })}
            id=""
          />
          {errors.email && (
            <span className="para-sm clr-light">This field is required</span>
          )}
        </div>
        <div className="col-md-6 mb-4 ">
          <label htmlFor="" className="mt-3">
            Phone Number <span className="clr-secondary">*</span>
          </label>
          <input
            type="text"
            className="form-control inp mt-2"
            placeholder="0335-2653956"
            onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()}
            {...register("phone", { required: true })}
            id=""
          />
          {errors.phone && (
            <span className="para-sm clr-light">This field is required</span>
          )}
        </div>
        <div className="col-md-6 mb-4 ">
          <label htmlFor="" className="mt-3">
            Subject <span className="clr-secondary">*</span>
          </label>
          <input
            type="text"
            className="form-control inp mt-2"
            placeholder="I would like to discussed "
            {...register("subject", { required: true })}
            id=""
          />
          {errors.subject && (
            <span className="para-sm clr-light">This field is required</span>
          )}
        </div>
        <div className="col-md-12 mb-4 ">
          <label htmlFor="" className="mt-3">
            Message <span className="clr-secondary">*</span>
          </label>
          <textarea
            rows={4}
            className="form-control inp mt-2"
            placeholder="Write Message"
            id=""
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="para-sm clr-light">This field is required</span>
          )}
        </div>
        <div className="col mt-4">
          <button
            className="btn primary-btn py-3 px-4"
            type="submit"
            disabled={isloading}
          >
            {isloading ? "Sending..." : " Send Message"}{" "}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
