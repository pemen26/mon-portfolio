import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-red-600 opacity-50 glow-text">404</h1>
      <h2 className="text-3xl font-bold text-white uppercase mt-4 mb-8">Page Introuvable</h2>
      <Link href="/" className="px-8 py-3 bg-white/10 border border-white/20 text-white hover:bg-red-600 hover:border-red-600 transition-all uppercase tracking-widest text-sm">
        Retour à la base
      </Link>
    </div>
  );
}