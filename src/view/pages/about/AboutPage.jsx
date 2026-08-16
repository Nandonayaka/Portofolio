import { useMemo } from "react";
import Button from "../../components/Button";
import AboutParticle from "../../components/particle/AboutParticle";
import ScrollVelocity from "../../components/ScrollVelocity";
import Lanyard from "../../components/Lanyard";

const AboutPage = () => {
    const scrollToMoreInfo = () => {
        const section = document.getElementById("moreinfo-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Custom back face texture: White background with Google logo & Frontend Developer
    const nandoBackImage = useMemo(() => {
        if (typeof window === 'undefined') return null;
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 900;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        // Pure clean white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 600, 900);

        // Soft subtle border framing
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 4;
        ctx.strokeRect(25, 25, 550, 850);

        ctx.strokeStyle = 'rgba(66, 133, 244, 0.2)';
        ctx.lineWidth = 2;
        ctx.strokeRect(40, 40, 520, 820);

        // Draw Google Logo
        ctx.save();
        ctx.font = 'bold 96px "Google Sans", Roboto, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const gLetters = [
            { c: 'G', color: '#4285f4' },
            { c: 'o', color: '#ea4335' },
            { c: 'o', color: '#fbbc04' },
            { c: 'g', color: '#4285f4' },
            { c: 'l', color: '#34a853' },
            { c: 'e', color: '#ea4335' }
        ];

        let totalWidth = 0;
        gLetters.forEach(item => {
            totalWidth += ctx.measureText(item.c).width;
        });

        let xCur = 300 - totalWidth / 2;
        const logoY = 410;
        gLetters.forEach(item => {
            const w = ctx.measureText(item.c).width;
            ctx.fillStyle = item.color;
            ctx.fillText(item.c, xCur + w / 2, logoY);
            xCur += w;
        });
        ctx.restore();

        // Draw "Frontend Developer" below Google logo
        ctx.save();
        ctx.fillStyle = '#5f6368';
        ctx.font = '600 28px "Google Sans", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Frontend Developer', 300, 495);
        ctx.restore();

        return canvas.toDataURL('image/png');
    }, []);

    // Official white Google Developers lanyard strap texture
    const googleDevLanyardStrap = useMemo(() => {
        if (typeof window === 'undefined') return null;
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        // Clean white strap background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 2048, 512);

        // Soft subtle top & bottom edge shading
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, 2048, 8);
        ctx.fillRect(0, 504, 2048, 8);

        // Repeat Google Developers 1 time across the 2048px strap
        const repeatCount = 1;
        const segmentWidth = 2048 / repeatCount;

        for (let i = 0; i < repeatCount; i++) {
            const originX = i * segmentWidth + segmentWidth / 2;
            const centerY = 256;

            ctx.save();
            ctx.translate(originX, centerY);
            ctx.textBaseline = 'middle';

            const gLetters = [
                { c: 'G', color: '#4285f4' },
                { c: 'o', color: '#ea4335' },
                { c: 'o', color: '#fbbc04' },
                { c: 'g', color: '#4285f4' },
                { c: 'l', color: '#34a853' },
                { c: 'e', color: '#ea4335' }
            ];

            const devText = ' Developers';

            ctx.font = 'bold 150px "Google Sans", Arial, sans-serif';
            let googleWidth = 0;
            gLetters.forEach(item => {
                googleWidth += ctx.measureText(item.c).width;
            });

            ctx.font = '500 140px "Google Sans", Arial, sans-serif';
            const devWidth = ctx.measureText(devText).width;

            const totalWidth = googleWidth + devWidth;
            let xCur = -totalWidth / 2;

            // Draw "Google" in brand colors
            ctx.font = 'bold 150px "Google Sans", Arial, sans-serif';
            ctx.textAlign = 'center';
            gLetters.forEach(item => {
                const w = ctx.measureText(item.c).width;
                ctx.fillStyle = item.color;
                ctx.fillText(item.c, xCur + w / 2, 0);
                xCur += w;
            });

            // Draw "Developers" in dark slate
            ctx.fillStyle = '#3c4043';
            ctx.font = '500 140px "Google Sans", Arial, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(devText, xCur, 0);

            ctx.restore();
        }

        return canvas.toDataURL('image/png');
    }, []);

    return (
        <div className="py-20 px-6 lg:px-16 relative overflow-hidden">
            <AboutParticle />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* 3D LANYARD COMPONENT */}
                    <div
                        className="w-full lg:w-[45%] flex justify-center items-center h-[550px] lg:h-[650px]"
                        data-aos="fade-right"
                    >
                        <Lanyard
                            position={[0, 0, 13.5]}
                            gravity={[0, -40, 0]}
                            frontImage="/images/me.png"
                            backImage={nandoBackImage}
                            lanyardImage={googleDevLanyardStrap}
                            lanyardWidth={2.4}
                        />
                    </div>

                    {/* KONTEN */}
                    <div
                        className="w-full lg:w-[55%]"
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