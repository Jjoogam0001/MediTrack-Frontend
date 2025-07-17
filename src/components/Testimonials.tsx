import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Family Medicine Physician",
    practice: "Riverside Medical Center",
    content: "mediTrack has revolutionized how we manage patient care. The intuitive interface and comprehensive features have improved our efficiency by 40%.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Practice Manager",
    practice: "Downtown Health Clinic",
    content: "The analytics dashboard provides incredible insights into our practice performance. We've been able to optimize our workflows and reduce patient wait times significantly.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Internal Medicine Specialist",
    practice: "Metro Health Associates",
    content: "HIPAA compliance was our biggest concern, and mediTrack exceeded our expectations. The security features give us complete peace of mind.",
    rating: 5,
    avatar: "ER"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of healthcare providers who trust mediTrack to streamline their practice management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.practice}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed">
                  <Quote className="w-5 h-5 text-muted-foreground mb-2" />
                  {testimonial.content}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};