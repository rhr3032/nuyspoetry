import type { Metadata } from "next";
import { Facebook, Instagram, Mail } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Nuy's Poetry",
  description: "Professional contact page for readings, collaborations, workshops, essays, and literary events.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(245,158,11,0.2),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_76%_80%,rgba(249,115,22,0.14),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Contact</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.08] text-stone-900 md:text-6xl">
                Let&apos;s talk about poems, essays, readings, and literary work.
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Use the contact form for collaborations, magazine features, event invitations, interviews,
                workshops, or thoughtful correspondence about the writing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_14px_38px_rgba(28,25,23,0.1)] backdrop-blur-md">
                <Mail className="h-5 w-5 text-stone-500" />
                <a href="mailto:raisulhasanrafi3032@gmail.com" className="mt-3 block text-xl font-semibold text-stone-900 hover:text-stone-700">
                  Email
                </a>
                <p className="mt-1 text-sm text-stone-500">raisulhasanrafi3032@gmail.com</p>
                <p className="mt-3 text-sm leading-7 text-stone-600">Use email for official inquiries, collaboration requests, editorial conversations, and event invitations.</p>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_14px_38px_rgba(28,25,23,0.1)] backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/8801795408194"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-xl font-semibold text-stone-900 hover:text-stone-700"
                >
                  WhatsApp
                </a>
                <p className="mt-1 text-sm text-stone-500">+880 1795-408194</p>
                <p className="mt-3 text-sm leading-7 text-stone-600">Use WhatsApp for quick questions or urgent requests, and include your deadline for a faster response.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Social Links</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <a
                  href="https://facebook.com/nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="h-5 w-5 text-[#1877F2]" />
                    <p className="text-sm font-semibold text-stone-900">Facebook</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-[#E1306C]" />
                    <p className="text-sm font-semibold text-stone-900">Instagram</p>
                  </div>
                </a>
                <a
                  href="https://threads.net/@nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="currentColor" className="h-5 w-5 text-stone-900">
                      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.452-15.153 9.908-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.238 139.985 29.811 120.4 29.608 96c.203-24.4 5.63-44.006 16.124-58.228C56.957 23.516 74.207 16.2 97.017 16.032c22.975.169 40.526 7.52 52.171 21.847 5.71 7.026 9.991 15.807 12.798 26.11l16.152-4.312c-3.495-12.954-9.056-24.017-16.585-32.886C147.042 10.645 124.533 1.587 97.077 1.411h-.11C69.514 1.587 47.166 10.682 31.889 28.624 18.284 44.637 11.187 66.45 10.954 96v.072c.233 29.553 7.33 51.356 21.007 67.38 15.277 17.942 37.625 27.037 64.414 27.213h.11c23.86-.152 40.727-6.409 54.572-20.243 18.552-18.533 17.994-41.964 11.884-56.338-4.22-9.836-12.156-17.805-21.404-22.096zm-41.59 55.171c-10.764.592-21.977-4.223-22.564-14.627-.422-7.907 5.67-16.734 24.049-17.784 2.104-.121 4.17-.179 6.203-.179 6.04 0 11.705.558 16.894 1.629-1.921 23.832-13.962 30.348-24.582 30.961z" />
                    </svg>
                    <p className="text-sm font-semibold text-stone-900">Threads</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
