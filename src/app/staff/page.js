import { Faker, es } from "@faker-js/faker";

export default function StaffPage() {
  const fakerES = new Faker({ locale: [es] });

  const seedStaff = async (entries) => {
    const staff = [];

    for (let i = 0; i < entries; i++) {
      staff.push({
        first_name: fakerES.person.firstName(),
        last_name: fakerES.person.lastName(),
      });
    }
    console.log(staff);
  };

  seedStaff(3);

  return <></>;
}
