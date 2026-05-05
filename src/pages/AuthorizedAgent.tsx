import { Globe2, ShieldCheck, Award, Truck, CheckCircle2, MapPin, Clock, Headphones, Users, Heart, Star, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import fireImg from "@/assets/fire-safety.jpg";

const partners = [
  { name: "ABB", country: "Switzerland", flag: "🇨🇭", body: "Power & automation technology — switchgear, drives, motors.", experience: "15+ years partnership" },
  { name: "Schneider Electric", country: "France", flag: "🇫🇷", body: "Energy management, building automation and electrical distribution.", experience: "12+ years partnership" },
  { name: "Siemens", country: "Germany", flag: "🇩🇪", body: "Industrial automation, digital industries and smart infrastructure.", experience: "10+ years partnership" },
  { name: "EAE Busbar Systems", country: "Türkiye", flag: "🇹🇷", body: "Type-tested busbar trunking systems for high-density distribution.", experience: "8+ years partnership" },
  { name: "PCJ Industries", country: "Thailand", flag: "🇹🇭", body: "Internationally certified fire and life safety solutions.", experience: "7+ years partnership" },
  { name: "Honeywell", country: "USA", flag: "🇺🇸", body: "Building technologies, fire detection and life-safety systems.", experience: "9+ years partnership" },
];

const testimonials = [
  { name: "Md. Rahman", company: "Textile Industries Ltd.", text: "Their direct import service saved us 30% on electrical components. Genuine products with full warranty.", rating: 5 },
  { name: "Sharmin Akhter", company: "Green Factory Solutions", text: "Professional team, timely delivery. They're our go-to partner for all electrical needs.", rating: 5 },
  { name: "Kamal Hossain", company: "Energy Plus Ltd.", text: "The authorized agent status gives us confidence. No middlemen, best prices in the market.", rating: 5 },
];

const AuthorizedAgent = () => {
  return (
    <PageShell>
      {/* Hero Section - More human and welcoming */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative z-10"> {/* এখানে relative z-10 যোগ করা হয়েছে */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Heart className="h-4 w-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-blue-700">We're here to help</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Direct from the world's{' '}
                <span className="text-primary">most trusted</span>{' '}
                manufacturers
              </h1>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                As an authorized partner and direct importer, we eliminate middlemen and guarantee
                100% genuine products with full manufacturer warranties.
              </p>

              <div className="flex flex-wrap gap-4 relative z-20"> {/* এখানেও সেফটির জন্য z-20 দিতে পারেন */}
                <Button asChild className="bg-primary hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25 transition-all duration-300">
                  <Link to="/contact">Talk to our team →</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-base">
                  <Link to="/services">See how we work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={fireImg}
                  alt="Our team working with clients"
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating quote card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <ThumbsUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">"Best prices in Bangladesh"</p>
                      <p className="text-xs text-gray-500">— Verified client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real numbers section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3">Real results, real impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What makes us different?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-gray-600">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">Genuine products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-gray-600">Average cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Technical support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section - More personal */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our manufacturing partners</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We've built lasting relationships with the world's best manufacturers — so you get the best products at the best prices.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <div key={p.name} className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{p.flag}</span>
                      <h3 className="font-bold text-xl text-gray-900">{p.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{p.body}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-gray-400">{p.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us - Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-primary font-semibold mb-3">Why our clients trust us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">No middlemen. Just honest pricing.</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                As direct importers and authorized agents, we cut out the intermediaries.
                You get genuine products directly from the source — with full warranty and technical support.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">100% authentic products</h4>
                    <p className="text-sm text-gray-500">Every component comes directly from the manufacturer with traceability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Full manufacturer warranty</h4>
                    <p className="text-sm text-gray-500">We don't just sell — we back every product with official warranties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Direct pricing advantage</h4>
                    <p className="text-sm text-gray-500">Save 20-40% compared to local distributors by importing directly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-500">What our clients say</span>
              </div>

              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="pb-6 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-3">"{t.text}"</p>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Warm and inviting */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to get the best deal?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Talk to our team about your requirements. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25">
                <Link to="/contact">Start a conversation →</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base">
                <Link to="/services">See our services</Link>
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              No spam, no pressure. Just honest advice.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AuthorizedAgent;