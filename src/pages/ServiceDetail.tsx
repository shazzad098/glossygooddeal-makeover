import { ArrowLeft, CheckCircle, Zap, Shield, Award, TrendingUp, Clock, Users } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Product data for each service
const productData = {
  "electrical-power": {
    id: "electrical-power",
    title: "Electrical & Power Distribution",
    category: "Electrical Power",
    image: "/placeholder-power.jpg",
    shortDescription: "MV/LV switchgear, EAE busbar systems and transformers engineered to IEC standards.",
    longDescription: "Our comprehensive electrical and power distribution solutions cover everything from high-voltage switchgear to low-voltage distribution boards and advanced busbar systems. We partner with global leaders like ABB, Siemens, and EAE to deliver reliable, safe, and efficient power infrastructure for industrial and commercial facilities.",
    subProducts: [
      {
        title: "Lightning Protection Systems",
        description: "High-tech ESE lightning arresters and precision earthing systems.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/lightning_protection_system_1778004872768.png"
      },
      {
        title: "Low Voltage Distribution Panels",
        description: "Custom-built LV panels using 100% genuine components from leading global brands.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/lv_distribution_panel_1778004887301.png"
      },
      {
        title: "Busbar Trunking Systems",
        description: "Efficient and space-saving power distribution for modern industrial facilities.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/busbar_trunking_system_1778004901655.png"
      }
    ],
    features: [
      "IEC 61439 compliant switchgear systems",
      "EAE type-tested busbar trunking systems",
      "Custom-designed LV/MV distribution panels",
      "Dry-type and oil-immersed transformers",
      "Arc flash protection and monitoring",
      "Energy management & power quality analysis",
      "Modular design for facility expansion",
      "IP54/IP65/IP68 protection ratings"
    ],
    benefits: [
      "Maximum electrical safety and reliability",
      "Up to 40% space savings with busbar systems",
      "Reduced installation time and maintenance",
      "Optimized energy consumption",
      "Compliance with BNBC, IEC and NFPA",
      "24/7 technical support and maintenance"
    ],
    specifications: {
      "Voltage Rating": "Up to 33kV",
      "Current Rating": "Up to 6300A",
      "Frequency": "50/60 Hz",
      "Standards": "IEC 61439, IEC 62271",
      "Busbar Material": "Electrolytic Copper/Aluminum",
      "Protection Class": "IP54/IP65/IP68"
    },
    applications: [
      "Industrial manufacturing plants",
      "Data centers and server rooms",
      "High-rise commercial buildings",
      "Garment & textile factories",
      "Hospitals and healthcare facilities",
      "Large-scale infrastructure projects"
    ]
  },
  "fire-safety": {
    id: "fire-safety",
    title: "Fire & Life Safety Solutions",
    category: "Safety Solutions",
    image: "/placeholder-fire.jpg",
    shortDescription: "Detection, suppression and life-safety solutions certified by PCJ Industries & NFPA compliant.",
    longDescription: "Protecting lives and assets through state-of-the-art fire detection and suppression systems. We provide end-to-end solutions including addressable fire alarms, automatic gas suppression, and industrial fire pump systems, all adhering to NFPA and BNBC standards.",
    subProducts: [
      {
        title: "Fire Protection System Design & Consultancy",
        description: "Expert engineering and design of comprehensive fire protection systems tailored to meet international safety standards and codes.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_safety_inspection_1778005578583.png"
      },
      {
        title: "Fire Detection & Alarm System Installation",
        description: "State-of-the-art early warning systems including smoke detectors, heat sensors, and smart control panels for rapid response.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_alarm_system_1778005530359.png"
      },
      {
        title: "Fire Suppression & Extinguishing Systems",
        description: "Advanced automated suppression solutions including sprinklers, gas-based systems, and foam extinguishing technologies.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_suppression_system_1778005544650.png"
      },
      {
        title: "Electrical & Lightning Safety",
        description: "High-tech Early Streamer Emission (ESE) lightning arresters and surge protection devices ensuring complete electrical safety.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/lightning_protection_system_1778004872768.png"
      },
      {
        title: "Fire Door & Emergency Exit Solutions",
        description: "UL-Listed, fire-rated steel doors and highly visible emergency exit pathways to secure safe evacuation routes.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_rated_doors_1778005564592.png"
      },
      {
        title: "Inspection, Testing & Commissioning",
        description: "Rigorous testing and commissioning protocols to ensure all fire safety equipment functions flawlessly under critical conditions.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_safety_inspection_1778005578583.png"
      },
      {
        title: "Maintenance & Annual Service Contracts (AMC)",
        description: "Reliable round-the-clock maintenance services and AMCs to keep your life safety systems operational at all times.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_safety_inspection_1778005578583.png"
      },
      {
        title: "Fire Safety Equipment Supply",
        description: "Direct importer of genuine, globally certified fire safety equipment, guaranteeing authentic products and warranties.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_alarm_system_1778005530359.png"
      },
      {
        title: "Fire Safety Quality Assurance",
        description: "Strict adherence to IEC, NFPA, and BNBC compliance standards to provide unparalleled quality assurance in every project.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_safety_inspection_1778005578583.png"
      }
    ],
    features: [
      "Addressable fire detection systems",
      "Gas suppression (FM200, Novec 1230, CO2)",
      "Automatic sprinkler and hydrant systems",
      "Fire-rated doors and life safety equipment",
      "Smoke management and evacuation systems",
      "Integrated fire alarm control panels",
      "UL/FM certified fire pumps",
      "PCJ Industries certified components"
    ],
    benefits: [
      "Early detection for minimal damage",
      "Compliance with local and global safety codes",
      "Reduced insurance premiums",
      "Automated emergency response",
      "Minimal false alarm rates",
      "Comprehensive training for site personnel"
    ],
    specifications: {
      "Detection Type": "Smoke, Heat, Flame, Multi-sensor",
      "System Type": "Full Addressable / Conventional",
      "Suppression": "Clean Agent, Water, Foam",
      "Standards": "NFPA, BNBC, BS, EN",
      "Certified by": "PCJ Industries",
      "Monitoring": "24/7 Central Monitoring available"
    },
    applications: [
      "Factories and warehouses",
      "Commercial office towers",
      "Hotels and shopping malls",
      "Data centers",
      "Chemical and oil storage",
      "Residential complexes"
    ]
  },
  "solar-solutions": {
    id: "solar-solutions",
    title: "Sustainable Solar Solutions",
    category: "Renewable Energy",
    image: "/placeholder-solar.jpg",
    shortDescription: "End-to-end design, supply, install and commissioning of grid-tied & industrial solar plants.",
    longDescription: "Harnessing renewable energy through high-efficiency solar EPC services. We provide turnkey solutions for industrial rooftops and commercial plants, helping businesses transition to green energy while significantly reducing operational costs and carbon footprints.",
    subProducts: [
      {
        title: "01. Utility Scale Solar Power Plant",
        description: "Large-scale solar installations designed to generate bulk power for the grid, maximizing energy output and land utilization.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/utility_solar_plant_1778005715577.png"
      },
      {
        title: "02. Industrial Rooftop PV System",
        description: "Optimized solar systems for industrial facilities, reducing operational costs and carbon footprint efficiently.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/industrial_rooftop_solar_1778005732356.png"
      },
      {
        title: "03. Battery Energy Storage System",
        description: "Advanced energy storage solutions ensuring reliable power supply and grid stability around the clock.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/battery_storage_system_1778005749334.png"
      },
      {
        title: "04. Residential PV Solution",
        description: "Tailored solar power systems for homes, bringing sustainable and independent energy to your household.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/industrial_rooftop_solar_1778005732356.png"
      },
      {
        title: "05. Solar Irrigation System",
        description: "Eco-friendly solar-powered pumps and irrigation setups to support sustainable agricultural practices.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/utility_solar_plant_1778005715577.png"
      },
      {
        title: "06. Floating Solar PV System",
        description: "Innovative solar installations on water bodies, saving land space and increasing panel efficiency through natural cooling.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/floating_solar_pv_1778005768620.png"
      },
      {
        title: "07. Building Integrated PV solution",
        description: "Seamlessly integrated solar panels into building architecture, combining aesthetic design with energy generation.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/industrial_rooftop_solar_1778005732356.png"
      },
      {
        title: "08. Solar Carport & EV Solution",
        description: "Dual-purpose solar structures that provide shade for vehicles while generating clean energy for EV charging.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/solar_carport_ev_1778005783455.png"
      },
      {
        title: "09. Energy Monitoring System",
        description: "Real-time tracking and analytics platforms to optimize energy consumption and system performance.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/battery_storage_system_1778005749334.png"
      },
      {
        title: "10. SCADA Solution",
        description: "Supervisory Control and Data Acquisition systems for precise management and control of solar infrastructure.",
        image: "/home/shazzad/.gemini/antigravity/brain/2047c623-0b51-4a06-a3d4-237e42d706ea/fire_safety_inspection_1778005578583.png"
      }
    ],
    features: [
      "Net metering facilitation with utility grid",
      "High-efficiency Tier-1 solar modules",
      "Industrial-grade string and central inverters",
      "Custom mounting structures for rooftops",
      "IoT-based real-time performance monitoring",
      "Automatic panel cleaning systems",
      "Battery energy storage (BESS) options",
      "Annual Maintenance Contracts (AMC)"
    ],
    benefits: [
      "Reduce electricity bills by up to 70%",
      "Payback period within 4-6 years",
      "25-year performance warranty",
      "Contribution to Green Factory certification",
      "Protection against rising energy costs",
      "Low maintenance renewable power"
    ],
    specifications: {
      "Capacity Range": "50kWp to 5MWp+",
      "Module Type": "Monocrystalline PERC / Bifacial",
      "Inverter Efficiency": "Up to 98.5%",
      "Monitoring": "Web & Mobile Cloud-based",
      "Payback Period": "Estimated 4-5 Years",
      "Lifespan": "25+ Years"
    },
    applications: [
      "Industrial factory rooftops",
      "Commercial building roofs",
      "Cold storage facilities",
      "Educational campuses",
      "Solar farms and parks",
      "Remote industrial sites"
    ]
  },
  "civil-construction": {
    id: "civil-construction",
    title: "Civil & Industrial Construction",
    category: "Infrastructure",
    image: "/placeholder-construction.jpg",
    shortDescription: "Specialized industrial civil works, factory flooring and warehouse infrastructure development.",
    longDescription: "Providing specialized civil engineering and construction services tailored for industrial environments. From heavy-duty foundation work for machinery to specialized industrial flooring and warehouse construction, we ensure your infrastructure is built for durability and performance.",
    features: [
      "Heavy industrial machine foundations",
      "Laser-level epoxy and PU flooring",
      "Pre-engineered building (PEB) solutions",
      "Warehouse and cold storage construction",
      "Industrial drainage and ETP civil works",
      "Facility renovation and reinforcement",
      "Structural safety assessments",
      "Turnkey factory interior development"
    ],
    benefits: [
      "Designed for heavy industrial loads",
      "Fast-track construction timelines",
      "Durability against chemical and thermal stress",
      "Compliance with industrial building codes",
      "One-stop solution for civil and MEP",
      "Superior finish and quality control"
    ],
    specifications: {
      "Scope": "Industrial Civil & Structural",
      "Flooring": "Epoxy, PU, VDF, Self-leveling",
      "Foundation": "Piling, Raft, Isolated",
      "Codes": "BNBC, ACI, ASTM",
      "Timeline": "Project specific execution",
      "Safety": "Zero-harm industrial standards"
    },
    applications: [
      "New factory establishment",
      "Industrial floor upgrades",
      "Warehouse expansion",
      "Machinery installation support",
      "Office & industrial interiors",
      "Waterproofing & renovations"
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = id ? productData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <PageShell>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-500 mb-8">The service you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/services")} className="bg-primary hover:bg-blue-700">
              Back to Services
            </Button>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[500px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Genuine Products</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Warranty Included</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Certified Quality</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-blue-700 text-white px-8 py-6 text-base">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-300 px-8 py-6 text-base">
                  <a href={`tel:+8801234567890`}>Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Products Section (if available) */}
      {product.subProducts && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Specialized solutions for your power distribution needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {product.subProducts.map((item, index) => (
                <div key={index} className="group rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover what makes our {product.title} stand out from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Benefits</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              How our solution adds value to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Detailed technical information for engineers and procurement teams
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr
                      key={key}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Where our solutions are commonly deployed
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {product.applications.map((app, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and customized quote for your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base">
              <Link to="/contact">Send Inquiry →</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
              <Link to="/authorized-agent">View Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServiceDetail;
