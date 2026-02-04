import Link from "next/link";

export default function CommerceHeader() {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl pl-3 pt-2">Storefront</h1>
      <nav className="flex w-20 flex-row justify-between items-center pr-1">
        <Link href="#">Shop</Link>
        <Link href="#">Cart</Link>
      </nav>
    </header>
  );
}
