import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const CartWindow = ({ cart, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4 z-50">
      <button onClick={onClose} className="text-gray-700">
        <AiOutlineClose />
      </button>
      <h2 className="text-xl font-bold">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="overflow-y-auto h-4/5">
          <ul>
            {cart.map((item, index) => (
              <React.Fragment key={item.id}>
                <li className="flex justify-between my-4">
                  <div>
                    <img
                      src={item.imageSrc}
                      alt="imagem-produto"
                      className="w-10"
                    />
                    <p className="font-bold">{item.name}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: ${item.price}</p>
                  </div>
                  <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                </li>
                {index < cart.length - 1 && (
                  <div className="border-t border-gray-300 my-4"></div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
        <Link to="/cart" className="px-2 py-1 bg-custom-red text-white rounded-full font-bold">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default CartWindow;
