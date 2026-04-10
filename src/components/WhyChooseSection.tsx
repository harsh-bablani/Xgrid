import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-react';

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 10 years of delivering successful digital transformation projects across various industries."
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Agile methodology ensures quick turnaround times without compromising on quality."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade security measures to protect your data and ensure compliance with industry standards."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with deep expertise in modern technologies and best practices."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your business operations run smoothly."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Future-proof solutions that grow with your business and adapt to changing needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-blue-100 text-lg mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-medium mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium mb-2">50+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium mb-2">10+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
