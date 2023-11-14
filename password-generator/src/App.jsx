import { useCallback, useEffect, useRef, useState } from "react"

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // eslint-disable-next-line no-unused-vars
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className="w-full h-screen bg-gray-600 overflow-hidden">
        <div className="w-full max-w-md max-h-8 mx-auto shadow-md rounded-lg   bg-gray-500 text-orange-500">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-7 ">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPassword}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />
              <label className="text-xl">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label className="text-xl" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label className="text-xl" htmlFor="charater Input">
                Charaters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
