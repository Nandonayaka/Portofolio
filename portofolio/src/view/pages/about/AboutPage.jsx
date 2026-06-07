import Button from "../../components/Button";

const AboutPage = () => {
    return (
        <div className="min-h-screen px-4 md:px-16 bg-[#FDFBF7]">
            {/* Section Utama: Kiri Foto, Kanan Deskripsi */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

                {/* Sisi Kiri: Foto Profil */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <div className="flex justify-center md:justify-start shadow-xl">
                        <img
                            src="/public/images/me.svg"
                            alt="Portfolio Text"
                            className="max-w-[90vw] md:max-w-full shadow-xl"
                        />
                    </div>
                </div>

                {/* Sisi Kanan: Judul Besar & Paragraf Deskripsi */}
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                    {/* Judul Besar di atas paragraf */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/public/images/text-about.svg"
                            alt="Portfolio Text"
                            className="max-w-[90vw] md:max-w-[500px] "
                        />
                    </div>

                    {/* Deskripsi/Paragraf */}
                    <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed mt-4">
                        <p>
                            Halo! Saya adalah seorang Frontend Developer yang fokus membangun aplikasi web yang interaktif, responsif, dan memiliki performa tinggi menggunakan React dan ekosistem modern lainnya, sayangku.
                        </p>
                        <p>
                            Selain ngoding, saya juga suka mengeksplorasi dunia desain grafis, branding, dan digital marketing untuk memberikan nilai tambah pada setiap proyek yang saya kerjakan, sayangku.
                        </p>
                    </div>

                    {/* Detail Tambahan: Umur, Lokasi, dll */}
                    <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-slate-400 mb-1 font-serif italic">/ Age /</p>
                            <p className="text-xl font-medium text-blue-900">Umur hanya tuhan yang tau</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest text-slate-400 mb-1 font-serif italic">/ Location /</p>
                            <p className="text-xl font-medium text-blue-900">Jawa Timur, IDN</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest text-slate-400 mb-1 font-serif italic">/ Role /</p>
                            <p className="text-xl font-medium text-blue-900">Frontend Dev</p>
                        </div>
                    </div>

                    {/* Button More About Me */}
                    <div className="mt-12 flex justify-center md:justify-start">
                        <Button text="More about me" onClick={() => { }} />
                    </div>
                </div>

            </div>
        </div>
    );
};


export default AboutPage;