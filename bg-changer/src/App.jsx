import { useState } from "react"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState("White")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
            onClick={()=>setColor("red")}
            className="outline-none bg-red-700 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none bg-green-800 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none bg-blue-800 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none bg-pink-600 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none bg-yellow-500 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none bg-orange-600 px-4 py-2 rounded-full text-white shadow-lg"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
