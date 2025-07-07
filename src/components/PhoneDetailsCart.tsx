'use client'

import { useEffect, useState } from 'react'
import { useGetSinglePhoneQuery } from '@/redux/features/phones/phonesApi'
import { TPhone } from '@/types/common'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsAndroid2, BsBatteryFull } from 'react-icons/bs';
import { FiCpu, FiWifi } from 'react-icons/fi';
import { MdOutlineFingerprint, MdOutlineDisplaySettings, MdOutlineBluetooth, MdCameraFront } from 'react-icons/md';
import { TbBrandGoogle, TbFlask } from 'react-icons/tb';
import { FaCamera, FaShieldAlt } from 'react-icons/fa';
import PhoneDetailsSkeleton from './PhoneDetailsSkeleton';
import Image from 'next/image';

const PhoneDetailsCart = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetSinglePhoneQuery(id)
  const [phoneData, setPhoneData] = useState<TPhone | null>(null)

  useEffect(() => {
    if (data?.data) {
      setPhoneData(data.data)
    }
  }, [data])

  if (isLoading) return <PhoneDetailsSkeleton/>
  if (isError || !phoneData) return <p className="text-center mt-10 text-red-500">Phone not found</p>

  const { name, image, marketStatus, releaseDate, updatedOn, brand, price, isOfficial, specifications } = phoneData

  const formatDate = (date: Date) => new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Image Section */}
      <div className="p-2 md:p-6 flex-1 relative border-r border-gray-200 overflow-hidden">
        <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="rounded-xl object-contain max-h-96 mx-auto"
            priority
            unoptimized={false}
        />
      </div>

      {/* Details Section */}
      <div className="p-2 md:p-6 flex-2 space-y-3">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="flex items-center gap-2">
            <span className="cursor-pointer">
              <AiOutlineHeart size={20} className="text-[#ff4c11]" />
            </span>
            <button className="btn btn-sm bg-[#ff4c11] text-white">Add to Cart</button>
          </div>
        </div>

        <p className="text-sm">
          <span className="font-semibold">Market Status:</span>{' '}
          <span className="text-success">{marketStatus}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Release Date:</span>{' '}
          {formatDate(releaseDate)}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Brand:</span> {brand}
        </p>

        <p className="text-2xl font-bold text-[#ff4c11]">
          ৳{price.toLocaleString('en-BD')} <span className="text-sm font-medium">({isOfficial ? 'Official' : 'Unofficial'})</span>
        </p>
        <p className="text-xs text-gray-500">Updated on: {formatDate(updatedOn)}</p>

        {/* Key Specifications */}
        <div className="divider" />
        <h3 className="text-lg font-semibold">Key Specifications</h3>
        {specifications?.os && (
          <div className="flex items-center gap-2">
            <BsAndroid2 className="text-xl" />
            <p className="text-base font-medium">{specifications.os}</p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {specifications?.storage && (
            <div>
              <FiCpu className="text-xl" />
              <p className="text-sm">{specifications.storage}</p>
              <p className="text-xs text-gray-500">Storage</p>
            </div>
          )}
          {specifications?.ram && (
            <div>
              <FiCpu className="text-xl" />
              <p className="text-sm">{specifications.ram}</p>
              <p className="text-xs text-gray-500">RAM</p>
            </div>
          )}
          {specifications?.mainCamera && (
            <div>
              <FaCamera className="text-xl" />
              <p className="text-sm">{specifications.mainCamera}</p>
              <p className="text-sm text-gray-500">Main Camera</p>
            </div>
          )}
          {specifications?.frontCamera && (
            <div>
              <MdCameraFront className="text-xl" />
              <p className="text-sm">{specifications.frontCamera}</p>
              <p className="text-xs text-gray-500">Front Camera</p>
            </div>
          )}
          {specifications?.display && (
            <div>
              <MdOutlineDisplaySettings className="text-xl" />
              <p className="text-sm">{specifications.display}</p>
              <p className="text-xs text-gray-500">Display</p>
            </div>
          )}
          {specifications?.battery && (
            <div>
              <BsBatteryFull className="text-xl" />
              <p className="text-sm">{specifications.battery}</p>
              <p className="text-xs text-gray-500">Battery</p>
            </div>
          )}
        </div>

        {/* Extra Features */}
        <div className="divider" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {specifications?.fingerprintSensor && (
            <div className="flex items-center gap-1">
              <MdOutlineFingerprint /> {specifications.fingerprintSensor}
            </div>
          )}
          {specifications?.charging && (
            <div className="flex items-center gap-1">
              <TbFlask /> {specifications.charging}
            </div>
          )}
          {specifications?.protection && (
            <div className="flex items-center gap-1">
              <FaShieldAlt /> {specifications.protection}
            </div>
          )}
          {specifications?.connectivity && (
            <div className="flex items-center gap-1">
              <FiWifi /> {specifications.connectivity}
            </div>
          )}
          {specifications?.glassProtection && (
            <div className="flex items-center gap-1">
              <TbBrandGoogle /> {specifications.glassProtection}
            </div>
          )}
          <div className="flex items-center gap-1">
            <MdOutlineBluetooth /> Bluetooth
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneDetailsCart
