"use client";

import { useEffect, useState } from "react";
import StyledTable from "../../components/StyledTable";

export default function ClientFetchingPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://dummyjson.com/products/category/smartphones");
                const data = await res.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Client-Side Fetched Products</h1>
            {products.length > 0 ? <StyledTable products={products} /> : <p>Loading...</p>}
        </div>
    );
}
