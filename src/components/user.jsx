import React from "react";

function User({ nombre, apellidos }) {
  return (
    <div className="bg-slate-200 flex flex-row p-4 text-center box-border w-full mb-2">
      <div className="flex-1">
        <p>{nombre}</p>
      </div>
      <div className="flex-1">
        <p>{apellidos}</p>
      </div>
    </div>
  );
}

export default User;
