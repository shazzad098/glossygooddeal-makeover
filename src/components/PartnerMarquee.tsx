const partners = [
  { name: "ABB", country: "Switzerland" },
  { name: "Schneider Electric", country: "France" },
  { name: "Siemens", country: "Germany" },
  { name: "EAE Busbar", country: "Türkiye" },
  { name: "PCJ Industries", country: "Thailand" },
  { name: "Honeywell", country: "USA" },
  { name: "Legrand", country: "France" },
];

export const PartnerMarquee = () => {
  const items = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden glass rounded-2xl py-6">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-14 px-8">
        {items.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 opacity-80 transition-opacity hover:opacity-100">
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">{p.name}</span>
            <span className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.country}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarquee;