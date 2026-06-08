const experiences = [
  {
    year: "2025 - 2026",
    title: "Magang Di PT. Hummatech Indonesia",
    description:
      "Membangun sistem absensi digital yang efisien dan user-friendly untuk kebutuhan seminar. Sistem ini dirancang untuk memudahkan proses absensi, mengurangi penggunaan kertas, dan menyediakan data yang akurat serta mudah diakses. Dengan antarmuka yang intuitif dan fitur yang lengkap, sistem ini membantu meningkatkan efisiensi administrasi dan pengalaman pengguna dalam kegiatan seminar.",
  },
  {
    year: "2026",
    title: "Freelance Web Development",
    description:
      "Mengerjakan berbagai proyek aplikasi web berbasis Laravel, React, JavaScript, dan MySQL untuk kebutuhan pembelajaran serta pengembangan sistem informasi. Berfokus pada implementasi fitur CRUD, autentikasi pengguna, integrasi API, pengelolaan database, dan pengembangan antarmuka yang responsif.",
  },
  {
    year: "2025",
    title: "Clouthing Brand Owner",
    description:
      "Mengelola bisnis clothing brand dengan menjual berbagai produk fashion berkualitas. Berfokus pada pemasaran digital, pengelolaan pesanan, pelayanan pelanggan, dan pengembangan identitas merek untuk meningkatkan penjualan dan loyalitas pelanggan.",
  },
];

const ExperiencePage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 mb-[100px]">

      <div className="flex justify-center max-w-lg mx-auto">
        <img
          src="/images/text-experience.png"
          alt="Experience"
          className="mb-12 h-auto"
        />
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-stretch">


        {/* Left Side */}
        <div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-blue-200" />

            {experiences.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[60px_24px_1fr] gap-4 mb-12 relative"
              >
                <div className="text-[11px] text-slate-500 font-medium">
                  {item.year}
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white min-h-[300px] lg:min-h-0">
          <img
            src="/images/experience.png"
            alt="Experience Visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
