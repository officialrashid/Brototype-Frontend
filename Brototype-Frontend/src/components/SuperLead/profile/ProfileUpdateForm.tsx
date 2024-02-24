import DeactivateAccount from "./DeactivateAccount";

const ProfileUpdateForm = () => {
    return (
        <>
        <section className="mt-36 w-full p-3 sm:p-5 mb-0">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="relative overflow-hidden border bg-white shadow-md sm:rounded-lg">
            <h1 className="font-roboto m-5 mb-0 ml-8 font-semibold">Profile Details</h1>
            <div className="flex border-b">
              <div className="m-7 mb-4 mt-5">
                <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/1.png" alt="" className="h-aut mb-0 w-20 rounded-md" />
              </div>
              <div className="m-10 mb-0 ml-0 mr-0">
                <label htmlFor="file-upload" className="mb-2 cursor-pointer rounded-md bg-dark-highBlue px-3 py-1.5 text-sm font-medium font-roboto text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Upload new photo </label>
                <p className="m-4 mb-0 ml-0 text-xs text-gray-400">Allowed JPG, GIF or PNG. Max size of 800K</p>
                <input type="file" id="file-upload" className="hidden" />
              </div>
            </div>
            <form className="mb-0 mt-0">
              <div className="space-y- flex flex-col items-center justify-between p-4 pb-0 pt-0 md:flex-row md:space-x-4 md:space-y-0">
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
              </div>
              <div className="space-y- flex flex-col items-center justify-between p-4 pb-0 pt-0 md:flex-row md:space-x-4 md:space-y-0">
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
              </div>
              <div className="space-y- flex flex-col items-center justify-between p-4 pb-0 pt-0 md:flex-row md:space-x-4 md:space-y-0">
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
              </div>
              <div className="space-y- flex flex-col items-center justify-between p-4 pb-0 pt-0 md:flex-row md:space-x-4 md:space-y-0">
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
                <div className="m-3 ml-0 mr-0 w-full">
                  <label htmlFor="email" className="m-2 font-serif text-sm">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="" />
                </div>
              </div>
            </form>
            <div className="flex m-5 mb-0 mt-2 gap-3">
              <button type="button" className="mb-2 rounded-lg bg-dark-highBlue px-5 py-2.5 text-xs font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-serif">Save Changes</button>
              <button type="button" className="mb-2 rounded-lg bg-dark-highBlue px-5 py-2.5 text-xs font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-serif">Cancel</button>
            </div>
          </div>
        </div>
      </section>
<DeactivateAccount/>

      </>
      
    );
}

export default ProfileUpdateForm;
