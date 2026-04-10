import { Search, Code, TestTube, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      description: "We understand your business needs and create a strategic roadmap for success."
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "Our expert team builds robust solutions using cutting-edge technologies."
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest quality standards."
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "Seamless deployment with ongoing support to ensure smooth operations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how our proven process can help transform your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
