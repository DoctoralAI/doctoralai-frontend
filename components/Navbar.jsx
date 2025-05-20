// components/Navbar.tsx
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold">DoctoralAI</div>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="#about" className="text-gray-700 hover:text-black">About Us</Link>
        <Link href="#demo" className="text-gray-700 hover:text-black">Demo</Link>
        <Link href="#subscribe" className="text-gray-700 hover:text-black">Subscribe</Link>
      </div>
    </nav>
  );
};

