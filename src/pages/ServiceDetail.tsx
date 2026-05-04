import { ArrowLeft, CheckCircle, Zap, Shield, Award, TrendingUp, Clock, Users } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Product data for each service
const productData = {
  "power-systems": {
    id: "power-systems",
    title: "Power Systems & Switchgear",
    category: "Electrical Power Distribution",
    image: "/placeholder-power.jpg",
    shortDescription: "MV/LV switchgear, transformers, panel boards engineered to IEC standards.",
    longDescription: "Our comprehensive power systems and switchgear solutions are designed to meet the demanding requirements of modern industrial and commercial facilities. We provide complete MV/LV switchgear systems, distribution transformers, and custom panel boards that comply with international IEC standards. Our engineering team ensures optimal power distribution, safety, and reliability for your facility.",
    features: [
      "IEC 61439 compliant switchgear systems",
      "Custom-designed LV/MV panels",
      "Indoor and outdoor installations",
      "IP54/IP65 protection ratings available",
      "Integrated metering and monitoring",
      "Arc flash protection systems",
      "Modular design for easy expansion",
      "Remote monitoring capabilities"
    ],
    benefits: [
      "Enhanced electrical safety and reliability",
      "Reduced downtime and maintenance costs",
      "Energy efficiency optimization",
      "Scalable for future expansion",
      "Compliance with international standards",
      "24/7 technical support"
    ],
    specifications: {
      "Voltage Rating": "Up to 33kV",
      "Current Rating": "Up to 6300A",
      "Frequency": "50/60 Hz",
      "Standards": "IEC 61439, IEC 62271",
      "Protection Class": "IP54/IP65",
      "Temperature Range": "-5°C to +40°C"
    },
    applications: [
      "Industrial manufacturing plants",
      "Commercial buildings",
      "Data centers",
      "Hospitals and healthcare facilities",
      "Educational institutions",
      "Shopping complexes"
    ]
  },
  "busbar-trunking": {
    id: "busbar-trunking",
    title: "Busbar Trunking Systems",
    category: "Electrical Power Distribution",
    image: "/placeholder-busbar.jpg",
    shortDescription: "EAE busbar systems for high-density power distribution in modern facilities.",
    longDescription: "EAE busbar trunking systems represent the future of power distribution in modern facilities. These systems offer superior flexibility, reliability, and efficiency compared to traditional cable systems. Perfect for high-rise buildings, data centers, and industrial facilities where space optimization and future expandability are critical.",
    features: [
      "High current capacity up to 6300A",
      "Compact design saves space",
      "Easy installation and modification",
      "Excellent heat dissipation",
      "Low voltage drop",
      "Fire-resistant construction",
      "Tap-off units at regular intervals",
      "IP54/IP65/IP68 protection options"
    ],
    benefits: [
      "30-50% space savings vs cables",
      "Faster installation time",
      "Easy reconfiguration and expansion",
      "Lower lifetime maintenance costs",
      "Superior electrical performance",
      "Enhanced safety features"
    ],
    specifications: {
      "Current Rating": "630A - 6300A",
      "Voltage": "Up to 1000V",
      "Frequency": "50/60 Hz",
      "Protection": "IP54/IP65/IP68",
      "Conductor Material": "Electrolytic Copper/Aluminum",
      "Insulation": "Class B/F/H"
    },
    applications: [
      "High-rise commercial buildings",
      "Data centers and server rooms",
      "Manufacturing facilities",
      "Hospitals",
      "Shopping malls",
      "Airport terminals"
    ]
  },
  "fire-safety": {
    id: "fire-safety",
    title: "Fire & Life Safety Systems",
    category: "Safety Solutions",
    image: "/placeholder-fire.jpg",
    shortDescription: "Detection, suppression and life-safety solutions certified by PCJ Industries.",
    longDescription: "Comprehensive fire detection and suppression systems designed to protect lives and property. Our solutions include addressable fire alarm systems, gas suppression systems, sprinkler systems, and emergency evacuation systems. All products are certified by PCJ Industries and comply with NFPA and BS standards.",
    features: [
      "Addressable fire detection systems",
      "Gas suppression (FM200, Novec 1230)",
      "Sprinkler and hydrant systems",
      "Emergency voice evacuation",
      "Smoke and heat detectors",
      "Manual call points",
      "Fire control panels",
      "Integration with building management"
    ],
    benefits: [
      "Early fire detection and warning",
      "Automated suppression response",
      "Minimal false alarms",
      "Life safety compliance",
      "Property protection",
      "Insurance premium reduction"
    ],
    specifications: {
      "Detection Type": "Smoke, Heat, Flame, Gas",
      "System Type": "Conventional/Addressable",
      "Suppression Agents": "FM200, Novec 1230, CO2",
      "Standards": "NFPA, BS, EN",
      "Coverage": "Up to 2000 devices per loop",
      "Backup": "72 hours standby"
    },
    applications: [
      "Office buildings",
      "Data centers",
      "Industrial facilities",
      "Warehouses",
      "Hotels and hospitality",
      "Residential complexes"
    ]
  },
  "solar-epc": {
    id: "solar-epc",
    title: "Solar EPC Solutions",
    category: "Renewable Energy",
    image: "/placeholder-solar.jpg",
    shortDescription: "End-to-end design, supply, install and commissioning of grid-tied solar plants.",
    longDescription: "Complete solar EPC (Engineering, Procurement, and Construction) services for grid-tied and off-grid solar power plants. From initial feasibility study to final commissioning, we handle every aspect of your solar project. Our solutions help reduce energy costs, carbon footprint, and provide energy independence.",
    features: [
      "Site assessment and feasibility study",
      "Custom system design and engineering",
      "Tier-1 solar panel procurement",
      "Grid-tied and off-grid solutions",
      "Net metering facilitation",
      "Real-time monitoring systems",
      "O&M services",
      "Performance guarantees"
    ],
    benefits: [
      "Up to 70% reduction in electricity bills",
      "ROI within 4-6 years",
      "25+ year system lifespan",
      "Carbon footprint reduction",
      "Energy independence",
      "Government incentives available"
    ],
    specifications: {
      "System Capacity": "10kW - 10MW+",
      "Panel Efficiency": "Up to 22%",
      "Inverter Type": "String/Central/Micro",
      "Mounting": "Rooftop/Ground/Carport",
      "Monitoring": "IoT-based real-time",
      "Warranty": "25 years performance"
    },
    applications: [
      "Industrial rooftops",
      "Commercial buildings",
      "Residential complexes",
      "Solar farms",
      "Agricultural installations",
      "Remote off-grid locations"
    ]
  },
  "industrial-automation": {
    id: "industrial-automation",
    title: "Industrial Automation",
    category: "Automation & Control",
    image: "/placeholder-automation.jpg",
    shortDescription: "PLC, SCADA and process automation tailored to factory requirements.",
    longDescription: "Advanced industrial automation solutions including PLC programming, SCADA systems, HMI design, and complete process automation. We help manufacturers improve productivity, quality, and operational efficiency through cutting-edge automation technologies from leading global brands.",
    features: [
      "PLC programming and integration",
      "SCADA system development",
      "HMI design and implementation",
      "VFD and motor control systems",
      "Process instrumentation",
      "Industrial networking",
      "Predictive maintenance systems",
      "Energy management systems"
    ],
    benefits: [
      "Increased production efficiency",
      "Reduced operational costs",
      "Improved product quality",
      "Real-time process visibility",
      "Predictive maintenance capabilities",
      "Reduced downtime"
    ],
    specifications: {
      "PLC Brands": "Siemens, ABB, Schneider",
      "SCADA": "WinCC, Wonderware, Ignition",
      "Communication": "Profibus, Profinet, Modbus",
      "I/O Capacity": "Scalable",
      "Redundancy": "Hot standby available",
      "Security": "Industrial cybersecurity"
    },
    applications: [
      "Manufacturing plants",
      "Process industries",
      "Water treatment facilities",
      "Power plants",
      "Oil & gas facilities",
      "Food & beverage industry"
    ]
  },
  "direct-import": {
    id: "direct-import",
    title: "Direct Import & Supply",
    category: "Supply Chain",
    image: "/placeholder-import.jpg",
    shortDescription: "Authorized supply of ABB, Schneider, Siemens components — 100% genuine.",
    longDescription: "As authorized partners of global leaders like ABB, Schneider Electric, and Siemens, we provide 100% genuine electrical components with full manufacturer warranty and traceability. Our direct import model ensures competitive pricing, authentic products, and reliable after-sales support.",
    features: [
      "Authorized distributor network",
      "100% genuine products guaranteed",
      "Full manufacturer warranty",
      "Complete product traceability",
      "Competitive pricing",
      "Fast delivery",
      "Technical support",
      "After-sales service"
    ],
    benefits: [
      "Eliminate counterfeit risk",
      "Manufacturer warranty coverage",
      "Competitive pricing",
      "Reliable supply chain",
      "Technical expertise",
      "Quick replacement support"
    ],
    specifications: {
      "Brands": "ABB, Schneider, Siemens, EAE",
      "Product Range": "Complete portfolio",
      "Warranty": "Manufacturer standard",
      "Certification": "CE, UL, IEC",
      "Origin": "Europe/Asia",
      "Documentation": "Complete"
    },
    applications: [
      "Project procurement",
      "Maintenance & replacement",
      "System upgrades",
      "New installations",
      "Emergency supply",
      "Bulk orders"
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
