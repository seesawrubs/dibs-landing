const footerLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep text-ink">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold text-[0.72rem] font-black tracking-[0.18em] text-paper shadow-[0_0_24px_rgba(0,232,123,0.35)]">
              DBS
            </span>
            <div>
              <p className="text-[0.95rem] font-bold tracking-tight">
                Digital Business Studio
              </p>
              <p className="text-sm text-ink/56">
                Strategy, build, operations, and growth
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line-dark pt-6 text-sm text-ink/52 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Digital Business Studio.</p>
          <p>
            Built with intention in{" "}
            <span className="serif-accent text-gold-bright">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
