const LogoShowcase = () => {
  return (
    <section className="section bg-dark rounded-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4l font-bold mb-6 text-accent">Our Brand Evolution</h2>
        
        <p className="text-secondary max-w-3xl mb-12">
            Our logo is a visual embodiment of the company’s philosophy: combining the energy of a fresh start with the depth of experience and insight. The brain icon, split into two distinct halves, reflects this duality of thought and approach:
            <br /><br />The left side, with its curvy, organic lines, symbolizes the emotional and human side — embracing intuition, empathy, and the ability to form deep, meaningful connections. It reflects the care, attention, and sensitivity with which DayOne approaches every individual and organization.
            <br /><br />The right side, defined by its structured, geometric network, represents the analytical and strategic side — highlighting logic, clarity, and the objective processes that drive effective executive search and talent advisory.
            <br /><br />This contrast illustrates DayOne’s commitment to balancing heart and mind, emotion and reason — recognizing that true leadership and transformation happen when both dimensions work in harmony. The clean typography and emphasis on “One” in gold highlight the company’s core belief: that every day can carry the impact and intention of Day One — full of purpose, clarity, and possibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="">
            <img
              src="/img/DayOne_Logo_Light.png"
              alt="Primary Logo"
              className="w-90/100 h-auto rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;