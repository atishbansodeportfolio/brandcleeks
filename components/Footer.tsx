export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <a href="#" className="font-bold text-2xl tracking-tight flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#A3FF12] inline-block"></span>
              Brandcleeks
            </a>
            <p className="text-zinc-500 max-w-sm">
              We build brands that stand out in the modern digital landscape.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <div className="text-white font-semibold mb-2">Services</div>
              <a href="#" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">Branding</a>
              <a href="#" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">UI/UX Design</a>
              <a href="#" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">Development</a>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="text-white font-semibold mb-2">Company</div>
              <a href="#about" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">About</a>
              <a href="#work" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">Work</a>
              <a href="#contact" className="text-zinc-500 hover:text-[#A3FF12] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Brandcleeks. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
