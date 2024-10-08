import React, { useEffect, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'
import CurrencyInput from 'react-currency-input-field'
import Color from 'color'

const C_ID = 'car-calculator'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const CarCalculator = () => {
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  const [percent, setPercent] = useState(0)
  const [parkingPrice, setParkingPrice] = useState(0)
  const [mainColor, setMainColor] = useState('#fff')
  const [image, setImage] = useState('')
  const darkenColor = Color(mainColor).darken(0.5)

  const [price, setPrice] = useState('')

  const onChangePrice = (value, name) => {
    if (value) {
      setPrice(`${value}`)
    } else {
      setPrice('')
    }
  }

  useEffect(() => {
    const title = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-title')
    const title2 = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-title2')
    const percent = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-percent')
    const parking = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-parking')
    const color = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-color')
    const image = document.querySelector(`[d-id="${C_ID}"]`).getAttribute('d-image')

    setTitle(title)
    setTitle2(title2)
    setPercent(+percent)
    setParkingPrice(+parking)
    setMainColor(color)
    setImage(image)
  }, [])

  return (
    <div className="flex flex-col w-full h-[500px]">
      <h2 className="pl-1.5 font-bold flex text-[20px] sm:text-[26px] text-[#646464]">{title}</h2>
      <div className="w-full border-b-[1px] border-b-[#ccc] mt-3" />
      <h3 className="pl-1.5 text-[18px] text-[#646464] mt-4 sm:mt-6 mb-3">{title}</h3>
      <div style={{ borderRadius: 100 }} className="w-full flex flex-col sm:flex-row flex-1 justify-center items-center max-w-[900px] h-full">
        <div className="flex flex-col w-[100%] sm:w-[52%] h-full justify-center items-center bg-white pt-[0px] pb-[2.5%] sm:py-[2.5%] px-[2.5%] shadow-lg rounded-tl-xl rounded-bl-none rounded-tr-xl sm:rounded-tr-none sm:rounded-tl-xl sm:rounded-bl-xl">
          <div className='text-[#515151] text-[18px] sm:text-[20px] mb-6'>ดอกเบี้ยต่อเดือน (บาท)</div>
          <div className="flex flex-row sm:grid-cols-5 w-full gap-2">
            <div className="flex flex-1">
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
            <div className="flex flex-row items-center justify-between whitespace pl-2 min-w-[100px]">
              <X weight="bold" size={22} color="#646464" className="mt-0.5" />
              <div className="text-[#646464] text-[30px] pl-2">{+percent} %</div>
            </div>
          </div>
          <span className="mt-3 sm:mt-4 w-full flex justify-center items-center">
            <span className="text-[#646464] text-[36px] sm:text-[40px]">=</span>
            <span style={{ color: mainColor }} className="text-[40px] pl-3">
              {price !== '' ? Math.round((+price) * percent / 100) : 0} บาท
            </span>
          </span>
          <div className="border-b-[1px] border-b-[#efefef] w-full mt-4 sm:mt-6 mb-5 sm:mb-7" />
          <div className="w-full flex flex-row sm:flex-col justify-center items-center">
            <div className='text-[#515151] text-[18px] sm:text-[20px] mb-0 sm:mb-3.5'>
              <span className="hidden sm:flex">ค่าจอดรถต่อเดือน (บาท)</span>
              <span className="flex sm:hidden">ค่าจอดรถต่อเดือน</span>
            </div>
            <div className="text-[22px] pl-1.5 sm:pl-0 sm:text-[40px] text-[#646464]">
              {numberWithCommas(parkingPrice)} บาท
            </div>
          </div>
        </div>
        <div className="-mt-[30px] sm:mt-0 flex w-[100%] sm:w-[48%] bg-red-300 h-[200px] sm:h-full justify-center items-center rounded-bl-xl rounded-tr-none rounded-br-xl sm:rounded-bl-none sm:rounded-br-xl sm:rounded-tr-xl shadow-lg relative p-[2.5%]">
          <div className="w-full h-full z-10 absolute top-0 right-0 bottom-0 left-0 rounded-bl-xl rounded-tr-none rounded-br-xl sm:rounded-bl-none sm:rounded-br-xl sm:rounded-tr-xl" style={{ background: `linear-gradient(to bottom, ${mainColor}, ${mainColor}, ${mainColor}, ${darkenColor}` }} />
          <img className="absolute bottom-0 sm:-bottom-[70px] z-20 opacity-[15%]" style={{ width: '100%', height: '100%', objectFit: 'contain', marginTop: 'auto' }} src={image} />
          <div className="z-50 flex flex-col w-full justify-center items-center h-full">
            <div className="text-white text-[24px] text-center mb-2">รวมค่าใช้จ่ายต่อเดือน</div>
            <div className="text-white text-[44px]">
              {price === '' ? numberWithCommas(parkingPrice) : numberWithCommas(Math.round((price * percent / 100) + parkingPrice))} บาท
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCalculator
