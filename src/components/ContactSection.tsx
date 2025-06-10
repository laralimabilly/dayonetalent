import { User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const ContactSection = () => {

  const {t} = useTranslation();

  return (
    <section className="bg-dark py-24 text-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact information */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2A86B]">
              {t('contact.h2')}
            </h2>
            <h3 className="text-xl mb-6 text-[#E0DFD5]">
              {t('contact.h3')}
            </h3>
            <p className="text-secondary/80 mb-8">
              {t('contact.p')}
            </p>
            
            <div className="bg-[#414F59]/30 p-6 rounded-xl border border-[#414F59] relative overflow-hidden mb-8">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#E2A86B]/10 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-[#E2A86B]/10 rounded-full blur-2xl opacity-70"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#E2A86B]/20 p-2 rounded-lg flex items-center justify-center mt-0.5">
                    <Mail size={18} className="text-[#E2A86B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">{t('contact.label.email')}</h4>
                    <p className="text-[#E0DFD5]/80">fernanda.amorim@dayonetalent.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#E2A86B]/20 p-2 rounded-lg flex items-center justify-center mt-0.5">
                    <Phone size={18} className="text-[#E2A86B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">{t('contact.label.phone')}</h4>
                    <p className="text-[#E0DFD5]/80">+55 11 99712-7227</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#E2A86B]/20 p-2 rounded-lg flex items-center justify-center mt-0.5">
                    <Building size={18} className="text-[#E2A86B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">{t('contact.label.office')}</h4>
                    <p className="text-[#E0DFD5]/80">{parse(t('contact.address'))}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:w-2/3">
            <div className="bg-[#414F59]/30 p-8 rounded-xl border border-[#414F59] relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#E2A86B]/10 rounded-full blur-2xl"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#E2A86B]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-secondary mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[#E0DFD5] font-medium">
                        Name <span className="text-[#E2A86B]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-[#E0DFD5]/50" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="bg-[#2C2F34]/70 text-secondary w-full pl-10 pr-4 py-3 rounded-lg border border-[#414F59]/50 focus:border-[#E2A86B] focus:outline-none focus:ring-1 focus:ring-[#E2A86B] transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    
                    {/* Email field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[#E0DFD5] font-medium">
                        Email <span className="text-[#E2A86B]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-[#E0DFD5]/50" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="bg-[#2C2F34]/70 text-secondary w-full pl-10 pr-4 py-3 rounded-lg border border-[#414F59]/50 focus:border-[#E2A86B] focus:outline-none focus:ring-1 focus:ring-[#E2A86B] transition-all duration-200"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    {/* Phone field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-[#E0DFD5] font-medium">
                        Phone <span className="text-[#E2A86B]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-[#E0DFD5]/50" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="bg-[#2C2F34]/70 text-secondary w-full pl-10 pr-4 py-3 rounded-lg border border-[#414F59]/50 focus:border-[#E2A86B] focus:outline-none focus:ring-1 focus:ring-[#E2A86B] transition-all duration-200"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    {/* Company field */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-[#E0DFD5] font-medium">
                        Company <span className="text-[#E2A86B]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building size={16} className="text-[#E0DFD5]/50" />
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="bg-[#2C2F34]/70 text-secondary w-full pl-10 pr-4 py-3 rounded-lg border border-[#414F59]/50 focus:border-[#E2A86B] focus:outline-none focus:ring-1 focus:ring-[#E2A86B] transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[#E0DFD5] font-medium">
                      Message <span className="text-[#E2A86B]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare size={16} className="text-[#E0DFD5]/50" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="bg-[#2C2F34]/70 text-secondary w-full pl-10 pr-4 py-3 rounded-lg border border-[#414F59]/50 focus:border-[#E2A86B] focus:outline-none focus:ring-1 focus:ring-[#E2A86B] transition-all duration-200 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit button */}
                  <div className="flex justify-end">
                    <button className="bg-accent text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full font-medium">
                        Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;