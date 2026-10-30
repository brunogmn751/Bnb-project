import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-128 flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>
        <form className="flex w-full flex-col gap-2">
          <input
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
          />
          <input
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
          />
          <button className="bg-airbnpink-400 w-full cursor-pointer rounded-full px-4 py-2 font-bold text-white">
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{" "}
          <Link className="font-semibold underline" to="/register">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
