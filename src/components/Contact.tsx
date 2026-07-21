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

    window.open(
      `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full rounded-lg border border-black/15 bg-white/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-accent dark:border-white/15 dark:bg-white/[0.03] dark:placeholder:text-white/40";

  const directLinks = [
    {
      label: "WhatsApp",
      value: profile.phoneDisplay,
      href: `https://wa.me/${profile.phoneRaw}`,
      icon: MessageCircle,
      primary: true,
    },
    { label: "Email", value: profile.email, href: mailto, icon: Mail },
    { label: "GitHub", value: "mhunainaslam", href: profile.github, icon: Github },
    { label: "LinkedIn", value: "hunain-aslam", href: profile.linkedin, icon: Linkedin },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow justify-center">Contact</span>
            <h2 className="heading mx-auto max-w-2xl">
              Let&apos;s talk<span className="text-accent">.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base muted">
              Got a project, a role, or just want to say hi? WhatsApp is the
              fastest way to reach me — I usually reply within a few hours.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-3">
              {directLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card card-hover flex items-center gap-4 p-4 ${
                    l.primary ? "!border-accent" : ""
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                      l.primary ? "bg-accent text-white" : "bg-black/5 text-accent dark:bg-white/5"
                    }`}
                  >
                    <l.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      {l.label}
                      {l.primary && (
                        <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                          fastest
                        </span>
                      )}
                    </div>
                    <div className="truncate font-mono text-xs muted">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input {...register("name", { required: true })} placeholder="Your name" className={inputClass} />
                  {errors.name && <p className="mt-1 text-xs text-accent">Name is required</p>}
                </div>
                <div>
                  <input
                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                    placeholder="Email address"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-accent">Valid email required</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input {...register("phone")} placeholder="Phone (optional)" className={inputClass} />
                <input {...register("subject", { required: true })} placeholder="Subject" className={inputClass} />
              </div>

              <textarea
                {...register("message", { required: true })}
                placeholder="Tell me a bit about what you need…"
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="-mt-2 text-xs text-accent">Please add a short message</p>}

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <p className="text-center font-mono text-xs muted">
                Opens WhatsApp with your message ready to go.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
