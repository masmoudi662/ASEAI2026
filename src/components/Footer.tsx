const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">ASEAI 2026</h3>
          <p className="text-background/80">
            {/* TODO(content-decision): title wording pending approval, see Hero.tsx */}
            [EVENT TITLE — PENDING APPROVAL]
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-background/70">
            <span>September 28-30, 2026</span>
            <span className="hidden md:inline">•</span>
            <span>ENSIAS, Mohammed V University, Rabat, Morocco</span>
          </div>
          <p className="text-sm text-background/60">#ASEAI2026 {/* pending approval */}</p>
          <div className="pt-6 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {currentYear} ASEAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
