import User from "./user";

function Edituser({ nombre, apellidos }) {
  return (
    <div className="flex flex-col bg-[#ffff] w-screen h-screen">
      <div className="flex-1 p-4 overflow-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300">
        {nombre.map((nombres, index) => (
          <User key={index} nombre={nombres} apellidos={apellidos[index]} />
        ))}
        {nombre.map((nombres, index) => (
          <User key={index} nombre={nombres} apellidos={apellidos[index]} />
        ))}
      </div>
    </div>
  );
}

export default Edituser;
