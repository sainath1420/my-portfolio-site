const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sainath Vinnakota. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
