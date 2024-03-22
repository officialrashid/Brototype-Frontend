import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux-toolkit/store';
import { storeChatImage } from '../../../utils/methods/post';

const ChatMediaModal = ({ isVisible, onClose, changeModalStatus,handleMessageChange }: { isVisible: any; onClose: any; changeModalStatus: any; handleMessageChange:any}) => {
    const studentId: any = useSelector((state: RootState) => state?.student?.studentData?.studentId);
    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const file = event.target.files && event.target.files[0];
        if (file) {
            if(file.type.startsWith("image")){
                const formData = new FormData();
                formData.append("image", file);
                formData.append("senderId", studentId);
                const response = await storeChatImage(formData)
                console.log(response,"dsnbsbfsfhshsdshfs");
                if(response?.chatData?.audioUrl){
                    handleMessageChange(response?.chatData?.audioUrl,"imageChat")
                    changeModalStatus()
                }
            }
          
            
        }
    };
    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute z-50 right-12 bottom-40">
            <div className="grid-cols-1 bg-white w-48 h-24 shadow-xl ">
                <form className="mb-0 mt-0">
                    <div className="flex border-b">

                        <div className="m-4 mb-0 ml-0 mr-0">

                            <img src="" alt="" />
                            <label htmlFor="file-upload" className="mb-2 cursor-pointer rounded-md  px-3 py-1.5 text-sm font-medium font-roboto text-black hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Photos
                            <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleFileInputChange} />

                            </label>

                   

                        </div>

                    </div>
                </form>
            </div>
        </div>

    );
}

export default ChatMediaModal;
