import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/commerce">Digital storefront</Link>
      <br></br>
      <Link href="/staff">Staff profiles</Link>
    </div>
  );
}
