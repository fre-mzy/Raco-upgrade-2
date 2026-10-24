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
  AlertCircle,
  CheckCircle2,
  Phone,
  Building2,
  ShieldCheck,
  Stethoscope,
  Briefcase
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      
      {/* 1. HEADER NAVIGATION (Rotary VGC Glassmorphic Style) */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[72px]">
          <Link href="/" className="font-serif font-black text-lg sm:text-xl text-white tracking-tight hover:text-amber-400 transition">
            RACO <span className="text-amber-500">Child &amp; Rural Care</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-7 font-bold text-xs uppercase tracking-wider text-slate-300">
            <Link href="#home" className="hover:text-amber-400 transition">Home</Link>
            <Link href="#about" className="hover:text-amber-400 transition">About</Link>
            <Link href="#initiatives" className="hover:text-amber-400 transition">Areas of Focus</Link>
            <Link href="#get-involved" className="hover:text-amber-400 transition">Get Involved</Link>
            <Link href="#contact" className="hover:text-amber-400 transition">Contact</Link>
          </nav>

          <Link 
            href="#donate" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-slate-950" /> Donate Now
          </Link>
        </div>
      </header>

      <main id="home" className="flex-grow">
        
        {/* 2. HERO BANNER (Rotary VGC High-Impact Style) */}
        <section className="bg-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_65%)] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
            <span className="bg-amber-500/10 text-amber-400 font-extrabold text-[10px] sm:text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-amber-500/25 inline-flex items-center gap-1.5 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Faith-Based Care &amp; Protection Center
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Every child deserves a home, a meal and a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">future.</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              RACO Child and Rural Care Initiative provides 100% free education, daily hot meals, shelter, and community care for orphans and rural families in Nigeria[span_23](start_span)[span_23](end_span).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <Link 
                href="#get-involved" 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
              >
                Volunteer With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#donate" 
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition border border-slate-800 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-amber-400" /> Give Today
              </Link>
            </div>
          </div>
        </section>

        {/* 3. IMPACT STATS RIBBON (Rotary VGC Metric Counter Bar) */}
        <section className="bg-amber-500 text-slate-950 py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black">2003</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Commission Established</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black">2007</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">RACO Schools Launched</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black">100%</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Free Tuition &amp; Lunch</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black">3,000+</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Target Beneficiaries</p>
            </div>
          </div>
        </section>

        {/* 4. ACTIVE APPEAL BANNER (Rotary Priority Campaigns) */}
        <section className="py-10 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex-shrink-0 flex items-center justify-center font-black shadow-md">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-500/20">
                    Active Appeal • ₦27,000,000 Target
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-1">
                    Back-to-School Support &amp; Material Fund
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Raising essential funds for tuition, textbooks, uniforms, and daily school meals for hundreds of orphaned and vulnerable children[span_24](start_span)[span_24](end_span).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href="#donate"
                  className="w-full lg:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition text-center shadow-md flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-slate-950" /> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ABOUT & MISSION SPLIT (Rotary VGC Welcome Section) */}
        <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block">
                Welcome to RACO
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Rooted in Faith, Driven by Compassion
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                RACO Child and Rural Care Initiative is a charity that cares for children and strengthens the rural communities around them[span_25](start_span)[span_25](end_span).
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We provide shelter, meals, and schooling support in partnership with neighbors, volunteers, and donors who want to see children grow up safe and hopeful[span_26](start_span)[span_26](end_span).
              </p>
              
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">Free textbooks, uniforms, writing materials, and daily hot meals[span_27](start_span)[span_27](end_span).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">Holistic care covering shelter, healthcare, and emotional stability[span_28](start_span)[span_28](end_span).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">Empowerment initiatives for rural widows and youth vocational training[span_29](start_span)[span_29](end_span).</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-6 text-slate-100">
                &ldquo;When a community stands behind a child, that child stands taller[span_30](start_span)[span_30](end_span).&rdquo;
              </p>
              <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">— The RACO Family[span_31](start_span)[span_31](end_span)</span>
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. CORE AREAS OF FOCUS GRID (Rotary VGC Focus Areas Style) */}
        <section id="initiatives" className="bg-slate-100/80 py-20 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="bg-amber-500/10 text-amber-600 font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
                Programmes That Change Daily Life
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Core Areas of Focus</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded">Education[span_32](start_span)[span_32](end_span)</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-3">Back to School</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Supporting students with school fees, textbooks, uniforms, and daily encouragement[span_33](start_span)[span_33](end_span).
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded">Nutrition[span_34](start_span)[span_34](end_span)</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-3">Feed a Child</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Regular, balanced meals so children can grow, concentrate in class, and thrive[span_35](start_span)[span_35](end_span).
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded">Healthcare</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-3">RACO Life Centre Clinic</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Free medical consultations, health screenings, and essential medications for rural families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WAYS TO GET INVOLVED (Rotary VGC Engagement Grid) */}
        <section id="get-involved" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Ways to Get Involved</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">Every level of support transforms a rural child's future[span_36](start_span)[span_36](end_span).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">Volunteer[span_37](start_span)[span_37](end_span)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Give your time to tutoring, event planning, or rural outreach field trips[span_38](start_span)[span_38](end_span).
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">Partner[span_39](start_span)[span_39](end_span)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Companies and corporate sponsors can sponsor school programs or donate supplies[span_40](start_span)[span_40](end_span).
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">Spread the Word[span_41](start_span)[span_41](end_span)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Share our mission across your networks to help bring help to rural communities[span_42](start_span)[span_42](end_span).
              </p>
            </div>
          </div>
        </section>

        {/* 8. DONATION CTA */}
        <section id="donate" className="bg-slate-950 text-white py-20 px-4 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Give a child a brighter tomorrow[span_43](start_span)[span_43](end_span)
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              We accept bank transfers to FCMB, Polaris Bank, and GTBank. Email us and we will send you the official account details[span_44](start_span)[span_44](end_span).
            </p>
            <div className="pt-2">
              <a 
                href="mailto:info@racochildinitiative.org?subject=Donation%20details"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-xl"
              >
                Request Donation Details[span_45](start_span)[span_45](end_span)
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 9. FOOTER DIRECTORY (Rotary VGC Global Footer Style) */}
      <footer id="contact" className="bg-slate-950 text-white py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="font-serif font-black text-base text-amber-400">RACO Child and Rural Care Initiative[span_46](start_span)[span_46](end_span)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              33 Taiwo Adebambo Street, Ibeju-Lekki, Lagos, Nigeria[span_47](start_span)[span_47](end_span).
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&amp;query=33+Taiwo+Adebambo+Street+Ibeju-Lekki+Lagos" 
              target="_blank" 
              rel="noopener font-semibold"
              className="text-xs text-amber-400 hover:underline block pt-1"
            >
              View on Google Maps[span_48](start_span)[span_48](end_span)
            </a>
          </div>

           <div className="space-y-2">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Contact[span_49](start_span)[span_49](end_span)</h3>
            <a href="mailto:info@racochildinitiative.org" className="text-xs text-slate-400 hover:text-white block">
              info@racochildinitiative.org[span_50](start_span)[span_50](end_span)
            </a>
            <a href="mailto:outreach@racochildinitiative.org" className="text-xs text-slate-400 hover:text-white block">
              outreach@racochildinitiative.org[span_51](start_span)[span_51](end_span)
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-200">Explore[span_52](start_span)[span_52](end_span)</h3>
            <Link href="#about" className="text-xs text-slate-400 hover:text-white block">About[span_53](start_span)[span_53](end_span)</Link>
            <Link href="#initiatives" className="text-xs text-slate-400 hover:text-white block">Programmes[span_54](start_span)[span_54](end_span)</Link>
            <Link href="#get-involved" className="text-xs text-slate-400 hover:text-white block">Get Involved[span_55](start_span)[span_55](end_span)</Link>
            <Link href="#donate" className="text-xs text-slate-400 hover:text-white block">Donate[span_56](start_span)[span_56](end_span)</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-10 border-t border-slate-900 text-center sm:text-left text-[11px] text-slate-500">
          © 2026 RACO Child and Rural Care Initiative. All rights reserved[span_57](start_span)[span_57](end_span).
        </div>
      </footer>

    </div>
  );
}
