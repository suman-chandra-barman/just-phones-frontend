"use client";

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle, FaHeart, FaCartPlus } from "react-icons/fa";
import { MdOutlineViewHeadline } from "react-icons/md";

const Navbar = () => {
    const cart = useAppSelector((state) => state.cart);
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    
    return(
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto text-[#1a2c32]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdOutlineViewHeadline  size={25}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Phones</Link>
                        </li>
                        <li>
                            <Link href='/'>About</Link>
                        </li>
                    </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/phonora_logo.png" alt="Phonora Logo" width={160} height={10}/>
                    </Link>
                </div>
            
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base px-1">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/phones'>Phones</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button>
                        <Link href='/wishlist' className="flex flex-col items-center align-middle">
                            <FaHeart />
                            <span className="hidden md:inline  text-sm">Wishlist</span>
                        </Link>
                    </button>
                    <button>
                        <Link href='/login' className="flex flex-col items-center align-middle">
                            <FaRegUserCircle />
                            <span className="hidden md:inline text-sm">Login</span>
                        </Link>
                    </button>
                    <Link href="/cart">
                        <button className="btn btn-lg bg-[#ff4c11] text-white">
                            <FaCartPlus />
                            <span className="badge badge-sm">{totalItems}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;