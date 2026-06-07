export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-10">
      <span className="font-serif text-2xl italic text-white/80 tracking-widest uppercase">
        /Graphic Design/
      </span>

      <ul className="flex gap-16">
        <li>
          <span className="font-serif text-3xl font-medium text-white tracking-tight">
            Nando Nayaka
          </span>
        </li>
      </ul>

      <span className="font-serif text-2xl italic text-white/80 tracking-widest uppercase">
        /Digital Artist/
      </span>
    </nav>
  );
}