import { BarChart, Bot, FileText, Home, Settings as SettingsIcon } from 'lucide-react';

export default function ConsoleSidebar() {
  const navItems = [
    { name: 'Dashboard', href: '/console', icon: Home },
    { name: 'Research', href: '/console/research', icon: BarChart },
    { name: 'Agents', href: '/console/agents', icon: Bot },
    { name: 'Reports', href: '/console/reports', icon: FileText },
    { name: 'Settings', href: '/console/settings', icon: SettingsIcon },
  ];

  return (
    <div className="w-64 border-r bg-muted/20 min-h-screen flex flex-col">
      <div className="h-14 flex items-center px-6 border-b font-bold text-lg">
        Pinnacle Console
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors"
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
