import React from 'react';

const Details = () => {
  return (
    <div className=" h-auto mt-16rem grid grid-cols-1">
      <div className=" w-full h-fit flex justify-center items-center">
        <div className="triangle"></div>
      </div>
      <div className='bg-custom-domain h-96 w-62rem ml-56 '>

        <div className='w-full h-8rem flex gap-4' >
          <div className='w-3/5'>
            <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-red-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-black ml-8rem mt-3 shadow-xl flex items-center space-x-2 border-2 border-white">
              {/* <img src="" alt="" className="w-6 h-6 " /> */}
              Whay join us...?
            </button>
            <p className='font-semibold text-2xl mt-8 ml-32'>Great students deserve the best jobs</p>
            <div>
              <p className='text-sm mt-24 ml-32'>Brototype Makes it happen.....</p>
            </div>
          </div>
          <div className='w-8rem h-8rem  '>
            <div className='small-traingle'></div>
            <div className='bg-white h-16 w-8rem shadow-2xl'>
              <p className='ml-10'>2000+</p>
              <p className='text-sm ml-1'>students studeied</p>
            </div>
            <div className='small-traingle-rotate'></div>
          </div>
          <div className='w-8rem h-8rem '>
            <div className='small-traingle'></div>
            <div className='bg-white h-16 w-8rem shadow-2xl'>
              <p className='ml-10'>1000+</p>
              <p className='text-sm ml-2'>students placed</p>
            </div>
            <div className='small-traingle-rotate'></div>
          </div>
        </div>

        <div className=' w-full h-8rem flex gap-4' style={{ position: 'relative', top: '-20px' }}>
          <div className='w-8rem h-8rem ml-42.5rem '>
            <div className='small-traingle'></div>
            <div className='bg-white h-16 w-8rem shadow-2xl'>
              <p className='ml-12'>70%</p>
              <p className='text-xs ml-2'>students studeied non-it background</p>
            </div>
            <div className='small-traingle-rotate'></div>
          </div>
          <div className='w-8rem h-8rem'>
            <div className='small-traingle'></div>
            <div className='bg-white h-16 w-8rem shadow-2xl'>
              <p className='ml-12'>100+</p>
              <p className='text-xs ml-2'>students having 5-stars on Leet-code</p>
            </div>
            <div className='small-traingle-rotate'></div>
          </div>
        </div>
      </div>



      <div className='bg-custom-domain h-96 w-62rem ml-56 mt-12 '>
  <div className="w-full h-8rem flex gap-4">
    <div className='w-12rem h-auto gap-4 mt-10rem ml-8rem'>
      <div className='w-12rem h-8'>
        <p className='font-semibold text-2xl px-5 w-fit'>Have any queries?</p>
        <p className='text-sm px-5 py-3 w-fit'>Get a free counseling session from our Team</p>
        <div className='w-16rem h-6rem mt-5 ml-3 flex'>
          <img src="/PhoneIcon.svg" alt="" />
          <div className='w-16rem h-5 bg-green-90 mt-3 ml-5'>
            <p>Call our team</p>
            <p className='text-2xl mt-3'>9526603573</p>
          </div>
        </div>
      </div>
    </div>

    <div className='bg-white grid grid-cols-1 w-24rem h-22.5rem ml-16 rounded-md shadow-xl mt-5'>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="" action="#" method="POST">
        
          <div className="mt-4 ml-8">
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="block w-20rem rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Name'
              style={{ padding: '3%' }}
            />
          </div>
          <div className="mt-4 ml-8">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-20rem  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Email'
              style={{ padding: '3%' }}
            />
          </div>
          <div className="mt-4 ml-8">
            <input
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
              className="block w-20rem  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Phone'
              style={{ padding: '3%' }}
            />
          </div>
          <div className="mt-4 ml-8">
            <input
              id="qualification"
              name="qualification"
              type="qualification"
              autoComplete="qualification"
              required
              className="block w-20rem  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Qualification'
              style={{ padding: '3%' }}
            />
          </div>
          <div className="mt-4 ml-8">
            <select
              id="preferredLocation"
              name="preferredLocation"
              autoComplete="preferredLocation"
              required
              className="block w-20rem  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="" disabled selected>Preferred Location</option>
              <option value="option1">Kochi</option>
              <option value="option2">Kozhikkod</option>
              <option value="option3">Bangalore</option>
            </select>
          </div>
          <div className='mt-4 ml-8'>
            <button
              type="submit"
              className="flex w-20rem justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div className="w-full h-fit flex justify-center items-center inex">
  <div className="triangle-rotate "></div>
</div>

    </div>
  )
}

export default Details;
