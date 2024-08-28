import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate(); 
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-green-500 mb-2 text-center">
            Transfer Successful
          </div>
          <p className="text-gray-700 text-center">
            Your transfer has been completed successfully!
          </p>
        </div>
        <div className="bg-green-100 px-6 py-4 text-center">
          <button
            onClick={() => navigate('/dashboard')} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
