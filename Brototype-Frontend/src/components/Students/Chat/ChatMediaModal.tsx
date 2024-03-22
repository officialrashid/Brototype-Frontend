import React from 'react';

const ChatMediaModal = ({ isVisible, onClose, changeModalStatus }: { isVisible: any; onClose: any; changeModalStatus: any; }) => {
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const file = event.target.files && event.target.files[0];
        if (file) {
            console.log("File selected:", file);
            // You can add further logic here to handle the selected file
        }
    };
const handleSubmit = () =>{
    console.log("handle submit workinggggg");
    
}
    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute z-50 right-12 bottom-40">
            <div className="grid-cols-1 bg-white w-48 h-24 shadow-xl ">
                <form className="mb-0 mt-0">
                    <div className="flex border-b">

                        <div className="m-4 mb-0 ml-0 mr-0">

                            {/* Associate label with input using htmlFor */}
                            <label htmlFor="file-upload" className="mb-2 cursor-pointer rounded-md bg-dark-highBlue px-3 py-1.5 text-sm font-medium font-roboto text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"onClick={(handleSubmit)}> Upload new photo
                            <input type="file" id="file-upload" className="hidden" onChange={handleFileInputChange} />
                            </label>

                   

                        </div>

                    </div>
                </form>
            </div>
        </div>

    );
}

export default ChatMediaModal;
