import Link from "next/link";
import styles from "./main.module.css";

export default function Home() {
  return (
    <div className={styles.nav}>
      <Link href="/commerce">Digital storefront</Link>
      <Link href="/staff">Staff profiles</Link>
    </div>
  );
}
