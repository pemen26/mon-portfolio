export default function ContactPage() {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase border-b border-red-900/30 pb-8">
          Contact <span className="text-red-600">.</span>
        </h1>
  
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Nom</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="VOTRE NOM" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="EMAIL@EXEMPLE.COM" />
            </div>
          </div>
  
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
            <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="VOTRE MESSAGE..."></textarea>
          </div>
  
          <button type="submit" className="w-full bg-red-600 text-black font-black uppercase py-4 hover:bg-white transition-colors tracking-widest">
            Envoyer le Message
          </button>
        </form>
      </div>
    );
  }