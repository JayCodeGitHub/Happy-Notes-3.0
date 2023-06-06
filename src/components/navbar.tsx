import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

export default function NavBar() {
  return (
    <nav className="min-h-screen text-gray-900 transition-all bg-slate-100 dark:bg-gray-900 dark:text-white">
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/notes">
          <li>Notes</li>
        </Link>
        <Link href="/todo">
          <li>ToDo</li>
        </Link>
        <Link href="/sites">
          <li>Sites</li>
        </Link>
      </ul>
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </nav>
  );
}
