import { faker } from "@faker-js/faker";

export default async function TestPage() {
  return (
    <>
      <h1>Faker Test</h1>
      <p>{faker.person.fullName()}</p>
    </>
  );
}
