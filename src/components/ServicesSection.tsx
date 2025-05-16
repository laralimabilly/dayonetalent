import { Users, FileSearch, Award, BookOpen, BarChart, Handshake } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Strategic recruitment solutions to identify and attract top talent."
    },
    {
      icon: FileSearch,
      title: "HR Compliance",
      description: "Comprehensive compliance management ensuring your organization meets all requirements."
    },
    {
      icon: Award,
      title: "Performance Management",
      description: "Advanced systems to evaluate, develop, and enhance employee performance."
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Customized learning programs to upskill your workforce and foster growth."
    },
    {
      icon: BarChart,
      title: "HR Analytics",
      description: "Data-driven insights to optimize workforce management and strategic decisions."
    },
    {
      icon: Handshake,
      title: "Employee Relations",
      description: "Comprehensive support for maintaining positive workplace relationships."
    }
  ];

  return (
    <section className="bg-dark py-24 text-secondary folder-mask">
      <div className="container mx-auto px-6">
        {/* Featured section with image */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2A86B]">
              How our HR Solutions can transform your business
            </h2>
            <h3 className="text-xl mb-6 text-[#E0DFD5]">
              Streamline operations, optimize talent, and build sustainable growth with our expert consulting services.
            </h3>
            <p className="text-secondary/80 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputat est fermentum dolor ipsum eaque sed amet, imperdiet eros efficace sit consequat risit.
            </p>
            <button className="bg-accent text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full font-medium">
              Explore Solutions
            </button>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-[#414F59]/30 p-6 rounded-xl border border-[#414F59] hover:border-[#E2A86B]/50 transition-all duration-300 flex flex-col relative overflow-hidden"
                >
                  {/* Background effect similar to dashboard */}
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#E2A86B]/10 rounded-full blur-2xl opacity-70"></div>
                  <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-[#E2A86B]/10 rounded-full blur-2xl opacity-70"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 bg-[#E2A86B]/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-[#E2A86B]/30 transition-colors duration-300">
                      <service.icon 
                        size={24} 
                        className="text-[#E2A86B]"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#E0DFD5]/80 text-sm">
                      {service.description}
                    </p>
                    {/* <div className="mt-4">
                      <button className="text-[#E2A86B] text-sm font-medium flex items-center group-hover:text-secondary transition-colors duration-300">
                        Learn more 
                        <svg className="w-3 h-3 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Mock API/HR Dashboard visualization */}
              <div className="bg-[#414F59]/30 p-8 rounded-xl border border-[#414F59] relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#E2A86B]/10 rounded-full blur-2xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#E2A86B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center mb-6">
                  <div className="inline-block bg-[#E2A86B]/20 p-3 rounded-lg mb-4">
                    <Users size={32} className="text-[#E2A86B]" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary">HR Management Dashboard</h4>
                </div>
                
                <div className="bg-[#2C2F34]/70 rounded-lg p-4 mb-4 border border-[#414F59]/50">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium">Employee Performance</div>
                    <div className="text-[#E2A86B]">+12.4%</div>
                  </div>
                  <div className="w-full bg-[#414F59]/30 h-2 rounded-full">
                    <div className="bg-[#E2A86B] h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="flex gap-3 mb-4">
                  <div className="bg-[#2C2F34]/70 rounded-lg p-4 flex-1 border border-[#414F59]/50">
                    <div className="text-[#E0DFD5]/70 text-sm mb-1">New Hires</div>
                    <div className="text-xl font-bold">24</div>
                  </div>
                  <div className="bg-[#2C2F34]/70 rounded-lg p-4 flex-1 border border-[#414F59]/50">
                    <div className="text-[#E0DFD5]/70 text-sm mb-1">Retention</div>
                    <div className="text-xl font-bold">92%</div>
                  </div>
                </div>
                
                <div className="bg-[#2C2F34]/70 rounded-lg p-4 border border-[#414F59]/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Training Completion</div>
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`h-1 rounded-full ${i < 4 ? 'bg-[#E2A86B]' : 'bg-[#414F59]/30'}`}></div>
                    ))}
                  </div>
                  <div className="text-sm text-[#E0DFD5]/70 mt-2">4/5 modules completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;