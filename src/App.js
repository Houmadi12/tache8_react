import { useState } from "react";
import Img from "./assets/image/bg.jpg"

  function App() {
    const [result, setResult] = useState("")
    const handleClick = (e) =>{
      setResult((prev) => prev.concat(e.target.id))
    }
    const clearAll = () => setResult("");
    const deletOne = () => setResult(result.slice(0, -1));
    const calculate = () => {
      try{
        setResult(eval(result).toString())
      }catch (error) {
        setResult("error")
      }
    }

    return (
     <div className=" bg-stone-500 min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-2 ">
       <h1 className="text-4xl text-teal-300 font-bold">Calculator</h1>
       <div
        style={{ backgroundImage: `url(${Img})` }}
        className="p-4 max-w-96 rounded-md border-4 border-l-slate-400
                      shadow-[0_1px_6px_5px#000000]">
          <input type="text" className=" bg-[#E6E6E6] rounded-md p-4 w-full taxt-2xl font-semibold
                                         text-black text-right tracking-wide border-2 border-pink-200 shadow-inner
                                          shadow-current " value={result} disabled />
          <p className="bg-slate-300 inline-block rounded-full px-3 py-1 my-2
                        text-gray-900 text-sm tracking-wider border border-slate-400 ">My Calculator</p>
          
          <div className="grid grid-cols-4 gap-4">
              <button onClick={clearAll} type="button" className="operator active:bg-slate-100">AC</button>
              <button onClick={deletOne} type="button" className="operator active:bg-slate-100">Del</button>
              <button onClick={handleClick} type="button" className="operator active:bg-slate-100" id=".">.</button>
              <button onClick={handleClick} type="button" className="operator active:bg-slate-100" id="/">/</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="7">7</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="8">8</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="9">9</button>
              <button onClick={handleClick} type="button" className="operator active:bg-slate-100" id="*">*</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="4">4</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="5">5</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="6">6</button>
              <button onClick={handleClick} type="button" className="operator active:bg-slate-100" id="-">-</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="1">1</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="2">2</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="3">3</button>
              <button onClick={handleClick} type="button" className="operator active:bg-slate-100" id="+">+</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="00">00</button>
              <button onClick={handleClick} type="button" className="number active:bg-green-100" id="0">0</button>
              <button onClick={calculate} type="button" className="operator col-span-2 active:bg-slate-100" id="=">=</button>
          </div>
       </div>
     </div>
    );
  }

  export default App;
