import { faker } from "@faker-js/faker";
import Image from "next/image";
import CommerceHeader from "../components/CommerceHeader";
import CommerceFooter from "../components/CommerceFooter";

export default function CommerceDemoPage() {
  const prodArray = [];
  async function generateArray() {
    for (let i = 0; i < 28; i++) {
      prodArray.push({
        id: faker.string.uuid().slice(0, 8),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 10, max: 100 }),
        category: faker.commerce.department(),
        image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        reviews: faker.number.int({ min: 0, max: 300 }),
        inStock: faker.datatype.boolean(),
      });
    }
    return prodArray;
  }
  generateArray();
  console.log(prodArray);
  return (
    <>
      <CommerceHeader />
      <section className="grid grid-cols-4 justify-items-center gap-y-10 ml-2">
        <h2 className="col-span-full text-xl mt-0.5">All Products</h2>
        {prodArray.map((product, index) => {
          return (
            <div
              key={index}
              className="min-w-10 max-w-75 rounded-lg p-4 bg-stone-100 relative h-auto"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
              <h3 className="font-bold mt-1">{product.name}</h3>
              <h3 className="text-xs">Product code: {product.id}</h3>
              <h3 className="text-sm mt-2">£{product.price}</h3>
              <h3 className="text-xs mt-1">{product.description}</h3>
              {product.inStock === true ? (
                <p className="text-sm mt-2 mb-5">Currently in stock</p>
              ) : (
                <p className=" text-sm text-red-600 mt-2 mb-5">Out of stock</p>
              )}
              <h3 className="text-xs mt-10 pt-3 absolute bottom-1.5">
                Customer rating: {product.rating}/5 ⭐ ({product.reviews})
              </h3>
            </div>
          );
        })}
      </section>
      <CommerceFooter />
    </>
  );
}
