import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

export default function NavBar() {
  return (
    <nav>
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
