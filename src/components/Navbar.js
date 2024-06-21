import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-gray-800">
      <div className="text-lg font-bold">
        <Link href="/" legacyBehavior>
          <a>Dimbing Resto Classic</a>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/" legacyBehavior>
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/foods/create" legacyBehavior>
          <a className="hover:underline">Create Food</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
