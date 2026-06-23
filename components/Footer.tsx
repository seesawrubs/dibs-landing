import Container from "./Container";

const footerLinks = [
  { label: "The Studio", href: "#the-studio" },
  { label: "Engage", href: "#engage" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Partners", href: "#who-for" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-noir text-ink">
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="font-display grid h-10 w-10 place-items-center rounded-xl bg-gold text-[1.05rem] font-semibold text-paper shadow-[0_0_24px_rgba(202,230,22,0.35)]">
              D
            </span>
            <div>
              <p className="font-display text-[1.05rem] font-semibold tracking-[-0.01em]">
                DIBS
              </p>
              <p className="mono-label mt-0.5 text-ink/56">
                Strategy · build · operations · growth
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/60 transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-sm text-ink/52 md:flex-row md:items-center">
          <p className="font-mono-tech text-xs tracking-[0.08em]">
            &copy; {new Date().getFullYear()} DIBS — Digital Business Studio
          </p>
          <p className="font-mono-tech text-xs tracking-[0.08em]">
            Built with intention in <span className="text-gold">India</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
