import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useAuth } from '../../context/AuthContext';

const QrCode = () => {
  const { user } = useAuth();
  
  console.log('Current user:', user); // Add this for debugging
  
  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code');
    
    const link = document.createElement('a');
    link.download = `qrcode-${user._id}.png`;
    link.href = canvas.toDataURL('image/png');
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your QR Code</h2>
        
        {user && user._id ? (
          <>
            <div className="mb-6">
              <QRCodeCanvas
                id="qr-code"
                value={user._id}
                size={256}
                level={'H'}
                includeMargin={true}
              />
            </div>
            
            <button
              onClick={downloadQRCode}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Download QR Code
            </button>
            
            <p className="mt-4 text-sm text-gray-600 text-center">
              User ID: {user._id}
            </p>
          </>
        ) : (
          <p className="text-red-500">No user ID found. Please log in again.</p>
        )}
      </div>
    </div>
  );
};

export default QrCode;