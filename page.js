export default function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-blue-600">AI Ready School</h1>

        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Demo
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Bring AI Into Your School, The Right Way
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          AI Ready School helps institutions adopt AI with structured tools,
          training, and infrastructure designed for real classrooms.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">
          Get Started
        </button>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">
          Our AI Ecosystem
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 shadow-lg rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Cypher</h4>
            <p className="text-gray-600">
              AI learning companion for students
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Morpheus</h4>
            <p className="text-gray-600">
              AI teaching assistant
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Zion</h4>
            <p className="text-gray-600">
              AI tools for productivity
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h4 className="text-xl font-semibold mb-2">NEO</h4>
            <p className="text-gray-600">
              Innovation lab for students
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Matrix</h4>
            <p className="text-gray-600">
              AI infrastructure system
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <p className="text-xl italic max-w-2xl mx-auto">
          "AI Ready School transformed how our students learn and how our
          teachers teach."
        </p>

        <h5 className="mt-4 font-semibold">— School Principal</h5>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">
          Ready to bring AI to your school?
        </h3>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Book a Demo
        </button>
      </section>

    </div>
  );
}