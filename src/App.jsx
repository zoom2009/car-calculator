import React, { useState } from 'react'
import { X } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'
import CurrencyInput from 'react-currency-input-field'
import Color from 'color'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const App = () => {
  const percent = 1.40
  const parkingPrice = 3500
  const mainColor = '#9b59b6'
  const image = 'https://freepngimg.com/thumb/car/4-2-car-png-hd.png'
  const darkenColor = Color(mainColor).darken(0.5)

  const [price, setPrice] = useState('')

  const onChangePrice = (value, name) => {
    if (value) {
      setPrice(`${value}`)
    } else {
      setPrice('')
    }
    console.log('name:', name)
  }

  return (
    <div style={{ borderRadius: 100 }} className="w-full flex flex-1 justify-center items-center max-w-[900px] h-[450px]">
      <div className="flex flex-col w-[52%] h-full justify-center items-center bg-white px-[2.5%] rounded-l-xl shadow-lg">
        <div className='text-[#515151] text-[20px] mb-6'>ดอกเบี้ยต่อเดือน (บาท)</div>
        <div className="grid grid-cols-5 w-full gap-2">
          <div className="col-span-3">
            <CurrencyInput
              style={{ color: mainColor }}
              className={twMerge([
                "w-full outline-none border-b-[2px] border-b-[#ccc] text-left text-[24px] px-1",
              ])}
              placeholder="ยอดจำนำ"
              value={price}
              prefix="฿ "
              decimalsLimit={0}
              onValueChange={onChangePrice}
            />
          </div>
          <div className="col-span-2 flex flex-row items-center justify-between whitespace-pre pl-2">
            <X weight="bold" size={24} color="#646464" />
            <div className="text-[#646464] text-[30px]">{+percent} %</div>
          </div>
        </div>
        <span className="mt-4 w-full flex justify-center items-center">
          <span className="text-[#646464] text-[40px]">=</span>
          <span style={{ color: mainColor }} className="text-[40px] pl-3">
            {price !== '' ? Math.round((+price) * percent / 100) : 0} บาท
          </span>
        </span>
        <div className="border-b-[1px] border-b-[#efefef] w-full mt-6 mb-7" />
        <div className="w-full flex flex-col justify-center items-center">
          <div className='text-[#515151] text-[20px] mb-3.5'>ค่าจอดรถต่อเดือน (บาท)</div>
          <div className="text-[40px] text-[#646464]">
              {numberWithCommas(parkingPrice)} บาท
          </div>
        </div>
      </div>
      <div className="flex w-[48%] h-full justify-center items-center rounded-r-xl shadow-lg relative">
        <div className="w-full h-full z-10 absolute top-0 right-0 bottom-0 left-0 rounded-r-xl" style={{ background: `linear-gradient(to bottom, ${mainColor}, ${mainColor}, ${mainColor}, ${darkenColor}` }} />
        <img className="absolute -bottom-[70px] z-20 opacity-[15%]" style={{ width: '100%', height: '100%', objectFit: 'contain', marginTop: 'auto' }} src={image} />
        <div className="z-50 flex flex-col w-full justify-center items-center h-full">
          <div className="text-white text-[24px] text-center mb-2">รวมค่าใช้จ่ายต่อเดือน</div>
          <div className="text-white text-[44px]">
            {price === '' ? numberWithCommas(parkingPrice) : numberWithCommas(Math.round((price * percent / 100) + parkingPrice))} บาท
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
