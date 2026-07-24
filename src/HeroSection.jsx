import React from 'react';
import bgDesktop from '../../../assets/images/bg-for-dekstop.webp';
import bgMobile from '../../../assets/images/bg-for-mobile.webp';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen w-full bg-black text-white flex flex-col justify-end items-center pb-8 overflow-hidden font-sans">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block transition-all duration-700"
                style={{
                    backgroundImage: `url(${bgDesktop})`,
                }}
            />
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden transition-all duration-700"
                style={{
                    backgroundImage: `url(${bgMobile})`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center gap-6">

                    <div className="text-4xl font-black tracking-wider text-white">
                        GOC
                </div>

                <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 font-bold drop-shadow-lg">
                    Game of Chukurukuk
                </h1>

                <p className="text-sm md:text-base font-medium tracking-wide text-gray-200">
                    10+ Image Of Memes
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-sm font-semibold tracking-wide">
                    <a href="#game" className="bg-[#cc1818] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full transition duration-200 uppercase inline-block">
                        Play All
                    </a>
                </div>

                <p className="text-xs md:text-sm text-gray-300 max-w-2xl leading-relaxed mt-4 drop-shadow">
                    For seven seasons, you've watched characters lie, bleed, and sacrifice for the Iron Throne.
                    As the final season approaches, only one question remains: How far will you go?
                </p>

            </div>
        </div>
    );
}