import { Star, Quote } from "lucide-react";

export function TrustedBy() {
  const companies = [
    "Global Trade Corp",
    "Pacific Imports Ltd",
    "EuroQuality AG",
    "AsiaConnect Trading",
    "MidEast Exports",
    "AfricaFirst Logistics",
    "AmeriSource Inc",
    "WorldWide Trade"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Import Director",
      company: "Global Trade Corp",
      content:
        "Qualty.AI transformed our inspection process. The transparency and competitive bidding saved us 40% on costs while improving quality assurance.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Quality Inspector",
      company: "Independent Professional",
      content:
        "This platform connected me with international clients I could never reach before. My business has tripled in just six months.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Manager",
      company: "InspectPro Solutions",
      content:
        "We manage 50+ inspectors through Qualty.AI. The centralized dashboard and real-time tracking streamlined our entire operation.",
      rating: 5
    }
  ];

  return (
    <section id="trusted-by" className="py-24 lg:py-32 bg-white border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <div className="text-sm text-black/40 mb-4 tracking-wide uppercase">
            Social Proof
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Companies That Trust Us
          </h2>
          <p className="text-lg text-black/60 leading-relaxed">
            Global trade leaders rely on Qualty.AI for their quality inspection needs
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-black/[0.02] rounded-xl p-6 flex items-center justify-center border border-black/5 hover:border-black/10 transition-all"
            >
              <span className="text-sm text-center">{company}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl tracking-tight text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-all"
              >
                {/* Quote Icon */}
                <Quote size={32} strokeWidth={1.5} className="text-black/10 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-black text-black"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-black/80 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-black/5">
                  <div className="mb-1">{testimonial.name}</div>
                  <div className="text-sm text-black/40">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-black/40">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid sm:grid-cols-4 gap-8 mt-20 pt-20 border-t border-black/5">
          <div className="text-center">
            <div className="text-4xl tracking-tight mb-2">4.9/5</div>
            <div className="text-black/60">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl tracking-tight mb-2">98%</div>
            <div className="text-black/60">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl tracking-tight mb-2">24/7</div>
            <div className="text-black/60">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl tracking-tight mb-2">100%</div>
            <div className="text-black/60">Free Platform</div>
          </div>
        </div>
      </div>
    </section>
  );
}
