import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ahmed Hassan",
      role: "Web Developer at Tech Corp",
      content:
        "TechZone Learning transformed my career completely. The MERN stack course was comprehensive and the instructors were incredibly helpful. Landed my dream job within 2 months of completing the course!",
      rating: 5,
      image: "AH",
    },
    {
      name: "Sara Khan",
      role: "Digital Marketing Manager",
      content:
        "Best decision I ever made! The digital marketing course covered everything from basics to advanced strategies. The practical assignments helped me build a strong portfolio.",
      rating: 5,
      image: "SK",
    },
    {
      name: "Muhammad Ali",
      role: "Full Stack Developer",
      content:
        "The flexible timing was perfect for me as a working professional. Great environment, supportive staff, and most importantly, real industry knowledge. Highly recommended!",
      rating: 5,
      image: "MA",
    },
    {
      name: "Fatima Zahra",
      role: "Graphic Designer",
      content:
        "The graphic design course was amazing! Learned Adobe Creative Suite from scratch and now working as a freelancer earning well. Thank you TechZone!",
      rating: 5,
      image: "FZ",
    },
    {
      name: "Bilal Ahmad",
      role: "E-commerce Entrepreneur",
      content:
        "Started my Shopify store after completing the e-commerce course. The practical knowledge helped me generate revenue from day one. Excellent teaching methodology!",
      rating: 5,
      image: "BA",
    },
    {
      name: "Ayesha Siddiqui",
      role: "AI Engineer",
      content:
        "The AI course was cutting-edge and well-structured. From Python basics to building ML models, everything was explained clearly. Now working at a top tech company!",
      rating: 5,
      image: "AS",
    },
  ];

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Students</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from thousands of students
            who transformed their careers with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                "{review.content}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground text-sm">
                    {review.image}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
              4.9/5
            </div>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text-blue mb-2">
              5000+
            </div>
            <p className="text-muted-foreground text-sm">Happy Students</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
              98%
            </div>
            <p className="text-muted-foreground text-sm">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text-blue mb-2">
              500+
            </div>
            <p className="text-muted-foreground text-sm">Companies Hiring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
