// File: src/components/CartItem.jsx
import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    onQuantityChange(item.product._id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(item.product._id);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
        <img 
          src={item.product.image || '/placeholder-image.jpg'} 
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-800">{item.product.name}</h3>
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <select
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        
        <span className="font-semibold text-gray-800">
          ${(item.product.price * item.quantity).toFixed(2)}
        </span>
        
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;