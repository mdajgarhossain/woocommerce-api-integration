import Image from 'next/image';

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
   const price = parseFloat(item.price);

   return (
      <div className="flex items-center space-x-4 border-b pb-4">
         <Image src={item.images[0]?.src} alt={item.name} width={64} height={64} className="w-16 h-16 object-cover rounded" />
         <div className="flex-grow">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">
               Quantity: {item.quantity} x ${price.toFixed(2)} = ${(item.quantity * price).toFixed(2)}
            </p>
         </div>
         <div className="flex items-center space-x-2">
            <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300">-</button>
            <p>{item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300">+</button>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
         </div>
      </div>
   );
}



