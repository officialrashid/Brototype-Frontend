import { motion } from "framer-motion";

const ReviewDetails = () => {
  const containerVariants = {
    hover: {
      y: -10, // Adjust the value as needed to move the div up on hover
    },
  };
    return (
        <div className="container">
     <div
        className="flex"

      >
            <div className="flex gap-6 ml-5 mt-2 h-36">
              <motion.div className="bg- shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/success.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-4 font-medium mt-7 text-gray-400 absolute">Total Week Completed</h1>
                <img src="/success.png" alt="" className="h-16 w-16 ml-20 relative mt-2 mt-0 opacity-5" />
              </motion.div>
              <div className="bg- shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="weekPerformance.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-4 font-medium mt-7 text-gray-400 absolute">Weekly Performance</h1>
                <img src="/weekPerformance.png" alt="" className="h-16 w-16 ml-20 relative mt-2 mt-0 opacity-5" />
              </div>
              <div className="bg- shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/performance (1).png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-4 font-medium mt-7 text-gray-400 absolute">Overall Performance</h1>
                <img src="/performance (1).png" alt="" className="h-16 w-16 ml-20 relative mt-2 mt-0 opacity-5" />
              </div>
              <div className="bg- shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/failure.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-4 font-medium mt-7 text-gray-400 absolute">Total Repeat</h1>
                <img src="/failure.png" alt="" className="h-16 w-16 ml-20 relative mt-2 mt-0 opacity-5" />
              </div>

            </div>

          </div>
    </div>
    );
}

export default ReviewDetails;
