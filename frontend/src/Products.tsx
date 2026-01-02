import { useProducts } from "./contexts/ProductsContext";

export default function Products() {
  const { products } = useProducts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 max-w-4xl mx-auto">
          <h2 className="sr-only">Produits</h2>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <p className="p-4">
                <span className="block text-lg font-semibold text-gray-800">
                  {product.name}
                </span>
                <span className="block text-gray-600">
                  {product.description}
                </span>
                <span className="block text-gray-800 font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
    )
}