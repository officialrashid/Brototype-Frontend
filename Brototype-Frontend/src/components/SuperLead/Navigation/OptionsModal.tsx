import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ActionModalProps {
    isVisible: boolean;
    onClose: () => void;
  }
const OptionsModal: React.FC<ActionModalProps> = ({ isVisible, onClose }) => {
const navigate = useNavigate()

    const handleEvent= async (event:any,action:string)=>{
        try {
            event.stopPropagation()
            if(action==='Profile'){
              navigate('/superlead/viewProfile')
              onClose() 
            }else if(action==='Update Profile'){
              navigate('/superlead/profileUpdate')
              onClose()
            }
               
        } catch (error) {
            /// handle error
        }
   
    }
    if (isVisible) {
        return (
            <>
            <div className="absolute z-50 right-14 top-14  " >
                <div className="grid-cols-1 bg-white w-48 h-auto shadow-xl z-40">
                    <div className="w-full h-8 hover:bg-gray-200 mb-0" onClick={(event)=>{handleEvent(event,"Profile")}}>
                        <p className="font-serif text-sm m-4 mb-0 pt-1">Profile</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0" onClick={(event)=>{handleEvent(event,"Update Profile")}}>Update Profile</p>
                    </div>
                    <div className="w-full h-8 hover:bg-gray-200">
                        <p className="font-serif text-sm m-4 mb-0 pt-1 mt-0"onClick={(event)=>{handleEvent(event,"Logout")}}>Logout</p>
                    </div>
                
               
                </div>
            </div>
           
            </>
        );
    } else {
        return null;
    }
};

export default OptionsModal;
