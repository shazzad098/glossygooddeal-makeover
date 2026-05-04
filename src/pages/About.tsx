import { BadgeCheck, Building2, Eye, Target, Heart, Users, Globe, Shield, Coffee, Award, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import engineersImg from "@/assets/engineers.jpg";

const certs = ["IEC 61439", "NFPA 70 / 72", "BNBC 2020", "ISO 9001", "ISO 14001", "ISO 45001"];

const teamValues = [
  { icon: Heart, title: "Honesty first", body: "We tell you what you need to hear, not what you want to hear. No hidden costs, no surprises." },
  { icon: Users, title: "Client partnership", body: "We don't just work for you. We work with you. Your success is our success." },
  { icon: Shield, title: "Quality obsession", body: "Every component, every installation — we take pride in getting it right the first time." },
  { icon: Clock, title: "Respect your time", body: "We meet deadlines. We show up when we say we will. Simple as that." },
];

const teamMembers = [
  { name: "Md. Hasan", role: "Lead Engineer", years: "15 years experience", bg: "bg-blue-100" },
  { name: "Shahana Akhter", role: "Project Manager", years: "12 years experience", bg: "bg-slate-100" },
  { name: "Rafiq Uddin", role: "Technical Director", years: "20 years experience", bg: "bg-green-100" },
];

const About = () => (
  <PageShell>
    {/* Hero Section - Warm welcome */}
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            We're not just engineers.{' '}
            <span className="text-primary">We're partners.</span>
          </h1>
          
          <p className="text-lg text-gray-500 leading-relaxed">
            A Dhaka-based engineering firm that actually cares about your project. 
            We source from the world's best, install with precision, and stay around long after the work is done.
          </p>
        </div>
      </div>
    </section>

    {/* Main story section */}
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={engineersImg} 
                alt="Our team at work" 
                loading="lazy" 
                className="w-full h-[400px] object-cover" 
              />
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 mb-4">
              <span className="text-sm font-medium text-blue-700">Our story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bridging global quality with local care.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We started Good Deal because we saw a gap in the market — international quality products were hard to get, and when you did get them, installation and support were lacking.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              So we built something different. We became authorized partners of ABB, Siemens, Schneider, and PCJ Industries. We trained our team on international standards. And we made a promise: to treat every client the way we'd want to be treated.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Today, we're proud to be the authorized partner of <span className="font-medium text-gray-700">PCJ Industries Co., Ltd. (Thailand)</span> for Bangladesh — bringing world-class fire and life safety solutions to local factories and buildings.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-gray-500">years of experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-gray-500">projects completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-xs text-gray-500">global partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Who we are, Mission, Vision - Made more human */}
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who we are</h3>
            <p className="text-gray-500">
              A multi-disciplinary engineering and supply-chain firm based in Dhaka. But more than that — we're a team that actually cares about your project.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our mission</h3>
            <p className="text-gray-500">
              Deliver internationally compliant engineering with uncompromising quality. And do it with honesty, transparency, and respect for your time and budget.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our vision</h3>
            <p className="text-gray-500">
              To be Bangladesh's most trusted partner for power, safety and sustainability. The name people recommend when asked, "Who should we call?"
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What makes us different - Core values */}
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What makes us different?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Anyone can sell you products. We build relationships.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((value, i) => (
            <div key={value.title} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Standards we build to - Simplified */}
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">We build to global standards</h2>
          <p className="text-gray-500">
            Because your safety and compliance matter.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {certs.map((c) => (
            <div key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <BadgeCheck className="h-4 w-4 text-green-500" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust indicators - Social proof */}
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 gap-y-6">
            <span className="text-2xl font-bold text-gray-300">ABB</span>
            <span className="text-2xl font-bold text-gray-300">Schneider</span>
            <span className="text-2xl font-bold text-gray-300">Siemens</span>
            <span className="text-2xl font-bold text-gray-300">EAE</span>
            <span className="text-2xl font-bold text-gray-300">PCJ</span>
            <span className="text-2xl font-bold text-gray-300">Honeywell</span>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-slate-50 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Want to work with people who actually care?
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Tell us about your project. We'll get back to you within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base">
            <Link to="/contact">Start a conversation →</Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base">
            <Link to="/services">See what we do</Link>
          </Button>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          No spam. No pressure. Just honest advice.
        </p>
      </div>
    </section>
  </PageShell>
);

export default About;