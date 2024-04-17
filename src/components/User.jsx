import { useLocation } from 'react-router-dom';

const User = () => {
    const { state: user } = useLocation();

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2x1 font-bold mb-2'>User Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {user.id}</p>
            <p className='text-gray-700'><strong>First Name:</strong> {user.firstName}</p>
            <p className='text-gray-700'><strong>Last Name:</strong> {user.lastName}</p>
            <p className='text-gray-700'><strong>Maiden Name:</strong> {user.maidenName}</p>
            <p className='text-gray-700'><strong>Age:</strong> {user.age}</p>
            {/* Add more user details here */}
        </div>
    );
};

export default User;