// import faker
import { faker } from "@faker-js/faker";
import Image from "next/image";
import CommerceHeader from "../components/CommerceHeader";
import CommerceFooter from "../components/CommerceFooter";

export default function CommerceDemoPage() {
  // initialise empty array for product generation
  const prodArray = [];

  // set seed so results are always the same on each page load
  faker.seed(40);

  // create a function using a for loop to generate your chose number of products (I chose 28)
  async function generateArray() {
    for (let i = 0; i < 28; i++) {
      prodArray.push({
        // product code sliced to only the first 8 digits
        id: faker.string.uuid().slice(0, 8),
        // product name
        name: faker.commerce.productName(),
        // short description of the product
        description: faker.commerce.productDescription(),
        // product price with minimum and maximum values
        price: faker.commerce.price({ min: 10, max: 100 }),
        // product department or category
        category: faker.commerce.department(),
        // random image with chosen width and height values
        image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
        // random number with chosen min and max values
        rating: faker.number.int({ min: 1, max: 5 }),
        reviews: faker.number.int({ min: 0, max: 300 }),
        // boolean
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
