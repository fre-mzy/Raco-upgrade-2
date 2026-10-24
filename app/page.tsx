import Link from 'next/link';
import { 
  Heart, 
  GraduationCap, 
  Utensils, 
  Users, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Building2,
  Phone
} from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RACO Child and Rural Care Initiative",
  description: "A faith-based care and protection center for orphans, vulnerable, and displaced poor children in rural communities.",
  alternates: {
    canonical: "https://racochildinitiative.org/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f1e7] text-[#1d2433] selection:bg-[#c8553d] selection:text-white font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-30 bg-[#f6f1e7]/90 backdrop-blur-md border-b border-[#ddd3bf]">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between min-h-[70px]">
          <Link href="#top" className="font-serif font-bold text-lg text-[#1d2433] hover:opacity-80 transition">
            RACO Child &amp; Rural Care
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm text-[#566074]">
            <Link href="#home" className="hover:text-[#1d2433] transition">Home</Link>
            <Link href="#about" className="hover:text-[#1d2433] transition">About</Link>
            <Link href="#programmes" className="hover:text-[#1d2433] transition">Programmes</Link>
            <Link href="#get-involved" className="hover:text-[#1d2433] transition">Get Involved</Link>
            <Link href="#contact" className="hover:text-[#1d2433] transition">Contact</Link>
          </nav>

          <Link 
            href="#donate" 
            className="bg-[#c8553d] hover:bg-[#b04833] text-white font-bold px-6 py-2.5 rounded-full text-sm transition shadow-sm"
          >
            Donate
          </Link>
        </div>
      </header>

      <main id="top" className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="home" className="bg-[#23304f] text-[#f6f1e7] py-20 lg:py-28 px-5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="bg-white/10 text-[#f6f1e7] font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-white/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e8836b]" /> Faith-Based Care &amp; Protection Center
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold leading-tight max-w-2xl">
              Every child deserves a home, a meal and a future.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              RACO Child and Rural Care Initiative looks after children and supports rural families from our base in Ibeju-Lekki, Lagos[span_0](start_span)[span_0](end_span).
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#get-involved" 
                className="bg-[#c8553d] hover:bg-[#b04833] text-white font-bold px-7 py-3.5 rounded-full text-sm transition shadow-md flex items-center gap-2"
              >
                Volunteer with us
              </Link>
              <Link 
                href="#donate" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-bold px-7 py-3.5 rounded-full text-sm transition flex items-center gap-2"
              >
                Give today
              </Link>
            </div>
          </div>
        </section>

        {/* FACTS RIBBON */}
        <section className="bg-[#fffaf0] border-b border-[#ddd3bf] py-6 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <b className="font-serif text-lg text-[#1d2433]">Ibeju-Lekki, Lagos</b>
              <span className="text-[#566074] text-xs">Where we are based[span_1](start_span)[span_1](end_span)</span>
            </div>
            <div>
              <b className="font-serif text-lg text-[#1d2433]">Child care</b>
              <span className="text-[#566074] text-xs">A safe home and daily support[span_2](start_span)[span_2](end_span)</span>
            </div>
            <div>
              <b className="font-serif text-lg text-[#1d2433]">Rural outreach</b>
              <span className="text-[#566074] text-xs">Reaching families beyond the city[span_3](start_span)[span_3](end_span)</span>
            </div>
            <div>
              <b className="font-serif text-lg text-[#1d2433]">Open to all</b>
              <span className="text-[#566074] text-xs">Donors, volunteers and partners[span_4](start_span)[span_4](end_span)</span>
            </div>
          </div>
        </section>

        {/* WELCOME / ABOUT TEASER */}
        <section id="about" className="py-20 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d2433]">Welcome to RACO</h2>
              <p className="text-[#566074] text-base leading-relaxed">
                RACO Child and Rural Care Initiative is a charity that cares for children and strengthens the rural communities around them[span_5](start_span)[span_5](end_span).
              </p>
              <p className="text-[#1d2433] leading-relaxed text-sm sm:text-base">
                We provide shelter, meals and schooling support, and we work with neighbours, volunteers and donors who want to see children grow up safe and hopeful[span_6](start_span)[span_6](end_span).
              </p>
              <p className="text-[#1d2433] leading-relaxed text-sm sm:text-base">
                Every programme starts with one question: what does this child need to thrive? Our answers shape the way we teach, feed and care[span_7](start_span)[span_7](end_span).
              </p>
              <div>
                <Link href="#programmes" className="inline-block bg-[#c8553d] hover:bg-[#b04833] text-white font-bold px-6 py-3 rounded-full text-sm transition">
                  What we are doing
                </Link>
              </div>
            </div>

            <div className="bg-[#23304f] text-[#f6f1e7] rounded-2xl p-8 shadow-lg relative">
              <p className="font-serif text-xl sm:text-2xl leading-snug mb-4">
                &ldquo;When a community stands behind a child, that child stands taller[span_8](start_span)[span_8](end_span).&rdquo;
              </p>
              <span className="text-sm opacity-80 font-semibold">— The RACO family[span_9](start_span)[span_9](end_span)</span>
            </div>
          </div>
        </section>

        {/* PROGRAMMES */}
        <section id="programmes" className="bg-[#fffaf0] py-20 px-5 border-y border-[#ddd3bf]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d2433]">Programmes that change daily life</h2>
              <p className="text-[#566074] mt-2 text-base">Three ways we put care into action[span_10](start_span)[span_10](end_span).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#c8553d] uppercase tracking-wider block mb-2">Education</span>
                  <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Back to School</h3>
                  <p className="text-[#566074] text-sm leading-relaxed">
                    We support students with school fees, supplies and encouragement, and celebrate their progress in our student showcase[span_11](start_span)[span_11](end_span).
                  </p>
                </div>
              </article>

              <article className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#c8553d] uppercase tracking-wider block mb-2">Nutrition</span>
                  <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Feed a Child</h3>
                  <p className="text-[#566074] text-sm leading-relaxed">
                    Regular, balanced meals so children can grow, concentrate in class and simply be children[span_12](start_span)[span_12](end_span).
                  </p>
                </div>
              </article>

              <article className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#c8553d] uppercase tracking-wider block mb-2">Community</span>
                  <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Rural Care</h3>
                  <p className="text-[#566074] text-sm leading-relaxed">
                    Outreach that brings support to families in rural communities who are often missed by other help[span_13](start_span)[span_13](end_span).
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d2433]">What we do</h2>
              <p className="text-[#566074] mt-2 text-base">Our work covers the basics a child needs most[span_14](start_span)[span_14](end_span).</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">A safe home</h3>
                <p className="text-[#566074] text-sm">A caring environment where children feel protected and known[span_15](start_span)[span_15](end_span).</p>
              </div>
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">Learning</h3>
                <p className="text-[#566074] text-sm">Help with school costs and a steady push toward their goals[span_16](start_span)[span_16](end_span).</p>
              </div>
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">Food and health</h3>
                <p className="text-[#566074] text-sm">Nourishing meals and attention to everyday wellbeing[span_17](start_span)[span_17](end_span).</p>
              </div>
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">Rural families</h3>
                <p className="text-[#566074] text-sm">Practical support for communities that need it most[span_18](start_span)[span_18](end_span).</p>
              </div>
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">Trusted leadership</h3>
                <p className="text-[#566074] text-sm">A Board of Trustees that keeps our work accountable[span_19](start_span)[span_19](end_span).</p>
              </div>
              <div className="bg-[#fffaf0] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1d2433] mb-2">Open doors</h3>
                <p className="text-[#566074] text-sm">Volunteers, donors and partners are always welcome[span_20](start_span)[span_20](end_span).</p>
              </div>
            </div>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="get-involved" className="bg-[#fffaf0] py-20 px-5 border-y border-[#ddd3bf]">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1d2433]">Ways to get involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Volunteer</h3>
                <p className="text-[#566074] text-sm">Give your time to tutoring, events or outreach days[span_21](start_span)[span_21](end_span).</p>
              </div>
              <div className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Partner</h3>
                <p className="text-[#566074] text-sm">Companies and organisations can sponsor programmes or donate supplies[span_22](start_span)[span_22](end_span).</p>
              </div>
              <div className="bg-[#f6f1e7] border border-[#ddd3bf] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#1d2433] mb-2">Spread the word</h3>
                <p className="text-[#566074] text-sm">Follow, share and tell people about our work[span_23](start_span)[span_23](end_span).</p>
              </div>
            </div>
          </div>
        </section>

        {/* DONATE / CTA SECTION */}
        <section id="donate" className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#23304f] text-[#f6f1e7] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-bold">Give a child a brighter tomorrow</h2>
                <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                  We accept bank transfers to FCMB, Polaris Bank and GTBank. Email us and we will send you the account details for your preferred bank[span_24](start_span)[span_24](end_span).
                </p>
              </div>
              <a 
                href="mailto:info@racochildinitiative.org?subject=Donation%20details"
                className="bg-[#c8553d] hover:bg-[#b04833] text-white font-bold px-8 py-4 rounded-full text-sm transition shadow-lg whitespace-nowrap"
              >
                Request donation details
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#23304f] text-[#f6f1e7] py-16 px-5 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base">RACO Child and Rural Care Initiative</h3>
            <p className="text-sm opacity-80 leading-relaxed">33 Taiwo Adebambo Street, Ibeju-Lekki, Lagos, Nigeria[span_25](start_span)[span_25](end_span).</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&amp;query=33+Taiwo+Adebambo+Street+Ibeju-Lekki+Lagos" 
              target="_blank" 
              rel="noopener" 
              className="text-xs text-[#e8836b] underline block pt-1 font-semibold"
            >
              View on Google Maps[span_26](start_span)[span_26](end_span)
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base">Contact</h3>
            <a href="mailto:info@racochildinitiative.org" className="text-sm opacity-80 hover:opacity-100 block">info@racochildinitiative.org[span_27](start_span)[span_27](end_span)</a>
            <a href="mailto:outreach@racochildinitiative.org" className="text-sm opacity-80 hover:opacity-100 block">outreach@racochildinitiative.org[span_28](start_span)[span_28](end_span)</a>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base">Explore</h3>
            <Link href="#about" className="text-sm opacity-80 hover:opacity-100 block">About</Link>
            <Link href="#programmes" className="text-sm opacity-80 hover:opacity-100 block">Programmes</Link>
            <Link href="#get-involved" className="text-sm opacity-80 hover:opacity-100 block">Get Involved</Link>
            <Link href="#donate" className="text-sm opacity-80 hover:opacity-100 block">Donate</Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-10 mt-10 border-t border-white/10 text-xs opacity-60">
          © 2026 RACO Child and Rural Care Initiative. All rights reserved[span_29](start_span)[span_29](end_span).
        </div>
      </footer>

    </div>
  );
}
