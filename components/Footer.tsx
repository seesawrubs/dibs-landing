const footerLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-paper text-[0.7rem] font-black tracking-tight text-ink">
              DBS
            </span>
            <span className="text-[0.9rem] font-bold tracking-tight">
              Digital Business Studio
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-paper/60 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-8 text-sm text-paper/50 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} Digital Business Studio. All
            rights reserved.
          </p>
          <p>
            Built with intention in{" "}
            <span className="serif-accent text-gold-bright">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
