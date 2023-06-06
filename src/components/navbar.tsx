import Link from "next/link";
import { NavigationItems } from "@/assets/navigationItems";
import DarkModeToggle from "./darkModeToggle";

export default function NavBar() {
  return (
    <nav className="text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <ul>
        {NavigationItems.map(({ name, href }) => (
          <Link href={href} key={name}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </nav>
  );
}
