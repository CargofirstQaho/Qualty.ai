import { useState } from "react";
import { ChevronLeft, ChevronRight, Package, UserCheck, Building2 } from "lucide-react";

const roles = [
  {
    id: "importers",
    title: "Importers & Buyers",
    subtitle: "Global traders who demand quality",
    icon: Package,
    image: "https://images.unsplash.com/photo-1713859326033-f75e04439c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBvcnQlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2NjQxMzQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Post inspection requirements for free",
      "Compare bids from verified professionals",
      "Real-time tracking and instant reports",
      "Reduce risk before shipment",
      "Access to global inspector network"
    ]
  },
  {
    id: "inspectors",
    title: "Individual Inspectors",
    subtitle: "Certified professionals expanding reach",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1583737077382-3f51318d6074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnNwZWN0b3IlMjB0YWJsZXQlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY2NDEzNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Find global inspection opportunities",
      "Bid on projects matching your expertise",
      "Build professional reputation and ratings",
      "Flexible work with international clients",
      "Secure payments and documentation"
    ]
  },
  {
    id: "companies",
    title: "Inspection Companies",
    subtitle: "Scale operations globally",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1757691079287-eb6a8d167287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnNwZWN0aW9uJTIwdGVhbSUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NjY0MTM0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Expand business reach globally",
      "Steady stream of qualified projects",
      "Manage teams and assignments centrally",
      "Build corporate credibility",
      "Advanced project management tools"
    ]
  }
];

export function WhoWeServe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % roles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  const currentRole = roles[currentIndex];
  const Icon = currentRole.icon;

  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-black/[0.02] border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-[800px] mb-20">
          <div className="text-sm text-black/40 mb-4 tracking-wide uppercase">
            Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Who We Built This For
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            Three essential pillars of the global inspection ecosystem, connected
            on one platform.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {roles.map((role, index) => {
            const RoleIcon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all whitespace-nowrap ${
                  index === currentIndex
                    ? "border-black bg-black text-white"
                    : "border-black/10 hover:border-black/20"
                }`}
              >
                <RoleIcon size={20} strokeWidth={1.5} />
                <span className="text-sm">{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Slider */}
        <div className="relative bg-white rounded-2xl border border-black/10 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={currentRole.image}
                alt={currentRole.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-1">{currentRole.title}</h3>
                <p className="text-white/80">{currentRole.subtitle}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4 mb-8">
                {currentRole.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-black/10 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                    <p className="text-black/80 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-all inline-flex items-center justify-center w-full lg:w-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-black/5 rounded-full flex items-center justify-center shadow-lg transition-all border border-black/10"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-black/5 rounded-full flex items-center justify-center shadow-lg transition-all border border-black/10"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {roles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
