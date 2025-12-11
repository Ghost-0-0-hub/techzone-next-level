import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Students Trained" },
    { icon: BookOpen, value: "25+", label: "Expert Courses" },
    { icon: Award, value: "98%", label: "Success Rate" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="TechZone Learning classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 pattern-overlay" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container-max px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-reveal">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              #1 IT Institute in Karachi
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-reveal">
            Launch Your{" "}
            <span className="gradient-text text-shadow-glow">Tech Career</span>{" "}
            With Expert Training
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-reveal-delayed">
            Master Web Development, Digital Marketing, AI, and more with
            hands-on projects, industry experts, and job-ready skills. Your
            future in tech starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-reveal-delayed-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#courses">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-reveal-delayed-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
