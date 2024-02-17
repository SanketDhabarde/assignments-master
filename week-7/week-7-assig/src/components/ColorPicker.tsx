import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("");

  return (
    <div className={`w-full h-screen ${color}`}>
      <button
        onClick={() => setColor("bg-red-500")}
        className="border-2 border-black p-2 rounded-md m-1 bg-red-500"
      >
        Red
      </button>
      <button
        onClick={() => setColor("bg-yellow-500")}
        className="border-2 border-black p-2 rounded-md m-1 bg-yellow-500"
      >
        Yellow
      </button>
      <button
        onClick={() => setColor("bg-black")}
        className="border-2 border-black p-2 rounded-md m-1 bg-black text-white"
      >
        Black
      </button>
      <button
        onClick={() => setColor("bg-purple-500")}
        className="border-2 border-black p-2 rounded-md m-1 bg-purple-500"
      >
        Purple
      </button>
      <button
        onClick={() => setColor("bg-green-500")}
        className="border-2 border-black p-2 rounded-md m-1 bg-green-500"
      >
        Green
      </button>
      <button
        onClick={() => setColor("bg-blue-500")}
        className="border-2 border-black p-2 rounded-md m-1 bg-blue-500"
      >
        Blue
      </button>
      <button
        onClick={() => setColor("")}
        className="border-2 border-black p-2 rounded-md m-1"
      >
        Default
      </button>
    </div>
  );
}

export default ColorPicker;
