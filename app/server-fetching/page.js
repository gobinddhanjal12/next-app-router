import ProductCard from "../../components/ProductCard";

async function getProducts() {
    const res = await fetch("https://dummyjson.com/products/category/smartphones", {
        cache: "no-store",
    });
    const data = await res.json();
    return data.products;
}

export default async function ServerComponentPage() {
    const products = await getProducts();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Server Components - Electronics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
