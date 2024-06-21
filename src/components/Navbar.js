import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/foods/create" legacyBehavior>
        <a>Create Food</a>
      </Link>
    </nav>
  );
}
