import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Button } from "./ui/button";

const CoursesSection = () => {
  const courses = [
    {
      title: "MERN Stack Development",
      description:
        "Master MongoDB, Express.js, React, and Node.js to build full-stack applications",
      duration: "4 Months",
      students: "500+",
      rating: "4.9",
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      title: "PHP Full Stack Development",
      description:
        "Learn PHP, MySQL, Laravel, and modern web development practices",
      duration: "3 Months",
      students: "400+",
      rating: "4.8",
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
    {
      title: "Digital Marketing Mastery",
      description:
        "SEO, Social Media, Google Ads, Facebook Ads, and complete marketing strategies",
      duration: "2 Months",
      students: "800+",
      rating: "4.9",
      color: "from-primary to-yellow-400",
      popular: true,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Python, TensorFlow, deep learning, and practical AI applications",
      duration: "5 Months",
      students: "200+",
      rating: "4.7",
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      title: "Shopify E-Commerce",
      description:
        "Build and manage successful online stores with Shopify",
      duration: "6 Weeks",
      students: "350+",
      rating: "4.8",
      color: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      title: "Graphic Design & UI/UX",
      description:
        "Adobe Creative Suite, Figma, and modern design principles",
      duration: "3 Months",
      students: "450+",
      rating: "4.9",
      color: "from-pink-500 to-rose-500",
      popular: true,
    },
  ];

  return (
    <section id="courses" className="section-padding bg-navy-medium/50 relative">
      <div className="absolute inset-0 pattern-overlay opacity-50" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Industry-Leading <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our wide range of professional courses designed to make
            you job-ready from day one.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 hover-lift"
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Course Header */}
              <div
                className={`h-32 bg-gradient-to-r ${course.color} p-6 flex items-end`}
              >
                <div className="w-full">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{course.rating}</span>
                    <span className="mx-2">•</span>
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn text-primary hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
