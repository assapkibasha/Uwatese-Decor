export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <p className="text-sm text-white/70">
          <span className="font-semibold text-white">Uwatese Decor</span>  Wedding &amp; party decor + clothes rental in Kigali,
          Rwanda.
        </p>
        <p className="mt-2 text-xs text-white/45">© {new Date().getFullYear()} Uwatese Decor. All rights reserved.</p>
        <p className="mt-2 text-xs text-white/45">
          Built by <span className="font-semibold text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]">Revant Group</span>.
        </p>
      </div>
    </footer>
  )
}
