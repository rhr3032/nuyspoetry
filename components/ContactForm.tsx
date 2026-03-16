"use client";

import { useState } from "react";

const contactEmail = "raisulhasanrafi3032@gmail.com";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string>("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please fill in all fields before sending your message.");
      return;
    }

    setError("");

    const emailSubject = encodeURIComponent(form.subject.trim());
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        "",
        form.message.trim(),
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-4xl border border-white/60 bg-white/45 p-7 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Send a Message</p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900">Start the conversation</h2>
        </div>
        <span className="rounded-full border border-amber-200/80 bg-amber-50/80 px-3 py-1 text-xs font-medium text-amber-800">
          Opens your mail app
        </span>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-stone-700">Your Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-500 focus:border-amber-200 focus:bg-white"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-stone-700">Email Address</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-500 focus:border-amber-200 focus:bg-white"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-stone-700">Subject</span>
        <input
          type="text"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="w-full rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-500 focus:border-amber-200 focus:bg-white"
          placeholder="Reading invitation, collaboration, workshop, interview..."
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-stone-700">Message</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={7}
          className="w-full resize-none rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm leading-7 text-stone-900 outline-none transition placeholder:text-stone-500 focus:border-amber-200 focus:bg-white"
          placeholder="Write your message here..."
        />
      </label>

      {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Send Message
        </button>
        <p className="text-sm text-stone-600">Your message will open in your default email app, ready to send.</p>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-100/80 bg-amber-50/50 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">A note from the poet</p>
        <p className="mt-3 text-sm leading-7 text-stone-700">
          Every genuine message is read. Whether you are a reader, an editor, a fellow poet, a student,
          or someone who simply encountered a line that stayed with you — you are welcome to write.
          The conversation about poetry is itself a kind of poetry.
        </p>
      </div>
    </form>
  );
}