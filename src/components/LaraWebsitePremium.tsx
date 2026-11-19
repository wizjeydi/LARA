"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Award, ChevronDown, Clock3, Facebook, Instagram, Mail, MapPin, Menu, Phone, ShieldCheck, Target, Trophy, X, Youtube } from "lucide-react";

const photo = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

const programs = [
  ["BEGINNER SWIMMING", "Water familiarization, floating, breathing, and essential swimming foundations.", "photo-1530137073520-4ea6e9dfb43c"],
  ["INTERMEDIATE SWIMMING", "Build stronger strokes, coordination, endurance, and confidence in the water.", "photo-1530549387789-4c1017266635"],
  ["ADVANCED SWIMMING", "Develop advanced technique, efficiency, speed, and race-ready endurance.", "photo-1519315901367-f34ff9154487"],
  ["COMPETITIVE SWIMMING", "Purposeful, structured training for swimmers preparing for competitive events.", "photo-1560089000-7433a4ebbd64"],
] as const;

const gallery = ["photo-1530137073520-4ea6e9dfb43c", "photo-1519315901367-f34ff9154487", "photo-1560089000-7433a4ebbd64", "photo-1530549387789-4c1017266635", "photo-1538481199705-c710c4e965fc", "photo-1461896836934-ffe607ba8211"];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="inline-flex items-center" aria-label="LARA Swim School home">
      <img
        src="/LARA.jpg"
        alt="LARA Swim School logo"
        className={light ? "h-20 w-auto max-w-[210px] object-contain md:h-24 md:max-w-[250px]" : "h-20 w-auto max-w-[210px] object-contain"}
      />
    </a>
  );
}

export default function LaraWebsitePremium() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [faq, setFaq] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const revealTargets = document.querySelectorAll<HTMLElement>(
      "main > section:not(#home) .container-pad > *, main > section:not(#home) .container-pad > .grid > *",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    revealTargets.forEach((element) => {
      const siblingIndex = element.parentElement
        ? Array.from(element.parentElement.children).indexOf(element)
        : 0;
      element.style.setProperty("--scroll-reveal-delay", `${Math.min(siblingIndex, 4) * 80}ms`);
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const nav = [["Home", "home"], ["About", "about"], ["Programs", "programs"], ["Coaches", "coaches"], ["Achievements", "achievements"], ["Contact", "contact"]];
  const faqs = [
    ["Who can enroll in LARA Swim School?", "Students of different ages and abilities may apply. Exact placement is confirmed during assessment."],
    ["Do you accept beginners?", "Yes. Beginners receive guided water familiarization and foundational swimming instruction."],
    ["What programs are available?", "Beginner, intermediate, advanced, and competitive swimming programs are available, subject to confirmation."],
    ["What should swimmers bring?", "Swimwear, goggles, a swim cap, towel, and a clearly labeled water bottle."],
    ["How can parents inquire?", "Complete the inquiry form below or use the school contact details once they are officially confirmed."],
    ["Where is the school located?", "Official venue information is a placeholder until the address is verified."],
    ["What are the training schedules?", "Schedules vary by program and availability. Select a preferred schedule in the inquiry form."],
  ];

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className="overflow-hidden bg-[#f7f7f4] text-[#171b24]">
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[#d7bd7a]/30 bg-[#090f20]/95 shadow-xl backdrop-blur-lg" : "border-b border-white/10 bg-transparent"}`}>
        <div className="container-pad flex h-[82px] items-center justify-between text-white">
          <Brand light />
          <div className="hidden items-center gap-7 lg:flex">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[12px] font-bold tracking-[1px] text-white/85 transition hover:text-[#d7bd7a]">{label.toUpperCase()}</a>)}</div>
          <a href="#contact" className="hidden border border-[#d7bd7a] px-5 py-3 text-[11px] font-black tracking-[2px] text-[#d7bd7a] transition hover:bg-[#d7bd7a] hover:text-[#090f20] lg:block">ENROLL NOW</a>
          <button aria-label="Toggle navigation" onClick={() => setMenu(!menu)} className="lg:hidden">{menu ? <X /> : <Menu />}</button>
        </div>
        <div className={`overflow-hidden bg-[#090f20] text-white transition-all lg:hidden ${menu ? "max-h-96" : "max-h-0"}`}>{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block border-t border-white/10 px-6 py-4 text-xs font-bold tracking-[2px]">{label.toUpperCase()}</a>)}</div>
      </nav>

      <section id="home" className="relative min-h-[780px] bg-cover bg-[70%_center] md:bg-center" style={{ backgroundImage: `linear-gradient(90deg,rgba(5,10,24,.94) 0%,rgba(5,10,24,.68) 48%,rgba(5,10,24,.12) 100%),url('/LARAbg.jpg')` }}>
        <div className="absolute inset-y-0 right-[10%] hidden w-px bg-[#d7bd7a]/20 lg:block" />
        <div className="container-pad flex min-h-[780px] items-center pb-12 pt-28">
          <div className="max-w-[760px] text-white">
            <p className="mb-6 flex items-center gap-4 text-[11px] font-bold tracking-[5px] text-[#d7bd7a]"><span className="h-px w-12 bg-[#d7bd7a]" />LARA SWIM SCHOOL</p>
            <h1 className="text-5xl font-black leading-[.98] tracking-[-2px] md:text-[88px]">MAKE WAVES.<br/><span className="text-[#d7bd7a]">PERFORM.</span><br/>EXCEL.</h1>
            <p className="mt-8 max-w-[620px] text-base leading-8 text-white/78">From first strokes to competitive excellence, LARA develops confident swimmers through disciplined coaching, purposeful training, and a culture of growth.</p>
            <div className="mt-10 flex flex-wrap gap-4"><a href="#programs" className="bg-[#d7bd7a] px-7 py-4 text-xs font-black tracking-[2px] text-[#090f20] transition hover:-translate-y-1">EXPLORE PROGRAMS</a><a href="#contact" className="border border-white/50 px-7 py-4 text-xs font-black tracking-[2px] transition hover:bg-white hover:text-[#090f20]">ENROLL NOW</a></div>
          </div>
        </div>
        <a href="#about" aria-label="Scroll to about" className="absolute bottom-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center border border-[#d7bd7a]/50 text-[#d7bd7a]"><ArrowDown className="animate-bounce" size={20}/></a>
      </section>

      <section id="about" className="bg-white py-24"><div className="container-pad grid items-center gap-14 md:grid-cols-2"><div className="relative"><img src={photo("photo-1519315901367-f34ff9154487")} alt="Competitive swimming training" className="h-[520px] w-full object-cover"/><div className="absolute -bottom-5 -left-2 bg-[#090f20] px-7 py-5 text-white md:left-8"><b className="text-3xl text-[#d7bd7a]">EXCELLENCE</b><br/><span className="text-[10px] font-bold tracking-[4px]">IN EVERY STROKE</span></div></div><div className="md:pl-8"><p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">ABOUT LARA</p><h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-1px] text-[#090f20] md:text-6xl">MORE THAN SWIMMING.<br/><span className="text-[#b28a43]">A JOURNEY OF GROWTH.</span></h2><p className="mt-7 leading-8 text-slate-600">LARA Swim School develops strong foundations, precise technique, and lasting confidence. Our approach combines expert instruction, water safety, personal discipline, and purposeful skill progression.</p><p className="mt-4 leading-8 text-slate-500">Official history, mission, and vision content can replace this placeholder once verified.</p><a href="#programs" className="mt-8 inline-flex bg-[#090f20] px-7 py-4 text-xs font-black tracking-[2px] text-white">DISCOVER MORE</a></div></div></section>

      <section id="programs" className="py-24"><div className="container-pad"><div className="mb-12"><p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">OUR PROGRAMS</p><h2 className="mt-3 max-w-[760px] text-4xl font-black leading-tight text-[#090f20] md:text-6xl">FIND YOUR STROKE.<br/>DISCOVER YOUR POTENTIAL.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{programs.map(([name,text,img],i)=><article key={name} className="group overflow-hidden border border-[#090f20]/8 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"><div className="relative h-64 overflow-hidden"><img src={photo(img,900)} alt={name} className="h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"/><span className="absolute left-5 top-5 grid h-12 w-12 place-items-center bg-[#d7bd7a] text-sm font-black text-[#090f20]">0{i+1}</span></div><div className="p-6"><h3 className="text-[15px] font-black tracking-[1px] text-[#090f20]">{name}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{text}</p><a href="#contact" className="mt-5 inline-flex text-xs font-black tracking-[1px] text-[#b28a43]">LEARN MORE →</a></div></article>)}</div></div></section>

      <section className="bg-[#090f20] py-24 text-white"><div className="container-pad"><div className="mb-12"><p className="text-[11px] font-bold tracking-[4px] text-[#d7bd7a]">THE LSC STANDARD</p><h2 className="mt-3 text-4xl font-black md:text-6xl">WHY SWIM WITH LARA?</h2></div><div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">{[[ShieldCheck,"PROFESSIONAL GUIDANCE","Expert instruction focused on safe, confident development."],[Target,"SKILL DEVELOPMENT","Purposeful progression across every swimming ability."],[Award,"WATER SAFETY","A strong culture of awareness and responsible practice."],[Trophy,"CONFIDENCE & DISCIPLINE","Personal growth that reaches beyond the pool."]].map(([Icon,title,text]: any)=><div key={title} className="bg-[#090f20] p-8"><div className="grid h-14 w-14 place-items-center border border-[#d7bd7a]/50 text-[#d7bd7a]"><Icon/></div><h3 className="mt-7 text-[14px] font-black tracking-[1px]">{title}</h3><p className="mt-3 text-sm leading-7 text-white/55">{text}</p></div>)}</div></div></section>

      <section id="coaches" className="bg-white py-24"><div className="container-pad"><div className="mb-12 text-center"><p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">OUR TEAM</p><h2 className="mt-3 text-4xl font-black text-[#090f20] md:text-6xl">GUIDED BY PASSION.<br/>TRAINED WITH PURPOSE.</h2></div><div className="grid gap-5 md:grid-cols-3">{["photo-1560250097-0b93528c311a","photo-1534528741775-53994a69daeb","photo-1500648767791-00dcc994a43e"].map((img,i)=><article key={img} className="group border border-[#090f20]/8"><div className="h-[390px] overflow-hidden"><img src={photo(img,900)} alt="Coach profile placeholder" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"/></div><div className="p-6"><p className="text-[10px] font-black tracking-[2px] text-[#b28a43]">{i===0?"HEAD SWIMMING COACH":i===1?"DEVELOPMENT COACH":"AQUATIC COACH"}</p><h3 className="mt-2 text-xl font-black text-[#090f20]">Coach Name</h3><p className="mt-3 text-sm leading-6 text-slate-600">Sample profile. Replace with an approved coach biography and qualifications.</p><a href="#contact" className="mt-5 inline-block text-xs font-black text-[#090f20]">VIEW PROFILE →</a></div></article>)}</div></div></section>

      <section id="achievements" className="py-24"><div className="container-pad"><div className="mb-12"><p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">ACHIEVEMENTS & GALLERY</p><h2 className="mt-3 text-4xl font-black text-[#090f20] md:text-6xl">EVERY STROKE TELLS A STORY.</h2></div><div id="gallery" className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">{gallery.map((g,i)=><button key={g} onClick={()=>setLightbox(photo(g))} className={`overflow-hidden ${i===0||i===3?"md:row-span-2":""} ${i===0||i===5?"md:col-span-2":""}`}><img src={photo(g,900)} alt="Swimming gallery" className="h-full w-full object-cover grayscale-[20%] transition duration-500 hover:scale-105 hover:grayscale-0"/></button>)}</div></div></section>

      <section className="bg-[#090f20] py-24 text-white"><div className="container-pad grid gap-10 md:grid-cols-[1fr_1.4fr]"><div><p className="text-[11px] font-bold tracking-[4px] text-[#d7bd7a]">SWIM FAMILY</p><h2 className="mt-3 text-4xl font-black md:text-5xl">HEAR IT FROM OUR COMMUNITY.</h2></div><div className="grid gap-4 md:grid-cols-2">{["Parent feedback — replace this approved testimonial before publishing.","Swimmer feedback — replace this approved testimonial before publishing."].map((text,i)=><div key={text} className="border border-white/10 bg-white/[.04] p-7"><div className="tracking-[5px] text-[#d7bd7a]">★★★★★</div><p className="mt-5 leading-7 text-white/70">“{text}”</p><b className="mt-6 block">{i?"Swimmer Name":"Parent Name"}</b><small className="text-white/40">{i?"Student — Sample":"Parent — Sample"}</small></div>)}</div></div></section>

      <section className="relative grid min-h-[440px] place-items-center bg-cover bg-center text-center text-white" style={{backgroundImage:`linear-gradient(rgba(5,10,24,.86),rgba(5,10,24,.86)),url('${photo("photo-1560089000-7433a4ebbd64")}')`}}><div className="container-pad"><p className="text-[11px] font-bold tracking-[5px] text-[#d7bd7a]">YOUR NEXT MOVE</p><h2 className="mt-4 text-4xl font-black md:text-7xl">READY TO MAKE WAVES?</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">Take the first step toward confidence, skill, and excellence in the water.</p><div className="mt-8 flex justify-center gap-4"><a href="#contact" className="bg-[#d7bd7a] px-7 py-4 text-xs font-black tracking-[2px] text-[#090f20]">INQUIRE NOW</a><a href="#contact" className="border border-white/50 px-7 py-4 text-xs font-black tracking-[2px]">ENROLL TODAY</a></div></div></section>

      <section className="bg-white py-24">
        <div className="container-pad max-w-[900px]">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">QUESTIONS</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#090f20] md:text-4xl">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          {faqs.map(([q, a], i) => {
            const isOpen = faq === i;

            return (
              <div
                key={q}
                className={`mb-3 overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 ${
                  isOpen ? "border-[#d7bd7a]/70 shadow-md" : "border-[#090f20]/10 hover:border-[#d7bd7a]/50"
                }`}
              >
                <button
                  id={`faq-question-${i}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setFaq(isOpen ? -1 : i)}
                  className="group flex w-full items-center gap-4 px-5 py-5 text-left text-sm font-black text-[#090f20] transition-colors hover:bg-[#fcfbf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b28a43] sm:px-7"
                >
                  <span className="flex-1 leading-6">{q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#d7bd7a]/25 text-[#8c6827]"
                        : "bg-[#090f20]/5 text-[#090f20]/60 group-hover:bg-[#d7bd7a]/25 group-hover:text-[#8c6827]"
                    }`}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  aria-hidden={!isOpen}
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-7">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-[#f7f7f4] py-24">
        <div className="container-pad">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[4px] text-[#b28a43]">CONTACT US</p>
            <h2 className="mt-3 text-4xl font-black text-[#090f20] md:text-6xl">LET&apos;S GET YOU STARTED.</h2>
          </div>
          <div className="grid overflow-hidden border border-[#090f20]/10 bg-white lg:grid-cols-[.85fr_1.15fr]">
            <div className="bg-[#090f20] p-8 text-white md:p-12">
              <h3 className="text-2xl font-black">Swim School Information</h3>
              <div className="mt-8 space-y-5 text-sm">
                <p className="flex gap-3"><MapPin className="shrink-0 text-[#d7bd7a]" />[School Address]<br />[City, Province]</p>
                <p className="flex gap-3"><Phone className="text-[#d7bd7a]" />+63 XXX XXX XXXX</p>
                <p className="flex gap-3"><Mail className="text-[#d7bd7a]" />hello@laraswim.school</p>
                <p className="flex gap-3"><Clock3 className="text-[#d7bd7a]" />Mon–Sat: 7:00 AM–7:00 PM</p>
              </div>
            </div>
            <form onSubmit={submit} className="p-8 md:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-black tracking-[1px]">FULL NAME<input required className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal outline-none focus:border-[#b28a43]" /></label>
                <label className="text-xs font-black tracking-[1px]">CONTACT NUMBER<input required pattern="[0-9+() -]{7,}" className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal outline-none focus:border-[#b28a43]" /></label>
                <label className="text-xs font-black tracking-[1px]">EMAIL ADDRESS<input required type="email" className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal outline-none focus:border-[#b28a43]" /></label>
                <label className="text-xs font-black tracking-[1px]">STUDENT&apos;S AGE<input required type="number" min="1" className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal outline-none focus:border-[#b28a43]" /></label>
                <label className="text-xs font-black tracking-[1px]">
                  PREFERRED PROGRAM
                  <select required className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal">
                    <option value="">Select program</option>
                    {programs.map((program) => <option key={program[0]}>{program[0]}</option>)}
                  </select>
                </label>
                <label className="text-xs font-black tracking-[1px]">
                  TRAINING SCHEDULE
                  <select required className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal">
                    <option value="">Select schedule</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-xs font-black tracking-[1px]">
                MESSAGE
                <textarea required rows={4} className="mt-2 w-full border border-[#090f20]/15 px-4 py-3 font-normal outline-none focus:border-[#b28a43]" />
              </label>
              <div className="mt-5 flex items-center gap-4">
                <button type="submit" className="bg-[#090f20] px-7 py-4 text-xs font-black tracking-[2px] text-white">SUBMIT INQUIRY</button>
                <button type="reset" className="text-xs font-black text-slate-500">CLEAR</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {sent&&<div className="fixed bottom-6 right-6 z-[70] border-l-4 border-[#d7bd7a] bg-[#090f20] px-5 py-4 text-sm text-white shadow-xl">Inquiry form completed. No information was sent.</div>}
      {lightbox&&<div onClick={()=>setLightbox(null)} className="fixed inset-0 z-[80] grid place-items-center bg-[#090f20]/95 p-6"><button aria-label="Close image" className="absolute right-6 top-6 text-[#d7bd7a]"><X/></button><img src={lightbox} alt="Gallery enlarged view" className="max-h-[85vh] max-w-full"/></div>}

      <footer className="bg-[#090f20] pb-8 pt-16 text-white"><div className="container-pad"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand light/><p className="mt-5 max-w-xs text-sm leading-7 text-white/55">Building confidence, developing skills, and creating champions through purposeful swimming education.</p></div><div><h3 className="text-xs font-black tracking-[2px] text-[#d7bd7a]">QUICK LINKS</h3><div className="mt-5 space-y-3 text-sm text-white/55"><a className="block" href="#about">About</a><a className="block" href="#coaches">Coaches</a><a className="block" href="#achievements">Achievements</a><a className="block" href="#contact">Contact</a></div></div><div><h3 className="text-xs font-black tracking-[2px] text-[#d7bd7a]">PROGRAMS</h3><div className="mt-5 space-y-3 text-sm text-white/55">{programs.map(p=><a key={p[0]} className="block" href="#programs">{p[0]}</a>)}</div></div><div><h3 className="text-xs font-black tracking-[2px] text-[#d7bd7a]">CONNECT</h3><div className="mt-5 flex gap-3"><a aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-white/15"><Facebook size={17}/></a><a aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/15"><Instagram size={17}/></a><a aria-label="YouTube" className="grid h-10 w-10 place-items-center border border-white/15"><Youtube size={17}/></a></div><p className="mt-5 text-sm text-white/55">hello@laraswim.school</p></div></div><div className="mt-8 flex items-center justify-between text-xs text-white/40"><p>© {new Date().getFullYear()} LARA Swim School.</p><a href="#home" aria-label="Back to top" className="grid h-11 w-11 place-items-center border border-[#d7bd7a] text-[#d7bd7a]"><ArrowUp size={18}/></a></div></div></footer>
    </main>
  );
}
