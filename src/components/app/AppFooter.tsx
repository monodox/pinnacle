import logoIcon from '@/assets/icons/icon-dark.png';
import { Link } from 'react-router-dom';

export default function AppFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4 md:h-16 md:py-0">
        <div className="flex justify-center md:justify-start items-center gap-2 font-bold text-lg">
          <img src={logoIcon} className="h-5 w-5" alt="Pinnacle Icon" />
          <span>Pinnacle</span>
        </div>
        <nav className="flex justify-center items-center gap-4 text-sm font-medium">
          <Link to="/terms" className="text-muted-foreground hover:underline">Terms</Link>
          <Link to="/privacy" className="text-muted-foreground hover:underline">Privacy</Link>
          <Link to="/cookies" className="text-muted-foreground hover:underline">Cookies</Link>
        </nav>
        <div className="flex justify-center md:justify-end text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pinnacle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
