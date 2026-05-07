import { ArrowRight, CheckCircle2, FileCheck, Truck, Wrench, MessageCircle, Heart, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { services } from "@/sections/Services";
import { useEffect, useRef, useState } from "react";
const process = [
  { 
    step: "01", 
    title: "We listen & understand", 
    body: "We sit down with you, visit your site, and really understand what you need. No assumptions, no shortcuts.",
    shortBody: "Site assessment, requirements scoping, compliance review.",
    icon: MessageCircle,
    duration: "2-3 Days",
    position: "left",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    step: "02", 
    title: "We design the details", 
    body: "Our engineers create detailed plans, single-line diagrams, and bill of quantities. You'll know exactly what you're getting.",
    shortBody: "Detailed engineering, single-line diagrams, BOQ preparation.",
    icon: FileCheck,
    duration: "5-7 Days",
    position: "right",
    color: "bg-indigo-50 text-indigo-600"
  },
  { 
    step: "03", 
    title: "We source directly", 
    body: "We import certified components directly from ABB, Siemens, Schneider — no middlemen, no fake products.",
    shortBody: "Direct import of certified components from global partners.",
    icon: Truck,
    duration: "15-20 Days",
    position: "left",
    color: "bg-slate-100 text-slate-700"
  },
  { 
    step: "04", 
    title: "We install with care", 
    body: "Our skilled team executes the installation, tests everything, and hands over a fully operational system.",
    shortBody: "Skilled execution, testing, commissioning and handover.",
    icon: Wrench,
    duration: "Varies",
    position: "right",
    color: "bg-emerald-50 text-emerald-600"
  },
  { 
    step: "05", 
    title: "We stay with you", 
    body: "We don't disappear after the project. Annual maintenance contracts, support, and optimization — we're a call away.",
    shortBody: "Lifecycle support, AMC and energy optimization.",
    icon: Heart,
    duration: "Ongoing",
    position: "left",
    color: "bg-rose-50 text-rose-600"
  },
];

const testimonials = [
  { name: "Rafiqul Islam", role: "Plant Manager, Silver Textiles", text: "They handled our entire electrical upgrade. Professional, on time, and within budget. Will definitely work with them again.", rating: 5, days: "2 days ago" },
  { name: "Nadia Sultana", role: "Director, Green Energy Ltd.", text: "The solar EPC project was executed flawlessly. Their team knows what they're doing.", rating: 5, days: "1 week ago" },
  { name: "Kamal Hossain", role: "Owner, Hossain Group", text: "Been using their busbar trunking solutions for 3 years. Never had any issue. Great after-sales support.", rating: 5, days: "2 weeks ago" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "It depends on the scope. Small projects take 2-3 weeks, large industrial projects can take 2-3 months. We'll give you a clear timeline upfront." },
  { q: "Do you provide warranty?", a: "Yes! All components come with manufacturer warranty, plus we offer our own workmanship warranty on installation." },
  { q: "Are your products genuine?", a: "100%. We're authorized partners of ABB, Siemens, and Schneider. Every product is traceable to the manufacturer." },
];



const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          } else {
            setVisibleItems(prev => prev.filter(i => i !== index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', String(index));
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageShell>
      {/* Services Grid - What we actually do */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we actually do</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Not just fancy words — real services that solve real problems for factories, buildings, and industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={`/service/${s.id}`} className="block">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-blue-700">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - The human way */}
      <section id="process" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-4">
              <Coffee className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">How it really works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We keep it simple. You stay informed.</h2>
            <p className="text-gray-500">
              No complicated processes. No surprises. Just clear communication and honest work.
            </p>
          </div>

          <div className="relative">
            {/* Simple connecting line */}
            <div className="absolute hidden md:block left-1/2 top-12 bottom-12 -translate-x-1/2 w-0.5 bg-gray-200" />

            <div className="space-y-16 md:space-y-24">
              {process.map((p, index) => (
                <div
                  key={p.step}
                  ref={(el) => {
                    if (el) itemRefs.current[index] = el;
                  }}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : p.position === 'left'
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`flex flex-col md:flex-row items-start gap-8 ${
                    p.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    
                    {/* Step number circle */}
                    <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-10 h-10 rounded-full ${p.color.split(' ')[0]} flex items-center justify-center border-4 border-white shadow-sm transition-all duration-500 ${
                        visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                      }`}>
                        <span className="text-sm font-bold">{p.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-[calc(50%-40px)] ${
                      p.position === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    }`}>
                      <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-3 ${p.color}`}>
                        {p.duration}
                      </div>
                      <div className="flex items-start gap-4 mb-3 md:justify-end">
                        <div className="hidden md:block">
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                            <p.icon className="h-6 w-6 text-gray-600" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                      </div>
                      <p className={`text-gray-500 leading-relaxed ${p.position === 'left' ? 'md:text-right' : ''}`}>
                        {p.body}
                      </p>
                      <div className={`mt-3 flex items-center gap-2 text-sm text-gray-400 ${p.position === 'left' ? 'md:justify-end' : ''}`}>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{p.shortBody}</span>
                      </div>
                    </div>

                    {/* Mobile icon */}
                    <div className="md:hidden">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                        <p.icon className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Answering real questions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions? We've got answers.</h2>
            <p className="text-gray-500">Stuff people actually ask us.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <span className="text-gray-400 text-xl">{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-500 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Friendly and direct */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Tell us about your project. We'll get back to you within 24 hours. No pressure, no spam.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base">
              <Link to="/contact">Send us a message →</Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base">
              <Link to="/authorized-agent">View our partners</Link>
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            No obligation. Just a conversation.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Services;