import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Member Login | LARA Swim School",
  description: "Member portal design preview for LARA Swim School.",
};

export default function LoginPage() {
  return (
    <main className="portal-page-enter min-h-screen bg-[#f7f7f4] lg:grid lg:grid-cols-[1.05fr_.95fr]">
      <section
        className="relative hidden min-h-screen flex-col overflow-hidden bg-[#090f20] bg-cover bg-center px-10 py-9 text-white lg:flex xl:px-16 xl:py-12"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(9,15,32,.48), rgba(9,15,32,.9)), url('/LARAbg.jpg')",
        }}
      >
        <div aria-hidden="true" className="absolute inset-y-0 right-[10%] w-px bg-[#d7bd7a]/25" />
        <Link href="/" className="relative z-10 inline-flex w-fit" aria-label="LARA Swim School home">
          <img src="/LARA.jpg" alt="LARA Swim School" className="h-20 w-auto max-w-[210px] object-contain" />
        </Link>

        <div className="relative z-10 my-auto max-w-xl py-16">
          <p className="flex items-center gap-4 text-[11px] font-bold tracking-[5px] text-[#d7bd7a]">
            <span className="h-px w-12 bg-[#d7bd7a]" />
            MEMBER PORTAL
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-2px] xl:text-7xl">
            READY FOR
            <br />
            YOUR NEXT
            <br />
            <span className="text-[#d7bd7a]">LAP?</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-8 text-white/70">
            A dedicated space for the LARA swim community to stay connected with their journey in the water.
          </p>
          <div className="mt-10 flex items-center gap-3 text-xs font-bold tracking-[2px] text-white/75">
            <ShieldCheck size={18} className="text-[#d7bd7a]" aria-hidden="true" />
            TRAIN WITH PURPOSE. GROW WITH CONFIDENCE.
          </div>
        </div>

        <p className="relative z-10 text-[10px] font-semibold tracking-[2px] text-white/45">
          © {new Date().getFullYear()} LARA SWIM SCHOOL
        </p>
      </section>

      <section
        aria-labelledby="login-heading"
        className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12"
      >
        <div className="w-full max-w-[440px]">
          <div className="mb-10 flex items-center justify-between lg:hidden">
            <Link href="/" aria-label="LARA Swim School home">
              <img src="/LARA.jpg" alt="LARA Swim School" className="h-16 w-auto max-w-[170px] object-contain" />
            </Link>
            <span className="text-[10px] font-bold tracking-[2px] text-[#8c6827]">MEMBER PORTAL</span>
          </div>

          <Link
            href="/"
            className="mb-10 hidden w-fit items-center gap-2 text-xs font-bold tracking-[1px] text-slate-500 transition hover:text-[#8c6827] lg:inline-flex"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            BACK TO LARA
          </Link>

          <div className="mb-8">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-[#d7bd7a]/20 text-[#8c6827]">
              <LockKeyhole size={21} aria-hidden="true" />
            </div>
            <p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">MEMBER ACCESS</p>
            <h2 id="login-heading" className="mt-3 text-4xl font-black tracking-[-1px] text-[#090f20] sm:text-5xl">
              Welcome back.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sign in to continue your LARA Swim School journey.
            </p>
          </div>

          <div role="group" aria-label="Sign-in form preview" className="space-y-5">
            <label htmlFor="email" className="block text-xs font-black tracking-[1px] text-[#090f20]">
              EMAIL ADDRESS
              <span className="relative mt-2 block">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#090f20]/15 bg-white py-3.5 pl-12 pr-4 text-sm font-normal text-[#090f20] outline-none transition placeholder:text-slate-400 focus:border-[#b28a43] focus:ring-4 focus:ring-[#d7bd7a]/20"
                />
              </span>
            </label>

            <label htmlFor="password" className="block text-xs font-black tracking-[1px] text-[#090f20]">
              PASSWORD
              <span className="relative mt-2 block">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#090f20]/15 bg-white py-3.5 pl-12 pr-4 text-sm font-normal text-[#090f20] outline-none transition placeholder:text-slate-400 focus:border-[#b28a43] focus:ring-4 focus:ring-[#d7bd7a]/20"
                />
              </span>
            </label>

            <label className="flex w-fit items-center gap-3 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 accent-[#b28a43]" />
              Remember me
            </label>

            <button
              type="button"
              disabled
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#090f20] px-6 py-4 text-xs font-black tracking-[2px] text-white transition disabled:cursor-not-allowed disabled:opacity-100"
            >
              SIGN IN
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>

          <div role="note" className="mt-6 flex gap-3 rounded-xl border border-[#d7bd7a]/40 bg-[#d7bd7a]/10 p-4 text-xs leading-5 text-slate-600">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#8c6827]" aria-hidden="true" />
            <p>
              <span className="font-bold text-[#090f20]">Design preview.</span> Sign-in is not connected to an account system.
            </p>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            New to LARA?{" "}
            <Link href="/#contact" className="font-bold text-[#8c6827] transition hover:text-[#090f20]">
              Ask about enrollment
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
