

export default function AppFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Pinnacle. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a href="/terms" className="text-muted-foreground hover:underline">Terms</a>
          <a href="/privacy" className="text-muted-foreground hover:underline">Privacy</a>
          <a href="/cookies" className="text-muted-foreground hover:underline">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}
