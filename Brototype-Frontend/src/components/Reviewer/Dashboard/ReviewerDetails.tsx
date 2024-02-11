




const ReviewerDetails=()=>{
    const series = [70]; //70 percent
    const options = {
      
      labels: [], //label of this diagram
      plotOptions: {
        radialBar: {
         
          dataLabels: {
            name: {
              show: false, // Set to true if you want to display the category (name) labels
            },
     
            value: {
              show: false, // Set to true if you want to display the value labels
            },
            
          }
        },
        
      },
      colors:['#347dc1']
    }

    return (
        <>
        <div className="flex justify-between ">
            <div className="w-4/6 "> 
            <div className=" border   rounded-lg  m-4 mt-6  mb-0 h-fit bg-white  ">
  <div className="flex justify-between m-4 ">
      <div>
<span className="font-roboto">Helloo reviewer!!!!!</span>
<div>
  <span className="font-roboto">Complete your task</span>
</div>
  </div>
    <div className=" border-gray-400  h-20 w-20  flex  items-center justify-center"  >
    <img src="/profile.jpeg" className=" h-20 w-20" alt="" />
  
  </div>

  </div>

 
</div>


        

            </div>
     



        </div>
   
       
       




        
        </>
    )
}

export default ReviewerDetails;