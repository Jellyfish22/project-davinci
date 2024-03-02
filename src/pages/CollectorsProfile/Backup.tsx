import { FC } from 'react'

export const CollectorsProfileBackup: FC = () => {
  const handleDownloadImage = () => {
    console.log('Hello image')
  }

  return (
    <>
      <div className="flex flex-col min-h-0 relative">
        <div className="fixed w-full">
          <div className="hidden lg:block fixed inset-0  z-10 pointer-events-none ">
            <section className="absolute inset-x-0 top-0 flex items-end rounded-b-3xl overflow-hidden h-[calc(100vh-222px)] 2xl:h-[calc(100vh-230px)] 3xl:h-[calc(100vh-300px)] justify-center">
              <img
                className="object-cover origin-bottom scale-x-[-1] duration-200 sm:object-65 lg:object-85lg:ml-[11%] h-[60%] lg:h-[85%] xl:h-full object-73"
                src="https://azk.imgix.net/big_azukis/a-1837.png"
                alt=""
              />
              <div className="absolute bottom-0 right-0 z-30 mr-6 mb-7 2xl:ml-8 2xl:mb-8 3xl:mb-9 hidden lg:block">
                <div className="flex">
                  <div className="text-white flex items-center justify-between font-SB font-black text-[32px] lg:text-5xl 2xl:text-[52px] 3xl:text-6xl mb-1.5 overflow-hidden">
                    <div className="flex shrink min-w-0">
                      <h1 className="mr-2 py-[1px] drop-shadow leading-1.3 uppercase lg:max-w-lg xl:max-w-2xl truncate">0x60e...0D4</h1>
                      {/* <div className="opacity-20 font-bold leading-1.3" aria-hidden="true">
                    //
                  </div> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 overflow-auto">
                  <button className="text-black bg-white bg-opacity-10  hover:bg-gray-700 items-center relative h-7 font-mono tracking-wider pt-0.5 duration-200 uppercase text-xs font-semibold px-4 rounded flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" width="20" height="20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                    </svg>
                  </button>
                  <button className="text-white bg-white bg-opacity-10  hover:bg-gray-700 items-center relative h-7 font-mono tracking-wider pt-0.5 duration-200 uppercase text-xs font-semibold px-4 rounded flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleDownloadImage}>Hello world</button>
      </div>
    </>
  )
}
