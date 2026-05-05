import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Zap } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-24 border-t border-border bg-slate-50 dark:bg-gray-950/50">
    <div className="absolute inset-x-0 -top-px h-px animate-shimmer" />
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-wide">GOOD DEAL</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Engineering Excellence</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premier multi-disciplinary engineering and supply-chain firm bridging global innovation with local industrial expertise across Bangladesh.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/authorized-agent" className="hover:text-primary">Authorized Agent</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Partners</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>ABB — Switzerland</li>
            <li>Schneider Electric — France</li>
            <li>Siemens — Germany</li>
            <li>EAE Busbar Systems</li>
            <li>PCJ Industries — Thailand</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Dhaka, Bangladesh</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href="tel:+8801619302150" className="hover:text-primary transition-colors">+880 1619-302150</a></li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href="mailto:info@gooddeal-bd.com" className="hover:text-primary transition-colors">info@gooddeal-bd.com</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Good Deal Bangladesh. Best Deal, Best Service.</p>
        <p>IEC · NFPA · BNBC compliant engineering</p>
      </div>
    </div>
  </footer>
);

export default Footer;