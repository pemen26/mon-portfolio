"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "ACCUEIL", path: "/" },
  { name: "PROJETS", path: "/projects" },
  { name: "À PROPOS", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:text-red-500 transition-colors">
          Portfolio<span className="text-red-600">.</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`text-sm font-bold tracking-widest transition-all duration-300 ${
                pathname === item.path ? "text-red-500 glow-text" : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}