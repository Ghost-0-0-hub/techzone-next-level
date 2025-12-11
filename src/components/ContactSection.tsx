import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Karachi, Pakistan", "Near Main Hub"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300 1234567", "+92 21 12345678"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@techzonelearning.com", "admissions@techzonelearning.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 9PM", "Sunday: 10AM - 6PM"],
    },
  ];

  const courses = [
    "MERN Stack Development",
    "PHP Full Stack Development",
    "Digital Marketing",
    "AI & Machine Learning",
    "Shopify E-Commerce",
    "Graphic Design & UI/UX",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-navy-medium/50 relative"
    >
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Start Your <span className="gradient-text">Journey</span> Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your career? Contact us now and take the first
            step towards your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Interested Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Any questions or special requirements?"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">
                    Quick Chat on WhatsApp
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to your questions. Our team is available
                    24/7 on WhatsApp.
                  </p>
                  <Button
                    variant="default"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    asChild
                  >
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-navy-light border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Visit our campus in Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
