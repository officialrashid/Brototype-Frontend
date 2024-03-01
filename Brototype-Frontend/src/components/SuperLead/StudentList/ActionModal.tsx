import { useNavigate } from "react-router-dom";

const ActionModal = ({ isVisible, onClose,studentId }) => {
const navigate = useNavigate()

    const handleEvent=(event:any,action:string)=>{
        event.stopPropagation()
      if(action==='View'){
        navigate('/superlead/viewStudent',{ state: { studentId } }) 
      }
    }
    if (isVisible) {
        return (
            <div className="absolute z-50 right-5  " >
                <div className="grid-cols-1 bg-white w-48 h-auto shadow-xl z-40">
                    <div className="w-full h-8 hover:bg-gray-200 mb-0" onClick={(event)=>{handleEvent(event,"View")}}>
                        <p className="font-serif text-sm m-4 mb-0 pt-1">View</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0" onClick={(event)=>{handleEvent(event)}}>Active</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0"onClick={(event)=>{handleEvent(event)}}>Terminate</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0" onClick={(event)=>{handleEvent(event)}}>Suspend</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0" onClick={(event)=>{handleEvent(event)}}>Quit</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0" onClick={(event)=>{handleEvent(event)}}>Placed</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ActionModal;
