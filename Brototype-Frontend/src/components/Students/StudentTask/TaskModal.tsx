import { useState } from "react"
interface SubTaskProps {
  isVisible: boolean;
  onclose: () => void;
}
const SubTask: React.FC<SubTaskProps> = ({ isVisible, onclose }) => {
  const [activeInput, setActiveInput] = useState(0)

  if (!isVisible) return null
  return (
    <>
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center   overflow-y-scroll overflow-hidden z-40">
        <div className="border border-gray-200 m-5 rounded-lg shadow-2xl w-3/5  bg-white">
          <div className="flex justify-between">
            <div></div>
            <div className="mr-4 mt-4">
              <span >
              </span>
            </div>
          </div>
          <div className="text-center">
            <div><span className="font-semibold text-md mb-2">Update Your Task</span></div>
          </div>
          <div className="m-5 mt-6 ">
            <div className="">
              <div className="m-7 border border-black rounded-md shadow-2xl ">
                <div className="flex  justify-between items-center m-4">
                  <div> <span className="font-bold ">1.write a short Description</span> </div>
                  <div className="flex gap-3">
                    <div className="">
                      <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                    </div>
                    <div className="data-colllapse-target= collapse-1">
                      <svg onClick={() => { setActiveInput(1) }} className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" /><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" /></g></svg>
                    </div>
                  </div>
                </div>
              </div>
              {activeInput === 1 ? <div className=" m-7 mt-6  ">

                <input type="text" className=" border border-2px rounded-lg  outline-none shadow-lg w-full py-5" />

              </div> : ""}
              <div className="m-7 border border-black rounded-md shadow-2xl ">
                <div className="flex  justify-between items-center m-4">
                  <div> <span className="font-bold ">2.Link to the tutorials that you have followed</span> </div>
                  <div className="flex gap-3">
                    <div className="">
                      <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>

                    </div>
                    <div className="data-colllapse-target= collapse-1">


                      <svg onClick={() => { setActiveInput(2) }} className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" /><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" /></g></svg>
                    </div>


                  </div>
                </div>

              </div>
              {activeInput === 2 ? <div className=" m-7 mt-6  ">

                <input type="text" className=" border border-2px rounded-lg  outline-none shadow-lg w-full py-5" />

              </div> : ""}
            </div>
          </div>
          <div className="flex justify-between mr-12 m-6 gap ">
            <div></div>
            <div>
              <button className="border px-4 py-1 rounded-md bg-black text-white " onClick={() => { onclose() }}>Cancel</button>
              <button className="border px-4 py-1 rounded-md bg-black text-white ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubTask