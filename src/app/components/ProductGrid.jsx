import Image from "next/image";

export default function ProductGrid({ products }) {
  return (
    <main>
      <Image src={products.Image} alt={products.name} width="100%" />
      <h3>{products.name}</h3>
      <p>{products.price}</p>
      <p>{products.description}</p>
      <p>{products.rating}</p>
    </main>
  );
}
