import React, { useState, useEffect } from 'react';
import { FaDesktop } from 'react-icons/fa';

const DesktopToast = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            if (window.innerWidth < 1024) {
                // Ambil hitungan refresh dari localStorage
                let refreshCount = parseInt(localStorage.getItem('desktop_toast_refresh_count') || '0');

                // Tambah hitungan
                refreshCount += 1;
                localStorage.setItem('desktop_toast_refresh_count', refreshCount.toString());

                // Tampilkan jika pertama kali buka (count 1) atau kelipatan 3 (3, 6, 9...)
                if (refreshCount === 1 || refreshCount % 3 === 0) {
                    setIsVisible(true);

                    const timer = setTimeout(() => {
                        setIsVisible(false);
                    }, 4000);

                    return () => clearTimeout(timer);
                }
            }
        };

        checkDevice();
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[85%] max-w-[280px] animate-in slide-in-from-top-full duration-700 ease-out">
            <div className="bg-white/95 backdrop-blur-xl border border-blue-100 rounded-xl p-2 px-3 shadow-2xl flex items-center gap-3 relative overflow-hidden">
                {/* Progress bar timer */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500 animate-[progress_4s_linear_forwards]" />

                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                    <FaDesktop size={14} />
                </div>

                <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">Best on Desktop</h4>
                    <p className="text-[9px] text-slate-500 font-bold leading-tight truncate">
                        Gunakan mode desktop.
                    </p>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-red-500 p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes progress {
                    from { width: 100%; }
                    to { width: 0%; }
                }
            `}} />
        </div>
    );
};

export default DesktopToast;
