import Link from "next/link";

export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="w-full p-5 text-black bg-green-200">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase">Menu</h1>
        </Link>
      </nav>
      <div className="h-screen min-h-screen p-8 bg-gray-900">{children}</div>
    </div>
  );
}