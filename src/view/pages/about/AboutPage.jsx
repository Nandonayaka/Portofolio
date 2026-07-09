import Button from "../../components/Button";
import AboutParticle from "../../components/particle/AboutParticle";

const AboutPage = () => {
  const scrollToMoreInfo = () => {
    const section = document.getElementById("moreinfo-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Daftar skill dengan tema biru-putih solid
  const coreSkills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "UI/UX Design",
  ];

  return (
    <div className="py-20 px-4 md:px-16 relative">
      {/* Background Stars/Sparkles Tetap Asli */}
      <AboutParticle />

      {/* Section Utama */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Sisi Kiri: Foto Profil dengan Border Biru Solid */}
        <div
          className="w-full md:w-2/5 flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <div className=" rounded-2xl shadow-xl max-w-[260px] sm:max-w-[300px] md:max-w-full">
            <img
              src="/images/me.png"
              alt="Frontend Developer Profile"
              className="w-full h-auto object-cover rounded-xl "
              draggable="false"
            />
          </div>
        </div>

        {/* Sisi Kanan: Konten Informasi */}
        <div
          className="w-full md:w-3/5 flex flex-col justify-center"
          data-aos="fade-left"
        >
          {/* Judul Gambar (About Me) */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/text-about.png"
              alt="About Me"
              className="w-auto h-auto max-w-[55vw] sm:max-w-[220px] md:max-w-[320px]"
              draggable="false"
            />
          </div>

          {/* Deskripsi Singkat dengan Sorotan Teks Biru */}
          <div className="space-y-4 text-center md:text-left text-base md:text-sm text-gray-800 leading-relaxed mt-6">
            <p>
              Halo! Saya adalah seorang{" "}
              <span className="text-blue-600 font-bold text-lg md:text-base">
                Frontend Developer
              </span>{" "}
              yang fokus membangun aplikasi web modern yang interaktif,
              responsif, dan berperforma tinggi. Saya menjembatani kode
              pemrograman dengan pengalaman pengguna yang optimal.
            </p>
            <p>
              Memiliki ketertarikan kuat di dunia{" "}
              <span className="text-black font-semibold underline decoration-blue-600 decoration-2">
                UI/UX design, branding, dan digital marketing
              </span>
              , yang memungkinkan saya memberikan solusi digital yang tidak
              hanya berfungsi dengan baik, tetapi juga menarik secara visual dan
              memiliki nilai bisnis.
            </p>
          </div>

          {/* Core Skills Badge - Biru Solid Teks Putih */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-[#4A90FF] text-white text-xs font-semibold rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Garis Pembatas Halus */}
          <hr className="my-8 border-gray-200 w-full" />

          {/* Metadata Detail (Biru & Putih/Hitam Kontras) */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 md:gap-16">
            {/* Experience */}
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-bold">
                / Experience /
              </p>
              <p className="text-2xl font-black text-black">2+ Years</p>
            </div>

            {/* Location */}
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-bold">
                / Location /
              </p>
              <p className="text-2xl font-black text-black">Jawa Timur, IDN</p>
            </div>

            {/* Role */}
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-bold">
                / Current Role /
              </p>
              <p className="text-2xl font-black text-black">Frontend Dev</p>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="mt-10 flex justify-center md:justify-start">
            <Button text="More about me" onClick={scrollToMoreInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
