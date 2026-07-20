"use client";

import { useForm } from "react-hook-form";
import { Mail, MessageCircle, Send } from "lucide-react";
import { mailto, profile } from "@/lib/data";
import Reveal from "./ui/Reveal";
import { Github, Linkedin } from "./ui/BrandIcons";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    // Route the enquiry straight to WhatsApp for the fastest reply.
    window.open(
      `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-accent dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/40";

  const directLinks = [
    {
      label: "WhatsApp",
      value: profile.phoneDisplay,
      href: `https://wa.me/${profile.phoneRaw}`,
      icon: MessageCircle,
      primary: true,
    },
    { label: "Email", value: profile.email, href: mailto, icon: Mail },
    { label: "GitHub", value: "@mhunainaslam", href: profile.github, icon: Github },
    {
      label: "LinkedIn",
      value: "in/hunain-aslam",
      href: profile.linkedin,
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="glow-blob left-1/2 top-0 h-72 w-96 -translate-x-1/2 bg-accent/20" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Contact</span>
            <h2 className="heading mx-auto max-w-2xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great together.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base muted">
              Have a project, a role, or an idea? WhatsApp is the fastest way to
              reach me — or drop a message below.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* direct links */}
          <Reveal>
            <div className="flex h-full flex-col gap-3">
              {directLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass glass-hover flex items-center gap-4 p-5 ${
                    l.primary
                      ? "!border-accent/40 !bg-accent/10 hover:!bg-accent/15"
                      : ""
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      l.primary
                        ? "bg-accent text-ink-950"
                        : "bg-accent/12 text-accent"
                    }`}
                  >
                    <l.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      {l.label}
                      {l.primary && (
                        <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-600 dark:text-accent">
                          Fastest
                        </span>
                      )}
                    </div>
                    <div className="truncate text-sm muted">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass space-y-4 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">Name is required</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    placeholder="Email address"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      Valid email required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  {...register("phone")}
                  placeholder="Phone (optional)"
                  className={inputClass}
                />
                <input
                  {...register("subject", { required: true })}
                  placeholder="Subject"
                  className={inputClass}
                />
              </div>

              <textarea
                {...register("message", { required: true })}
                placeholder="Tell me about your project…"
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="-mt-2 text-xs text-red-400">
                  Please add a short message
                </p>
              )}

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <p className="text-center text-xs muted">
                Opens WhatsApp with your message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
