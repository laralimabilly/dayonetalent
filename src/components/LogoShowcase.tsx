const LogoShowcase = () => {
  return (
    <section className="section bg-secondary rounded-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4l font-bold mb-6 text-dark">Our Brand Evolution</h2>
        
        <p className="text-primary max-w-3xl mb-12">
            {/* Our logo tells the story of discovery and new beginnings. The 'd' in 'day' features a 
            distinctive periscope design, symbolizing our ability to find and surface the best talent. 
            This subtle detail transforms the letter into d plus 1, representing 'Day One' – where every 
            new opportunity begins. The submarine-inspired design reflects our deep dive into the talent 
            pool, always searching for the perfect match between companies and professionals. 
            The "dayOne Human Capital" logo represents a mindset of continuous growth, innovation, and resilience. 
            The sleek typography conveys clarity and purpose, while the subtle flame-like element symbolizes 
            the spark of passion and drive that must always be kept alive. It reflects a philosophy of staying adaptable, 
            forward-thinking, and committed to progress. Rather than settling into routine, this identity serves as a reminder 
            to embrace each day with the same energy and ambition as the very first.
            The "dayOne Talent Advisory" logo reflects a commitment to the day one philosophy: a mindset of perpetual innovation, customer obsession, and staying agile—never complacent. Inspired by Jeff Bezos’ vision, it serves as a daily call to act with urgency, curiosity, and ownership, as if everything is just beginning. The sleek, modern typography speaks to focus and clarity, while the subtle flame-like element symbolizes the inner spark that fuels progress.
            <br></br>As a nod to Hermes—the swift and clever Greek messenger—it also reminds us of the power of communication, speed, and guidance. In the context of talent advisory, Hermes represents our role in connecting the right people to the right opportunities with insight, efficiency, and purpose. Like Hermes, we navigate complexity to deliver clear, forward-moving solutions.
            <br></br>At its core, dayOne is about approaching every challenge with the hunger of a first step, and every opportunity with the momentum to lead.*/}
            Our logo is a visual embodiment of the company’s philosophy: combining the energy of a fresh start with the depth of experience and insight. The brain icon, split into two distinct halves, reflects this duality of thought and approach:
            <br /><br />The left side, with its curvy, organic lines, symbolizes the emotional and human side — embracing intuition, empathy, and the ability to form deep, meaningful connections. It reflects the care, attention, and sensitivity with which DayOne approaches every individual and organization.
            <br /><br />The right side, defined by its structured, geometric network, represents the analytical and strategic side — highlighting logic, clarity, and the objective processes that drive effective executive search and talent advisory.
            <br /><br />This contrast illustrates DayOne’s commitment to balancing heart and mind, emotion and reason — recognizing that true leadership and transformation happen when both dimensions work in harmony. The clean typography and emphasis on “One” in gold highlight the company’s core belief: that every day can carry the impact and intention of Day One — full of purpose, clarity, and possibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="">
            <img
              src="/img/DayOne_Logo_Dark.png"
              alt="Primary Logo"
              className="w-90/100 h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-accent mb-2">Primary Logo</h3>
            <p className="text-primary">
              Our core brand represents our commitment to keeping the flame of innovation always lit.
            </p>
          </div>
          {/* <div className="space-y-6 text-center">
            <div className="max-w-1/2 p-4 bg-secondary m-auto">
              <img
                src="/img/d1-logo-blue.png"
                alt="Logo Variation 1"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-accent">Digital Application</h4>
            </div>
            <div className="max-w-1/2 p-4 bg-dark m-auto">
              <img
                src="/img/d1-logo-light.png"
                alt="Logo Variation 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-accent">Monochrome Light</h4>
            </div>
            <div className="max-w-1/2 p-4 bg-white m-auto">
              <img
                src="/img/d1-logo-dark.png"
                alt="Logo Variation 3"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-accent">Monochrome Dark</h4>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;