import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-foreground">Streamline Your</span>
              <br />
              <span className="text-gradient">Patient Management</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              mediTrack empowers healthcare providers with intuitive patient management, 
              secure data handling, and comprehensive analytics to deliver exceptional care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">10k+</div>
                <div className="text-primary-foreground/80">Patients Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">99.9%</div>
                <div className="text-primary-foreground/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/80">Healthcare Providers</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <img 
                src={heroImage} 
                alt="mediTrack Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
            <div className="absolute top-1/2 -right-12 bg-white rounded-full p-4 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};