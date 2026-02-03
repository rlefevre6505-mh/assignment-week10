import { db } from "@/utils/dbconnection";
import { faker } from "@faker-js/faker";
// import { createClient } from "@supabase/supabase-js";
// import { Suspense } from "react";

export default async function TestPage() {
  //   const SEED_VALUE = 123;

  //   const person = {
  //     first_name: "first_name",
  //     last_name: "last_name",
  //     role: "role",
  //   };

  // const generateData = (person, qty, isRepro) => {
  //     if (isRepro){
  //         faker.seed(SEED_VALUE)
  //     }
  // }

  // for (let i=0; i<qty; i++){
  // switch(person){
  // }
  // }

  // supabase allow bulk insert so we can create an array of objects and insert the array
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY,
  // );

  // const seedStaff = async (entries) => {
  //   const staff = [];

  //   for (let i = 0; i < entries; i++) {
  //     staff.push({
  //       first_name: faker.person.first_name(),
  //       last_name: faker.person.last_name(),
  //       role: faker.person.jobDescriptor(),
  //       avatar_url: faker.image.personPortrait(),
  //     });
  //   }
  //   console.log(staff);
  //   await supbase.from("staff").insert(staff);
  // };

  // seedStaff(5);

  // async function seedStaff(entries) {
  //   for (let i = 0; i < entries; i++) {
  //     db.query(
  //       `INSERT INTO staff (first_name, last_name, role, avatar_url) VALUES ($1, $2, $3, $4)`,
  //       [
  //         faker.person.first_name(),
  //         faker.person.last_name(),
  //         faker.person.jobDescriptor(),
  //         faker.image.personPortrait(),
  //       ],
  //     );
  //     console.log("1 row added");
  //   }
  // }

  // seedStaff(5);

  return (
    <>
      <h1>seed test</h1>
      {/* <p>{faker.person.first_name()}</p>
      <p> {faker.person.last_name()}</p>
      <p> {faker.person.jobDescriptor()}</p>
      <p> {faker.image.personPortrait()}</p> */}
    </>
  );
}
