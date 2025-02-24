import ProductCard from "../../components/ProductCard";

async function getProducts() {
    const res = await fetch("https://dummyjson.com/products/category/smartphones");
    const data = await res.json();
    return data.products;
}

export default async function ServerComponent() {
    const products = await getProducts();

    return (
        <div className="container">
            <h1>Server Component - Electronics</h1>
            <div className="grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
