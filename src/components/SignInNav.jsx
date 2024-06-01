import React from "react";
import { Link } from "react-router-dom";

export default function SignInNav() {
  return (
    <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <Link to="/loginpage" class="text-sm font-medium text-gray-700 hover:text-gray-800">
        Entrar em sua conta
      </Link>
      <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
      <Link to="/singuppage" class="text-sm font-medium text-gray-700 hover:text-gray-800">
        Criar uma Conta
      </Link>
    </div>
  );
}