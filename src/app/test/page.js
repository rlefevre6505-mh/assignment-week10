import { Faker, es } from "@faker-js/faker";
import { db } from "@/utils/dbconnection";

export default async function TestPage() {
  // const { Faker, es } = require("@faker-js/faker");
  const fakerES = new Faker({ locale: [es] });

  const query = await db.query("SELECT * FROM blog_comments");
  console.log(query);

  return (
    <>
      <h1>Faker test</h1>
      <p>{fakerES.person.firstName()}</p>
      <p>{fakerES.person.lastName()}</p>
    </>
  );
}
