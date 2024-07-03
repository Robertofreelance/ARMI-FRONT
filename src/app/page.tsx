import { fetchProducts } from "@/utils/consumers";
import { ProductsClientConnecter } from "@/components/ProductsClientConnecter";


export default async function Home() {

  const products = await fetchProducts()
  return (
    <main >
      <ProductsClientConnecter products={products} />
    </main >
  );
}


