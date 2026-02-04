import { db } from "@/utils/dbconnection";
import Image from "next/image";
import styles from "./staff.module.css";
import Link from "next/link";

export default async function StaffPage() {
  const query = await db.query(`SELECT * FROM staff`);
  const data = query.rows;

  return (
    <span className={styles.body}>
      <header className={styles.header}>
        <h1 className={styles.h1}>The Big Corporation</h1>
        <h2 className={styles.h2}>employee profiles</h2>
      </header>
      <div className={styles.sidebar}>
        <h3 className={styles.h3}>Locations </h3>
        <h4 className={styles.h4}>Europe</h4>
        <div className={styles.navcol}>
          <Link href="#">London</Link>
          <Link href="#">Madrid</Link>
          <Link href="#">Berlin</Link>
          <Link href="#">Paris</Link>
          <Link href="#">Stockholm</Link>
        </div>
        <h4 className={styles.h4}>North America</h4>
        <div className={styles.navcol}>
          <Link href="#">New York</Link>
          <Link href="#">Quebec</Link>
          <Link href="#">Washington</Link>
        </div>
        <h4 className={styles.h4}>Asia</h4>
        <div className={styles.navcol}>
          <Link href="#">Hong Kong</Link>
          <Link href="#">Kyoto</Link>
          <Link href="#">Shanghai</Link>
        </div>
      </div>
      <main className={styles.main}>
        {data.map((staff, i) => {
          return (
            <div className={styles.card} key={`staffCard${i}`}>
              <Image
                className={styles.img}
                src={staff.avatar_url}
                alt="a member of staff"
                width={120}
                height={120}
              />
              <div className={styles.staffdetails}>
                <p className={styles.staffname}>
                  {staff.first_name} {staff.last_name}
                </p>
                <p>{staff.role}</p>
              </div>
            </div>
          );
        })}
      </main>
      <footer className={styles.footer}>
        <p>&copy; The Big Corporation</p>
      </footer>
    </span>
  );
}
