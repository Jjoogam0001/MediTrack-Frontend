import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  Shield, 
  BarChart3, 
  Clock, 
  FileText,
  Phone,
  Heart,
  Database
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive patient profiles with medical history, contact information, and care coordination."
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Streamlined booking system with automated reminders and calendar integration."
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Enterprise-grade security ensuring patient data protection and regulatory compliance."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into patient flow, treatment outcomes, and practice performance."
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Cloud-based platform accessible anytime, anywhere with role-based permissions."
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Paperless record keeping with electronic health records and document management."
  },
  {
    icon: Phone,
    title: "Communication Hub",
    description: "Secure messaging system for patient-provider communication and team collaboration."
  },
  {
    icon: Heart,
    title: "Care Coordination",
    description: "Streamlined workflows for referrals, follow-ups, and multi-provider care."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with existing medical systems and laboratory services."
  }
];

export const Features = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Manage Patient Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            mediTrack provides a comprehensive suite of tools designed to streamline healthcare operations 
            and improve patient outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-elegant group cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};