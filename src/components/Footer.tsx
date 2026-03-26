const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sainath Vinnakota. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with passion for <span className="text-primary">AI & Backend Engineering</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
