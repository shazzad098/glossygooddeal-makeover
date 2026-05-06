import abb from "@/assets/partners_logo/ABB_logo.svg.png";
import legrand from "@/assets/partners_logo/Legrand_(company)-Logo.wine.png";
import eae from "@/assets/partners_logo/eae-elektrik-logo.webp";
import honeywell from "@/assets/partners_logo/honeywell.png";
import pcj from "@/assets/partners_logo/pcj-logo.png";
import schneider from "@/assets/partners_logo/schneider.png";
import siemens from "@/assets/partners_logo/seimens.png";

const partners = [
  { name: "ABB", logo: abb },
  { name: "Schneider Electric", logo: schneider },
  { name: "Siemens", logo: siemens },
  { name: "EAE Busbar", logo: eae },
  { name: "PCJ Industries", logo: pcj },
  { name: "Honeywell", logo: honeywell },
  { name: "Legrand", logo: legrand },
];

export const PartnerMarquee = () => {
  const items = [...partners, ...partners, ...partners]; // Triple the items for smoother infinite scroll
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-20 px-8 items-center">
        {items.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <img 
              src={p.logo} 
              alt={`${p.name} logo`} 
              className="h-10 md:h-12 w-auto object-contain max-w-[160px]" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarquee;