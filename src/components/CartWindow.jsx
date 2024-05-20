import React from "react";

const CartWindow = ({ cart, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4 z-50">
      <button onClick={onClose} className="text-gray-700">Fechar</button>
      <h2 className="text-xl font-bold">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between my-4">
              <div>
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: ${item.price}</p>
              </div>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartWindow;
