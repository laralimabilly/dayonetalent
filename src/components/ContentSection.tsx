export default function ContentSection() {
    return (
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {["Feature One", "Feature Two", "Feature Three"].map((feature, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold">{feature}</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </section>
    );
  }
  