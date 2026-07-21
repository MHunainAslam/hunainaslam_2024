"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { MotionButton } from "@/components/ui/MotionButton";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function InfoItem({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
  className = "",
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div
      className={`group/item flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent-cyan/40 hover:bg-white/[0.05] ${className}`}
    >
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="block truncate text-sm font-medium text-slate-100 transition-colors hover:text-accent-cyan"
          >
            {value}
          </a>
        ) : (
          <p className="truncate text-sm font-medium text-slate-100">{value}</p>
        )}
      </div>
      {copyValue && (
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 opacity-0 transition-all hover:border-accent-cyan/50 hover:text-accent-cyan group-hover/item:opacity-100"
        >
          {copied ? (
            <Check className="h-4 w-4 text-accent-cyan" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = handleSubmit((data) => {
    // No backend wired yet — open the user's mail client as a graceful fallback.
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name}\n${data.email}${
        data.phone ? `\n${data.phone}` : ""
      }`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  });

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-accent-cyan/60 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-4xl rounded-full bg-accent-indigo/10 blur-[120px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, role, or idea in mind? I'm always open to a good conversation."
        />

        {/* One stylish block: info panel + inquiry form */}
        <Reveal className="mt-14">
          <div className="glass-card relative overflow-hidden rounded-3xl p-1.5">
            <div className="grid gap-px overflow-hidden rounded-[20px] lg:grid-cols-[0.85fr_1.15fr]">
              {/* Left — contact info panel */}
              <div className="relative flex flex-col gap-4 rounded-[18px] bg-gradient-to-br from-accent-cyan/[0.08] via-ink-900/40 to-accent-indigo/[0.08] p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-cyan/10 blur-[80px]" />

                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-slate-50">
                    Get in touch
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Fill in the form or reach me directly — I usually reply
                    within a day.
                  </p>
                </div>

                <div className="relative mt-2 grid gap-3">
                  <InfoItem
                    icon={Mail}
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                    copyValue={profile.email}
                  />
                  <InfoItem
                    icon={Phone}
                    label="Phone"
                    value={profile.phoneDisplay}
                    href={`tel:${profile.phone}`}
                    copyValue={profile.phone}
                  />
                  <InfoItem
                    icon={MapPin}
                    label="Location"
                    value={profile.location}
                  />
                </div>

                <div className="relative mt-auto flex gap-3 pt-4">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 flex-1 place-items-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 flex-1 place-items-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Right — inquiry form */}
              <form
                onSubmit={onSubmit}
                className="space-y-4 rounded-[18px] bg-ink-950/40 p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-slate-300">
                      Name
                    </label>
                    <input
                      className={field}
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-slate-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className={field}
                      placeholder="Optional"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className={field}
                    placeholder="you@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder="Tell me about your project or role…"
                    {...register("message", {
                      required: "Please add a message",
                      minLength: {
                        value: 10,
                        message: "A little more detail, please",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <MotionButton
                  type="submit"
                  disabled={isSubmitting}
                  label={sent ? "Opening your mail client…" : "Send Message"}
                  icon={sent ? Check : Send}
                  className="w-full"
                />
                <p className="text-center text-xs text-slate-500">
                  This opens your email client pre-filled — or email me directly
                  at <span className="text-accent-cyan">{profile.email}</span>.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
