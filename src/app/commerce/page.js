import { faker } from "@faker-js/faker";
import Image from "next/image";
import ProductGrid from "../components/ProductGrid";

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

export function generateProducts() {
  return Array({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 10, max: 100 }),
    category: faker.commerce.department(),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    inStock: faker.datatype.boolean(),
  });
}
