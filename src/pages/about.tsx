import Link from "next/link";

export default function About() {
  return (
    <main>
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
      </nav>
      <h1>About</h1>
    </main>
  );
}
