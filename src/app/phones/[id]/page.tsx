'use client';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsAndroid2, BsBatteryFull } from 'react-icons/bs';
import { FiCpu, FiWifi } from 'react-icons/fi';
import { MdOutlineFingerprint, MdOutlineDisplaySettings, MdOutlineBluetooth, MdCameraFront } from 'react-icons/md';
import { TbBrandGoogle, TbFlask } from 'react-icons/tb';
import { FaCamera, FaShieldAlt } from 'react-icons/fa';

export default function PhonePage() {
  return (
    <section className="container mx-auto mt-10 bg-base-100 shadow rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Image */}
        <div className="p-2 md:p-6 flex-1 relative border-r border-gray-200 overflow-hidden">
          <img
            src="https://www.mobiledokan.com/media/xiaomi-poco-f7-silver-official-image.webp"
            alt="Tecno Spark 40"
            className="rounded-xl object-contain max-h-96 mx-auto"
          />
        </div>

        {/* Right - Details */}
        <div className="p-2 md:p-6 flex-2 space-y-3">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold">Tecno Spark 40</h2>
            <div className="flex items-center gap-2">
                <span className='cursor-pointer'><AiOutlineHeart size={20} className="text-[#ff4c11]" /></span>
                <button className="btn btn-sm bg-[#ff4c11] text-white">Add to Cart</button>
            </div>
          </div>

          <p className="text-sm">
            <span className="font-semibold">Market Status:</span> <span className="text-success">In Stock</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Release Date:</span> 05-Jul-2025
          </p>
          <p className="text-sm">
            <span className="font-semibold">Brand:</span> Tecno
          </p>

          <p className="text-2xl font-bold text-[#ff4c11]">৳13,999 <span className="text-sm font-medium">(Official)</span></p>
          <p className="text-xs text-gray-500">Updated on: July 5, 2025</p>

          {/* Key Specs */}
          <div className="divider"></div>
          <h3 className="text-lg font-semibold">Key Specifications</h3>
          <div>
              <BsAndroid2 className="text-xl" />
              <p className="text-base font-medium">Android</p>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <FiCpu className="text-xl" />
              <p className="text-sm">128GB</p>
              <p className="text-xs text-gray-500">Storage</p>
            </div>
            <div>
              <FiCpu className="text-xl" />
              <p className="text-sm">6GB</p>
              <p className="text-xs text-gray-500">RAM</p>
            </div>
            <div>
              <FaCamera className="text-xl" />
              <p className="text-sm">16MP</p>
              <p className="text-sm text-gray-500">Main Camera</p>
            </div>
            <div>
              <MdCameraFront className="text-xl" />
              <p className="text-sm">8MP</p>
              <p className="text-xs text-gray-500">Front Camera</p>
            </div>
            <div>
              <MdOutlineDisplaySettings className="text-xl" />
              <p className="text-sm">6.67” 720x1600p</p>
              <p className="text-xs text-gray-500">Display</p>
            </div>
            <div>
              <BsBatteryFull className="text-xl" />
              <p className="text-sm">Li-Po 5200mAh</p>
              <p className="text-xs text-gray-500">Battery</p>
            </div>
          </div>

          {/* Extras */}
          <div className="divider"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="flex items-center gap-1"><MdOutlineFingerprint /> Side-mounted</div>
            <div className="flex items-center gap-1"><TbFlask /> 45W First Charging</div>
            <div className="flex items-center gap-1"><FaShieldAlt /> Splashproof, IP64</div>
            <div className="flex items-center gap-1"><FiWifi /> Wi-Fi 5 (4G)</div>
            <div className="flex items-center gap-1"><TbBrandGoogle /> Gorilla Glass</div>
            <div className="flex items-center gap-1"><MdOutlineBluetooth /> Bluetooth 5.2</div>
          </div>
        </div>
      </div>
    </section>
  );
}
