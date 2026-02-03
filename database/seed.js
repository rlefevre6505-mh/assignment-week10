import { db } from "../src/utils/dbconnection.js";
import { Faker, es } from "@faker-js/faker";

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

const fakerES = new Faker({ locale: [es] });

async function seedStaff(entries) {
  for (let i = 0; i < entries; i++) {
    const values = {
      first_name: fakerES.person.firstName(),
      last_name: fakerES.person.lastName(),
      role: fakerES.person.jobDescriptor(),
      avatar: fakerES.image.personPortrait(),
    };

    db.query(
      `INSERT INTO staff (first_name, last_name, role, avatar_url) VALUES ($1, $2, $3, $4)`,
      [values.first_name, values.last_name, values.role, values.avatar],
    );
    console.log("1 row added");
  }
}

seedStaff(5);
