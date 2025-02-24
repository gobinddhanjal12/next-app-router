import ProductCard from "../../../components/ProductCard";

export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/products/category/smartphones");
    const data = await res.json();

    return data.products.map((product) => ({
        id: product.id.toString(),
    }));
}

async function getProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 10 },
    });
    return res.json();
}

export default async function ISRPage({ params }) {
    const product = await getProduct(params.id);

    return (
        <div className="container">
            <h1>ISR</h1>
            <ProductCard product={product} />
        </div>
    );
}
