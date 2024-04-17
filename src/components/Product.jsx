import { useLocation } from 'react-router-dom';

const Product = () => {
    const { state: product } = useLocation();
    console.log(product);
    

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>Product Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {product.id}</p>
            <p className='text-gray-700'><strong>Title:</strong> {product.title}</p>
            <p className='text-gray-700'><strong>Price:</strong> ${product.price}</p>
            <p className='text-gray-700'><strong>Description:</strong> {product.description}</p>
            <p className='text-gray-700'><strong>Category:</strong> {product.category}</p>
            <img src={product.image} alt={product.title} className='w-full' />
        </div>
    );
};

export default Product;





