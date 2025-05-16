import { ChevronRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="section bg-dark folder-mask">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-accent">About Us</h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-accent mb-4">Fernanda Amorim</h3>
            <p className="text-secondary-dark/80 mb-4">
              Bachelor's degree in Business Administration with a specialization in Foreign Trade and an Executive MBA from the Escola Superior de Propaganda e Marketing.​
              <br /><br />He has taken several international courses at innovation schools such as Singularity University and Hyper Island.​
              <br /><br />After 20 years of experience as an executive in the technology industry, in 2014 Guerreiro became an entrepreneur in the Executive Search segment, as well as an angel investor in digitally born companies.​
              <br /><br />Today, in addition to being a Partner and CEO of Find HR, where he leads the CEO and Board practices, he is an investor and Board Member of the startups FOHAT and Manyplaces.
            </p>
            <button className="text-accent hover:text-accent-light flex items-center">
              Read More <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className=" p-6 rounded-lg">
            <div className="relative mb-6">
              <img
                src="/img/Fernanda.png"
                alt="Fernanda Amorim"
                className="w-full object-cover rounded-lg p-8"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className=" p-6 rounded-lg">
            <div className="relative mb-6">
              <img
                src="/img/Claudio.png"
                alt="Claudio Guerreiro"
                className="w-full object-cover rounded-lg p-8"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-accent mb-4">Claudio Guerreiro</h3>
            <p className="text-secondary-dark/80 mb-4">
              Bachelor's degree in Business Administration with a specialization in Foreign Trade and an Executive MBA from the Escola Superior de Propaganda e Marketing.​
              <br /><br />He has taken several international courses at innovation schools such as Singularity University and Hyper Island.​
              <br /><br />After 20 years of experience as an executive in the technology industry, in 2014 Guerreiro became an entrepreneur in the Executive Search segment, as well as an angel investor in digitally born companies.​
              <br /><br />Today, in addition to being a Partner and CEO of Find HR, where he leads the CEO and Board practices, he is an investor and Board Member of the startups FOHAT and Manyplaces.
            </p>
            <button className="text-accent hover:text-accent-light flex items-center">
              Read More <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;