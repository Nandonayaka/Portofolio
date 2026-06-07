const experiences = [
  {
    year: "2024 - Present",
    title: "Freelance Graphic Designer",
    description:
      "Working with global clients to create compelling visual identities and branding solutions.",
  },
  {
    year: "2022 - 2024",
    title: "Graphic Designer",
    description:
      "Developed branding, digital, and print materials for various businesses.",
  },
  {
    year: "2020 - 2022",
    title: "Junior Designer",
    description:
      "Assisted in creating branding and marketing design projects.",
  },
];

const ExperiencePage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 mb-[100px]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Side */}
        <div>
          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-12">
            Experience
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-blue-200" />

            {experiences.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[60px_24px_1fr] gap-4 mb-12 relative"
              >
                <div className="text-[11px] text-slate-400">
                  {item.year}
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow" />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 h-[260px] flex items-center justify-center">
          <img
            src="/wave-image.jpg"
            alt="Experience Visual"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
