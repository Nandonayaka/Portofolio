import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import LogoLoop from "../../components/LogoLoop";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiNodedotjs,
  SiFigma,
  SiNextdotjs
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { FaCalendarAlt, FaProjectDiagram, FaSmile } from "react-icons/fa";

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
  { node: <SiVite className="text-[#646CFF]" />, title: "Vite" },
  { node: <SiNextdotjs className="text-slate-900" />, title: "Next.js" },
  { node: <FaHtml5 className="text-[#E34F26]" />, title: "HTML5" },
  { node: <FaCss3Alt className="text-[#1572B6]" />, title: "CSS3" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git" },
  { node: <SiNodedotjs className="text-[#5FA04E]" />, title: "Node.js" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma" },
];

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

const CounterItem = ({ targetNumber, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const duration = 1800; // 1.8 seconds
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * targetNumber);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    const animFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, targetNumber]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-2 select-none"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight flex items-baseline justify-center">
        <span className="tabular-nums">{count}</span>
        <span className="text-[#4A90FF] font-serif italic text-2xl sm:text-3xl md:text-4xl ml-0.5">
          {suffix}
        </span>
      </div>
      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 font-serif italic">
        / {label} /
      </p>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 mb-[60px] relative overflow-hidden">
      <div className="flex justify-center max-w-lg mx-auto">
        <img
          src="/images/text-experience.png"
          alt="Experience"
          className="mb-12 h-auto"
        />
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-stretch mb-12">
        {/* Left Side */}
        <div data-aos="fade-right">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-blue-200" />

            {experiences.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[60px_24px_1fr] gap-4 mb-12 relative"
                data-aos="fade-right"
                data-aos-delay={index * 100}
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white min-h-[300px] lg:min-h-0 shadow-xl" data-aos="fade-left">
          <img
            src="/images/experience.png"
            alt="Experience Visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* METRICS COUNT ANIMATION */}
      <div className="max-w-5xl mx-auto my-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up">
        <CounterItem
          targetNumber={3}
          suffix="+"
          label="Tahun Pengalaman"
        />
        <CounterItem
          targetNumber={30}
          suffix="+"
          label="Proyek Selesai"
        />
        <CounterItem
          targetNumber={99}
          suffix="%"
          label="Kepuasan Klien"
        />
      </div>

      {/* TECH STACK LOGO LOOP SECTION BELOW EXPERIENCE */}
      <div className="w-full pt-10 pb-4 overflow-hidden select-none text-slate-800">
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="left"
          logoHeight={52}
          gap={60}
          scaleOnHover={true}
          fadeOut={false}
          ariaLabel="Tech Stack"
          className="text-slate-800"
        />
      </div>
    </section>
  );
};

export default ExperiencePage;
