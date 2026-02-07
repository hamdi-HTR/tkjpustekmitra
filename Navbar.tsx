import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">TKJ Pustek Mitra</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">Profil</Link>
        <Link href="/program">Program</Link>
        <Link href="/contact">Kontak</Link>
      </div>
    </nav>
  );
}
