'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <Image
            src="/phonora_logo.png"
            alt="Phonora Logo"
            width={160}
            height={40}
          />
          <p className="mt-4 text-sm text-gray-400">
            Phonora is one of the most<br />
            reliable wholesale and retail mobile<br />
            phone stores.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-2 text-white">Categories</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="/phones" className="hover:text-[#ff4c11]">Phones</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Laptop & MacBook</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Tablet</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Gadget</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Smart Watch</Link></li>
          </ul>
        </div>

        {/* Phones */}
        <div>
          <h3 className="font-bold mb-2 text-white">Phones</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-[#ff4c11]">iPhone</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Samsung</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Google</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Xiaomi</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Realme</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-2 text-white">Useful Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-[#ff4c11]">Terms and Conditions</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">EMI and Payment Policy</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Warranty Policy</Link></li>
            <li><Link href="#" className="hover:text-[#ff4c11]">Exchange Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 py-6 border-t border-gray-700">
        © 2025 <span className="text-[#ff4c11] font-semibold">Phonora</span>, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
