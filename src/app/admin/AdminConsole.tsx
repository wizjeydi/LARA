"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  LayoutDashboard,
  Menu,
  UserRound,
  UserRoundCog,
  Users,
  WalletCards,
  X,
  type LucideIcon,
} from "lucide-react";

type AdminPage =
  | "Dashboard"
  | "Swimmers"
  | "Coaches"
  | "Training Sessions"
  | "Attendance"
  | "Events & Competitions"
  | "Payments";

const navigation: { label: AdminPage; icon: LucideIcon }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Swimmers", icon: Users },
  { label: "Coaches", icon: UserRoundCog },
  { label: "Training Sessions", icon: CalendarDays },
  { label: "Attendance", icon: CheckCircle2 },
  { label: "Events & Competitions", icon: Activity },
  { label: "Payments", icon: WalletCards },
];

export default function AdminConsole() {
  const [activePage, setActivePage] = useState<AdminPage>("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  function renderNavigation(collapsible = false) {
    return navigation.map(({ label, icon: Icon }) => {
      const active = activePage === label;

      return (
        <button
          key={label}
          type="button"
          title={collapsible ? label : undefined}
          aria-current={active ? "page" : undefined}
          onClick={() => {
            setActivePage(label);
            setMobileMenuOpen(false);
          }}
          className={`flex w-full items-center rounded-xl py-3 text-left text-sm font-semibold transition ${
            collapsible
              ? "justify-center gap-0 px-2 group-hover:justify-start group-hover:gap-3 group-hover:px-3 group-focus-within:justify-start group-focus-within:gap-3 group-focus-within:px-3"
              : "gap-3 px-3"
          } ${
            active
              ? "bg-[#d7bd7a] text-[#090f20] shadow-sm"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Icon className="shrink-0" size={18} aria-hidden="true" />
          <span
            className={
              collapsible
                ? "max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-[190px] group-hover:opacity-100 group-focus-within:max-w-[190px] group-focus-within:opacity-100"
                : undefined
            }
          >
            {label}
          </span>
        </button>
      );
    });
  }

  return (
    <div className="flex min-h-screen bg-white text-[#171b24]">
      <aside className="group sticky top-0 hidden h-screen w-[76px] shrink-0 flex-col border-r border-white/10 bg-[#090f20] transition-[width] duration-300 ease-in-out hover:w-[258px] focus-within:w-[258px] lg:flex">
        <Link
          href="/"
          className="flex h-[92px] shrink-0 items-center justify-center border-b border-white/10 px-2"
          aria-label="LARA Swim School home"
        >
          <img
            src="/LARA.jpg"
            alt="LARA Swim School"
            className="h-[58px] w-[58px] shrink-0 object-contain object-center transition-all duration-300 group-hover:h-[76px] group-hover:w-[76px] group-focus-within:h-[76px] group-focus-within:w-[76px]"
          />
        </Link>

        <nav aria-label="Admin sidebar" className="flex-1 space-y-1 overflow-y-auto px-2 py-5">
          <p className="mb-3 h-4 max-w-0 overflow-hidden whitespace-nowrap px-3 text-[10px] font-bold uppercase tracking-[2px] text-white/35 opacity-0 transition-all duration-200 group-hover:max-w-[220px] group-hover:opacity-100 group-focus-within:max-w-[220px] group-focus-within:opacity-100">
            School management
          </p>
          {renderNavigation(true)}
        </nav>

        <div className="flex shrink-0 justify-center border-t border-white/10 p-3 group-hover:justify-start group-hover:px-4 group-focus-within:justify-start group-focus-within:px-4">
          <Link
            href="/"
            title="Back to LARA website"
            className="flex items-center justify-center gap-0 rounded-xl px-2 py-2 text-xs font-semibold text-white/45 transition hover:bg-white/10 hover:text-[#d7bd7a] group-hover:justify-start group-hover:gap-2 group-focus-within:justify-start group-focus-within:gap-2"
          >
            <ArrowLeft className="shrink-0" size={16} aria-hidden="true" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-[180px] group-hover:opacity-100 group-focus-within:max-w-[180px] group-focus-within:opacity-100">
              Back to LARA website
            </span>
          </Link>
        </div>
      </aside>

      <div className="min-h-screen min-w-0 flex-1 bg-white">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-white/10 bg-[#090f20] px-4 text-white sm:px-6">
          <div className="z-10 min-w-0">
            <h1 className="hidden text-lg font-bold lg:block">{activePage}</h1>
            <h1 className="text-sm font-bold lg:hidden">Admin</h1>
            <p className="hidden text-xs text-white/55 lg:block">School management</p>
          </div>

          <Link
            href="/"
            aria-label="LARA Swim School home"
            className="absolute left-1/2 inline-flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center lg:hidden"
          >
            <img src="/LARA.jpg" alt="LARA Swim School" className="h-[60px] w-[60px] object-contain object-center" />
          </Link>

          <div className="z-10 flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                aria-label="Toggle account menu"
                aria-controls="admin-account-menu"
                aria-expanded={profileMenuOpen}
                onClick={() => setProfileMenuOpen((open) => !open)}
                className="flex h-10 items-center gap-2 rounded-xl px-2 text-left transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7bd7a]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-[#d7bd7a]">
                  <UserRound size={17} aria-hidden="true" />
                </span>
                <span className="hidden sm:block">
                  <span className="block text-sm font-semibold leading-4">Admin</span>
                  <span className="block text-xs leading-4 text-white/55">School administrator</span>
                </span>
                <ChevronDown size={15} aria-hidden="true" className="hidden text-white/60 sm:block" />
              </button>
              {profileMenuOpen && (
                <div
                  id="admin-account-menu"
                  aria-label="Account details"
                  className="absolute right-0 top-[calc(100%+12px)] z-40 w-56 rounded-xl border border-[#090f20]/10 bg-white p-4 text-[#090f20] shadow-xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#8c6827]">
                    Account
                  </p>
                  <p className="mt-2 text-sm font-bold">Admin</p>
                  <p className="mt-1 text-xs text-[#667085]">School administrator</p>
                </div>
              )}
            </div>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close admin menu" : "Open admin menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                setProfileMenuOpen(false);
              }}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-white transition hover:border-[#d7bd7a] hover:text-[#d7bd7a] lg:hidden"
            >
              {mobileMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav aria-label="Mobile admin sidebar" className="border-b border-white/10 bg-[#090f20] p-3 lg:hidden">
            {renderNavigation()}
          </nav>
        )}

        <main
          aria-label="Empty admin workspace"
          className="min-h-[calc(100vh-76px)] bg-white"
        />
      </div>
    </div>
  );
}
