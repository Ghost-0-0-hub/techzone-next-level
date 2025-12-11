import { Clock, Users, Wallet, Sparkles, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning, evening, and weekend batches to fit your schedule",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: Wallet,
      title: "Budget Friendly",
      description: "Quality education at affordable prices with easy installments",
    },
    {
      icon: Sparkles,
      title: "Trendy Courses",
      description: "Stay ahead with cutting-edge technology courses",
    },
  ];

  const benefits = [
    "Hands-on practical training",
    "Real-world project experience",
    "Career counseling & guidance",
    "Job placement assistance",
    "Industry-recognized certificates",
    "Lifetime learning access",
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">TechZone</span> Learning?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're committed to providing the best IT education that transforms
            beginners into industry-ready professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover-lift glass-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-navy-medium to-navy-dark p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-primary-foreground">
                      TZ
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Excellence in Education
                  </h3>
                  <p className="text-muted-foreground">Since 2015</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold shadow-lg animate-float">
                8+ Years Experience
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Transforming Careers Through{" "}
              <span className="gradient-text-blue">Technology Education</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              At TechZone Learning, we believe in providing practical,
              industry-relevant education that prepares you for real-world
              challenges. Our comprehensive courses are designed by experts and
              constantly updated to match industry demands.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
