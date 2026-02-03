import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function CommerceTest() {
  const department = faker.commerce.department();
  const product = faker.commerce.productName();
  const prodDescription = faker.commerce.productDescription();
  const prodPrice = faker.commerce.price();
  const plainImg = faker.image.dataUri();
  const avatar = faker.image.avatar();
  return (
    <main>
      <h1>{department}</h1>
      <h2>{product}</h2>
      <h3>{prodDescription}</h3>
      <h4>£{prodPrice}</h4>
      <Image
        className="plain-img"
        src={plainImg}
        alt=""
        width={300}
        height={400}
      />
      <Image src={avatar} alt="" width={300} height={400} />
    </main>
  );
}
