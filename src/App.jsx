import React from 'react'

const App = () => {
  return (
    <div className="w-full flex flex-1 justify-center items-center max-w-[900px] h-[450px]">
      <div className="flex flex-col w-[55%] h-full justify-center items-center bg-white px-[2.5%]">
        <div className='text-black text-[20px] mb-6'>ดอกเบี้ยต่อเดือน (บาท)</div>
        <div className="grid grid-cols-4 w-full">
          <div class="col-span-3 bg-red-300">Hi</div>
          <div class="col-span-1 bg-yellow-400">Hi2</div>
        </div>
      </div>
      <div className="flex w-[45%] h-full justify-center items-center bg-yellow-300">

      </div>
    </div>
  )
}

export default App
