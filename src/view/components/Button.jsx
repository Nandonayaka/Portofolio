const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="group relative px-8 py-3 bg-[#4A90FF] text-white rounded-full overflow-hidden transition-all shadow-md"
        >
            <span className="relative z-10 font-serif italic text-lg tracking-wide uppercase transition-colors duration-300 group-hover:text-[#38bdf8]">
                {text}
            </span>
            <div className="absolute inset-0 bg-[#e0f2fe] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        </button>
    );
};

export default Button;