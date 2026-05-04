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
    category: "Power Systems",
    image: "/placeholder-power.jpg",
    shortDescription: "Complete MV/LV power distribution solutions including switchgear, transformers, busbar trunking systems, and panel boards.",
    longDescription: "Our comprehensive electrical and power distribution solutions are designed to meet the demanding requirements of modern industrial and commercial facilities. We provide complete MV/LV switchgear systems, distribution transformers, busbar trunking systems, and custom panel boards that comply with international IEC standards. Our engineering team ensures optimal power distribution, safety, and reliability for your facility.",
    features: [
      "IEC 61439 compliant switchgear systems",
      "Custom-designed LV/MV panels and distribution boards",
      "EAE busbar trunking systems for high-density distribution",
      "Indoor and outdoor installations available",
      "IP54/IP65 protection ratings",
      "Integrated metering and monitoring systems",
      "Arc flash protection and safety systems",
      "Modular design for easy future expansion"
    ],
    benefits: [
      "Enhanced electrical safety and system reliability",
      "Reduced downtime and maintenance costs",
      "Energy efficiency optimization",
      "Scalable infrastructure for future expansion",
      "Full compliance with international standards",
      "24/7 technical support and service"
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
      "Commercial buildings and offices",
      "Data centers and IT facilities",
      "Hospitals and healthcare facilities",
      "Educational institutions",
      "Shopping complexes and malls"
    ]
  },
  "fire-safety": {
    id: "fire-safety",
    title: "Fire & Life Safety Solutions",
    category: "Safety Systems",
    image: "/placeholder-fire.jpg",
    shortDescription: "Comprehensive fire detection, suppression, and life safety systems certified to NFPA and BS standards.",
    longDescription: "Comprehensive fire detection and suppression systems designed to protect lives and property. Our solutions include addressable fire alarm systems, gas suppression systems, sprinkler systems, and emergency evacuation systems. All products are certified and comply with NFPA, BS, and international fire safety standards.",
    features: [
      "Addressable and conventional fire detection systems",
      "Gas suppression systems (FM200, Novec 1230, CO2)",
      "Automatic sprinkler and hydrant systems",
      "Emergency voice evacuation systems",
      "Smoke, heat, and flame detectors",
      "Manual call points and break glass units",
      "Advanced fire control panels",
      "Integration with building management systems"
    ],
    benefits: [
      "Early fire detection and timely warning",
      "Automated suppression response",
      "Minimal false alarms with advanced detection",
      "Full life safety compliance",
      "Comprehensive property protection",
      "Potential insurance premium reduction"
    ],
    specifications: {
      "Detection Type": "Smoke, Heat, Flame, Gas",
      "System Type": "Conventional/Addressable/Intelligent",
      "Suppression Agents": "FM200, Novec 1230, CO2, Foam",
      "Standards": "NFPA, BS, EN",
      "Coverage": "Up to 2000 devices per loop",
      "Backup Power": "72 hours standby"
    },
    applications: [
      "Office buildings and corporate parks",
      "Data centers and server rooms",
      "Industrial facilities and warehouses",
      "Hotels and hospitality venues",
      "Residential complexes",
      "Healthcare facilities"
    ]
  },
  "solar-solutions": {
    id: "solar-solutions",
    title: "Sustainable Solar Solutions",
    category: "Renewable Energy",
    image: "/placeholder-solar.jpg",
    shortDescription: "End-to-end solar EPC services from feasibility study to commissioning of grid-tied and off-grid solar power plants.",
    longDescription: "Complete solar EPC (Engineering, Procurement, and Construction) services for grid-tied and off-grid solar power plants. From initial feasibility study to final commissioning, we handle every aspect of your solar project. Our solutions help reduce energy costs, carbon footprint, and provide energy independence for businesses and communities.",
    features: [
      "Comprehensive site assessment and feasibility study",
      "Custom system design and engineering",
      "Tier-1 solar panel procurement",
      "Grid-tied, hybrid, and off-grid solutions",
      "Net metering facilitation and approvals",
      "Real-time IoT-based monitoring systems",
      "Operation and maintenance (O&M) services",
      "Performance guarantees and warranties"
    ],
    benefits: [
      "Up to 70% reduction in electricity bills",
      "ROI within 4-6 years",
      "25+ year system lifespan",
      "Significant carbon footprint reduction",
      "Energy independence and security",
      "Government incentives and subsidies available"
    ],
    specifications: {
      "System Capacity": "10kW - 10MW+",
      "Panel Efficiency": "Up to 22%",
      "Inverter Type": "String/Central/Micro Inverters",
      "Mounting Structure": "Rooftop/Ground/Carport/BIPV",
      "Monitoring": "IoT-based real-time monitoring",
      "Warranty": "25 years performance guarantee"
    },
    applications: [
      "Industrial rooftops and factories",
      "Commercial buildings and offices",
      "Residential complexes and societies",
      "Utility-scale solar farms",
      "Agricultural and irrigation systems",
      "Remote off-grid locations"
    ]
  },
  "civil-construction": {
    id: "civil-construction",
    title: "Civil & Industrial Construction",
    category: "Construction Services",
    image: "/placeholder-construction.jpg",
    shortDescription: "Professional construction services for industrial facilities, commercial buildings, and infrastructure projects.",
    longDescription: "Professional civil and industrial construction services covering the entire project lifecycle from planning to handover. We specialize in industrial facilities, commercial buildings, warehouses, and infrastructure projects. Our experienced team ensures quality construction, timely delivery, and adherence to all safety and regulatory standards.",
    features: [
      "Complete project planning and design",
      "Structural engineering and analysis",
      "Foundation and structural work",
      "Architectural finishing",
      "MEP (Mechanical, Electrical, Plumbing) integration",
      "Quality control and assurance",
      "Safety management systems",
      "Project management and coordination"
    ],
    benefits: [
      "Single-point responsibility for entire project",
      "Experienced engineering and construction team",
      "On-time project delivery",
      "Cost-effective solutions",
      "Quality assurance and warranty",
      "Compliance with all building codes and regulations"
    ],
    specifications: {
      "Project Types": "Industrial, Commercial, Institutional",
      "Construction Type": "RCC, Steel, Pre-engineered",
      "Capacity": "Small scale to large industrial",
      "Standards": "BCB, ACI, Eurocode",
      "Quality": "ISO certified processes",
      "Safety": "Zero-accident commitment"
    },
    applications: [
      "Industrial factories and plants",
      "Warehouses and logistics centers",
      "Commercial office buildings",
      "Educational institutions",
      "Healthcare facilities",
      "Infrastructure projects"
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
