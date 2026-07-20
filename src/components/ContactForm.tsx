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
    formState: { errors },
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
        console.log(data);
      })
      .catch((error) => {
        setisloading(false);
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hx-field-grid">
        <div className="hx-field">
          <label htmlFor="fullname">
            Full Name <span className="hx-accent">*</span>
          </label>
          <input
            id="fullname"
            type="text"
            className="hx-input"
            placeholder="Hunain Aslam"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="hx-err">This field is required</span>
          )}
        </div>

        <div className="hx-field">
          <label htmlFor="email">
            Email Address <span className="hx-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="hx-input"
            placeholder="hunainaslam.ha@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="hx-err">This field is required</span>
          )}
        </div>

        <div className="hx-field">
          <label htmlFor="phone">
            Phone Number <span className="hx-accent">*</span>
          </label>
          <input
            id="phone"
            type="text"
            className="hx-input"
            placeholder="0335-2653956"
            onKeyPress={(e) => !/[+0-9]/.test(e.key) && e.preventDefault()}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="hx-err">This field is required</span>
          )}
        </div>

        <div className="hx-field">
          <label htmlFor="subject">
            Subject <span className="hx-accent">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className="hx-input"
            placeholder="I'd like to discuss…"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="hx-err">This field is required</span>
          )}
        </div>

        <div className="hx-field full">
          <label htmlFor="message">
            Message <span className="hx-accent">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className="hx-input"
            placeholder="Write your message…"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="hx-err">This field is required</span>
          )}
        </div>

        <div className="hx-field full">
          <button
            className="hx-btn hx-btn-primary"
            type="submit"
            disabled={isloading}
          >
            {isloading ? "Sending…" : "Send Message"}{" "}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
