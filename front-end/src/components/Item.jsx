import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://images.pexels.com/photos/33791950/pexels-photo-33791950.jpeg"
        className="aspect-square rounded-2xl object-cover"
        alt="Foto da acomodação"
      />
      <div>
        <h2 className="text-xl font-semibold">Local, Cidade</h2>
        <p className="truncate text-gray-600">
          descrição long apra caralho que não acaba mais meu deus como isso é
          longo
        </p>
      </div>
      <p>
        <span className="font-semibold">preço R$550</span> por noite
      </p>
    </a>
  );
};

export default Item;
