import { db } from "@/utils/dbconnection";
import Image from "next/image";
import styles from "./staff.module.css";

export default async function StaffPage() {
  const query = await db.query(`SELECT * FROM staff`);
  const data = query.rows;
  console.log(data);

  return (
    <span className={styles.body}>
      <header className={styles.header}>
        <h1 className={styles.h1}>The Big Corporation</h1>
        <h2 className={styles.h2}>employee profiles</h2>
      </header>
      <div className={styles.sidebar}></div>
      <main className={styles.main}>
        {data.map((staff, i) => {
          return (
            <div className={styles.card} key={`staffCard${i}`}>
              <Image
                className={styles.img}
                src={staff.avatar_url}
                alt="a member of staff"
                width="99"
                height="99"
              />
              <p>
                {staff.first_name} {staff.last_name}
              </p>
              <p>{staff.role}</p>
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
