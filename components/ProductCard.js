export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-3">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-600">${product.price}</span>
                <span className="text-yellow-500 font-medium">⭐ {product.rating}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Product
            </button>
        </div>
    );
}
