import { faker } from "@faker-js/faker";
// import Image from "next/image";

export default function CommerceDemoPage() {
  const prodArray = [];
  async function generateArray() {
    for (let i = 0; i < 50; i++) {
      prodArray.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 10, max: 100 }),
        category: faker.commerce.department(),
        image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        inStock: faker.datatype.boolean(),
      });
    }
    return prodArray;
  }
  generateArray();
  console.log(prodArray);
}
// <main>
//   <h1>{products.name}</h1>
//   <h2>£{products.price}</h2>
//   <h3>{products.description}</h3>
//   <h4>{products.rating}</h4>
//   <Image
//     src={products.image}
//     alt={products.name}
//     width={300}
//     height={300}
//   />
// </main>
