import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AnimatedOrb from "@/components/AnimatedOrb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast({ title: "Message sent", description: "Our engineering team will respond within one business day." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageShell>
      <section className="relative isolate overflow-hidden pb-12 pt-6">
        <div className="absolute inset-0 -z-10 bg-hero" />
        <AnimatedOrb className="-top-24 left-[-80px]" color="blue" size={520} />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact"
            title={<>Let's discuss your <span className="text-primary italic">next project.</span></>}
            subtitle="Tell us about your requirements — power, busbar, fire & safety or solar EPC. We respond within one business day."
          />
        </div>
      </section>

      <section className="relative pb-24 bg-secondary/50 pt-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" className="mt-2 bg-background/40" />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Company / organization" className="mt-2 bg-background/40" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" className="mt-2 bg-background/40" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+880 …" className="mt-2 bg-background/40" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="service">Interested in</Label>
                  <Input id="service" name="service" placeholder="e.g. Solar EPC · Busbar · Fire safety" className="mt-2 bg-background/40" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Project details</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Briefly describe your project, location and timeline." className="mt-2 bg-background/40" />
                </div>
              </div>
              <Button type="submit" disabled={loading} size="lg" className="mt-7 bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/20 hover:opacity-90">
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: MapPin, title: "Headquarters", body: "Dhaka, Bangladesh" },
              { icon: Mail, title: "Email", body: "info@gooddeal-bd.com" },
              { icon: Phone, title: "Phone", body: "+880 1XXX-XXXXXX" },
              { icon: Clock, title: "Working hours", body: "Sun – Thu · 9:00 AM – 6:00 PM" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="glass-card flex items-start gap-4 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/10">
                    <c.icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.title}</div>
                    <div className="mt-1 font-display text-base font-semibold">{c.body}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;