import Button from "../../components/Button";
import AboutParticle from "../../components/particle/AboutParticle";
import ScrollVelocity from "../../components/ScrollVelocity";

const AboutPage = () => {
    const scrollToMoreInfo = () => {
        const section = document.getElementById("moreinfo-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="py-20 px-6 lg:px-16 relative overflow-hidden">
            <AboutParticle />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* FOTO */}
                    <div
                        className="w-full lg:w-[40%] flex justify-center"
                        data-aos="fade-right"
                    >
                        <img
                            src="/images/me.png"
                            alt="Me"
                            className="w-[90%] lg:w-full max-w-[700px] drop-shadow-xl"
                            draggable="false"
                        />
                    </div>

                    {/* KONTEN */}
                    <div
                        className="w-full lg:w-[60%]"
                        data-aos="fade-left"
                    >
                        {/* JUDUL */}
                        <img
                            src="/images/text-about.png"
                            alt="About Me"
                            className="w-full max-w-[600px] mb-8"
                            draggable="false"
                        />

                        {/* DESKRIPSI */}
                        <div className="space-y-5 text-gray-700 text-base lg:text-lg leading-8 font-serif">
                            <p>
                                Halo! Saya adalah seorang Frontend Developer yang
                                memiliki minat besar dalam membangun website dan
                                aplikasi web modern yang responsif, interaktif,
                                serta memberikan pengalaman pengguna yang nyaman
                                di berbagai perangkat.
                            </p>

                            <p>
                                Saya terbiasa menggunakan React, JavaScript,
                                TypeScript, Tailwind CSS, dan berbagai tools
                                modern lainnya untuk menciptakan antarmuka yang
                                cepat, efisien, dan mudah dipelihara. Bagi saya,
                                sebuah website yang baik bukan hanya soal tampilan,
                                tetapi juga performa, aksesibilitas, dan kualitas
                                kode di baliknya.
                            </p>
                        </div>

                        {/* INFO */}
                        <div className="mt-10 flex flex-wrap gap-10">
                            <div>
                                <p className="text-sm uppercase tracking-widest text-black mb-1 font-serif italic">
                                    / Age /
                                </p>
                                <p className="text-xl font-medium text-blue-900">
                                    Umur hanya Tuhan yang tahu
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-widest text-black mb-1 font-serif italic">
                                    / Location /
                                </p>
                                <p className="text-xl font-medium text-blue-900">
                                    Jawa Timur, IDN
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-widest text-black mb-1 font-serif italic">
                                    / Role /
                                </p>
                                <p className="text-xl font-medium text-blue-900">
                                    Frontend Developer
                                </p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="mt-12">
                            <Button
                                text="More About Me"
                                onClick={scrollToMoreInfo}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* SCROLL VELOCITY TEXT SECTION BELOW ABOUT */}
            <div className="mt-40 py-8 px-4 overflow-hidden select-none">
                <ScrollVelocity
                    texts={["FrontEnd", "Developer"]}
                    velocity={80}
                    className="text-[#4A90FF]/35 font-serif italic text-6xl md:text-8xl lg:text-9xl uppercase tracking-widest pointer-events-none"
                />
            </div>
        </div>
    );
};

export default AboutPage;