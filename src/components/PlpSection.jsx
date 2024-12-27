import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component"

export const PlpSection = ({apiItems, handleAddCart}) => {

    return (
        <>
        {apiItems.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow mb-5"
          >
            <div>
              <LazyLoadImage
                style={{width: '200px', height: '200px', objectFit: 'contain', marginBottom: '4px' }}
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                // className={`w-50 h-50 `}
                loading="lazy"
              />
            </div>
            <h2 className="text-lg font-semibold text-center mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm text-center mb-4">
              {product.description.substring(0, 50)}...
            </p>
            <p className="font-bold text-lg text-blue-600 mb-4">${product.price}</p>
            <button
              onClick={() => handleAddCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
        </>
    )
}